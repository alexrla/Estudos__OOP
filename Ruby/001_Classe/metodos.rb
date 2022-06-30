# Criando métodos para a classe
class Person
    def shout
        puts "CALA A BOCA!";
    end

    def to_thank
        puts "Obrigado (a)!";
    end

    def to_introduce(name = "Goku")
        puts "Oi, eu sou o #{name}!"; # Interpolação
    end

    def number_of_hands()
        return 2;
    end

    def number_of_feet()
        2; # Retornando sem a instrução return
    end
end

myPerson = Person.new;

# Acessando os métodos (através da notação de ponto)
myPerson.shout; # CALA A BOCA!
myPerson.to_thank; # Obrigado (a)!
myPerson.to_introduce(); # Oi, eu sou o Goku!
myPerson.to_introduce("Narutin"); # Oi, eu sou o Narutin!
puts "Número de mãos: #{myPerson.number_of_hands}"; # Número de mãos: 2
puts "Número de pés: #{myPerson.number_of_feet}"; # Número de pés: 2