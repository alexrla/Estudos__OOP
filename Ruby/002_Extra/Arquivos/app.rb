# myArq = ARGV[0];
# puts myArq;
# puts myArq.class;

if ARGV.size > 0
    File.open(ARGV[0], "r") do |arq|
        while line = arq.gets
            puts line;
        end
    end
else
    puts "O nome do arquivo a ser aberto, deve ser informado. Ex.: ruby app.rb nome_do_arquivo.extensão"
end