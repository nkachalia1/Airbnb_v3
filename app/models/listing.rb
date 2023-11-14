class Listing < ApplicationRecord
    belongs_to :user

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
