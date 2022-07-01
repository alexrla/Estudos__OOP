class SortNumber
    def self.sort
        myVector = [];

        File.open(File.expand_path("../../numeros.txt", __FILE__), "r") do |arq|
            while line = arq.gets
                myVector.push(line.to_i);
            end
        end

        return myVector.sample;
    end
end

=begin
    - File.expand_path("../../numeros.txt", __FILE__)

        . __File__: local a partir de onde queremos começar (representa o arquivo onde estamos);

        . "../../numeros.txt": os primeiros "../", faz com que ele volte pro seu diretório raiz. O segundo "../", faz com que volte para o diretório Exercício e a partir daí acessa o arquivo numeros.txt;
=end