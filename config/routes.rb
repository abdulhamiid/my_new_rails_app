Rails.application.routes.draw do
  get 'message/index'
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :messages
    end
  end
  
end