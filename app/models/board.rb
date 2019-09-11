class Board < ApplicationRecord
    serialize :grid, Array
    attr_accessor :grid
    
    
    WIN_COMBINATIONS = [
        [0,1,2], # Top row
        [3,4,5],  # Middle row
        [6,7,8], # Bottom row
        [0,4,8], # Diag. right to left
        [6,4,2], # Diag. left to right
        [0,3,6], # Left vertical
        [7,4,1], # Mid vertical
        [2,5,8] # Right vertical
    ]

    def start_game
        self.grid = Array.new(9) { "" }
    end

    def full?
        self.grid.all? { |pos| pos == "X" || pos == "O" }
      end
      
    def draw?
        if full? && !won?
            return true
        else
            return false
        end
    end
end
