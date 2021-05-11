## Aplicação de apontamento de horas

Essa é uma aplicação feita em Next.js e React.js juntamente com o Prisma.io para servir como um pequeno sistema de apontamento de horas.

**Video demonstração:** https://www.youtube.com/watch?v=2VA2GV0edkA
**Link da aplicação:** https://apontamento-webapp.vercel.app/login

## Funcionalidades

A aplicação contém o seguinte as páginas: Register, Login e Home.

- Register: o usuário se cadastra com nome, email e senha.
- Login: o usuário entra com email e senha para usar a aplicação.
- Home: o usuário pode apontar as horas e também, na mesma página lista o histórico.

## Escolhas técnicas

API/Backend: De início até cogitei utilizar Adonis.js, seria ótimo. Mas como estava focado no front-end, preferi partir para algo acoplado. E foi aí que tive a ideia de utilizar o Prisma.io aliado ao Next.js

Prisma.io: O Prisma é um ORM que facilita muito a manipulação e persistência dos dados.

Next.js: O SSR veio bem a calhar principalmente por causa das páginas dinâmicas. E a possibilidade de criar uma API também foi um grande pesar nessa escolha.

SWR: Essa library serve para trazer uma sensação de real-time na aplicação. Assim que a pessoa cadastrar um novo apontamento, o histórico que está na mesma página atualiza totalmente.

Vercel: Utilizei para hospedar a aplicação de forma gratuita.

Heroku: Utilizei para hospedar o banco de dados Postgres.

## Pontos a melhorar

Existem vários pontos a melhorar nessa aplicação. Mas não estou com muito tempo no momento para fazer isso. Então decidi finalizar com algo funcional.

- UI: Está parecendo um Wireframe, tenho potêncial de melhorar e aplicar cores. Mas, você já sabe...
- Alertas: Por hora estou usando o próprio alert do navegador, mas Toasts mais bonitos seriam bem vindos.
- Botões: Os botões não estão dando um bom feedback sobre a ação executada. Um loading seria bem vindo também.
- Ações: Por hora utilizei um Select. Mas acredito que a melhor opção seria aplicar uma lógica para não repetir pontos e pegar o ponto anterior usar como guia para os próximos.
- Animações: Não tem nenhuma, mas estava nos planos.

## Possíveis features

Uma coisa que eu estava mentalizando, era exibir o nome do usuário logado e também o total de horas acumuladas naquele dia e nos dias anterioes.

<p align="center">Com 💜, Luiz Gustavo</p>
