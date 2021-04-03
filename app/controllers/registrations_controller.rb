class RegistrationsController < Devise::RegistrationsController

  def create
    @user = User.new(user_params)
    
    @guest = Program.find_by_name('Guest')
    @user.program_id = @guest.id if @user.program_id == nil

    if User.find_by_email(user_params[:email])
      warden.custom_failure!
      render json: { error: 'already registered' }, status: :unprocessable_entity
    elsif @user.save
      token = @user.generate_jwt
        render json: token.to_json
    else
      warden.custom_failure!
      render json: { error: 'signup error' }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_by_email(user_params[:email])

    if @user.update_attributes(user_params)
      render json: @user
    else
      warden.custom_failure!
      render :json=> @user.errors, :status=>422
    end
 end

  def destroy
    @user = User.find_by_email(user_params[:email])
    if @user.destroy
      render :json=> { success: 'user was successfully deleted' }, :status=>201
    else
      render :json=> { error: 'user could not be deleted' }, :status=>422
    end
  end

  private

  def user_params
     params.require(:user).permit(:email, :password, :password_confirmation, :program_id) 
  end
end