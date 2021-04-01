Rails.application.routes.draw do
  resources :books
  devise_for :users
  root to: "books#index"

  get "/profile", to: "books#profile", as: 'books_profile'
  get "/:id", to: "books#bookit", as: 'books_bookit'
  get "/profile/:id", to: "books#unbookit", as: 'books_unbookit'
  get "/buy/:id", to: "books#buyit", as: 'books_buyit'

end
