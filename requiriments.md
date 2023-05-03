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
- Tela de listagem de quadrinhos;:white_check_mark:
- Busca pelo nome do quadrinho;:white_check_mark:
- Tela detalhada do quadrinho;:white_check_mark:
- Tela de listagem de criadores;:white_check_mark:
- Busca pelo nome do criador;:white_check_mark:
- Tela detalhada do criador;:white_check_mark:


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


## Bugs conhecidos para corrigir e features para incluir:

- Change API keys não está deslogando sempre. Quando na tela de caracter, ele não desloga e redireciona.:white_check_mark: 
- Verificar porque ao mudar tema ele está meio que relogando. Tem algo a ver com AuthContext?:white_check_mark:
- Configurar orderBy:x:
- Corrigir textos em português e mudar para inglês.:white_check_mark:
- Melhorar CSS das telas específicas:white_check_mark:
- Criar linha do tempo em caracters com as series e outras coisas deles:x:
- Criar linha do tempo em creators com as novels criadas por eles:x:
- Criar linha do tempo em comics com as séries :x: