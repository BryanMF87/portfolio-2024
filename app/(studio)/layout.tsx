import "../globals.css";

export const metadata = {
  title: 'Gary Fink/s portfolio',
  description: 'Awesome animator an motion graphics artist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
