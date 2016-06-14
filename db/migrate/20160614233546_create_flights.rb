class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
        t.integer :flight_id
        t.integer :plane_id
        t.date :departure_date
        t.text :origin
        t.text :destination
        t.timestamps null: false
    end
  end
end
