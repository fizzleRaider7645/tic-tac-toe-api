class GamesController < ApplicationController
    before_action :set_game, only: [:show, :update]

    def index
      games = Game.all
      render json: games
    end
  
    def show
      render json: @game
    end
  
    def create
      game = Game.create(game_params)
      render json: game, status: 201
    end
  
    def update
      @game.update(game_params)
      binding.pry
      render json: @game
    end

    private

    def game_params
      params.require(:game).permit(:id, :turn_count, state: [])
    end
  
    def set_game
      @game = Game.find_by(id: params[:game][:id])
    end
end
