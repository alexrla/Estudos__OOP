# Orientação a Objetos - JavaScript

### O que são Prototypes?

- **JavaScript é uma linguagem baseada em prototypes (todo objeto possui um pai, que é considerado o seu prototype, todos esses objetos filhos, herdams as propriedades e os métodos dos seus prototypes);**



### A propriedade prototype

- **As funções, além das suas propriedades, nas quais já vimos, também vem com a propriedade _prototype_ criada (recebemos um objeto vazio, que pode ter propriedades e métodos adicionados);**



### Modificações no prototype

- **Ao alterar o prototype, todas as novas instâncias ganham os novos métodos e as novas propriedades que foram criadas (o que não ocorre com instâncias criadas antes das modificações);**



### Propriedades do objetos x Propriedades do Prototype

- **Primeiro, é buscado a propriedade no objeto, se ela existir, teremos acesso a ela. Agora, se ela não exisitr, será verificado no prototype. Daí, se existir, teremos acesso a ela, se não, é retornado undefined;**
- **Podem ocorrer casos, onde as propriedades existem, tanto no objeto, como no prototype. Daí teremos acesso a propriedade do objeto (a ordem de acesso se dá por: primeiro objeto e por último o prototype);**
- **Quando a propriedade é alterada diretamente no objeto, é a esse valor que foi atribuido nessa alteração, que teremos acesso;**



### Acessando a propriedade do prototype, mesmo ela já existindo no objeto

- **Para isso, deletamos a propriedade (como a propriedade existe tanto no prototype, quanto no objeto e sabemos que o acesso se dá primeiro a propriedade do objeto, ao deletar a propriedade, estaremos deletand a do objeto, ficando com a do prototype). Assim, ao tentarmos acessá-la novamente, iremos acessar a propriedade criada no prototype;**



### Verificando as propriedades do prototype

- **Da mesma que podemos verificar as propriedades de um objeto, também podemos verificar as propriedades do prototype;**
- **Para isso, usamos o méotodo _hasOwnProperty_ (usado tanto para objetos, como para prototypes);**
- **Através desse métodos, podemos verificar se a propriedade existe somente no objeto, somente no prototype, ou em ambos;**
- **Todas as propriedades do prototype, adicionadas após a instância do objeto, são adicionadas ao prototype do objeto (as modificações feitas antes da instância, não são adicionadas);**



### Checando se um objeto é prototype de outro objeto

- **Podemos fazer essa checagem, através do método _isPrototypeOf_;**



### Adicionando métodos e propriedades aos Built-in Objects

- **Podemos criar novos e métodos e propriedades, para o objetos já existentes do JavaScript (os objetos incorporados);**
- **Essa ideia pode não ser bem vista já que: futuramente, esse método criado pode realmente exisitr na linguagem (loucura, mas vai que, né?) , daí podemos sobreescrever um método existente, e outros desenvolvedores, podem desconhecer esses métodos criados, não sabendo de onde eles vieram;**









