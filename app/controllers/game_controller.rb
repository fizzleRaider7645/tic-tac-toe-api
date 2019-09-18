class GameController < ApplicationController

    def index
        games = Game.all
        render json: games
    end


    private

    def game_params
      params.permit(state: [])
    end
  
    def set_game
      @game = Game.find(params[:id])
    end
end
