json.array!(@airplanes) do |airplane|
  json.extract! airplane, :id, :plane_model, :rows, :columns, :created_at, :updated_at
  json.url airplane_url(airplane, format: :json)
  json.url
end
