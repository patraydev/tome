class AddAdminToUser < ActiveRecord::Migration[6.1]
  def change
    change_table :users do |t|
      t.boolean :is_admin, null: false, default: false
    end
  end
end
