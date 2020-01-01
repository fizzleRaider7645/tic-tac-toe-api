class GamesController < ApplicationController
    before_action :set_game, only: [:update]

    def index
      games = Game.all
      render json: games
    end
  
    def show
      @game = Game.find_by(id: params[:id])
      render json: @game
    end
  
    def create
      binding.pry
      game = Game.create(game_params)
      render json: game, status: 201
    end
  
    def update
      @game.update(game_params)
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
