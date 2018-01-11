class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  # protect_from_forgery with: :exception
    include ActionController::MimeResponds  
    rescue_from ActionView::MissingTemplate do |exception|
    end 
    config.logger = Logger.new(STDOUT)
end
