
# Marvel Project

Este projeto foi desenvolvido usando a API da Marvel. Sua documentação pode ser acessada [aqui](https://developer.marvel.com/).

## Como acessar o projeto

Este projeto foi hospedado online na Vercel. Você pode acessá-lo [aqui](https://marvel-ploo.vercel.app/).<br>

>Obs: Por conta de uma configuração da Vercel que não pude modificar ainda, atualizar a página em certas rotas (rotas protegidas) retornará 404 para o usuário. Em outros ambientes, como o de desenvolvimento e AWS, por exemplo, o usuário é redirecionado para a página inicial, que é o comportamento esperado.

É possível acessar também seu link no [Github](https://github.com/natrodrigo/marvel).

Você pode fazer um `fork` deste projeto ou baixar seu código para executá-lo em sua máquina. Para isso, é preciso que você tenha o [Vite](https://vitejs.dev/guide/) instalado em seu computador.

Depois de instalado, você deve usar os comandos:

- `npm i` - para instalar as dependências necessárias;
- `npm run dev` - para iniciar a aplicação em modo de desenvolvimento.

## Navegando pelas telas do projeto

![detalhada de personagem](https://user-images.githubusercontent.com/57020127/236041289-2aaea248-a7f4-4974-8244-518c58694b10.png)

Esta é a tela inicial onde devem ser informadas as suas chaves pública e privada. Você pode conseguí-las criando uma conta Marvel.

É preciso preencher ambas as chaves:

![Preencher_as_duas_chaves](https://imgur.com/tJbacLm.png)

É preciso que sejam válidas (é feita uma requisição na API para validá-las.):

![Chaves_precisam_ser_validadas](https://imgur.com/JcRwtbQ.png)

Após inserir chaves, é possível acessar as funcionalidades desenvolvidas:

![Funcionalidades](https://imgur.com/tuErEOR.png)

Clicando nas setas azuis é possível **navegar entre as listas** de personagens, criadores e quadrinhos. 
Em todas elas é possível **pesquisar pelo nome**, e é possível **ordenar os dados em outras sequências**, conforme os dados e possibilidades de cada lista.

Clicando no botão destacado pelo quadrado verde é possível trocar suas chaves de API. Estas chaves são armazenadas por 1 dia nos cookies do navegador do usuário e só serão requisitadas novamente ao entrar no aplicação caso expirem ou sejam deletadas. É possível mudar quanto tempo persistem no navegador no código da aplicação mudando o valor da variável `COOKIE_EXPIRE_TIME` no cabeçalho do arquivo `src/pages/KeyForm/KeyForm.tsx`.

Clicando no botão destacado pela seta verde é possível mudar o tema da aplicação, que foi feito inspirado nas cores de alguns heróis da Marvel. Esta escolha de tema também persiste nos cookies do navegador, mas por 10 dias.
Temos disponíveis 9 temas de cores diferentes, e mais podem ser incluídos adicionando eles ao arquivo `src/styles/themes/themes.ts`.

Clicando nos `Cards` de personagem/criador/quadrinho, destacados com uma seta laranja, é possível acessar uma tela com mais informações sobre eles, como nome, descrição, imagem, e uma prévia de seus dados. É possível também no fim da página acessar a Wiki oficial da Marvel para ver todas as informações possíveis:

![tela_detalhada](https://imgur.com/BMaLyqR.png)






