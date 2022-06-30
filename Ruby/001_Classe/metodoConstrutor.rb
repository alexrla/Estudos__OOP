class Person
    attr_accessor :name;
    attr_accessor :age;

    # Método construtor
    def initialize
        @name = "Fulano";
        @age = 0;
    end
end

myPerson = Person.new;

puts myPerson.name; # Fulano
puts myPerson.age; # 0

myPerson.name = "Leandro";
myPerson.age = 30;

puts myPerson.name; # Leandro
puts myPerson.age; # 30