import Image from 'next/image'
import {
  Box,
  Container,
  HStack,
  Link,
  Icon,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import {
  FiInstagram,
  FiFacebook,
  FiMapPin,
  FiPhone,
  FiMail,
} from 'react-icons/fi'

export const Footer = () => {
  return (
    <Box as="footer" bg="gray.900">
      <Container maxW="container.xl">
        <SimpleGrid columns={[1, 3]}>
          <HStack justify={['center', 'flex-start']} align="flex-start" pt="16">
            <Image src="/logo.jpeg" alt="Nailbar" width={96} height={96} />
          </HStack>

          <Box pt="16">
            <HStack mb="6" spacing={4}>
              <Icon as={FiMapPin} boxSize={6} color="brand.500" />
              <Text mb="2" color="white">
                Mäsiarska 17, 040 01 Košice
              </Text>
            </HStack>

            <HStack mb="6" spacing={4}>
              <Icon as={FiPhone} boxSize={6} color="brand.500" />
              <Text mb="2" color="white">
                +421 948 760 528
              </Text>
            </HStack>

            <HStack spacing={4}>
              <Icon as={FiMail} boxSize={6} color="brand.500" />
              <Text mb="2" color="white">
                info@nailbar.sk
              </Text>
            </HStack>
          </Box>

          <HStack
            spacing={6}
            justify={['center', 'flex-end']}
            align="flex-start"
            pt="16"
          >
            <Link>
              <Icon as={FiFacebook} boxSize={6} color="brand.500" />
            </Link>
            <Link>
              <Icon as={FiInstagram} boxSize={6} color="brand.500" />
            </Link>
          </HStack>
        </SimpleGrid>
        <Box pt="16" pb="8" textAlign="center" color="white">
          © Copyright 2022 nailbar.sk
        </Box>
      </Container>
    </Box>
  )
}
