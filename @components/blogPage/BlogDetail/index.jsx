import * as React from "react";
import {
  Box,
  Flex,
  Heading,
  Img,
  Link,
  LinkBox,
  LinkOverlay,
  Image,
  SimpleGrid,
  Container,
  Text,
  useColorModeValue as mode,
  chakra,
} from "@chakra-ui/react";
import moment from "moment";

import { useRouter } from "next/router";
import getImageLink from "./../../../utils/getImageLink";
const data = {
  banner: "/assets/blogBanner.jpg",
  title: "BEST AUGMENTED REALITY TOOLS FOR APP DEVELOPMENT",
  author: "Pablo Giampedraglia",
  date: "December 27, 2021",
  category: "Resources, Tools",
};

const BlogDetails = ({ blogData }) => {
  var newDate = new Date(blogData?.date);
  return (
    <>
      <Box
        w="100%"
        backgroundRepeat={"no-repeat"}
        bgPosition={"center"}
        backgroundSize="cover"
        backgroundImage={getImageLink(blogData?.thumbnail?.data?.attributes?.url)}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box top="0" left="0" w="100%" h="auto">
            <Flex alignItems={"center"}>
              <Flex
                alignItems="flex-start"
                justifyContent="center"
                direction="column"
                h="100%"
                w="100%"
                p={[6, 6, 14, 14]}
              >
                <Text
                  color="white"
                  fontSize={["2xl", "3xl", "4xl"]}
                  fontWeight="bold"
                  mt="12"
                  py="4"
                  mr={[0, 0, 0, 12]}
                  lineHeight={"initial"}
                >
                  {blogData?.title}
                </Text>
                <Text fontSize="16px" color="#f6bbbc" color="gray.300">
                  By {blogData?.bloggerName} | {moment(newDate).format("MMMM DD, YYYY")} | {blogData?.category} |{" "}
                </Text>
              </Flex>

              <Flex display={{ sm: "none", md: "block", lg: "flex" }} width={{ lg: "50%" }}></Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Container py="16" lineHeight="26px" maxW="container.lg">
        {blogData?.content.map((data, index) => {
          console.log(data);
          switch (data?.__typename) {
            case "ComponentBlogsHeading":
              return (
                <Box mt={data?.marginTop} display="flex" textAlign="start">
                  <Text color="agray.200" fontSize={data?.fontSize} fontWeight={"700"}>
                    {data?.preHeading}
                    <chakra.span mx={data?.preHeading ? 2 : 0} color={data?.color}>
                      {data?.coloredHeading}
                    </chakra.span>
                    {data?.postHeading}
                  </Text>
                </Box>
              );
            case "ComponentBlogsText":
              return (
                <Box mt={data?.marginTop} display="flex" textAlign="start">
                  <Text fontWeight="semibold" fontSize={`${data?.fontSize}px`} color="agray.200">
                    {data?.preText}
                    <chakra.span color={data?.color}>{data?.coloredText}</chakra.span>
                    {data?.postText}
                  </Text>
                </Box>
              );
            case "ComponentBlogsImage":
              return (
                <Flex mt={data?.marginTop} justifyContent={"center"}>
                  <Image src={getImageLink(data?.image?.data?.attributes?.url)} maxW="750px" minW="100px" />
                </Flex>
              );
            case "ComponentBlogsVideo":
              return (
                <Flex    mt={data?.marginTop} justifyContent={"center"}>
                <Box maxW="750px" minW="100px" >
                  <video
                    loop
                    w="100%"
                    autoPlay
                    controls
                    src={getImageLink(data?.video?.data?.attributes?.url)}
                  ></video>
                  </Box>
                </Flex>
              );
            default:
          }
        })}
      </Container>
    </>
  );
};
export default BlogDetails;
