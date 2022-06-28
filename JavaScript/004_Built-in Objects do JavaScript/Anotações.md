# Orientação a Objetos - JavaScript

### Built-in Objects

- **Criados pelos desenvolvedores da linguagem;**
- **Originam strings, arrays e objetos;**
- **Os objetos que nós criamos, herdam suas propriedades e métodos (aspecto de herança);**
- **No JavaScript, isso é mais conhecido pelo conceito de _Prototype_, onde todo objeto tem um pai;**



### Object

- **Pai de todos os objetos do JavaScript;**
- **Possui propriedades e métodos, mesmo o objeto estando vazio;**
- **Pode ser criado via _new_;**



### Array

- **Objeto pai de todos os arrays;**
- **Pode instanciar um array com o _new_;**
- **Também possui suas propriedades e métodos;**
- **A propriedade _length_ indica o número de itens do array e temos métodos como: _push_, _pop_ e _join_;**



### Function

- **Objeto para criar funções;**
- **Podemos criar funções a partir do _new_;**
- **Não é utilizado. Serve apenas para conhecimento e para você entender como o JavaScript funciona;**
- **Podemos utilizar a propriedade _length_ para saber o número de argumentos de uma função (também podemos usar o método _toString_ nesse objeto);**
- **Os métodos que podemos utilizar do Function, são call e apply;**
- **O call pode pegar métodos empretados de objetos;**
- **O apply é semelhante ao call, mas todos os parâmetros são transformados em arrays;**



### Boolean

- **Também é um objeto e serve para valores booleanos (true ou false);**
- **Podemos criar com o _new_ e o método _valueOf()_, da o valor do booleano;**
- **Esse objeto não tem métodos;**
- **Um valor booleano, true ou false, não são instâncias do objeto Boolean (true e false são valores primitivos);**



### Number

- **Objeto para tratar os números;**
- **Tem métodos como: _parseInt_ e o _parseFloat_;**
- **Também utilizamos o _new_, para criar um novo objeto;**
- **As propriedades MAX_VALUE e MIN_VALUE, são interessantes para sabermos o máximo e o mínimo, que o JavaScript atinge;**
- **Alguns outros métodos importantes: _toFixed_, _toPrecision_ e _toExponential_ (esses métodos não precisam serem utilizados com o Number);**



### String

- **Podemos criar uma string em objeto, com o _new_;**
- **Temos acesso a propriedade length, que dá o número de caracteres;**
- **Podemos acessar um caractere, através do seu índice;**



### Math

- **Objeto com propriedades e métodos matemáticos;**



### Date

- **Objeto que lida com datas;**



### RegExp (Regex)

- **Objeto para tratar expressões regulares;**
- **Podemos utilizar métodos como _test_ e _exec_;**



### Error

- **Objeto para tratar erros;**
- **Deriva dos erros que recebemos;**
- **"Podemos criar os nossos próprios erros";**



### Obs.:

- **Mesmo sem ser instanciado, uma variável de certo tipo, acaba herdando os métodos do seu pai (objeto pai);** 

