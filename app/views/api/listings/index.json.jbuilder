@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :title, :description, :location, :ratings
  end
end
