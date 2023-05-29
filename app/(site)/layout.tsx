import '../(studio)/layout';
import { Raleway } from 'next/font/google';
import { getPages } from "@/sanity/sanity-utils";
import Header from './components/Header';
import Footer from './components/Footer';

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Gary Fink/s portfolio',
  description: 'Awesome animator and motion graphics artist',
}

export default async function RootLayout({
  children,
}: {
  children?: React.ReactNode
}) {

  // get all of our pages
  const pages = await getPages();


  return (
    <html lang="en">
      <body className={raleway.className}>

        <Header pages={pages} />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  )
};
