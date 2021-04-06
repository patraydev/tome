class RenameLibraries < ActiveRecord::Migration[6.1]
  def change
    rename_table :libraries, :cocktails_users
  end
end
