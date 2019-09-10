class AddGridColumnToBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :grid, :text
  end
end
