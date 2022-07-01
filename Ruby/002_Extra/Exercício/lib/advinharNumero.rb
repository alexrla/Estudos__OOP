require_relative './inicializacao';
require_relative './sortearNumero';

class GuessNumber
    attr_reader :number;
    attr_reader :endGame;

    def initialize
        Initialization.initializing;
        @number =  SortNumber.sort; # Random.rand(0..10);
        @endGame = false;
    end

    def try_to_guess(number = 0)
        if number == @number
            @endGame = true;
            puts "Você acertou!";
        elsif number > @number
            puts "O número informado, é maior que o número sorteado...";
        else
            puts "O número informado, é menor que o número sorteado...";
        end
    end
end