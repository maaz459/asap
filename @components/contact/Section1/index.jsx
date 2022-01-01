import { Box, Button, Container, Flex, chakra, Text } from "@chakra-ui/react";

export default function Section2({ heading, text }) {
  return (
    <Box h="100vh">
      <Flex h="100vh" alignContent="center" wrap="wrap" w="auto">
        <Container
          maxW={{
            base: "container.xlg",
            xl: "container.xlg",
            "2xl": "container.xl",
          }}
        >
          <Box textAlign="center" w="100%">
            <Text
              fontSize={{ base: "3xl", sm: "4xl", md: "3.3rem" }}
              fontWeight="bold"
              textAlign="center"
              lineHeight="1.1em"
              mb={6}
              color="agray.100"
              p={"2rem"}
            >
              {heading?.preHeading}{" "}
              <chakra.span
                mr={3}
                lineHeight={0.8}
                display="inline-block"
                borderBottom="10px solid"
                borderColor="ared.100"
              >
                {heading?.underlineHeading}
              </chakra.span>
              {heading?.postHeading}
            </Text>
            <Text color={"agray.100"} fontSize={"19px"} as="h4" px={{ md: "10%", base: 0, lg: "19%" }}>
              {text && text.split("?")[0] + "?"}
            </Text>
            <Text color={"agray.100"} fontSize={"19px"} as="h4">
              {text && text.split("?").pop()}
            </Text>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}
