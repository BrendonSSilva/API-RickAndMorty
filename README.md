# API Rick and Morty - React + Vite + TypeScript

Acesse o projeto: [https://api-rick-and-morty-brendon.vercel.app/](https://api-rick-and-morty-brendon.vercel.app/)

Este é um projeto criado para consumir a [API de Rick and Morty](https://rickandmortyapi.com/). Há dois anos, desenvolvi um projeto similar utilizando esta mesma API, disponível [aqui](https://github.com/BrendonSSilva/ReactJsProject-API-RickAndMorty). Decidi recriar o projeto com base na minha experiência atual, utilizando tecnologias mais modernas e boas práticas de desenvolvimento.

## Tecnologias Utilizadas

- **React** com **Vite**
- **TypeScript**
- **Styled-components** para estilização
- **Axios** para requisições HTTP

## Hooks do React Utilizados

- **createContext e useContext**: Utilizados para criar e consumir variáveis de contexto, facilitando o compartilhamento de estado entre componentes e a filtragem dos personagens.
- **useEffect**: Utilizado para executar efeitos colaterais, como acompanhar as modificações dos valores das variáveis e realizar ações com base nessas mudanças.
- **useState**: Utilizado para criar e gerenciar o estado local dentro dos componentes. Com o `useState`, você pode declarar uma variável de estado e uma função para atualizá-la. Por exemplo:
  ```javascript
  const [state, setState] = useState(initialState);

## Props

As props são utilizadas para dinamizar componentes, tanto em funções quanto no estilo, quando utilizando styled-components. Elas permitem passar dados e funções para os componentes filhos, tornando-os mais reutilizáveis e configuráveis.

# Como Utilizar?

- Clonar o repositório:
~~~
git clone https://github.com/BrendonSSilva/API-RickAndMorty.git
~~~
- npm install
~~~
~~~
- npm install axios
~~~
~~~
- npm install styled-components
~~~
- Iniciar o app: 
~~~
npm run dev
~~~

# Autor
Brendon Schimmelpfennig da Silva

LinkedIn: https://www.linkedin.com/in/brendon-silva/