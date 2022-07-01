# Teste
puts"  _____ _ ";
puts" |_   _| |_ ___ ___  ";
puts"   | | |   | -_| . | ";
puts"   |_| |_|_|___|___| ";

puts "\n\n-------------------------------------------\n\n";
# Teste 2
File.open(File.expand_path("../garfield.txt", __FILE__), "r") do |arq|
    while line = arq.gets
        puts line;
    end
end