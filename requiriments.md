## Requisitos técnicos obrigatórios

- A aplicação deve ser desenvolvida em React com Typescript. :white_check_mark:
- Utilizar o git no github como versionador de código;
- Escrever um README.md topzera, documentando o código que você escreveu e
explicando como executar a aplicação;
- As keys de autenticação não podem estar hardcodadas no código (veja como deve
ser feito nas primeiras funcionalidades obrigatórias);
- O código deve ser cheiroso, limpo, organizado e fácil de dar manutenção;


## Requisitos técnicos desejáveis

- Criar uma biblioteca de componentes visuais genéricos (Design System);
- Desenvolver testes unitários em Jest para todas as lógicas da aplicação;
- Usar um gerenciador de estado de sua preferência (Ex.: Redux, Recoil, Mobx, etc.);
- Utilizar biblioteca de roteamento (recomendamos o React Router Dom);
- Utilizar styled component;

## Funcionalidades obrigatórias (Capitão América)
- A tela inicial da aplicação deve possibilitar que o usuário adicione manualmente as
keys de autenticação para uso da API (public key e private key);
- As keys de autenticação inseridas pelo usuário devem ser persistidas nos cookies
do navegador e caso o usuário deseje alterá-las deve haver uma tela para isso;

- Tela de listagem de personagens;
- Busca pelo nome do personagem;
- Tela detalhada do personagem;
- Tela de listagem de quadrinhos;
- Busca pelo nome do quadrinho;
- Tela detalhada do quadrinho;
- Tela de listagem de criadores;
- Busca pelo nome do criador;
- Tela detalhada do criador;


## Funcionalidades desejáveis (Celestial)
- Infinity scroll nas telas de listagem;
- Diferentes tipos de ordenação nas telas de listagem;
- Filtro por criador na listagem de personagem;
- Filtro por criador na listagem de quadrinhos;
- Filtro por personagem na listagem de quadrinhos;
- Filtro por data de lançamento na listagem de quadrinhos;
- Filtro por personagem na listagem de criador;

## Funcionalidades excepcionais (One Above All)
- Tela com uma linha do tempo interativa das histórias, eventos e séries;
- Abrir as telas de detalhe desenvolvidas anteriormente (personagens, quadrinhos e
criadores) ao interagir com a linha do tempo;
- As telas abrem em formato de modal;
- Dark mode;
- Nos surpreender com uma funcionalidade criativa que não listamos.