Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get 'site/index'
  # resources :sites, :categories

  resources :sites, :categories, defaults: { format: 'json' }
end
