@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :description, :location, :rating, :price, :beds, :baths, :image_url1, :image_url2, :image_url3, :image_url4
  end
end
