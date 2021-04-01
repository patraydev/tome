class CreateLibraryJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :cocktails, :users do |t|
      # t.index [:cocktail_id, :user_id]
      t.index [:user_id, :cocktail_id]
    end
  end
end
