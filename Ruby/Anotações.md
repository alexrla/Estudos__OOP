# Orientação a Objetos - Ruby



### Paradigma

- **Definições:**
  - **Conjunto de regras que estabelecem fronteiras e descrevem como resolver os problemas dentro destas fronteiras;**
  - **Influenciam nossa percepção, ajudam-nos a organizar e a coordenar a maneira como olhamos para o mundo;**
  - **... Programação Orientada a Objetos (POO) é um paradigma para o desenvolvimento de software que baseia-se na utilização de componentes individuais (objetos), que colaboram para a construção de sistemas mais complexos. A colaboração entre os objetos, é feita através do envio de mensagens;**
  - **O paradigma de objetos baseia-se em alguns conceitos, como:**
    - **Classes;**
    - **Objetos;**
    - **Encapsulamento;**
    - **Herança;**
    - **Entre outros...;**




### Histórico

- **O paradigma de Orientação a Objetos, surgiu no fim dos anos 60, com a linguagem de programação _SIMULA67_, desenvolvida no Centro Norueguês de Computação, mas apenas nos anos 70, com a linguagem _Smalltalk_ (considerada a primeira linguagem autêntica de Orientação a Objetos e desenvolvida nos laboratórios da Xerox PARC), a Programação Orientada a Objetos foi popularizada;**
- **Alan Kay, um dos criadores do Smalltalk, formulou a chamada analogia biológica: - Como seria um sistema de software, que funcionasse como um ser vivo?**
- **Através da sua analogia biológica, Alan Kay definiu os fundamentos da orientação a objetos:**
  - **Qualquer coisa é um objeto;**
  - **Objetos realizam tarefas através da requisição de serviços a outros objetos;**
  - **Cada objeto pertence a uma determinada classe (uma classe agrupa objetos similares);**
  - **A classe é um "repositório para comportamento", associado ao objeto;**
  - **Classes são organizadas em hierarquias;**




### Pilares da Programação Orientada a Objetos

- **Abstração;**
  - **Imaginar o objeto;**
    - **Identidade única;**
    - **Atributos;**
    - **Métodos;**

- **Encapsulamento;**
  - **Esconder as propriedades dos objetos para obter mais segurança;**

- **Herança;**
  - **Permite o reuso de código;**

- **Polimorfismo;**
  - **Capacidade de referenciar um objeto, de várias formas diferentes;**




### Classes

- **Classes são os moldes utilizados para a criação dos objetos;**
- **Através da definição de uma classe, descrevemos as propriedades/atributos e métodos/ações, que um objeto terá;**
- **Uma classe representa um conjunto de objetos, com características afins;**
- **Além disse, ela define o comportamento dos objetos, através de seus métodos, e quais estados ele é capaz de amnter, através de seus atributos;**



### Encapsulamento

- **Se refere a esconder (proteger) os dados, dentro do objeto;**
- **Produz duas visões do objeto:**
  - **Visão interna (como o objeto faz);**
  - **Visão externa (o que o objeto faz);**
- **Se tratando de classes, o encapsulamento é obtido através da visibilidade, conhecida também, como "modificadores de acesso";**
- **Modificadores de acesso (os mais comuns):**
  - **Public (Público) [ `+` ]: elementos declarados como público, podem ser acessados a partir de qualquer outra classe;**
  - **Private (Privado) [ `-` ]: elementos private, só podem ser acessados pela própria classe;**
  - **Protected (Protegido) [ `#` ]: elementos protected, só podem ser acessados pela própria classe e por suas classes descendentes;**



### Objeto

- **São instâncias de uma classe;**
- **É capaz de armazenar estados, através dos seus atributos e de reagir a mensagens (requisições) enviadas a ele, assim como se relacionar e enviar mensagens a outros objetos;**
- **Um objeto pode ser qualquer indivíduo, lugar, evento, coisa, tela, relatório ou conceito que seja aplicável ao sistema;**
- **Todo objeto pertence a uma determinada classe e possui atributos próprios;**
- **Os atributos são mutáveis e podem receber diferentes valores, de acordo com as características do objeto;**
- **A criação de um objeto consiste em sua instanciação, segundo, "cada instância tem seus próprios valores de atributos, mas compartilha o nome e os comportamentos dos atributos, com as outras instâncias da classe";**



