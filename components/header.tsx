import Image from 'next/image'
import { Box, Container, HStack, Icon, Link } from '@chakra-ui/react'
import { FiInstagram, FiFacebook } from 'react-icons/fi'

export const Header = () => {
  return (
    <Box as="header" bg="gray.900" pt="8">
      <Container maxWidth="container.xl">
        <HStack spacing="0" justify="space-between">
          <Image src="/logo.jpeg" alt="Nailbar" width={96} height={96} />
          <HStack spacing={6}>
            <Link>
              <Icon as={FiFacebook} boxSize={6} color="brand.500" />
            </Link>
            <Link>
              <Icon as={FiInstagram} boxSize={6} color="brand.500" />
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
