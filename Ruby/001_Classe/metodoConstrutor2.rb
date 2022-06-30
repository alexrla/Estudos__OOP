class Person
    attr_accessor :name;
    attr_accessor :age;

    # Método construtor
    def initialize(name, age)
        @name = name;
        @age = age;
    end
end

# Criando o objeto e passando os argumentos
myPerson = Person.new("Bianca", 29);

puts myPerson.name; # Bianca
puts myPerson.age; # 29
