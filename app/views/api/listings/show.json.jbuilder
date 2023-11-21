json.listing do
  json.extract! @listing, :id, :title, :description, :location, :rating, :price, :beds, :baths, :image_url1, :image_url2, :image_url3, :image_url4, :created_at, :updated_at
end

json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :listing_id
    end
  end
end
