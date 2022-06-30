# Orientação a Objetos - Ruby



### Definição de classe

- **Definição de classe (usamos a palavra reservada da linguagem - "class"):**

  ```ruby
  class NomeDaClasse
  	# Corpo da classe...
  end
  ```

- **O nome da classe, por convenção, se inicia com letra em maiúsculo;**

- **Mais uma convenção: para nomes de classes, compostos, a letra inicial de cada palavra, deve ser em maiúsculo;**

- **O "end" indica o final da estrutura da classe;**

- **OBS.:**

  - **O "end" (palavra reservada da linguagem), utilizada para o fechamento de algum bloco de código;**

- **O corpo de uma classe, deve conter:**

  - **Atributos;**
  - **Métodos;**
  - **Constructor (método de inicialização);**

- **Para instanciar uma classe, fazemos:**

  ```ruby
  nome_do_objeto = NomeDaClasse.new;
  ```



### Métodos

- **Para definirmos métodos em uma classe, utilizamos a palavra reservada da linguagem, "def":**

  ```ruby
  class NomeDaClasse
  	def nome_do_metodo
          # corpo do método
      end
  end
  ```

- **Convenções:**

  - **O nome do método se inicia com letra em minúsculo;**
  - **Para nomes compostos, usamos o padrão "snake-case": `nome_do_método`;**

- **Métodos com parâmetros:**

  ```ruby
  class NomeDaClasse
  	def nome_do_metodo(parametro)
          puts parametro;
      end
  end
  ```

- **Parâmetro padrão (default):**

  ```ruby
  class NomeDaClasse
  	def nome_do_metodo(parametro = "valor_padrão")
          puts parametro;
      end
  end
  
  # Ao tentarmos acessar o método, e não passarmos nenhum argumento, o que será exibido na tela, será o "valor_padrão";
  ```

- **Retorno de método:**

  ```ruby
  class NomeDaClasse
  	def nome_do_metodo(parametro)
          return parametro;
      end
  end
  
  # Em Ruby, para retornarmos um valor de algum método (função), não é necessário utilizar a instrução "return" (ela é opcional). Podemos deixar apenas o que queremos retornar, sem o uso da palavra return;
  ```

  

### Atributos

- **Variável de instância (indica que para cada instância, aquela variável terá um valor): `@nome_da_variavel`;**
- **Para atributos privados, devemos criar métodos para guardar e mostrar, o atributo;**
- **Convenção: os métodos de guardar e mostrar os dados, são os métodos _setters_ e _getters_, respectivamente (não muda muita coisa, só muda o fato de usarmos as as palavras _set_ e _get_, ao definir os métodos;**
- **Ao invés de criar métodos, para guardar e mostrar os dados (onde teríamos de fazer dois métodos, um para guardar e o outro para mostrar, para cada atributo), podemos utilizar acessores: `attr_accessor :nome_do_atributo`;**
- **Se quisermos apenas mostrar, usamos o acessor: `attr_reader :nome_do_atributo`;**
- **Se quisermos apenas guardar, usamos o acessor: `attr_writer :nome_do_atributo`;**



### Métodos construtores (Métodos inicializadores)

- **Permitem a inicialização do objeto, com dados "padrões";**

- **Quando não atribuimos valores, para os atributos, eles são inicializados de forma vazia;**

- **Método `initialize` (método construtor): invocado, sempre que instanciamos a classe;**

  ```ruby
  class NomeDaClasse
  	def initialize(parametro)
          @var_parametro = parametro;
      end
  end
  ```

  

### Herança entre classes

- **Utilizamos o sinal de menor que ( `<` ), para definir que aquela classe, é uma subclasse de outra: `ClasseFilha < ClassePai`;**
- **A "classe filha", além dos seus atributos e métodos, acaba herdando os atributos e métodos da "classe pai";**



### Método overriding

- **Sobrescrever métodos da "classe pai;**"



### Super

- **O super serve. basicamente. para invocar o método correspondente (de mesmo nome, da "classe pai") na "classe filha" ;**



### Self

- **Palavra reservada da linguagem, que dá acesso ao objeto corrente;**
- **Ao usarmos `objeto.metodo`, estamos enviando ouma mensagem do método ao objeto;**
- **Dependendo do contexto, o _self_ pode ser um objeto diferente;**



### Métodos de Instância vs Métodos de Classe

- **Podemos declarar métodos, utilizando a a palavra `self`, antes do nome do método:**

  ```ruby
  def self.nome_do_metodo
      # Instruções...
  end
  ```

  **Utilizando o _self_, não precisamos instanciar a classe, para poder utilizar o método;**



### Constantes e Classes constantes

- **Constantes: declaradas com letras em maiúsculo (após declaradas e inicializadas, não podemos alterar o seu valor);**
- **Para acessar as constantes de uma classe, não precisamos ter uma instância dela. Para acessar essas constantes, fazemos: `NomeDaClasse::CONSTANTE`;**



### Módulos

- **São similares as classes, em relação ao fato de que também armazenam uma coleção de métodos, constantes, outras definições de módulos e classes;**
- **Agora, diferentemente das classes, não podemos criar objetos baseados em módulos, muito menos criar módulos que vão herdar de outros módulos;**
- **Módulos são bons locais para armazenar constantes, em um local centralizado;**
- **Objetivo: **
  - **Primeiro lugar: eles agem como _namespaces_, permitindo que você defina métodos cujos nomes não irão colidir com aqueles definidos em outras partes do programa;**
  - **Segundo lugar: permitem o compartilhamento de funcionalidades entre classes;**



### Mixins

- **Heranças x Mixins:**
  - **Na herança tradicional, temos uma "classe filho", que herda de uma "classe pai";**
  - **Herança múltipla: quando a "classe filha", herda de mais de uma "classe pai";**
  - **Ruby não contempla herança múltipla;**
  - **Para escapar disso, recorremos aos _mixins_, que nos permite fazer uma pseudo herança múltipla;**
- **Mixins, consistem em uma mistura entre classes e módulos;**



### Polimorfismo e Duck Typing

- **Polimorfismo: quando a "classe filha" herda de uma "classe pai" e reescrevemos o método herdado pela "classe filha" (overriding) ;**
- **Duck Typing: uma das formar de realizar o polimorfismo, no  Ruby (fazemos polimorfismo através de métodos com mesma assinatura);**



### OBS.:

- **Para importar um arquivo dentro do `irb`, estando dentro do diretório do arquivo, inicializamos o `irb` e fazemos: `require_relative "nome_do_arquivo"` (se `true` for retornado, indica que o arquivo foi carregado);**
- **`nil`: tipo de dado, que significa nada/vazio (equivalente ao `null`/`none`, em outras linguagens);**



