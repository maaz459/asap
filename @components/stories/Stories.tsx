import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import getImageLink from './../../utils/getImageLink';

interface IProps{
  heading?:string
  stories?:any
}

export default function Stories({heading,stories}:IProps) {
  return (
    <Box pb={20}>
      <Container
        maxW={{
          base: "container.lg",
          xl: "container.lg",
          "2xl": "container.xl",
        }}
      >
        <Box borderTop="1px" borderColor="bcolor.100" pt={6}>
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
              {heading}
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Text color="agray.100" fontSize="md" fontWeight="bold" mr={2}>
                See more
              </Text>
              <IoIosArrowDropright size="25px" />
            </Flex>
          </Flex>
          {/* Header end*/}
         {stories && stories[0] && <Box pt={8}>
            <Box w="100%" pos="relative" borderRadius="md" overflow="hidden">
              <Image
                src={getImageLink( stories[0].bgImage?.data?.attributes?.url)}
                w="100%"
                minH="400px"
                maxH="530px"
                objectFit="cover"
                objectPosition="center center"
              />
              <Box
                pos="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg={{
                  base: "rgba(233,239,243,1)",
                  lg: "linear-gradient(90deg,rgba(200,212,219,0.2) 0%,#c8d4db 100%)",
                }}
                opacity="0.8"
              ></Box>
              <Box pos="absolute" top="0" left="0" w="100%" h="100%">
                <Flex alignItems="center" h="100%" w="100%" p={[6, 6, 14, 14]}>
                  <Box flex={{ base: "0 0 0%", lg: "0 0 50%" }}></Box>
                  <Box flex={{ base: "0 0 100%", lg: "0 0 50%" }}>
                    <Text
                      fontSize={["xl", "2xl", "3xl"]}
                      color="#668a9f"
                      lineHeight="2rem"
                      pb={6}
                    >
                      THE{" "}
                      <Text
                        color="teal.300"
                        as="span"
                        fontSize={["2xl", "3xl", "4xl"]}
                      >
                        YOGA
                      </Text>
                      <br />
                      COLLECTIVE
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      fontWeight="bold"
                      opacity="0.7"
                    >
                      {stories[0].technologyName}
                    </Text>
                    <Text
                      color="#668a9f"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                    >
                      {stories[0].title}
                    </Text>
                    <Button
                      px={8}
                      py={5}
                      variant="outline"
                      color="#668a9f"
                      borderColor="#668a9f"
                      borderWidth="2px"
                      _hover={{ bg: "#668a9f", color: "white" }}
                      _focus={{ outline: "none" }}
                    >
                      {stories[0].buttonText}
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>}
          {/* yoga end */}
          {stories && stories[1] && <Box pt={8}>
            <Box w="100%" pos="relative" borderRadius="md" overflow="hidden">
              <Image
                src={getImageLink( stories[1].bgImage?.data?.attributes?.url)}
                w="100%"
                minH="400px"
                maxH="530px"
                objectFit="cover"
                objectPosition="center center"
              />
              <Box pos="absolute" top="0" left="0" w="100%" h="100%">
                <Flex
                  alignItems="flex-start"
                  justifyContent="center"
                  direction="column"
                  h="100%"
                  w="100%"
                  p={[6, 6, 14, 14]}
                >
                  <Image src={getImageLink( stories[1].logoImage?.data?.attributes?.url)} maxW="220px" />
                  <Text
                    fontSize="sm"
                    color="gray.300"
                    fontWeight="bold"
                    opacity="0.7"
                    pt={4}
                  >
                    {stories[1].technologyName}
                  </Text>
                  <Text
                    color="white"
                    fontSize={["2xl", "3xl", "4xl"]}
                    fontWeight="bold"
                    pb={6}
                    mr={[0, 0, 0, 12]}
                    maxW="400px"
                  >
                    {stories[1].title}
                  </Text>
                  <Button
                    px={8}
                    py={5}
                    variant="outline"
                    color="white"
                    borderColor="white"
                    borderWidth="2px"
                    _hover={{ bg: "white", color: "black" }}
                    _focus={{ outline: "none" }}
                  >
                    {stories[1].buttonText}
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>}
          {/* youveda end */}
          <Box pt={[6, 6, 14, 14]}>
            <Flex alignItems="center" justifyContent="center" wrap="wrap">
              <Text color="agray.100" fontSize="sm">
                Ready to jump-start your application development?
              </Text>
              <Text color="ared.100" fontSize="sm" ml={2}>
                Let’s start a project together
              </Text>
              <Box color="ared.100" ml={2}>
                <IoIosArrowDroprightCircle size="25px" />
              </Box>
            </Flex>
          </Box>
          {/* finish line end */}
        </Box>
      </Container>
    </Box>
  );
}
