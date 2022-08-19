import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";

export default function Layout({ children }) {
  let router = useRouter();

  return (
    <div>
      <Head>
        <title>i18n Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header >
        <nav >
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>

      <main >{children}</main>

      <footer >
        <p>© 2022</p>

        <ul>
          {router.locales.map((locale) => ( //recorro todas las rutas que tengan la carcteristic locales, el valor key es obligatorio y en este caso vale lo que vale el locale que itera, se crea el Link a el pat sumado el Locale que iterra 
            <li key={locale}> 
              <Link href={router.asPath} locale={locale}> 
                <a>{locale} </a>
              </Link> 
            </li>
          ))}
         
        </ul>
      </footer>
    </div>
  );
}