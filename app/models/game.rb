class Game < ApplicationRecord
    serialize :state, Array
    has_many :players
end
