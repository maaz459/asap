import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import getImageLink from "../../utils/getImageLink";

interface BannerElements {
  image: string;
  quoteText: string;
  quoteBy: string;
  quoteIcon?:string
}

export default function ServiceBanner({ image, quoteBy, quoteText,quoteIcon }: BannerElements) {
  return (
    <Box h="100vh">
      <Flex h="100vh" alignContent="center" wrap="wrap" w="auto">
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Box textAlign="center" w="100%">
           
            <Flex wrap="wrap" alignItems="center">
              <Box
                flex={{ base: "0 0 100%", md: "0 0 50%" }}
                maxW={{ base: "100%", md: "50%" }}
                textAlign="start"
                mb={{ base: 10, sm: 0 }}
              >
                <Box pos="relative" >
                <Image pos="absolute" bottom="0" left="-5"  w="100px"  src={getImageLink(quoteIcon!)  || ""} maxW="100%"  />
                </Box>
                <Text lineHeight={1.3} fontSize={{md:"36",base:"24"}} textAlign="start" fontWeight="bold" text color="agray.200">
                  {quoteText}
                </Text>
                <Text fontSize="18" textColor="agray.200" textAlign="start">
                  {quoteBy}{" "}
                </Text>
              </Box>
              <Box
                flex={{ base: "0 0 100%", md: "0 0 50%" }}
                maxW={{ base: "100%", md: "50%" }}
                display="flex"
                justifyContent="center"
                p={{ base: 0, sm: 10, md: 0 }}
              >
                <Image src={getImageLink(image)  || ""} maxW="100%" minW="100px" />
              </Box>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}
