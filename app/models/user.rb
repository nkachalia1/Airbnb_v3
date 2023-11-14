class User < ApplicationRecord
    before_validation :ensure_session_token
    attr_reader :password
    has_secure_password

    validates :username,
    uniqueness: true,
    length: { in: 3..30 },
      format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
      validates :email,
      uniqueness: true,
      length: { in: 3..255 },
      format: { with: URI::MailTo::EMAIL_REGEXP }
      validates :session_token, presence: true, uniqueness: true
      validates :password, length: { in: 6..255 }, allow_nil: true


    def self.find_by_credentials(credential, password)
      field_to_query = credential.match?(URI::MailTo::EMAIL_REGEXP) ? :email : :username
      user = find_by(field_to_query => credential)
      return nil unless user
      user.authenticate(password) ? user : nil
    end

    def reset_session_token!
      self.session_token = generate_unique_session_token
      self.save!
      return self.session_token
    end

    private

    def generate_unique_session_token
      loop do
        token = SecureRandom.base64;
        break token unless User.exists?(session_token: token);
      end
    end

    def ensure_session_token
      self.session_token ||= generate_unique_session_token;
    end

end
