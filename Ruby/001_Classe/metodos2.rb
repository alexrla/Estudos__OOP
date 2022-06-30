# Métodos de instância x Métodos de classe

class Test
    def hello # Método de instância
        puts "Olá!";
    end

    def self.newHello # Método de classe
        puts "Olá, de novo!";
    end
end

myTest = Test.new;
puts myTest.hello; # Olá!
puts Test.newHello; # Olá, de novo!