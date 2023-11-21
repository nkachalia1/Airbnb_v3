json.listing do
  json.extract! @listing, :id, :title, :description, :rating, :location, :created_at, :updated_at
end

json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :listing_id
    end
  end
end
