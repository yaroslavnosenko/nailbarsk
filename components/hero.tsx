import { Box, Heading, Text } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Box as="section" px="4" py="24" textAlign="center">
      <Heading color="gray.100" mb="4">
        EXCLUSIVE BEAUTY SALON
      </Heading>
      <Text color="white" mb="2">
        Luxury beauty salon right in the center of Košice
      </Text>
      <Text color="white">DUETT I • Košice</Text>
    </Box>
  )
}
