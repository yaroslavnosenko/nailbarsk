import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Stack,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Box as="section" pt="8">
      <Container maxW="container.xl" pb="28">
        <Heading mb="4" color="white" maxW="md" mx="auto" textAlign="center">
          Life is not perfect, but your nails can be
        </Heading>
        <Text mb="12" color="brand.500" textAlign="center">
          Mäsiarska 17 • Košice
        </Text>

        <SimpleGrid columns={[1, 3]} gap={[4, 8]}>
          <AspectRatio
            overflow="hidden"
            cursor="pointer"
            rounded="sm"
            _hover={{
              transform: 'scale(1.01)',
            }}
            transition="ease-in-out 0.5s"
            ratio={1}
            my={[0, 6]}
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
            my={[0, 6]}
          >
            <Image src="/img3.jpeg" objectFit="cover" />
          </AspectRatio>
        </SimpleGrid>
        <Stack
          direction={['column', 'row']}
          mt="20"
          justify="space-between"
          align="flex-end"
        >
          <Box py="2">
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
          <Button
            w={['full', 'auto']}
            size="lg"
            colorScheme="brand"
            color="black"
          >
            Rezervacia
          </Button>
        </Stack>
      </Container>

      <Box bg="white">
        <Container maxW="container.xl">
          <Box position="relative" bg="white" p="8" top="-16" shadow="xl">
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
                <Text textTransform="uppercase" opacity="0.7">
                  PON - SOB
                </Text>
              </Box>
              <Box>
                <Heading size="lg">Zavreté</Heading>
                <Text textTransform="uppercase" opacity="0.7">
                  NED
                </Text>
              </Box>
            </HStack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
