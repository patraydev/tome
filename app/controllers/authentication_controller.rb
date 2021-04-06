class AuthenticationController < ApplicationController
  before_action :authorize_request

  def verify
    render json: @current_user, status: :ok
  end

end
