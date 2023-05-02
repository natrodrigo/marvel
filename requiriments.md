## Requisitos técnicos obrigatórios

- A aplicação deve ser desenvolvida em React com Typescript.:white_check_mark:
- Utilizar o git no github como versionador de código;:white_check_mark:
- Escrever um README.md topzera, documentando o código que você escreveu e
explicando como executar a aplicação;:x:
- As keys de autenticação não podem estar hardcodadas no código (veja como deve
ser feito nas primeiras funcionalidades obrigatórias);:white_check_mark:
- O código deve ser cheiroso, limpo, organizado e fácil de dar manutenção;:white_check_mark:


## Requisitos técnicos desejáveis

- Criar uma biblioteca de componentes visuais genéricos (Design System);:x:
- Desenvolver testes unitários em Jest para todas as lógicas da aplicação;:x:
- Usar um gerenciador de estado de sua preferência (Ex.: Redux, Recoil, Mobx, etc.);:x:
- Utilizar biblioteca de roteamento (recomendamos o React Router Dom);:white_check_mark:
- Utilizar styled component;:white_check_mark:

## Funcionalidades obrigatórias (Capitão América)
- A tela inicial da aplicação deve possibilitar que o usuário adicione manualmente as
keys de autenticação para uso da API (public key e private key);:white_check_mark:
- As keys de autenticação inseridas pelo usuário devem ser persistidas nos cookies
do navegador e caso o usuário deseje alterá-las deve haver uma tela para isso;:white_check_mark:

- Tela de listagem de personagens;:white_check_mark:
- Busca pelo nome do personagem;:white_check_mark:
- Tela detalhada do personagem;:white_check_mark:
- Tela de listagem de quadrinhos;:x:
- Busca pelo nome do quadrinho;:x:
- Tela detalhada do quadrinho;:x:
- Tela de listagem de criadores;:x:
- Busca pelo nome do criador;:x:
- Tela detalhada do criador;:x:


## Funcionalidades desejáveis (Celestial)
- Infinity scroll nas telas de listagem;:x:
- Diferentes tipos de ordenação nas telas de listagem;:x:
- Filtro por criador na listagem de personagem;:x:
- Filtro por criador na listagem de quadrinhos;:x:
- Filtro por personagem na listagem de quadrinhos;:x:
- Filtro por data de lançamento na listagem de quadrinhos;:x:
- Filtro por personagem na listagem de criador;:x:

## Funcionalidades excepcionais (One Above All)
- Tela com uma linha do tempo interativa das histórias, eventos e séries;:x:
- Abrir as telas de detalhe desenvolvidas anteriormente (personagens, quadrinhos e
criadores) ao interagir com a linha do tempo;:x:
- As telas abrem em formato de modal;:x:
- Dark mode;:white_check_mark:
- Nos surpreender com uma funcionalidade criativa que não listamos.:white_check_mark: