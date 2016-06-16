Rails.application.routes.draw do

  # root 'flights#index'
  root 'flights#index'
  get '/app' => 'flights#app'
  get '/search' => 'flights#app'
  get 'users/index'
  get 'users/edit'
  get 'users/new'
  get  '/login' => 'sessions#new', :as => 'login'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy', :as => 'logout'

  resources :users
  resources :reservations
  resources :flights
  resources :airplanes
end
