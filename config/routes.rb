AppFinder::Application.routes.draw do

  resources :apps do
#    match '/:id(:/method)' => 'apps'
  end
end
