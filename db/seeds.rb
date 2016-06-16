# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

u1 = User.create :name => "Craig", :email => "craig@ga.co", :password => "chicken", :password_confirmation => "chicken"
# Client.create :name =>  "Nikole Music", :email => "nikolemusic@hotmail.com", :training_interest_areas => "Weight Loss", :password => "chicken", :password_confirmation => "chicken", :

# create_table "flights", force: :cascade do |t|
#   t.integer  "airplane_id"
#   t.date     "departure_date"
#   t.text     "origin"
#   t.text     "destination"
#   t.datetime "created_at",     null: false
#   t.datetime "updated_at",     null: false
#   t.integer  "flight_number"

Airplane.destroy_all

Airplane.create :plane_model => 747, :rows => 12, :columns => 5
Airplane.create :plane_model => 757, :rows => 16, :columns => 6
Airplane.create :plane_model => 767, :rows => 18, :columns => 8
Airplane.create :plane_model => 777, :rows => 20, :columns => 10
Airplane.create :plane_model => 787, :rows => 22, :columns => 12
