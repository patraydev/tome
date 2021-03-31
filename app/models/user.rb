class User < ApplicationRecord
  belongs_to :program
  has_and_belongs_to_many :cocktails, foreign_key: 'cocktail_id'
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable,  and :omniauthable
  devise :database_authenticatable, :registerable, :trackable,
         :recoverable, :rememberable, :validatable, :confirmable
end
