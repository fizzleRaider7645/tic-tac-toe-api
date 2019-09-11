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

    def position_taken?(index)
        !(self.grid[index].nil? || self.grid[index] == "")
      end

    def won?
        WIN_COMBINATIONS.detect do |combo|
          self.grid[combo[0]] == self.grid[combo[1]] &&
          self.grid[combo[1]] == self.grid[combo[2]] &&
          position_taken?(combo[0])
        end
      end
end
