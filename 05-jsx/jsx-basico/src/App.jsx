import { useState } from 'react'

/* const App = () => { 
  const produtos = [<li key='e1'>Notebook</li>, <li key= 'e2' >Smartphone'</li>]

  return (
    <div>{produtos}</div>
  )
}

export default App */


const App = () => { 
  const livros = [
    { nome: 'Game of Thrones', ano: 1996 }, 
    { nome: 'A Clash of Kings', ano: 1998 }, 
    { nome: 'A Storm of Swords', ano: 2000 },
  ];


return (
  <ul>
    {livros.map((livros) => (
      <li key={livros.nome}>{livros.nome}</li>
    ))}
  </ul>
);
}; 