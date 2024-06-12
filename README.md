# :scroll: Memoteca - Mural de Pensamentos

Projeto desenvolvido durante o curso de Angular da Alura, com foco em componentização e databinding. O Memoteca é um aplicativo simples que permite adicionar pensamentos com seus respectivos autores em um mural, lista-los.

## :heavy_check_mark: Deploy

Deploy feito pela vercel: [necessita rodar o servidor de fake api](#iniciar-servidor-json-server).


*https://angular-memoteca-tau.vercel.app*

## :heavy_check_mark: Funcionalidades

- Adicionar um novo pensamento com autor
- Visualizar todos os pensamentos no mural

## :heavy_check_mark: Tecnologias Utilizadas

- Angular
- JSON Server (para simular uma API REST)

## :heavy_check_mark: Como Executar o Projeto

1. Clone o repositório para sua máquina local:

   ```
   git clone https://github.com/Aversii/angular-memoteca.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd angular-memoteca
   ```

3. Instale as dependências do Angular:

   ```
   npm install
   ```

4. <a id="iniciar-servidor-json-server"></a> Navega até a pasta backend e inicie o servidor JSON Server para simular a API REST:

   ```
   npm run start
   ```

5. Abra outro terminal o servidor de desenvolvimento do Angular:

   ```
   ng serve
   ```

6. Abra seu navegador e acesse `http://localhost:4200/` para ver o projeto em execução.


![image](https://github.com/Aversii/angular-memoteca/assets/92393933/b3b75ddf-7c80-45a4-8d64-8c48ca53dc93)
![image](https://github.com/Aversii/angular-memoteca/assets/92393933/90054871-23d7-415f-9821-c68dd34ef0b1)
![image](https://github.com/Aversii/angular-memoteca/assets/92393933/c7a7b68c-4885-4bbb-9eba-09589632c034)

## :heavy_check_mark: Observações

Este projeto foi desenvolvido apenas para fins educacionais, como parte do curso de Angular da Alura. Para um ambiente de produção real, seria necessário implementar uma API REST completa e segura.
