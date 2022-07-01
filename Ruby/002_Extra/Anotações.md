# Orientação a Objetos - Ruby



### Reabrir classes (Monkey Patch)

- **Pegar um classe (nativa da linguagem ou não) e definir um novo método para ela;**

- **Para reabrir a classe, realizamos o overriding;**

- **Exemplo:**

  ```ruby
  # Reabrindo a classe String
  class String
      # Adicionando um novo método
      def speak(word = "Oi!")
         	return "Falando... #{word}";
  	end
  end
  ```

- **Reabrindo a classe, podemos sobrescrever qualquer método nativo da classe;**




### Split

- **Método aplicado a qualquer string;**
- **Converte uma string para array (transforma cada palavra da string em um elemento do array);**
- **Exemplos:**

  ```ruby
  # Por padrão, o separador/delimitador é um espaço
  puts "My String".split; #["My", "String"]
  
  # Alterando o separador para uma string fechada e vazia, ao invés de um array de palavras, obteremos um array de letra
  puts "String".split(""); # ["S", "t", "r", "i", "n", "g"]
  ```

  


### Gems

- **Bibliotecas do Ruby;**

- **Saber mais sobre as Gems: https://rubygems.org/;**

- **Exemplo:**

  ```ruby
  # gem install lerolero_generator
  
  require 'lerolero_generator';
  
  puts LeroleroGenerator.paragraph;
  ```

  


### Bundler

- **Surgiu a partir da necessidade dos programadores, indicarem quais gems o seu projeto necessita (quais são as dependências);**
- **O bundler também é uma gem;**
- **Para saber mais, temos o site: https://bundler.io/;**
- **Instalando o bundler: `gem install bundler`;**
- **No arquivo `Gemfile`, é onde iremos colocar as dependências do nosso projeto (as gems);**

  ```ruby
  # Exemplo de estrutura do arquivo Gemfile
  
  source 'https://rubygems.org'
  gem 'nokogiri'
  gem 'rack', '~> 2.0.1'
  gem 'rspec'
  ```

- **Para instalar as dependências do projeto (as gems), rodamos os comandos: `bundle`/`bundle install` (isso, estando no diretório do arquivo _Gemfile_);**
- **Após rodarmos um dos comandos: `bundle`/`bundle install` , um arquivo `Gemfile.lock` é gerado;**



### Trabalhando com arquivos

- **Invocamos a classe `File` (classe responsável pelo trabalhode arquivos no Ruby);**
- **A classe `File` nos da o direito de criar e abrir arquivos;**
- **Quando queremos criar um arquivo, criamos ele o abrindo para escrita: `File.open("nome_do_arquivo.extensão", "modo de arbetura") do |arq|`;**
- **Modos de escrita: "w" (write - escrever);**
- **O nome `arq` corresponde ao nome do arquivo, em relação ao trabalho interno. Externamento o nome do arquivo vair ser `nome_do_arquivo.extensão`;**

- **Caso o arquivo não exista, ele acaba sendo criado;**
- **Escrevendo no arquivo: `arq.puts "Escrevendo em um arquivo no Ruby"`;**
- **Rodamos o comando `end` para executar as instruções passadas para o arquivo;**
- **Quando estamos na mesma pasta, onde o arquivo se encontra, não precisamos indicar o caminho;**
- **Abrindo o arquivo para leitura: `File.open("nome_do_arquivo.extensão", "modo de leitura") do |arq|`;**
- **Modos de abertura de leitura: "r" (read - ler);**
- **Documentação: https://ruby-doc.org/core-2.2.2/IO.html#meth;**



### ARGV (Argument Vector)

- **Argumentos que vêm de fora da aplicação;**
- **ARGV[n]: pega o n-ésimo argumento;**
- **ARGV.size: pega a quantidade de argumentos;**



### Executando comandos do S.O. (Sistema Operacional), a partir do Ruby

- **`system("comando1", "comando2", ...)`;**



### ASCII Art

- **Desenhar através dos caracteres ASCII;**



### Gems para terminal

- **https://ttytoolkit.org/;**



### OBS.:

- **`sleep valor_em_segundos`:  o programa espara um tempo, antes de executar a próxima linha;**
- **`puts`: exibe a saída e vai para a linha de baixo;**
- **`print`: exibe a saída, só que não vai para a linha de baixo, permanece na mesma linha;**
- **`.sample`: fornece um elemento aleatório do array;**



