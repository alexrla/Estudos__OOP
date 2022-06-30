# Convenção Ruby
class Person
    @name = nil;
    @age = nil;

    def name=(name) # Guardando
        @name = name;
    end

    def name # Pegando
        return "Meu nome é #{@name}!";
    end

    def age=(age)
        @age = age;
    end

    def age
        return "Eu tenho #{@age} de idade!";
    end
end

myPersonOne = Person.new;
myPersonOne.name = "Leandro";
myPersonOne.age = 30;

puts myPersonOne.name; # Meu nome é Leandro!
puts myPersonOne.age; # Eu tenho 30 de idade!

myPersonTwo = Person.new;
myPersonTwo.name = "Bianca";
myPersonTwo.age = 29;

puts myPersonTwo.name; # Meu nome é Bianca!
puts myPersonTwo.age; # Eu tenho 29 de idade!