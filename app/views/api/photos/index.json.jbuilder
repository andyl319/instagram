@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo,
      :id,
      :user,
      :user_id,
      :url,
      :caption,
      :location
    end
  end
