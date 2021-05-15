import Header from '@/components/header'
import Footer from '@/components/footer'

export default ({ children }) => (
  <main tw='bg-default'>
    <Header />
    {children}
    <Footer />
  </main>
)
