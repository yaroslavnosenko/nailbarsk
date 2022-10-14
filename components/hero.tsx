import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Box as="section">
      <Container maxW="container.xl" pb="28">
        <Heading mb="4" color="white" maxW="md" mx="auto" textAlign="center">
          Life is not perfect, but your nails can be
        </Heading>
        <Text mb="12" color="brand.500" textAlign="center">
          Mäsiarska 17 • Košice
        </Text>

        <SimpleGrid columns={3} gap={8}>
          <AspectRatio
            overflow="hidden"
            cursor="pointer"
            rounded="sm"
            _hover={{
              transform: 'scale(1.01)',
            }}
            transition="ease-in-out 0.5s"
            ratio={1}
            my="6"
          >
            <Image src="/img1.jpeg" objectFit="cover" />
          </AspectRatio>
          <AspectRatio
            overflow="hidden"
            cursor="pointer"
            rounded="sm"
            _hover={{
              transform: 'scale(1.01)',
            }}
            transition="ease-in-out 0.5s"
            ratio={1}
          >
            <Image src="/img2.jpeg" objectFit="cover" />
          </AspectRatio>
          <AspectRatio
            overflow="hidden"
            cursor="pointer"
            rounded="sm"
            _hover={{
              transform: 'scale(1.01)',
            }}
            transition="ease-in-out 0.5s"
            ratio={1}
            my="6"
          >
            <Image src="/img3.jpeg" objectFit="cover" />
          </AspectRatio>
        </SimpleGrid>
        <HStack mt="16" justify="space-between" align="flex-end">
          <Box>
            <Text
              mb="2"
              fontWeight="600"
              textTransform="uppercase"
              color="brand.500"
            >
              Opening hours
            </Text>
            <Heading color="white">Robime vsetko pre nasich klientov</Heading>
          </Box>
          <Button size="lg" colorScheme="brand" color="black">
            Rezervacia
          </Button>
        </HStack>
      </Container>

      <Box bg="white">
        <Container maxW="container.xl">
          <Box
            rounded="md"
            position="relative"
            bg="white"
            p="8"
            top="-16"
            shadow="xl"
          >
            <HStack textAlign="center" justify="space-around">
              <Box>
                <Heading size="lg">
                  9
                  <Text fontSize="md" as="span">
                    AM
                  </Text>{' '}
                  - 5
                  <Text fontSize="md" as="span">
                    PM
                  </Text>
                </Heading>
                <Text textTransform="uppercase">PON - SOB</Text>
              </Box>
              <Box>
                <Heading size="lg">Closed</Heading>
                <Text textTransform="uppercase">NED</Text>
              </Box>
            </HStack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}