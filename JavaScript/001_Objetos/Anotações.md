# Orientação a Objetos - JavaScript

### O que é um objeto?

- **Tipo de dado que possui duas características:**
  - **Propriedades: características do objeto;**
  - **Métodos; ações do objeto;**



### Como criar um objeto

- **Podemos criar um objeto abrindo e fechando chaves;**
- **O Objeto parece um array de chave e valor;**
- **Podemos atribuir o objeto a uma variável;**



### Propriedades de um objeto

- **São características dos objetos. Por exemplo: cor, nome, marca, etc.;**
- **Podemos iniciar um objeto com várias propriedades e acessá-las para resgatar os seus valores;**



### Tipos de dados e propriedades

- **As propriedades dos objetos, aceitam qualquer tipo de dados (no JavaScript): booleans, numbers, strings, arrays, etc.;**



### Propriedades com mais de uma palavra

- **As propriedades podeni ter mais de uma palavra. Com isso, usamos o padrão camelCase;**



### Acessando a propriedade por meio de uma variável

- **Podemos acessar uma propriedades, por meio de ma variável, para isso, a variável de conter o nome da propriedade. Por exemplo:**

  ```javascript
  const myObject = {
      name: "valor_qualquer"
  }
  
  const myVar = "name";
  
  console.log(myObject[myVar]); // valor_qualquer
  ```



### Como criar métodos

- **Os métodos são ações dos objetos;**
- **Podemos ter métodos de resgatar propriedades do objeto ou para modificar o valor delas;**



### Objetos dentro de objetos

- **Podemos ter objetos dentro de outros objetos:**

  ```javascript
  const Person = {
      name: "Joana",
      
      details: {
      	eyesColor: "Azul"
          hairColor: "Castanho"
          .
          .
          .
  	}
  }
  ```

  

### Deletando propriedades e métodos

- **Podemos deletar métodos e propriedades de um objeto, através da palavra-chave delete;**



### Usando this no objeto

- **A palavra-chave _this_ dentro de um objeto, se refere a própria instância. Através do seu uso, podemos resgatar as propriedades de um objeto, em um método também contido nele;**



### Função construtora (Constructor functions)

- **Uma forma antiga de criar classes;**

- **Outra forma de criar objetos;**

- **Aceita parâmetros para o objetos. Exemplo:**

  ```javascript
  function Person(name)	{
      this.name = name;
  }
  
  const personOne = new Person("João");
  const personTwo = new Person("Ana");
  
  console.log(personOne.name); // João
  console.log(personTwo.name); // Ana
  ```



### Funções que retornam objetos

- **Semelhante as funções construtoras, mas é necessário o uso do `new` (o objeto é criado com o retorno da função). Exemplo:**

  ```javascript
  function createPerson(name)	{
      return {
        name: name
      };
  }
  
  const personOne = createPerson("João");
  const personTwo = createPerson("Ana");
  
  console.log(personOne.name); // João
  console.log(personTwo.name); // Ana
  ```



### Objeto global (objeto window)

- **Sempre que iniciada, uma página web traz um objeto chamado window;**

- **As variáveis globais ficam atreladas a ele como propriedades;**

- **Os métodos da linguagem também podem ser invocados por ele;**

- **O _this_ no escopo global (fora de funções e objetos), também referencia o window;**

  ```javascript
  const myConst = 4;
  
  console.log(myConst);
  console.log(window.myConst);
  console.log(this.myConst);
  ```

  

### Propriedade constructor

- **Quando um objeto é criado, sempre uma propriedade constructor, é adicionada a ele. Essa propriedade contém a referência de como o objeto foi criado;**

  ```javascript
  // Para acessar
  nome_do_objeto.constructor;
  ```

  

### Operador instanceof

- **Usada para sabermos de qual instância (pai), vem algum objeto (é mais prático que usar o constructor);**

- **Retorna true ou false, dependendo da comparação;**

  ```javascript
  // Exemplo 1
  function createPerson(name)	{
      return {
        name: name
      };
  }
  
  const person = createPerson("Luan");
  
  console.log(person instanceof createPerson); // false
  console.log(person instanceof Object); // true - A função retorna um objeto
  
  // Exemplo 2
  function Person(name)	{
      this.name = name;
  }
  
  const person = new Person("João");
  
  console.log(person instanceof Person); // true - Objeto instanciado a partir da função construtora 
  ```

- **Todo dado JavaScript, tem um pai objeto;**



### Passando refência de objeto

- **Quando atribuimos um objeto já criado, para uma outra variável, estamos passando uma referência. Com isso, se alterarmos a referência, o original também é alterado;**

  ```javascript
  const myObject = {
  	test: 1
  };
  
  console.log(myObject.test); // 1
  
  const copy = myObject;
  
  copy.test = 2;
  
  console.log(myObject.test); // 2
  ```



### Comparação de objetos

