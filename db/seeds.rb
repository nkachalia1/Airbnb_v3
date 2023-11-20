ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all

    require "open-uri"

    # puts "Resetting primary keys..."
    # # For easy testing, so that after seeding, the first `User` has `id` of 1
    # ApplicationRecord.connection.reset_pk_sequence!('users')

    # puts "Creating users..."
    # # Create one user with an easy to remember username, email, and password:
    # User.create!(
    #   username: 'Demo-lition',
    #   email: 'demo@user.io',
    #   password: 'password'
    # )

    # # More users
    # 11.times do
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   })
    # end

    puts "Done!"

    Listing.create!(
      title: 'Townhouse',
      description: 'this is the description',
      price: '100',
      beds: '2',
      baths: '2',
      location: 'New York',
      rating: '4.5',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/1.jpeg'
    )

    Listing.create!(
      title: 'Ranch',
      description: 'this is the description',
      price: '200',
      beds: '2',
      baths: '2',
      location: 'Cape Town',
      rating: '4.7',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/2.jpeg'
    )

    Listing.create!(
      title: 'Guest House',
      description: 'this is the description',
      price: '800',
      beds: '6',
      baths: '4',
      location: 'Egypt',
      rating: '4.5',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/3.jpeg'
    )

    Listing.create!(
      title: 'Sunny View',
      description: 'this is the description',
      price: '700',
      beds: '6',
      baths: '4',
      location: 'Moscow',
      rating: '4.9',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/4.jpeg'
    )

    Listing.create!(
      title: 'Ocean View',
      description: 'this is the description',
      price: '1200',
      beds: '7',
      baths: '6',
      location: 'Sydney',
      rating: '4.6',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/5.jpeg'
    )

    Listing.create!(
      title: 'Cliff Vista',
      description: 'this is the description',
      price: '200',
      beds: '1',
      baths: '2',
      location: 'Shanghai',
      rating: '4.2',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/6.jpeg'
    )

    Listing.create!(
      title: 'Turkish View',
      description: 'this is the description',
      price: '1000',
      beds: '6',
      baths: '5',
      location: 'Istanbul',
      rating: '4.9',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/7.jpeg'
    )

    Listing.create!(
      title: 'Ski Resort',
      description: 'this is the description',
      price: '300',
      beds: '2',
      baths: '3',
      location: 'Germany',
      rating: '4.2',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/8.jpeg'
    )

    Listing.create!(
      title: 'Mountain Scene',
      description: 'this is the description',
      price: '800',
      beds: '6',
      baths: '4',
      location: 'Paris',
      rating: '4.8',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/9.jpeg'
    )

    Listing.create!(
      title: 'Water View',
      description: 'this is the description',
      price: '700',
      beds: '5',
      baths: '2',
      location: 'California',
      rating: '4.2',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/10.jpeg'
    )

    Listing.create!(
      title: 'Gothic House',
      description: 'this is the description',
      price: '100',
      beds: '2',
      baths: '3',
      location: 'San Francisco',
      rating: '4.5',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/11.jpeg'
    )

    Listing.create!(
      title: 'Historic Site',
      description: 'this is the description',
      price: '490',
      beds: '2',
      baths: '2',
      location: 'New York',
      rating: '4.5',
      image_url: 'https://airbnb-seeds.s3.amazonaws.com/12.jpeg'
    )

    # 11.times do
    #   Listing.create!({
    #     title: Faker::Travel::TrainStation.name(region: 'united_kingdom', type: 'metro'),
    #     description: "this is the description",
    #     price: '500',
    #     beds: '5',
    #     baths: '4',
    #     location: 'San Francisco',
    #     rating: '4.7',
    #     image_url: ''
    #   })
    # end/
end
