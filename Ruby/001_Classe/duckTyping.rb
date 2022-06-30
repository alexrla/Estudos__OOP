class Duck
    def quack
        return "Quack! Quack!";
    end
end

class DaffyDuck
    def quack
        return "Você é desprezível!";
    end
end

class Person
    def squeeze_the_duck(duck)
        duck.quack;
    end
end

duckOne = Duck.new;
duckTwo = DaffyDuck.new;

myPerson = Person.new;

puts myPerson.squeeze_the_duck(duckOne); # Quack! Quack!
puts myPerson.squeeze_the_duck(duckTwo); # Você é desprezível!