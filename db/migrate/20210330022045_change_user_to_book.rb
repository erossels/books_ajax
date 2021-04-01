class ChangeUserToBook < ActiveRecord::Migration[6.0]
  def change
    change_column :books, :user_id, :integer, :null => true
  end
end
