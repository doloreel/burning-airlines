class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
        t.integer :airplane_id
        t.integer :flight_number
        t.date :departure_date
        t.text :origin
        t.text :destination
        t.timestamps null: false
    end
  end
end
