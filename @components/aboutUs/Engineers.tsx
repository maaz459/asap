import { Box, Container, Flex, Image, Text, Grid, VStack } from "@chakra-ui/react";
import getImageLink from './../../utils/getImageLink';

interface ITechnologies {
  engineers?: IEngineer[];
}

interface IEngineer {
  name?: string;
  designation?: string;
  image?: any;
}

export default function Engineers({ engineers }: ITechnologies) {
  return (
    <Box pb={36} bg="white">
      <Flex alignContent="center" wrap="wrap" w="auto">
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <VStack>
            <Text textAlign="center" mb={20} fontSize={24} fontWeight={700} letterSpacing={3} color="#3c3c4f">
              SOFTWARE ENGINEERS YOU CAN TRUST
            </Text>
            <Grid
              w={{ base: "80%", md: "80%", lg: "100%" }}
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
              gap={10}
            >
              {engineers?.map(({ name, designation, image }, index) => (
                <Box mt={index % 2 === 0 ? 10 : 0}>
                  <Image
                    pos="relative"
                    top={0}
                    _hover={{ pos: "relative", top: "-15px" }}
                    transition="all 1s"
                    key={index}
                    src={getImageLink(image?.data?.attributes?.url) || ""}
                    w="100%"
                  />
                  <Text fontWeight={600} fontSize={20}>
                    {name}
                  </Text>
                  <Text fontWeight={600} fontSize={14} color={"agray.200"}>
                    {designation}
                  </Text>
                </Box>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Flex>
    </Box>
  );
}
