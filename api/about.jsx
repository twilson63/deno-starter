import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

function App() {
  return (
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <h1>Hello from JSX - needs Svelte!!!!</h1>
      </body>
    </html>
  )
}

export default async function index() {
  return new Response(
    renderToString(<App />),
    {
      headers: {
        'Content-Type': 'text/html'
      }
    }
  )
}