- **Só conseguimos ter objetos iguais, criando uma referência. Objetos criados a partir de um construtor, sempre serão diferentes;**

  ```javascript
  function CreateMyObject()	{
      this.test: 1
  }
  
  const objectOne = new CreateMyObject();
  const objectTwo = new CreateMyObject();
  
  console.log(objectOne === objectTwo); // false
  // Se a função construtora recebesse parâmetros e os para os parâmetros, dos dois objetos, passássemos os mesmos argumentos, ainda assim os objetos seriam diferentes
  
  const objectThree = objectOne;
  
  console.log(objectOne === objectThree); // true
  ```



### Object literals (literais de objeto)

- **Forma comum de se criar objetos:**

  ```javascript
  const newObject = { test: 1};
  ```

- **Podemos utilizar nomes de variáveis, como nome das propriedades:**

  ```javascript
  const x = 1;
  const y = 2;
  
  const newObject = { x, y };
  
  console.log(newObject.x); // 1
  ```

- **Também não precisamos declarar o function para os métodos:**

  ```javascript
  const myObject = {
      test: 1,
      myMethod()	{
          console.log("Teste...");
      }
  }
  
  myObject.myMethod(); // Teste...
  ```

- **Também podemos criar propriedades com variáveis ou retorno de funções (ajuda a escrever menos código):**

  ```javascript
  // Exemplo 1
  const type = "type_of_";
  
  const car =	{
      [type+"car"]: "SUV"
  };
  
  console.log(car.type_of_car); // SUV
  
  // Exemplo 2
  function type() {
      return "type_of_";
  }
  
  const car =	{
      [type()+"car"]: "SUV"
  };
  
  console.log(car.type_of_car); // SUV
  ```



### Atributos das propriedades

- **Toda propriedade tem atributos já criados pela linguagem: _Enumerable_ e _Configurable_;**

- **O _Configurable_ por exemplo, se estiver false, não deixa a propriedade ser editada ou deletada;**

  ```javascript
  const person = {
  	name: "Theo"
  };
  
  // console.log(pai_do_objeto.getOwnPropertyDescriptor(nome_do_objeto, "nome_da_propriedade"));
  console.log(Object.getOwnPropertyDescriptor(person, "name"));
  
  // Não é recomendado alterar essas propriedades
  ```

  

### Copiando propriedades

- **Os objetos herdam métodos do objeto pai (Object) e podemos utilizar esses métodos. Por exemplo, podemos utilizar o método _assign_, para copiar propriedades (as propriedades já existentes, permancem);**

  ```javascript
  const personOne = {
      name: "João"
  };
  
  const personTwo = { };
  
  // Object.assign(objeto_herdeiro, objeto_copiado)
  Object.assign(personTwo, personOne);
  
  console.log(personTwo); // { name: 'João' }
  ```

- **Mesmo copiando as propriedades de um objeto para outro objeto que esteja vazio, eles não vão ser iguais;**



### Comparando objetos [Outra forma]

- **Podemos comparar objetos, através do método _is_. Os resutaldos serão so mesmo, quando usamos o operador de igualdade, estrito ( === );**

  ```javascript
  const personOne = {
      name: "Lucas"
  };
  
  const personTwo = {
      name: "Lucas"
  };
  
  console.log(Object.is(personOne, personTwo)); // false
              
  const personThree = personOne;
  
  console.log(Object.is(personOne, personThree)); // true
  ```

- **Comparando NaN com Nan, obtemos _true_, e comparando +0 com -0, obtemos false (agora, fazendo `NaN === NaN`, obtemos false, e fazendo `+0 === -0`, obtemos true);**

  

### Destructuring

- **Recurso que veio com o ES6. Através desse recurso, podemos criar várias variáveis com uma linha só, desestruturando o objeto (o objeto não é modificado, apenas atribuimos os valores de suas propriedades, para variáveis):**

  ```javascript
  const configuration = {
      ip: "127.0.0.1",
      port: "80"
  };
  
  const { ip, port } = configuration;
  
  console.log(ip); // 127.0.0.1
  console.log(port); // 80
  ```

- **Os nomes das variáveis devem ser iguais aos das propriedades;**

- **Também é possível utilizar o destructuring para mudar o valor das vriáveis já criadas (a variável deve ser criada e inicializada):**

  ```javascript
  const configuration = {
      ip: "127.0.0.1",
      port: "80"
  };
  
  let ip = "192.168.0.60";
  let port = "8000";
  
  ({ ip, port } = configuration);
  
  console.log(ip); // 127.0.0.1
  console.log(port); // 80
  ```

- **Funciona com arrays (podemos nomear as variáveis de qualquer forma, mas claro, fazendo uso das boas práticas e ao invés das chaves, usamos colchetes):**

  ```javascript
  const numbers = [1, 2, 3];
  
  const [numberOne, numberTwo, numberThree] = numbers;
  
  console.log(numberOne); // 1
  console.log(numberTwo); // 2
  console.log(numberThree); // 3
  ```



### Destructuring e rest operator

- **O rest operator é usado para passarmos todos os elementos de um coleção, para outra;**

- **Com o destructuring, o usamos quando não sabemos quantos argumentos virão;**

- **Daí, podemos criar um array de tamanho infinito, com os restos dos elementos passados;**

  ```javascript
  let [a, ...b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  console.log(a); // 1
  console.log(b); // [2, 3, 4, 5, 6, 7, 8, 9]
  ```

  





