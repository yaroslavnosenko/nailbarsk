import Image from 'next/image'
import {
  Box,
  Stack,
  Container,
  HStack,
  Link,
  Icon,
  Heading,
  Text,
} from '@chakra-ui/react'
import { FiInstagram, FiFacebook } from 'react-icons/fi'

export const Footer = () => {
  return (
    <Box as="footer" h="20" bg="gray.900">
      <Container maxW="container.xl" py="16">
        <Stack
          color="brand.500"
          direction="row"
          justify="space-between"
          spacing="0"
        >
          <Box textAlign="center">
            <Heading size="md" mb="4">
              ADRESS
            </Heading>
            <Text>Námestie osloboditeľov 3/A</Text>
            <Text>DUETT BUSINESS RESIDENCE</Text>
            <Text>04001 Košice</Text>
          </Box>

          <Box textAlign="center">
            <Image src="/logo.jpeg" alt="Nailbar" width={64} height={64} />
            <HStack spacing={4} mt="2">
              <Link boxSize={8} p="2">
                <Icon as={FiFacebook} boxSize={4} color="brand.500" />
              </Link>
              <Link boxSize={8} p={2}>
                <Icon as={FiInstagram} boxSize={4} color="brand.500" />
              </Link>
            </HStack>
          </Box>

          <Box textAlign="center">
            <Heading size="md" mb="4">
              CONTACT
            </Heading>
            <Text mb="2">E-mail: info@dbeauty.sk</Text>
            <Text>Telefón: +421 948 760 528</Text>
          </Box>
        </Stack>
      </Container>
      <Box bg="brand.500" p="4" textAlign="center" color="gray.900">
        © Copyright 2022 nailbar.sk
      </Box>
    </Box>
  )
}
