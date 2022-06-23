import Footer from 'components/Footer'
import LastSection from 'components/LastSection'
import Navbar from 'components/Navbar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <LastSection />
      <Footer />
    </>
  )
}

export default Layout
