class AddTopToCocktail < ActiveRecord::Migration[6.1]
  def change
    change_table :cocktails do |t|
      t.string :top
    end
  end
end
