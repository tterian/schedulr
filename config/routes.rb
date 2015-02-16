Rails.application.routes.draw do
	root 'pages#home'

	resources :users, defaults: { format: :json } do
		resources :orders, defaults: { format: :json }
	end

end
