class ChangeNameToLibrary < ActiveRecord::Migration[6.1]
  def change
    rename_table :cocktails_users, :libraries
  end
end
