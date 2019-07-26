# _examplemail.js_
___
### Descrição
Este projeto constitui de um exemplo de como enviar mensagens utilizando o module do nodemailer.
tem como principal propósito ~~enviar um monte de spam futuramente~~ __o estudo básico do módulo.__

### Pré-Requisitos
É necessário ter instalado em sua máquina:
* Node.Js
* Npm ou Yarn (para gerenciamento de pacotes e modulos)
* Postman
* Algum editor de texto de sua preferencia

### Instalação e Utilização

instalando os pacotes:

##### Opção 1
abra o console dentro da pasta do projeto e realize a instalação das dependências separadamente:

* Express
    * Npm:
        ```sh
        npm install express
        ```
    * Yarn:
        ```sh
        yarn add express
        ```
* Body-Parser (opcional, porém caso não baixe precisará fazer umas poucas alterações no código)
    * Npm:
        ```sh
        npm install body-parser
        ```
    * Yarn:
        ```sh
        yarn add body-parser
        ```

##### Opção 2
abra o console dentro da pasta do projeto e realize a instalação das dependências por meio das informações do package-lock.json da seguinte maneira:

* Npm:
```sh
npm install
```
* Yarn:
```sh
yarn install
```

### Execução do projeto

Basta dar o comando de execução do projeto, (node index.js) e abrir o Postman e enviar uma requisição POST para a rota

>localhost:3000/sendmail

não será necesssário colocar nada no Body da requisição.

Para testar foi usado o site https://mailtrap.io , lá você pode criar uma caixa de email fictícia e com seus dados configurados na aplicação, receber os emails por lá.

### Espero ter ajudado! 



![](/ico/octotech.jpg)