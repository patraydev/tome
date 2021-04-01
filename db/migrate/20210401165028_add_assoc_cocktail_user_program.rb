class AddAssocCocktailUserProgram < ActiveRecord::Migration[6.1]
  def change
    change_table :cocktails do |t|
      t.belongs_to :program
    end
    change_table :users do |t|
      t.belongs_to :program
    end
  end
end
