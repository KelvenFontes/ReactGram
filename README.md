<h1 align="center">😃📸 ReactGram</h1>

![ReactGram](https://github.com/KelvenFontes/ReactGram/assets/69438619/0c36142e-bdc9-4338-9821-217614db9396)

## :page_with_curl: Sobre o Projeto

Bem-vindos ao ReactGram - uma emocionante jornada de criação do aplicativo ReactGram usando as tecnologias React, Node.js, MongoDB, React Redux e outras ferramentas incríveis. Este repositório é o lar do ReactGram, um aplicativo rico em recursos, fácil de usar e altamente responsivo.

## :computer: Funcionalidades:

- Compartilhar fotos e legendas.
- Visualizar um feed de postagens.
- Dar "curtidas" e comentar em postagens.
- Registro e autenticação de usuários.
- Perfis de usuários com edição de informações pessoais.
- Buscar outros usuários e postagens.
- Priorizar segurança e proteção dos dados dos usuários.

## 🚀 Tecnologias Utilizadas:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![mongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

---

## Passo a passo de para execução:

1. Clone o repositório para sua máquina local usando o comando:
```bash
git clone https://github.com/KelvenFontes/ReactGram.git
```

## Executando o Backend:
__Para começar, siga os passos abaixo para executar a API do ReactGram:__

1. Acesse a pasta da API:
```bash
cd reactgram/backend
```

2. Conecte-se ao banco de dados fornecendo sua CONNECTIONSTRING no arquivo .env. Se você estiver usando o MongoDB Atlas com Mongoose, utilize a seguinte conexão:
```bash
mongodb+srv://<seu-usuario>:<sua-senha>@$<seu-cluster>.mongodb.net/
```

__Alternativa:__ Se preferir usar o MongoDB local com Docker, utilize o seguinte:
```bash
mongodb://localhost:27017
```

3. Instale as dependências necessárias para a API:
```bash
npm install
```

4. Agora, inicie a API (ela estará disponível em http://localhost:3001/):
```bash
npm run build
```

## Executando o Frontend:
__Siga os passos abaixo para executar o Frontend do ReactGram:__

1. Com o projeto já clonado, acesse a pasta do Frontend:
```bash
cd reactgram/frontend
```

2. Instale as dependências do Frontend:
```bash
npm install
```

3. Inicie o projeto do Frontend (ele estará acessível em http://localhost:3000/):
```bash
npm run test
```

Desenvolvido por Kelven Fontes :wave: [LinkedIn](https://www.linkedin.com/in/kelven-bento-fontes-4ab2b2210)!
