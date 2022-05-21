import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import { LinksFunction } from '@remix-run/react/routeModules';

import appStyles from '../styles/app.css';
import tailwindStyles from './styles/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: appStyles },
];

const App = () => (
  <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body className="h-full">
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

export default App;
