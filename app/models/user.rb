class User < ApplicationRecord
  belongs_to :program
  has_and_belongs_to_many :cocktails, foreign_key: 'cocktail_id'
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable,  and :omniauthable
  devise :invitable, :database_authenticatable, :registerable, :trackable, :invitable,:recoverable, :rememberable, :validatable, :confirmable

  def generate_jwt
    JWT.encode({id: id, exp: 0}, Rails.application.secrets.secret_key_base)
  end
end
