class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
        t.integer :plane_model
        t.integer :rows
        t.integer :columns
        t.timestamps null: false
    end
  end
end
