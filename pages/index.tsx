import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header, Footer, Hero, Features } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box as="main">
        <Hero />
        <Features />
      </Box>
      <Footer />
    </>
  )
}

export default Home
