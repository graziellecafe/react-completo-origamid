# 📓 React Completo: Origamid
Repositório com exercícios e projetos sobre React através da plataforma Origamid

## 📍 Grade
**React Completo**: Ferramentas e Javascript

**React para iniciantes**: React Básico, Vite, JSX, Eventos, Componentes, Propriedade 

**React Hooks**: useState, useEffect, useRef, useMemo, useContext, Custom Hooks, Regras

**Formulários**: Input, Select, Radio, Checkbox, useForm, Validação 

**CSS Import, CSS Modules, Styles**: Components, Frameworks, Imagens

**React Router**: Router, Link, useParams, Nested Routes, Head 

**Mais React**: Prototype, Lazy e Suspense. Memo, useReducer, Classes. 

**Projeto final**: API, Autenticação, Scroll infinitio, Biblioteca Externa, Build, Loading

## 📚 React Completo 
### React Element
 Todo elemento React é criado com a função createElement. O Babel é o responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React.

```js
function App() {
  return <div id="container">Meu App</div>;
}
// É transformado em:
  function App() {
    return React.createElement('div', { id: 'container' }, 'Meu App');
  }
```

### Componentes 
Permitem você dividir a sua interface em pequenos elementos. São criados através de funções que retornam elementos React.

```js
// Function Component
  const Button = () => {
    return <button>Comprar</button>;
  };
```

### Composição
O principal motivo de criarmos componentes é para podermos compor a interface com diversos componentes com diversos componentes que podem ser utilizados 

```js
const Button = () => { 
  return <button>Comprar</button>
}

const MainNav = () => { 
  return (
    <nav>
      <a href="#">Link 1 </a>
      <Button />
  )
}
```

### Javascript
Utilizamos as {} para executar expressões de JavaScript e mostrar o resultado no DOM.

```js
const Produtos = () => {
  const produto1 = 'Camisa';
  const produto2 = 'Bermuda';

  return (
    <div>
      <button>
        Comprar {produto1} - R$ {Math.random() * 100}
      </button>
      <button>
        Bermuda {produto2} - R$ {Math.random() * 100}
      </button>
    </div>
  );
};

```

### Eventos
Podemos atribuir eventos diretamente aos elementos.

```js
const Produtos = () => {
  function handleClick(event) {
    console.log('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};
```


## 📚 Ferramentas de Automação 
### Bundler
- Agrupa (bundle) o código do seu aplicativo
- Permite definirmos os componentes em diferentes arquivos para melhor organização
- Facilita a importação de código externo instalado via NPM
- ESBuild, Rollup, Parcel, Turbopack, Webpack

### Transpiler
- Transforma JSX return <div></div> em funções de React `React.createElement()`
- Transforma JavaScript novo const em JavaScript antigo var
- Babel, SWC, ESBuild

## 📚 Ferramentas Front End 
```js
npm create vite@latest .
npm install
```

### Comandos
Inicia o desenvolvimento
```js
npm run dev
```

Cria a build final
```js
npm run build
```

## 📚 JSX e arrays
```js
function App() {
const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight']; 


  return (
    <>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </>
  )
}
```


## 📚 Eventos
Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).

```js
const App = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

```

## 📚 Componentes
O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo. Iremos trabalhar durante o curso com componentes funcionais.
```js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <p>Esse é o meu aplicativo</p>
      <Footer />
    </div>
  );
};

export default App;

```

### Hooks
Estado: O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc 

```js
const App = () => { 
  const ativo = true; 

  return (
    <button disabled={!ativo}>{ativo? 'Botão Ativo': 'Botão Inativo'}</button>
  )
}
```

Utilizamos o React pela facilidade de sincronização do estado. Os Hooks são funções especiais de React, o useState possibilita a sincronização do estado.

```js
const Compras = () => { 
  // useState é um Hook que define uma variável reativa
  const [count, setCount] = React.useState(0); 

  return (
    <div>
      <button onClick={() => setCount(count+1)}>Comprar: {count} </button>
      <p>Total: {count}; 
      <p>Preço: R$ { count * 250} </p>
    </div>
  )
}
```

**Objetivos**: 
- Gerenciamento do ciclo de vida do componente
- Criar lógicas reutilizaveis entre os componentes 
- Gerenciamento de estados: **useState** e **useContext**

**useState**: gerencie estados do componente & atomicos
```js
function CounterFunction () { 
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }; 
}

return (
  <div>
    <h2>Contador usando hooks useState</h2>
    <p>contagem: {count}</p>
    <button onClick={increment}>adicionar</button>
  </div>
)
```