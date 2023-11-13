
import { Roboto, Playfair_Display } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const roboto = Roboto({ 
  subsets: ['latin'], 
  variable: "--font-roboto",
  weight: ['100', '300', '400', '500', '700'],
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: "--font-playfair",
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Bryan Fink/s portfolio',
  description: 'Frontend developer and UX/UI designer',
}

export default async function RootLayout({
  children,
}: {
  children?: React.ReactNode
}) {

 


  return (
    <html lang="en" className={`${playfair.variable} ${roboto.variable}`}>
      <body>

        <Header />

          <main className="overflow-hidden">{children}</main>

        <Footer />

      </body>
    </html>
  )
};
