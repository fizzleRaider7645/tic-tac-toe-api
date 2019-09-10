class Board < ApplicationRecord
    serialize :grid, Array
    attr_accessor :grid

    def start_game
        self.grid = Array.new(9) { "" }
    end
end
