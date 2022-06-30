class Father
    attr_accessor :name;

    def initialize(name)
        @name = name;
    end

    def to_introduce()
        puts "Oi, meu nome #{@name}!";
    end
end

class Son < Father
end

objectFather = Father.new("Leandro"); 
puts objectFather.name; # Leandro
objectFather.to_introduce; # Oi, meu nome Leandro!

objectSon = Son.new("Theo");
puts objectSon.name; # Theo
objectSon.to_introduce; # Oi, meu nome Theo!