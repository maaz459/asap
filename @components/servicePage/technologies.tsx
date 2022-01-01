import { Box, Container, Flex, Image, Text, Grid, VStack } from "@chakra-ui/react";
import { Key } from "react";
import getImageLink from './../../utils/getImageLink';

interface ITechnologies {
  image?: any;
}

export default function Technologies({ image }: ITechnologies) {
  return (
    <Box bg="white" py={24} mt={{ base: 16, md: 36 }}>
      <Flex alignContent="center" wrap="wrap" w="auto">
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <VStack px={{md:16,base:4}}>
            <Text mb={{md:20,base:8}} fontSize={{md:24,base:16}} textAlign="center" fontWeight={600} letterSpacing={3} color="agray.200">
              WE EXCEL AT THESE TECHNOLOGIES
            </Text>
            <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={{md:16,base:8}}>
              {image?.map(({image}: any, index: any) => (
                <Image
                  key={index}
                  opacity={0.7}
                  _hover={{
                    opacity: 1,
                  }}
                  src={getImageLink(image?.data?.attributes?.url) || "" }
                  w="100%"
                />
              ))}
            </Grid>
          </VStack>
        </Container>
      </Flex>
    </Box>
  );
}
