Rails.application.routes.draw do
  root 'flights#index'
  resources :users
  resources :reservations
  resources :flights
  resources :airplanes

end
