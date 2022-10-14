import { Box, Heading, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

export const Carousel = () => {
  return (
    <Box as="section" textAlign="center">
      <Image h="3xl" w="100%" src="/img2.jpeg" objectFit="cover" />
    </Box>
  )
}
