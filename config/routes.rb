Rails.application.routes.draw do
  root 'flights#index'
  get '/app' => 'flights#app'
  resources :users
  resources :reservations
  resources :flights
  resources :airplanes
end
