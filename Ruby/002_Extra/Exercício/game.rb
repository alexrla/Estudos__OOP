require_relative './lib/advinharNumero';

game = GuessNumber.new;

until game.endGame
    puts "Digite um número:"

    myNumber = gets.chomp.to_i;

    game.try_to_guess(myNumber);
end