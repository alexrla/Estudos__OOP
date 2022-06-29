# Orientação a Objetos - JavaScript

### Herança e o JavaScript

- **A herança possibilita a reutilização decódigo;**

- **As propriedades e métodos são herdadas pelos objetos filhos;**

- **A herança no JavaScript, pode ser aplicada via prototype chain (há outras maneiras de atingir esse objetivo;**

  

### Prototype chain

- **Forma padrão da linguagem, de realizar o processo de herança;**
- **Podemos instanciar objetos no prototype de outros, criando assim, a herança;**



### Checando a herança

- **Quando utilizamos o prototype chain, o objeto passa a virar instância de todos os "pais" (podemos verificar isso, através da instrução instanceof);**



### Métodos e propriedades no Prototype

- **Utilizando o prototype, cada método e propriedade adicionando a ela, não irá se repetir a cada objeto instanciado. Logo, essa herança beneficia o código, criando uma referência para os novos objetos, o que deixa o código mais performático (não ocupando um novo espaço na memória, a cada objeto criado);**
- **Como estamos falando de referência, ao alterar o "filho", o pai também sofrerá essa alteração e isso pode ser ruim (a ideia é usar para valores constantes e métodos);**



### Aumentando a eficiência

- **Podemos clonar apenas o prototype, ao invés da instância do objeto;**



### Precauções

- **Utilizando a abordagem de clonar só o prototype, acontece um _side effect_: se mudamos o prototype, toda a cadeia que o utiliza, também irá ser alterada (logo, devemos usar essa abordagem, quando não precisamos mudar nem os métodos, nem as propriedades);**



### Construtor temporário

-  **Caso não possamos optar por propriedades e métodos que não são alteráveis (temos que alterar propriedades ou métodos nos "filhos", o que consequentemente irá provocar alterações no "pai)", podemos utilizar um construtor temporário (só irá servir de armazenamento para a referência, não sendo utilizado no restante do código);**
- **Quando alteramos algo no prototype do nosso objeto, que foi instanciado a partir do construtor temporário, iremos estar alterando o construtor temporário e não o "objeto Pai";**



### Isolando a herança em uma função

- **Para deixar a herança reutilizável, podemos utilizar uma função (que irá gerar heranças);**



### Copiando propriedades

- **Podemos, ao invés de utilizar um construtor temporário, copiar as propriedades através de um loop e realizar a herança;**
- **Para isso, precisaremos utilizar a propriedade `uber`, que nos dá acesso ao "objeto Pai";**
- **Nessa abordagem, propriedades e métodos são recriados (o que não é muito bom para a performance);**



### Problema ao copiar por loop (ao usar array no prototype Pai)

- **Os arrays ficam alocados na memória, e quando copiamos através do loop é criado apenas uma referência, fazendo com que, se o array do "Filho", for alterado, o do "Pai" também sofrerá essa alteração;**



### Solucionando o problema de copiar por loop, envolvendo arrays

- **Podemos utilizar a estratégia de copiar um objeto;**
- **Porém, o código tende a ficar complexo demais (talvez não se deva utilizar herança para isso, sendo melhor criar uma propriedade, além disso, não devemos utilizar prototypes desta forma);**



### Herança Múltipla

- **Estrutura difícil de manter e o JavaScript não nos dá esta funcionalidade de forma fácil, precisamos criar a função;**
- **Melhor optar pelo _Prototype Chain_;**
