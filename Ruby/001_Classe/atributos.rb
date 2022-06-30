class Person
    @name = nil;
    @age = nil;

    def save_name(name)
        @name = name;
    end

    def show_name()
        return "Meu nome é #{@name}!";
    end

    def save_age(age)
        @age = age;
    end

    def show_age()
        return "Eu tenho #{@age} de idade!";
    end
end

myPersonOne = Person.new;
myPersonOne.save_name("Leandro");
myPersonOne.save_age("30");

puts myPersonOne.show_name; # Meu nome é Leandro!
puts myPersonOne.show_age; # Eu tenho 30 de idade!

myPersonTwo = Person.new;
myPersonTwo.save_name("Bianca");
myPersonTwo.save_age("29");

puts myPersonTwo.show_name; # Meu nome é Bianca!
puts myPersonTwo.show_age; # Eu tenho 29 de idade!