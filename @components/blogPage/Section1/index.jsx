import { Box, Button, Container, Flex, chakra, Text } from "@chakra-ui/react";
import BlogCard from "../Section2";

export default function Section1({ blogs }) {
  return (
    <Box backgroundColor={"white"}>
      <Flex alignContent="center" wrap="wrap" w="auto">
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Box textAlign="left" w="100%">
            <Text
              mt={{ sm: "10", md: "20", lg: "20" }}
              pt="10"
              // boxShadow={ "0 0 3px 0 rgb(0 0 0 / 22%)"}
              fontSize={{ base: "3xl", sm: "4xl", md: "3.3rem" }}
              fontWeight="bold"
              // textAlign="center"
              lineHeight="1.1em"
              mb={6}
              color="agray.100"
            >
              BLOG
              <Text as="sub" color={"agray.700"} fontSize={"19px"}>
                {" "}
                Fintech, Marketing{" "}
              </Text>
            </Text>
          </Box>
          <BlogCard blogs={blogs} />
        </Container>
      </Flex>
    </Box>
  );
}
