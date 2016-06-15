Rails.application.routes.draw do
  root 'flights#index'
  get '/app' => 'flights#app.html.erb'
  resources :users
  resources :reservations
  resources :flights
  resources :airplanes
end
