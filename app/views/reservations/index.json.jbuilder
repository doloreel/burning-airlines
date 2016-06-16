json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :seat, :user_id, :flight_id
  json.url reservation_url(reservation, format: :json)
  json.user reservation.user
end
