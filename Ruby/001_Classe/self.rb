puts "self: #{self}"; # self: main (o self está no namespace global - ele não está dentro de nenhuma classe, nenhum contexto)

class Test
    def hello
        puts "self: #{self}";
    end
end

class Test2
    def hello
        puts "self: #{self}";
    end
end

newTest = Test.new;
newTest.hello; # self: #<Test:0x0000558a91b3c8a8>

myTest = Test2.new;
myTest.hello; # self: #<Test2:0x000055abe9083668>