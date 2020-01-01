class CreatePlayer < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.boolean :ai, :default => false
    end
  end
end
