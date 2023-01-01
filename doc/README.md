<h1 align="center">Olá Record 👋</h1>

> Essa é a documentação do meu teste pra vaga front-end no R7

## Sumário

<details open>
<summary>Ir para</summary>

- [Stack usada](#stack-usada)
- [Estilização](#estilização)
- [Testes](#testes)
- [Rotas API](#rotas-api)
- [Rodar o projeto](#-rodar-o-projeto)

</details>

## Stack usada

A Stack escolhida foi Next.js (Full-stack) na versão 13 com TypeScript, com tudo instalado do zero (sem `create-next-app`). E a razão disso é que hoje ela é a Stack que eu mais domino e utilizo, então quis mostrar um pouco do que eu mais sei.

## Estilização

Os estilos foram feitos usando a biblioteca `styled-components` com TypeScript, no seguinte padrão:

No JSX:

> componente.tsx

```JSX
import Styled from "./component.styles"

export const Componente = (props) => {
  return (
    <Styled.Componente className="padrão__bem">
      <div className="padrão__bem__sass">
        <div className="padrão__bem__sass__children">Olá Record</div>
      </div>
    </Styled.Componente>
  )
}
```

Nos estilos:

> componente.styles.tsx

```JSX
import styled from "styled-components"

const Componente = styled.div`
  // Container .padrão__bem
  display:flex;
  background:blue;

  // Todas as classes dos elementos filhos aqui, seguindo a hierarquia:
  .padrão__bem__sass{
      color:black;

    .padrão__bem__sass__children{
      color:white;
    }
  }
`

export default { Componente }
```

Por padrão os estilos styled-components não são `server-side` (mesmo com o Next.js sendo por natureza), o que pode ocasionar inconsistencias no inicio do carregamento da página. Pra corrigir isso foi adicionado a configuração necessária no `_document.tsx`, o que também permite que alguns estilos sejam carregados mesmo sem JavaScript.

## Testes

Pra testes está sendo utilizado `Jest` através da biblioteca `react-testing-library`, também com TypeScript.

Para rodar todos os testes, use o comando:

```sh
npm run tests
```

Para rodar testes especificos, o comando:

```sh
npm run tests ./diretorio-com-teste(s)
```

E para entrar no modo watch (rodar todos os testes ao salvar um arquivo de teste):

```sh
npm run test
```

As dependências são:

- jest
- jest-environment-jsdo
- @testing-library/react
- @testing-library/jest-dom

Além disso, também estão presentes como depêndencia para o uso do TypeScript nos testes as seguintes libs:

- ts-jest
- @types/jest

## Rotas API

> Backend no próprio front/Next.js

Como no Next.js é possível fazer também fazer rotas backend, e eu acho isso incrível, resolvi mostrar um pouco sobre como funciona.

Diferente do React, as rotas do Next.js são os próprios arquivos dos componentes em pastas dentro da pasta pages, de forma hierarquica, com a pagina inicial sendo um `index.tsx` na raiz dela (`pages/index.tsx`).

Uma rota /balanco-geral por exemplo seria:

1. pages/
   - balanco-geral/
     - index.tsx
     - santos-e-regiao/
       - index.tsx

Já as rotas API ficam em pages/api, e podem seguir o mesmo padrão de hierarquia. No caso especifico foi feito um arquivo `pages/api/fazenda.tsx` diretamente por não haver necessidade de nesting/hierarquia.

Uma rota API Next.js é uma função exportada por padrão (obrigatoriamente) com qualquer nome, que recebe sempre os parametros req e res, nessa ordem. Por exemplo:

```TS
// Types
import type { NextApiRequest, NextApiResponse } from "next";
import { Fazenda } from "types";
// Json
import fazenda from "mocks/fazenda.json";

// "req" traz tudo da Requisição, como por exemplo os parametros com req.query ou body com req.body
export default (req: NextApiRequest, res: NextApiResponse<Fazenda>) => {
  // E "res" traz tudo referente a response, como por exemplo enviar um status e um json:
  res.status(200).json(fazenda);
};
```

Resposta ao bater em http://localhost:3000/api/fazenda:

```JSON
{
  "version": "0.1.1",
  "box_name": "A Fazenda - Ranking",
  "data": [
    {
    "__id": "f8c3500f39017602234a031caa64a8b4",
    "timestamp": 1408396531382,
    "name": "Rita Cadillac",
    "description": "Cracrete n&ordm;1",
    "picture": "http://im.r7.com/record/files/2C96/1617/3F6E/32AE/013F/72F9/AD72/3CE1/RitaCadillac1.jpg",
    "positive": 51638022,
    "negative": 18143089
    }
    ...
  ]
}
```

## Google Fonts

A fonte Montserrat foi utilizada usando a dependência adicional do próprio Next.js chamada `@next/font`, assim ela é carregada server-side e sem fazer requisição no CDN da Google.

## HTML Decode

Visto que o caracter `º` vinha codificado como `&ordm;` do json, foi instalado uma biblioteca chamada `html-entities` pra decodificar (no front) e mostrar o caracter corretamente.

> Também poderia ser feito no fetch do getServerSideProps ou na própria rota API

## 🚀 Rodar o projeto

O projeto precisa apenas de um comando pra ser rodado, que é:

```sh
npm run dev
```

### Depois disso já estará rodando tanto as rotas front-end quanto backend em:

[http://localhost:3000/](http://localhost:3000/)
