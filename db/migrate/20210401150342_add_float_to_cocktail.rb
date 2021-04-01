class AddFloatToCocktail < ActiveRecord::Migration[6.1]
  def change
    change_table :cocktails do |t|
      t.string :float
    end
  end
end
