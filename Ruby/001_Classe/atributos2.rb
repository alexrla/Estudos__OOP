class Person
    @name = nil;
    @age = nil;

    def set_name(name)
        @name = name;
    end

    def get_name()
        return "Meu nome é #{@name}!";
    end

    def set_age(age)
        @age = age;
    end

    def get_age()
        return "Eu tenho #{@age} de idade!";
    end
end

myPersonOne = Person.new;
myPersonOne.set_name("Leandro");
myPersonOne.set_age("30");

puts myPersonOne.get_name; # Meu nome é Leandro!
puts myPersonOne.get_age; # Eu tenho 30 de idade!

myPersonTwo = Person.new;
myPersonTwo.set_name("Bianca");
myPersonTwo.set_age("29");

puts myPersonTwo.get_name; # Meu nome é Bianca!
puts myPersonTwo.get_age; # Eu tenho 29 de idade!