import { Box, Container, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'

export const Features = () => {
  return (
    <Box as="section" minH="20" bg="white" py="16">
      <Container maxW="container.lg">
        <Stack direction="row" justify="space-between" spacing="0">
          <Box textAlign="center">
            <Image src="/icon3.svg" alt="Nailbar" width={96} height={96} />
            <Text>Feature 1</Text>
          </Box>

          <Box textAlign="center">
            <Image src="/icon1.svg" alt="Nailbar" width={96} height={96} />
            <Text>Feature 2</Text>
          </Box>

          <Box textAlign="center">
            <Image src="/icon5.svg" alt="Nailbar" width={96} height={96} />
            <Text>Feature 3</Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
