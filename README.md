# Open Libras (portal)
Este é o repositório do frontend do portal open libras :D 

## Tecnologias
### Bibliotecas
* [React](https://reactjs.org/)
* [React Router](https://reactrouter.com/)
* [Styled Components](https://styled-components.com/)

### APIs
* [Firestore](https://firebase.google.com/products/firestore)
* [Firebase auth](https://firebase.google.com/products/auth)
* [Firebase storage](https://firebase.google.com/products/auth)

## Como iniciar a aplicação
* `yarn start`: Iniciar em modo de desenvolvimento
* `yarn build`: Gerar o build da aplicação, os arquivos estarão na pasta `build`

## Estrutura das arquivos
* `public`: Arquivos estáticos e index.html
* `src`
    * `components`: Componentes de UI seguindo o padrão [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)]
    * `constants`: Constantes da aplicação
    * `containers`: Componentes que aplicam os componentes de UI com hooks ou providers
    * `hooks`: [React Hooks](https://reactjs.org/docs/hooks-intro.html) customizados
    * `providers`: Providers utilizando [React Context](https://reactjs.org/docs/context.html)
    * `routes`: Router e rotas da aplicação
    * `services`: Funções para consumo de APIs
    * `style`: Tema e estilos globais
    * `utils`: Funções utilizadas em vários lugares da aplicação
    * `App.js`: Ponto de entrada dos componentes
    * `index.js`: Ponto de entrada do React

## Estrutura de branches e commits
Branches estão organizados utilizando [git flow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04) e as mensagens de commit devem seguir [_conventional commits_](https://www.conventionalcommits.org/en/v1.0.0/)
