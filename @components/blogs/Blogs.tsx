import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { IoIosArrowDropright } from "react-icons/io";
import getImageLink from './../../utils/getImageLink';

export default function Blogs({data,number}:any) {
  // let data = [
  //   {
  //     id: 1,
  //     img: "assets/blog1.jpg",
  //     sub: "Python",
  //     title: "Python for CI/CD",
  //     text: "Avoiding integration hell is a must-do but seemingly simple task when your organization starts growing…",
  //   },
  //   {
  //     id: 2,
  //     img: "assets/blog2.jpg",
  //     sub: "Resources",
  //     title: "Meet Figma and its incredible San Francisco headquarters",
  //     text: "We are not shy when it comes to our love for San Francisco and definitely…",
  //   },
  //   {
  //     id: 3,
  //     img: "assets/blog3.jpg",
  //     sub: "React Native",
  //     title: "React Native Live Stream Video",
  //     text: "Streaming is something that we see every day at all times in applications such as…",
  //   },
  // ];
  return (
    <Box>
      <Container
        maxW={{
          base: "container.lg",
          xl: "container.lg",
          "2xl": "container.xl",
        }}
      >
        <Box>
          <Flex
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
          >
            <Text
              color="agray.100"
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              pb={[3, 3, 0, 0]}
            >
              LATEST FROM OUR BLOG
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Text color="agray.100" fontSize="md" fontWeight="bold" mr={2}>
                Read more insights from our team
              </Text>
              <IoIosArrowDropright size="25px" />
            </Flex>
          </Flex>
          {/* Header end*/}
          <Box py={14}>
            <Flex
              wrap="wrap"
              justifyContent="center"
              alignItems="flex-start"
              p={[4, 10, 0, 0]}
            >
              {data &&
                data.slice(0,number).map((x:any) => (
                  <Flex
                    key={x?.id}
                    flex={{ base: "0 0 100%", md: "0 0 30%" }}
                    direction="column"
                    maxW={{ base: "100%", md: "30%" }}
                    px="3"
                  >
                    <Box w="100%">
                      <Image src={getImageLink(x?.attributes?.thumbnail?.data?.attributes?.url)} w="100%" />
                    </Box>
                    <Text color="ared.100" pt="2">
                      {x?.attributes?.category}
                    </Text>
                    <Text color="ared.100" fontSize="xl" fontWeight="bold">
                      {x?.attributes?.title}
                    </Text>
                    <Text color="gray.500" pt={3} pb={6}>
                      {x?.attributes?.excerpt}
                    </Text>
                  </Flex>
                ))}
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
