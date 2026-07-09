import { Links, Outlet, Scripts } from "react-router"

import { DevStyleXInject } from "./dev-stylex-inject"

export default function App() {
  return (
    <html lang="en">
      <head>
        <Links />
        <DevStyleXInject cssHref="/stylex.css" />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
