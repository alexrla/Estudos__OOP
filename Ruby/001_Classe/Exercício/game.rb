=begin
    - Adivinhar o número sorteado

        |-> Random.rand: classe Random, método rand, utilizado para obter números de forma aleatória. Para utilizá-lo, instanciamos a classe e informarmos o intervalo númericos, da onde irão sair os números. Se informarmos apenas um número, o intervalo vai do zero, até o número informado (não precisamos informar a classe, podemos usar de forma direta, Random.rand(valor)). Para definir o intervalos, usamos os operadores de intervalo;
=end

class GuessNumber
    attr_reader :number;
    attr_reader :endGame;

    def initialize
        @number = Random.rand(0..10);
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

game = GuessNumber.new;

until game.endGame
    puts "Digite um número:"

    myNumber = gets.chomp.to_i;

    game.try_to_guess(myNumber);
end