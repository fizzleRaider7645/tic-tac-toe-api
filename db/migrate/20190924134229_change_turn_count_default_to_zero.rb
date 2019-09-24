class ChangeTurnCountDefaultToZero < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:games, :turn_count, 0)
  end
end
