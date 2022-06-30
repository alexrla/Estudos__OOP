# Acessores
class Person
    attr_accessor :name;
    attr_accessor :age;
end

myPersonOne = Person.new;
myPersonOne.name = "Leandro";
myPersonOne.age = 30;

puts myPersonOne.name; # Leandro
puts myPersonOne.age; # 30

myPersonTwo = Person.new;
myPersonTwo.name = "Bianca";
myPersonTwo.age = 29;

puts myPersonTwo.name; # Bianca
puts myPersonTwo.age; # 29