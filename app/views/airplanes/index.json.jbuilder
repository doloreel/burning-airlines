json.array!(@airplanes) do |airplane|
  json.extract! airplane, :id, :plane_model, :plane_id, :row, :column, :created_at, :updated_at
  json.url airplane_url(airplane, format: :json)
  json.url
end
