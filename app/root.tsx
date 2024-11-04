import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import "./tailwind.css";
import Header from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import { locationsData } from "./config/school-constants";
import { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderFunctionArgs): Promise<any> => {
  const schoolName = process.env.SCHOOL_VALUE as keyof typeof locationsData;
  const logo = locationsData[schoolName].varient;
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
