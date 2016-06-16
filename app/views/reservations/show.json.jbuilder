json.extract! @reservation, :id, :created_at, :updated_at
json.user @reservation.user
