class GameSerializer < ActiveModel::Serializer
  attributes :id, :state, :turn_count
end
