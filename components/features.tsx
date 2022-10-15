import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

export const Features = () => {
  return (
    <Box as="section" bg="white" pt="8" pb="28">
      <Container maxW="container.xl">
        <Heading>What can you expect?</Heading>
        <Text>
          A bundle of 210+ ready-to-use, responsive and accessible components
          with clever structured sourcode files.
        </Text>
        <SimpleGrid columns={[1, 3]} gap="4">
          <Box mt="12">
            <Box bg="brand.500" boxSize="20" p="4" rounded="xl">
              <Image src="/icon3.svg" alt="Nailbar" width={48} height={48} />
            </Box>
            <Heading size="lg" mt="6">
              210+ Components
            </Heading>
            <Text>
              Chakra UI Pro has 210+ componentsto help you develop your project
              faster.
            </Text>
          </Box>

          <Box mt="12">
            <Box bg="brand.500" boxSize="20" p="4" rounded="xl">
              <Image src="/icon5.svg" alt="Nailbar" width={48} height={48} />
            </Box>
            <Heading size="lg" mt="6">
              Production Ready
            </Heading>
            <Text>
              Effortlessly create your next production-ready experience with
              Chakra UI Pro components.
            </Text>
          </Box>

          <Box mt="12">
            <Box bg="brand.500" boxSize="20" p="4" rounded="xl">
              <Image src="/icon1.svg" alt="Nailbar" width={48} height={48} />
            </Box>
            <Heading size="lg" mt="6">
              Light and Dark
            </Heading>
            <Text>
              All components support a light and a dark color mode out of the
              box.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
