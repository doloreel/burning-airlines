class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
        t.integer :plane_model
        t.integer :plane_id
        t.integer :row
        t.integer :column
        t.timestamps null: false
    end
  end
end
