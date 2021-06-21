import { Footer } from "./Footer";
import { Header } from "./Header";



export function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}