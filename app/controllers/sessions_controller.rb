class SessionsController < Devise::SessionsController
  include ActionController::MimeResponds
 
  before_action :authorize_request, except: :create


  def create
    @user = User.find_by_email(user_params[:email])
    return user_not_found unless @user

    if @user && @user.valid_password?(sign_in_params[:password])
      @token = @user.generate_jwt
      render json: {
        user: @user,
        token: @token
        }, status: :ok
    else
      invalid_login_attempt
    end
  end

  def new
    verify
  end

  def destroy
    sign_out(@user)
    render :json=> {:success=>true}
  end


    private

    def user_not_found
      warden.custom_failure!
      render json: {error: 'email not registered'}, status: :unprocessable_entity
    end

    def invalid_login_attempt
      warden.custom_failure!
      render json: {error: 'password incorrect'}, status: :unprocessable_entity
    end

    def user_params
       params.require(:user).permit(:email, :password)
    end

    def verify
      render json: @decoded, status: :ok
    end

    # def current_user
    #   @current_user ||= super || User.find(@current_user_id)
    # end
  
    # def process_token
    #   if request.headers['Authorization'].present?
    #     begin
    #       jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1].remove('"'), Rails.application.secrets.secret_key_base).first
    #       @current_user_id = jwt_payload['id']
    #     rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
    #       head :unauthorized
    #     end
    #   end
    # end

    def authorize_request
      
      header = request.headers['Authorization'].split(' ')[1].remove('"') if header
      begin
        @decoded = decode(header)
        @current_user = User.find(@decoded[:id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    end

    def decode(token)
      decoded = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
      HashWithIndifferentAccess.new decoded
    end

end