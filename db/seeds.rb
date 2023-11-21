ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Listing.destroy_all
    Review.destroy_all

    require "open-uri"

    user = User.first # Assuming you have users created in the database

    # puts "Resetting primary keys..."
    # # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')


    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition',
      email: 'demo@user.io',
      password: 'password'
    )

    # More users
    11.times do
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      })
    end

    puts "Done!"

    Listing.create!(
      title: 'Townhouse',
      description: 'Great townhouse located near the water',
      price: 100,
      beds: 2,
      baths: 2,
      location: 'New York',
      rating: 4.5,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/1.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i13.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i18.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i25.jpg',
      # user: user # Associate the listing with a user
    )

    Listing.create!(
      title: 'Ranch',
      description: 'Fantastic ranch overlooking the city',
      price: 200,
      beds: 2,
      baths: 2,
      location: 'Cape Town',
      rating: 4.7,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/2.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i14.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i19.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i26.jpg',
    )

    Listing.create!(
      title: 'Guest House',
      description: 'Come see the pyramids',
      price: 800,
      beds: 6,
      baths: 4,
      location: 'Egypt',
      rating: 4.5,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/3.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i15.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i20.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i27.jpg',
    )

    Listing.create!(
      title: 'Sunny View',
      description: 'Amazing sunsets daily',
      price: 700,
      beds: 6,
      baths: 4,
      location: 'Moscow',
      rating: 4.9,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/4.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i16.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i21.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i28.jpg',
    )

    Listing.create!(
      title: 'Ocean View',
      description: 'Beaches and sunshine every day',
      price: 1200,
      beds: 7,
      baths: 6,
      location: 'Sydney',
      rating: 4.6,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/5.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i16.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i22.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i29.jpg',    )

    Listing.create!(
      title: 'Cliff Vista',
      description: 'Come for the hiking. Stay for the views.',
      price: 200,
      beds: 1,
      baths: 2,
      location: 'Shanghai',
      rating: 4.2,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/6.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i17.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i23.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i30.jpg',    )

    Listing.create!(
      title: 'Turkish View',
      description: 'Excellent proximity to local shops',
      price: 1000,
      beds: 6,
      baths: 5,
      location: 'Istanbul',
      rating: 4.9,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/7.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i18.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i24.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i31.jpg',    )

    Listing.create!(
      title: 'Ski Resort',
      description: 'Come for the skiing. Stay for the warmth.',
      price: 300,
      beds: 2,
      baths: 3,
      location: 'Germany',
      rating: 4.2,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/8.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i19.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i25.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i32.jpg',    )

    Listing.create!(
      title: 'Mountain Scene',
      description: 'Water, hikes, and skiing, all at your fingertips',
      price: 800,
      beds: 6,
      baths: 4,
      location: 'Paris',
      rating: 4.8,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/9.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i20.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i26.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i33.jpg',    )

    Listing.create!(
      title: 'Water View',
      description: 'Enjoy this amazing home near the ocean',
      price: 700,
      beds: 5,
      baths: 2,
      location: 'California',
      rating: 4.2,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/10.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i21.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i27.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i34.jpg',    )

    Listing.create!(
      title: 'Gothic House',
      description: 'Historial site with intricate architecture',
      price: 100,
      beds: 2,
      baths: 3,
      location: 'San Francisco',
      rating: 4.5,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/11.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i22.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i28.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i35.jpg',    )

    Listing.create!(
      title: 'Historic Site',
      description: 'Best place for the sights and sounds of NY',
      price: 490,
      beds: 2,
      baths: 2,
      location: 'New York',
      rating: 4.5,
      image_url1: 'https://airbnb-seeds.s3.amazonaws.com/12.jpeg',
      image_url2: 'https://airbnb-seeds.s3.amazonaws.com/i23.jpg',
      image_url3: 'https://airbnb-seeds.s3.amazonaws.com/i29.jpg',
      image_url4: 'https://airbnb-seeds.s3.amazonaws.com/i36.jpg',    )

    Review.create!(
      body: "This place is great!",
      rating: 4,
      listing_id: 1,
      author_id: 1
    )

    compliments = [
  "This place is amazing!",
  "Absolutely loved my stay!",
  "Had a fantastic experience!",
  "Incredible hospitality!",
  "A perfect getaway!",
  "Couldn't ask for more!",
  "Top-notch accommodation!",
  "Hospitality at its finest!",
  "An outstanding experience!",
  "Exceeded all expectations!",
  "Remarkable stay!",
  "Unforgettable experience!"
]

(1..12).each do |i|
  compliments.each_with_index do |compliment, index|
    Review.create!(
      body: compliments[index],
      rating: 4,
      listing_id: i,
      author_id: i
    )
  end
end


    # (2..12).each do |i|
    #   Review.create!(
    #     body: "This place is great!",
    #     rating: 4,
    #     listing_id: i,
    #     author_id: i
    #   )
    # end

    # Review.create!(
    #   body: "Really enjoyed the stay",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # (2..12).each do |i|
    #   Review.create!(
    #     body: "Really enjoyed the stay!",
    #     rating: 4,
    #     listing_id: i,
    #     author_id: i
    #   )
    # end

    # Review.create!(
    #   body: "Had a great time!",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # Review.create!(
    #   body: "Would definitely come back",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # Review.create!(
    #   body: "Return next year!",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # Review.create!(
    #   body: "Enjoyed the game room!",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # Review.create!(
    #   body: "The hot tub was fantastic!",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # Review.create!(
    #   body: "Never coming back.",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # Review.create!(
    #   body: "I would come back again!",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # Review.create!(
    #   body: "Too hot!",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # Review.create!(
    #   body: "Great scenery",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )

    # Review.create!(
    #   body: "Enjoyed the stay!",
    #   rating: 4,
    #   listing_id: 1,
    #   author_id: 1
    # )



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
