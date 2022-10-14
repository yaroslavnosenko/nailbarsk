import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header, Footer, Carousel, Hero, Features } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box as="main">
        <Carousel />
        <Hero />
        <Features />
      </Box>
      <Footer />
    </>
  )
}

export default Home
