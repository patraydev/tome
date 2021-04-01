class AddGarnishToCocktail < ActiveRecord::Migration[6.1]
  def change
    change_table :cocktails do |t|
      t.string :garnish
    end
  end
end
