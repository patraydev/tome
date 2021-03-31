class CreatePrograms < ActiveRecord::Migration[6.1]
  def change
    create_table :programs do |t|
      t.string :name
      t.string :location
      t.boolean :sharing_enabled

      t.timestamps
    end
  end
end
