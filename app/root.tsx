import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";

import "./index.css";
import Footer from "./components/navigation/footer";
import { LOCATION } from "./config/text_constants";
import Header from "./components/navigation/navbar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader = async ({ params }: LoaderFunctionArgs): Promise<any> => {
  const schoolName = process.env.SCHOOL_VALUE as keyof typeof LOCATION;
  const logo = LOCATION[schoolName].variant;
  return logo;
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const logo = useLoaderData<string>();

  return (
    <>
      <Header variant={logo} />
      <Outlet />
      <Footer />
    </>
  );
}
