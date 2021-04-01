class Cocktail < ApplicationRecord
  belongs_to :program
  has_and_belongs_to_many :users, foreign_key: 'user_id'
end
