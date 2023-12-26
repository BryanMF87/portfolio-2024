
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

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
    <html lang="en">
      <body>

        <Header />

          <main className="overflow-hidden">{children}</main>

        <Footer />

      </body>
    </html>
  )
};
