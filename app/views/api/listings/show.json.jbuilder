json.listing do
  json.extract! listing, :id, :title, :description, :rating, :location, :created_at, :updated_at
end
