@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :description, :location, :rating
  end
end
