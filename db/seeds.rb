ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition',
      email: 'demo@user.io',
      password: 'password'
    )

    # More users
    10.times do
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      })
    end

    puts "Done!"

    Listing.create!(
      title: 'Listing1',
      description: 'this is the description',
      price: '100',
      beds: '2',
      baths: '2'
    )

    10.times do
      Listing.create!({
        title: Faker::Internet.unique.title(specifier: 3),
        description: Faker::Internet.unique.description,
        price: '500',
        beds: '5',
        baths: '4'
      })
    end
end
