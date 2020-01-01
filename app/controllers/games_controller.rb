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
      game = Game.create(game_params)
      players = players_params
      players.each do |k,v|
        new_player = Player.new
        new_player.ai = true if v
        game.players << new_player
      end
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

    def players_params
      params.require(:players).permit(:player1, :player2)
    end
  
    def set_game
      @game = Game.find_by(id: params[:game][:id])
    end
end
