import Nav from "@components/Nav";
import  "@styles/globals.css"

const RootLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <html lang="en">
        <body>
    <div className="main">
      <div className="gradient"></div>
    </div>
    <main className="app">
    <Nav />
        {children}
    </main>
    </body>
    </html>
  )
}

export default RootLayout
