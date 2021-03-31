class CreateCocktails < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.string :creator
      t.string :ingredients
      t.string :bottom
      t.string :rinse
      t.string :glass
      t.string :ice
      t.string :method
      t.text :description
      t.boolean :pending
      t.string :request_type

      t.timestamps
    end
  end
end
