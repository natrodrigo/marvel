
# Marvel Project

Este projeto foi desenvolvido usando a API da Marvel. Sua documentação pode ser acessada [aqui](https://developer.marvel.com/).

## Como acessar o projeto

Este projeto foi hospedado online na Vercel. Você pode acessá-lo [aqui](https://marvel-ploo.vercel.app/).<br>
É possível acessar também seu link no [Github](https://github.com/natrodrigo/marvel).

Você pode fazer um `fork` deste projeto ou baixar seu código para executá-lo em sua máquina. Para isso, é preciso que você tenha o [Vite](https://vitejs.dev/guide/) instalado em seu computador.

Depois de instalado, você deve usar os comandos:

- `npm i` - para instalar as dependências necessárias;
- `npm run dev` - para iniciar a aplicação em modo de desenvolvimento.

## Navegando pelas telas do projeto

![https://i.imgur.com/xM6BdHN.png](Tela_inicial)

Esta é a tela inicial onde devem ser informadas as suas chaves pública e privada. Você pode conseguí-las criando uma conta Marvel.

É preciso preencher ambas as chaves:

![https://imgur.com/tJbacLm.png](Preencher_as_duas_chaves)

É preciso que sejam válidas (é feita uma requisição na API para validá-las.):

![https://imgur.com/JcRwtbQ.png](Chaves_precisam_ser_validadas)

Após inserir chaves, é possível acessar as funcionalidades desenvolvidas:

![https://imgur.com/tuErEOR.png](Funcionalidades)

Clicando nas setas azuis é possível **navegar entre as listas** de personagens, criadores e quadrinhos. 
Em todas elas é possível **pesquisar pelo nome**, e é possível **ordenar os dados em outras sequências**, conforme os dados e possibilidades de cada lista.

Clicando no botão destacado pelo quadrado verde é possível trocar suas chaves de API. Estas chaves são armazenadas por 1 dia nos cookies do navegador do usuário e só serão requisitadas novamente ao entrar no aplicação caso expirem ou sejam deletadas. É possível mudar quanto tempo persistem no navegador no código da aplicação mudando o valor da variável `COOKIE_EXPIRE_TIME` no cabeçalho do arquivo `src/pages/KeyForm/KeyForm.tsx`.

Clicando no botão destacado pela seta verde é possível mudar o tema da aplicação, que foi feito inspirado nas cores de alguns heróis da Marvel. Esta escolha de tema também persiste nos cookies do navegador, mas por 10 dias.
Temos disponíveis 9 temas de cores diferentes, e mais podem ser incluídos adicionando eles ao arquivo `src/styles/themes/themes.ts`.

Clicando nos `Cards` de personagem/criador/quadrinho, destacados com uma seta laranja, é possível acessar uma tela com mais informações sobre eles, como nome, descrição, imagem, e uma prévia de seus dados. É possível também no fim da página acessar a Wiki oficial da Marvel para ver todas as informações possíveis:

![https://imgur.com/BMaLyqR.png](tela_detalhada)






