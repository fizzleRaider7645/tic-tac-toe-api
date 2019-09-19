class AddTurnCountToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :turn_count, :integer
  end
end
