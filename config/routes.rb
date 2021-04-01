Rails.application.routes.draw do
  resources :cocktails
  resources :programs
  devise_for :users, 
  controllers: { 
    invitations: 'users_invitations', 
    registrations: 'registrations', 
    sessions: 'sessions' 
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
