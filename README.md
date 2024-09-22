# React Hooks

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
</div>

<br/>

<img src="./public/readme/hooks-objetivos.png" alt="..." />

<br/>

> Neste repositório, estou registrando minha experiência ao aprofundar meus estudos nos React Hooks, uma funcionalidade central do React que facilita o desenvolvimento de aplicações web modernas e ágeis, com um controle de estado mais simplificado.

### Hooks de Gerenciamento de estados

<strong>useState</strong>

<div>Gerencia estados atômicos do componente:</div>
<div>
Ele permite que você adicione e controle "estado" em componentes funcionais.
</div>
<div>
Imagine que você tem uma variável que quer mudar ao longo do tempo, como o número de cliques em um botão. O useState te ajuda a criar essa variável, e também a função que vai atualizar seu valor.</div>
<br/>

```js
const [contador, setContador] = useState(0);
```

<br />

<img src="./public/readme/useState.png" alt="...">

```js
const improve = () => {
  setCount((prevCount) => prevCount + 1);
};

const decrease = () => {
  setCount((prevCount) => prevCount - 1);
};
```

<ul>
  <li>A função improve aumenta o valor do estado count em 1.</li>
  <li>A função decrease diminui o valor do estado count em 1.</li>
  <li>Ambas utilizam a função setCount com uma callback que recebe o valor anterior do estado (prevCount) e o atualiza.</li>
</ul>

<img src="./public/readme/useState-screen.jpeg" alt="...">

<strong>Contornando o problema da assincronicidade entre os estados com funções internas</strong>

<img src="./public/readme/useState-02.png" alt="...">

```js
const [count, setCount] = useState(0);
const [string, setString] = useState("João tem contagem de 0");
```

<ul>
  <li><strong>count</strong>: controla a contagem numérica.</li>
  <li><strong>string</strong>: controla a mensagem que reflete o valor atual de <code>count</code>.</li>
  <li>Ambos são inicializados: <strong>count</strong> com 0 e <strong>string</strong> com a frase correspondente ao valor inicial do contador.</li>
</ul>

```js
const improve = () => {
  setCount((prevCount) => {
    setString(`João tem contagem de ${prevCount + 1}`);
    return prevCount + 1;
  });
};
```

<ul>
  <li>Quando chamada, a função aumenta o valor do estado <strong>count</strong> em 1.</li>
  <li>Ela utiliza o valor anterior (<code>prevCount</code>), calcula o novo valor (<code>prevCount + 1</code>), e atualiza o estado <strong>string</strong> para refletir essa mudança.</li>
  <li>A função <code>setString</code> atualiza a mensagem para algo como "João tem contagem de 1", "João tem contagem de 2", etc.</li>
  <li>No final, <code>setCount</code> retorna o novo valor incrementado.</li>
  <li>O mesmo acontece com a função de decrementrar.</li>
</ul>

<p>
 SetCount e setString são assíncronas. Isso significa que quando você chama setCount, o novo estado não é imediatamente refletido na próxima linha do código, pois o React pode agrupar várias atualizações de estado para melhorar a performance.
</p>

<img src="./public/readme/useState-screen-02.jpeg" alt="...">

<strong>useContext</strong>

<div>
Ele permite compartilhar dados entre vários componentes sem precisar passar as informações manualmente por cada nível (props drilling).
</div>
<div>
Pense no useContext como um "atalho" para acessar informações globais que são usadas por vários componentes. Isso é útil, por exemplo, quando você tem dados como o tema do site (claro/escuro) ou a autenticação do usuário.</div>

<br/>

```js
const tema = useContext(ThemeContext);
```

<strong>Props drilling</strong>

<p>
Props drilling é o termo usado em React quando você precisa passar props (dados) de um componente "pai" para um componente "filho", e depois para outro "filho" e assim por diante, através de várias camadas, até que o componente que realmente precisa desses dados os receba.

</p>

<img src="./public/readme/prop-driling.png" alt="...">

<p>
A função <strong>changeName</strong> está sendo passada de UseContext para ChildrenOne e, em seguida, para ChildrenTwo. Isso é props drilling, porque ChildrenOne não precisa usar a função, mas a transporta até ChildrenTwo.</p>

<img src="./public/readme/prop-drilling-vs-context.png" alt="...">

<strong>
  Como utilizar o useContext em 3 passos:
</strong>
<ul>
  <li><strong>Criar um contexto com <code>createContext()</code></strong></li>
  <li><strong>Fornecer o contexto com <code>Context.Provider</code></strong></li>
  <li><strong>Consumir o contexto com <code>useContext()</code></strong></li>
</ul>

```js
import React, { createContext, useState } from "react";

const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [name, setName] = useState("João Marcos");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
```

<p>
Em volta dos componentes que precisam acessar o contexto, utilizar o Provider. Neste caso, o NameProvider é usado para envolver os componentes que precisam do valor name e da função setName.</p>

```js
import { NameProvider } from "./NameContext";
import ChildrenOne from "./ChildrenOne";

const App = () => {
  return (
    <NameProvider>
      <ChildrenOne />
    </NameProvider>
  );
};

export default App;
```

<p>
Consumindo o contexto com useContext</p>

```js
import React, { useContext } from "react";
import { NameContext } from "./NameContext";

const ChildrenOne = () => {
  const { name, setName } = useContext(NameContext);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("João da Massa")}>Mudar Nome</button>
    </div>
  );
};

export default ChildrenOne;
```


###

### React + Vite

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
