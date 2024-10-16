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

### Hooks
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