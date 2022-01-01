import { Box, Button, Container, Flex, Image, Tooltip, Text } from "@chakra-ui/react";
// import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import girls from '../../../public/assets/girls.jpg'
import girls2 from '../../../public/assets/girls-img-1.png'
import trafileaLogo from '../../../public/assets/trafilea-logo.png'
import baconcoverthumb from '../../../public/assets/bacon-cover-thumb.jpg'
import baconlogothumb from '../../../public/assets/bacon-logo-thumb.png'
import baconMobile from '../../../public/assets/baconMobile.png'
import bgcasestudy from '../../../public/assets/bg-casestudy.jpg'
import ParaPer4mancelogo from '../../../public/assets/ParaPer4mancelogo.png'
import para4mance_mockup from '../../../public/assets/para4mance_mockup.png'
import george_sand from '../../../public/assets/george_sand.jpg'
import conectorium from '../../../public/assets/conectorium.gif'
import conectoriumLogo from '../../../public/assets/conectorium-logo.png'
import showclapbg from '../../../public/assets/showclap-bg.jpg'
import showclapLogo from '../../../public/assets/showclap-logo.png'
import showclapphone from '../../../public/assets/showclap-phone.png'

import ContactForm from '../contact.jsx'
import getImageLink from '../../../utils/getImageLink';

const Section2 = ({works}) => {
  return (
    <Box pb={20}>
      <Container
        maxW={{
          base: "container.xl",
          xl: "container.xl",
          "2xl": "container.xl",
        }}
      >
        <Box borderColor="bcolor.100" pt={6}>
          {/* Trafilea*/}
          {works && works[0].title &&<Box pt={8}>
            <Box w="100%" pos="relative" borderRadius="md" overflow="hidden">
              <Image
                src={getImageLink(works[0].bgImage?.data?.attributes?.url)} 
                w="100%"
                minH="400px"
                maxH="530px"
                objectFit="cover"
                objectPosition="center center"
              />
              {/* <Box
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
              ></Box> */}
              <Box pos="absolute" top="0" left="0" w="100%" h="100%">
                <Flex alignItems="center" h="100%" w="100%" p={[6, 6, 14, 14]}>
                  <Box
                    px={{ sm: 0, md: 0, lg: "2rem" }}
                    flex={{ base: "0 0 0%", lg: "0 0 50%" }}>
                    <Image src={getImageLink(works[0].upperImage?.data?.attributes?.url)} />
                  </Box>
                  <Box
                    flexWrap={"wrap"}
                    flex={{ base: "0 0 100%", lg: "0 0 50%" }}>
                    <Image src={getImageLink(works[0].logoImage?.data?.attributes?.url)} />
                    <Text
                      fontSize="sm"
                      color="agray.500"
                      fontWeight="bold"
                      opacity="0.7"
                      py={{ xsm: "1.5rem", sm: "1.5rem", md: "1rem", lg: "2rem" }}
                    >
                      {works[0].technologyName}
                    </Text>
                    <Text
                      color="black"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                    >
                      {works[0].title}
                    </Text>
                    <Button
                      px={8}
                      py={5}
                      variant="outline"
                      color="agray.300"
                      borderColor="agray.300"
                      borderWidth="2px"
                      _hover={{ bg: "agray.300", color: "white" }}
                      _focus={{ outline: "none" }}
                    >
                     {works[0].buttonText}
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>}
          {/* Beacon section */}
         {works && works[1].title && <Box pt={8}>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box w="100%" pos="relative" borderRadius="md" overflow="hidden">
                <Image
                  src={getImageLink(works[1].bgImage?.data?.attributes?.url)} 
                  w="100%"
                  minH="400px"
                  maxH="530px"
                  objectFit="cover"
                  objectPosition="center center"
                />
                <Box pos="absolute" top="0" left="0"
                  display={"flex"}
                  alignItems={"center"}
                  w="100%" h="100%">
                  <Flex width="100%" alignItems={"center"}>
                    <Flex
                      alignItems="flex-start"
                      justifyContent="center"
                      direction="column"
                      h="100%"
                      flex={{ base: "100% 0 0%", lg: "0 0 50%" }}
                      p={[6, 6, 14, 14]}
                    >
                      <Image src={getImageLink(works[1].logoImage?.data?.attributes?.url)} maxW="220px" />
                      <Text
                        fontSize="sm"
                        color="gray.300"
                        fontWeight="bold"
                        opacity="0.7"
                        pt={4}
                      >
                        {works[1].technologyName}
                      </Text>
                      <Text
                        color="white"
                        fontSize={["2xl", "3xl", "4xl"]}
                        fontWeight="bold"
                        pb={6}
                        mr={[0, 0, 0, 12]}
                      // maxW="400px"
                      >
                        {works[1].title}
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
                        {works[1].buttonText}
                      </Button>
                    </Flex>
                    <Flex
                      flex={{ base: "0 0 0%", lg: "0 0 50%" }}
                    >
                      <Image
                        src={getImageLink(works[1].upperImage?.data?.attributes?.url)}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>}
          {/* section 3 */}
         {works && works[2] && works[2].title && <Box
            w="100%" borderRadius="md"
            mt={{ sm: "8", md: "20", lg: "20" }}
            height={{ sm: "100vh", lg: "100%" }}
            backgroundImage={getImageLink(works[2].bgImage?.data?.attributes?.url)} 
            backgroundSize={"cover"}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                top="0" left="0" w="100%" h="100vh">
                <Flex w="100%" alignItems={"center"}>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    p={[6, 6, 14, 14]}
                    width={{ sm: "100%", md: "50%", lg: "50%" }}
                  >
                    <Image src={getImageLink(works[2].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="gray.300"
                      fontWeight="bold"
                      opacity="0.7"
                      pt={4}
                    >
                      {works[2].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                    // maxW={{ lg: "400px" }}
                    >
                      {works[2].title}
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
                      {works[2].buttonText}
                    </Button>
                  </Flex>
                  <Box
                    alignItems={"center"}
                    width={{ sm: "0%", md: "50%", lg: "50%" }}
                  >
                    <Image
                      width={"85%"}
                      height={"540px"}
                      src={getImageLink(works[2].upperImage?.data?.attributes?.url)}
                    // objectFit="cover"
                    // mt={{ md: "-5rem", lg: "-5rem" }}
                    // objectPosition="center center"
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section4 */}
         {works && works[3] && works[3].title && <Box
            w="100%" borderRadius="md"
            mt={{ sm: "8", md: "20", lg: "20" }}
            py={{ sm: "12" }}
            // height={{ sm: "auto", lg: "auto" }}
            backgroundSize={{ sm: "cover", lg: "contain" }}
            backgroundImage={getImageLink(works[3].bgImage?.data?.attributes?.url)} 
            backgroundRepeat="no-repeat"
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%">
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={{ sm: "0", md: "40%", lg: "40%" }}
                  >
                    <Image
                      src={getImageLink(works[3].upperImage?.data?.attributes?.url)}
                      height="540px"
                    // objectFit="cover"
                    // mt={{ lg: "-5rem" }}
                    // objectPosition="center center"
                    />
                  </Box>

                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    w={{ sm: "100%", md: "50%", lg: "50%" }}
                    p={[6, 6, 14, 14]}
                  >
                    <Image src={getImageLink(works[3].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="gray.300"
                      fontWeight="bold"
                      opacity="0.7"
                      pt={4}
                    >
                      {works[3].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                    // maxW={{ lg: "400px" }}
                    >
                      {works[3].title}
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
                      {works[3].buttonText}
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>}

          {/* section5 */}
          {works && works[4] && works[4].title && <Box
            w="100%" borderRadius="md"
            mt={"8"}
            py={{ sm: "12" }}
            backgroundImage={getImageLink(works[4].bgImage?.data?.attributes?.url)} 
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
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
                    <Image src={getImageLink(works[4].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="gray.300"
                      fontWeight="bold"
                      opacity="0.7"
                      pt={4}
                    >

                      {works[4].technologyName}

                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                      maxW="400px"
                    >
                      {works[4].title}

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
                      {works[4].buttonText}
                    </Button>
                  </Flex>
                  <Flex
                    display={{ sm: "none", md: "block", lg: "block" }}
                  >
                    <Image
                      src={getImageLink(works[4].upperImage?.data?.attributes?.url)}
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </Flex>
                </Flex>
              </Box>
            </Flex>

          </Box>}
          {/* section6 */}
         {works && works[5] && works[5].title && <Box pt={8}>
            <Box w="100%" pos="relative" borderRadius="md" overflow="hidden">
              <Image
                src={getImageLink(works[5].bgImage?.data?.attributes?.url)} 
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
                      {works[5].technologyName}
                    </Text>
                    <Text
                      color="#668a9f"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                    >
                      {works[5].title}
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
                      {works[5].buttonText}
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>}
          {/* section7 */}
         {works && works[6] && works[6].title && <Box pt={8}>
            <Box w="100%" pos="relative" borderRadius="md" overflow="hidden">
              <Image
                src={getImageLink(works[6].bgImage?.data?.attributes?.url)} 
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
                  <Image src={getImageLink(works[6].logoImage?.data?.attributes?.url)} maxW="220px" />
                  <Text
                    fontSize="sm"
                    color="gray.300"
                    fontWeight="bold"
                    opacity="0.7"
                    pt={4}
                  >
                    {works[6].technologyName}
                  </Text>
                  <Text
                    color="white"
                    fontSize={["2xl", "3xl", "4xl"]}
                    fontWeight="bold"
                    pb={6}
                    mr={[0, 0, 0, 12]}
                    maxW="400px"
                  >
                    {works[6].title}
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
                    {works[6].buttonText}
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>}
          {/* section8 */}
          {works && works[7] && works[7].title &&<Box
            w="100%" borderRadius="md"
            mt={"8"}
            // height={{ sm: "100vh", lg: "auto" }}
            backgroundSize={"cover"}
            backgroundImage={getImageLink(works[7].bgImage?.data?.attributes?.url)} 
          >
            <Box>
              <Flex
                py="2rem"
                alignItems={"center"}
                justifyContent={"center"}>
                <Box top="0" left="0" w="100%" h="auto">
                  <Flex alignItems={"center"}>
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      direction="column"
                      h="100%"
                      w="100%"

                    >
                      <Flex
                        alignItems="flex-center"
                        justifyContent="center"
                        display={{ sm: "none", md: "block", lg: "flex" }}
                      >
                        <Image
                          src={getImageLink(works[7].upperImage?.data?.attributes?.url)}
                          objectFit="cover"
                          objectPosition="center center"
                        />

                      </Flex>
                      <Image src={getImageLink(works[7].logoImage?.data?.attributes?.url)} maxW="220px" />
                      <Text
                        fontSize="sm"
                        color="agray.500"
                        fontWeight="bold"
                        opacity="0.7"
                        pt={4}
                      >

                        {works[7].technologyName} 
                      </Text>
                      <Text
                        color="black"
                        textAlign={"center"}
                        fontSize={["2xl", "3xl", "4xl"]}
                        fontWeight="bold"
                        my="8"
                        w={{md:"40%",base:"80%"}}
                      >
                        {works[7].title}
                      </Text>
                      <Button
                        px={8}
                        py={5}
                        my="8"
                        variant="outline"
                        color="white"
                        borderColor="white"
                        borderWidth="2px"

                        _hover={{ bg: "white", color: "black" }}
                        _focus={{ outline: "none" }}
                      >
                        {works[7].buttonText}
                      </Button>
                    </Flex>

                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>}

          {/* section 9 */}
         {works && works[8] && works[8].title && <Box
            w="100%" borderRadius="md"
            mt={"8"}
            py={{ sm: "12" }}
            backgroundColor={"#52d0ff"}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    w={{ sm: "100%", md: "100%", lg: "50%" }}
                    p={[6, 6, 14, 14]}
                  >
                    <Image src={getImageLink(works[8].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="agray.600"
                      fontWeight="bold"
                      // opacity="0.7"
                      pt={4}
                    >

                      {works[8].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                    // maxW="400px"
                    >
                      {works[8].title}
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
                      {works[8].buttonText}
                    </Button>
                  </Flex>
                  <Flex
                    w="50%"
                    display={{ sm: "none", md: "block", lg: "block" }}
                  >
                    <Image
                      src={getImageLink(works[8].upperImage?.data?.attributes?.url)}


                    // objectFit="cover"
                    // objectPosition="center center"
                    />
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section 10 */}
         {works && works[9] && works[9].title && <Box
            w="100%" borderRadius="md"
            mt={"8"}
            py="8"
            // height={{ sm: "100vh", lg: "auto" }}
            backgroundColor={"#343535"}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-around"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>
                  <Flex
                    display={{ sm: "none", md: "block", lg: "block" }}
                  >
                    <Image
                      src={getImageLink(works[9].upperImage?.data?.attributes?.url)} 

                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </Flex>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    w={{ sm: "100%", md: "50%", lg: "50%" }}
                    p={[6, 6, 14, 14]}
                  >
                    <Image src={getImageLink(works[9].logoImage?.data?.attributes?.url)}  maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="agray.600"
                      fontWeight="bold"
                      // opacity="0.7"
                      pt={4}
                    >
                      {works[9].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                    // maxW="400px"
                    >
                      {works[9].title}
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
                      {works[9].buttonText}
                    </Button>
                  </Flex>

                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section 11*/}
          {works && works[10] && works[10].title &&<Box
            w="100%" borderRadius="md"
            mt={"8"}
            // height={{ sm: "100%", md: "100%" }}
            // backgroundRepeat={"no-repeat"}
            backgroundSize={{ sm: "contain", md: "contain", lg: "cover" }}
            backgroundImage={getImageLink(works[10].bgImage?.data?.attributes?.url)}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
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
                    <Image src={getImageLink(works[10].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="#f6bbbc"
                      fontWeight="bold"

                      my="4"
                      pt={4}
                    >

                        {works[10].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      my="8"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                    // maxW="400px"
                    >
                        {works[10].title}
                    </Text>
                    <Button
                      px={8}
                      my="8"
                      py={5}
                      variant="outline"
                      color="white"
                      borderColor="white"
                      borderWidth="2px"
                      _hover={{ bg: "white", color: "black" }}
                      _focus={{ outline: "none" }}
                    >
                        {works[10].buttonText}
                    </Button>

                  </Flex>

                  <Flex
                    display={{ sm: "none", md: "block", lg: "flex" }}
                    width={{ lg: "50%" }}
                  >

                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section 12 */}
         {works && works[11] && works[11].title && <Box
            w="100%" borderRadius="md"
            mt={"8"}
            backgroundSize="cover"
            backgroundImage={getImageLink(works[11].bgImage?.data?.attributes?.url)}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>
                  <Flex
                    width={"50%"}
                    display={{ sm: "none", md: "block", lg: "block" }}
                  >
                    <Image
                      src={getImageLink(works[11].upperImage?.data?.attributes?.url)}
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </Flex>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    w={{ sm: "100%", Imd: "50%", lg: "50%" }}
                    p={[6, 6, 14, 14]}
                  >
                    <Image src={getImageLink(works[11].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="#f6bbbc"
                      fontWeight="bold"
                      // opacity="0.7"
                      my="4"
                      pt={4}
                    >
                      {works[11].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      my="8"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                      maxW="400px"
                    >
                      {works[11].title}
                    </Text>
                    <Button
                      px={8}
                      my="8"
                      py={5}
                      variant="outline"
                      color="white"
                      borderColor="white"
                      borderWidth="2px"
                      _hover={{ bg: "white", color: "black" }}
                      _focus={{ outline: "none" }}
                    >
                      {works[11].buttonText}
                    </Button>

                  </Flex>

                </Flex>
              </Box>
            </Flex>
          </Box>}

          {/* section 13 */}
         {works && works[12] && works[12].title && <Box
            w="100%" borderRadius="md"
            mt={"8"}
            backgroundSize="cover"
            backgroundImage={getImageLink(works[12].bgImage?.data?.attributes?.url)}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    width={{ sm: "100%", md: "60%", lg: "60%" }}
                    p={[6, 6, 14, 14]}
                  >
                    <Image src={getImageLink(works[12].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="#abc0f0"
                      fontWeight="bold"

                      my="4"
                      pt={4}
                    >
                      {works[12].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      my="8"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                      maxW="400px"
                    >
                      {works[12].title}
                    </Text>
                    <Button
                      px={8}
                      my="8"
                      py={5}
                      variant="outline"
                      color="white"
                      borderColor="white"
                      borderWidth="2px"
                      _hover={{ bg: "white", color: "black" }}
                      _focus={{ outline: "none" }}
                    >
                      {works[12].buttonText}
                    </Button>
                  </Flex>

                  <Flex
                    width={"40%"}
                    display={{ sm: "none", md: "block", lg: "block" }}
                  >
                    <Image
                      src={getImageLink(works[12].upperImage?.data?.attributes?.url)}
                      objectFit="cover"
                      objectPosition="center center"
                    />

                    <Tooltip
                      borderRadius={"50%"}
                      label='1' placement='top' isOpen>
                      <Text></Text>
                    </Tooltip>
                  </Flex>

                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section 14 */}
         {works && works[13] && works[13].title && <Box
            w="100%" borderRadius="md"
            mt={"8"}
            backgroundSize="cover"
            backgroundImage={getImageLink(works[13].bgImage?.data?.attributes?.url)}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>
                  <Flex
                    justifyContent={"center"}
                    width={"50%"}
                    display={{ sm: "none", md: "block", lg: "flex" }}
                  >
                    <Image
                      src={getImageLink(works[13].upperImage?.data?.attributes?.url)}
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </Flex>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    width={{ sm: "100%", md: "50%", lg: "50%" }}
                    p={[6, 6, 14, 14]}

                  >
                    <Image src={getImageLink(works[13].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="#cdd2d3"
                      fontWeight="bold"
                      // opacity="0.7"
                      my="4"
                      pt={4}
                    >

                      {works[13].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      my="8"
                      pb={6}
                      mr={[0, 0, 0, 12]}
                    // maxW="400px"
                    >
                      {works[13].title}
                      </Text>
                    <Button
                      px={8}
                      my="8"
                      py={5}
                      variant="outline"
                      color="white"
                      borderColor="white"
                      borderWidth="2px"
                      _hover={{ bg: "white", color: "black" }}
                      _focus={{ outline: "none" }}
                    >
                      {works[13].buttonText}
                    </Button>

                  </Flex>

                </Flex>
              </Box>
            </Flex>
          </Box>}

          {/* section 15 */}
          {works && works[14] && works[14].title &&<Box
            w="100%" borderRadius="md"
            mt={"8"}
            backgroundColor={"#d9edfd"}
            py={"8"}
          >

            <Box
              w="100%" borderRadius="md"
              backgroundSize="cover"
              backgroundImage={getImageLink(works[14].bgImage?.data?.attributes?.url)}
            >
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}>
                <Box top="0" left="0" w="100%" h="auto">
                  <Flex alignItems={"center"}>
                    <Flex
                      alignItems="flex-start"
                      justifyContent="center"
                      direction="column"
                      h="100%"
                      w={{ sm: "100%", md: "50%", lg: "50%" }}
                      p={[6, 6, 14, 14]}
                    >
                      <Image src={getImageLink(works[14].logoImage?.data?.attributes?.url)} maxW="220px" />
                      <Text
                        fontSize="sm"
                        color="#7dc3f2"
                        fontWeight="bold"
                        // opacity="0.7"
                        my="4"
                        pt={4}
                      >
                        {works[14].technologyName}
                      </Text>
                      <Text
                        color="agray.100"
                        fontSize={["2xl", "3xl", "4xl"]}
                        fontWeight="bold"
                        pb={6}
                        mr={[0, 0, 0, 12]}
                      // maxW="400px"
                      >
                        {works[14].title}
                      </Text>
                      <Button
                        px={8}
                        my="8"
                        py={5}
                        variant="outline"
                        borderColor="agray.100"
                        borderWidth="2px"
                        color="agray.100"
                        _hover={{ bg: "agray.100", color: "black" }}
                        _focus={{ outline: "none" }}
                      >
                        {works[14].buttonText}
                      </Button>
                    </Flex>
                    <Flex
                      justifyContent={"center"}
                      width={"50%"}
                      display={{ sm: "none", md: "block", lg: "flex" }}
                    >
                      <Image
                        src={getImageLink(works[14].upperImage?.data?.attributes?.url)}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Flex>

                  </Flex>
                </Box>
              </Flex>


            </Box>
          </Box>}
          {/* section 16 */}
          {works && works[15] && works[15].title &&<Box
            w="100%" borderRadius="md"
            mt={"8"}
            py="8"
            backgroundSize="cover"
            backgroundImage={getImageLink(works[15].bgImage?.data?.attributes?.url)}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>
                  <Flex
                    justifyContent={"center"}
                    width={{ sm: "0%", md: "50%", lg: "50%" }}
                    display={{ sm: "none", md: "block", lg: "flex" }}
                  >
                    <Image
                      src={getImageLink(works[15].upperImage?.data?.attributes?.url)}
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </Flex>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    w={{ sm: "100%", md: "50%", lg: "50%" }}
                    px={{ sm: "24px", md: "20", lg: "20" }}
                  >
                    <Image src={getImageLink(works[15].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="#aab2b5"
                      fontWeight="bold"
                      // opacity="0.7"
                      my="4"
                      pt={4}
                    >
                      {works[15].technologyName}
                    </Text>
                    <Text
                      color="agray.100"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      my="8"
                      pb={6}
                    // maxW="400px"
                    >
                      {works[15].title}
                      </Text>
                    <Button
                      px={8}
                      my="8"
                      py={5}
                      variant="outline"

                      borderColor="agray.100"
                      borderWidth="2px"
                      color="agray.100"
                      _hover={{ bg: "agray.100", color: "black" }}
                      _focus={{ outline: "none" }}
                    >
                      {works[15].buttonText}
                    </Button>

                  </Flex>

                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section17 */}
         {works && works[16] && works[16].title && <Box
            w="100%" borderRadius="md"
            mt={"8"}
            py="8"
            height={{ sm: "100vh", lg: "auto" }}
            backgroundSize="cover"
            backgroundImage={getImageLink(works[16].bgImage?.data?.attributes?.url)}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>

                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    w={{ sm: "100%", md: "50%", lg: "50%" }}
                    px="20"
                  >
                    <Image src={getImageLink(works[16].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="#aab2b5"
                      fontWeight="bold"
                      // opacity="0.7"
                      // my="4"
                      pt={4}
                    >
                      {works[16].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                    // maxW="400px"
                    >
                      {works[16].title}
                    </Text>
                    <Button
                      px={8}
                      my="8"
                      py={5}
                      variant="outline"
                      borderColor="white"
                      borderWidth="2px"
                      color="white"
                      _hover={{ bg: "white", color: "black" }}
                      _focus={{ outline: "none" }}
                    >
                      {works[16].buttonText}
                    </Button>

                  </Flex>

                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section 18 */}
          {works && works[17] && works[17].title &&<Box
            w="100%" borderRadius="md"
            mt={"8"}
            py="8"
            // height={{ sm: "100vh", lg: "auto" }}
            backgroundSize="cover"
            backgroundImage={getImageLink(works[17].bgImage?.data?.attributes?.url)}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>
                  <Flex
                    justifyContent={"center"}
                    width={"50%"}
                    display={{ sm: "none", md: "block", lg: "flex" }}
                  >
                    <Image
                      src={getImageLink(works[17].upperImage?.data?.attributes?.url)}
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </Flex>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    w={{ sm: "100%", md: "50%", lg: "50%" }}
                    px="20"
                  >
                    <Image src={getImageLink(works[17].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="#f5c0c4"
                      fontWeight="bold"
                      // opacity="0.7"
                      my="4"
                      pt={4}
                    >
                      {works[17].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      my="8"
                      pb={6}
                    // maxW="400px"
                    >
                      {works[17].title}
                    </Text>
                    <Button
                      px={8}
                      my="8"
                      py={5}
                      variant="outline"

                      borderColor="white"
                      borderWidth="2px"
                      color="white"
                      _hover={{ bg: "white", color: "black" }}
                      _focus={{ outline: "none" }}
                    >
                      {works[17].buttonText}
                    </Button>

                  </Flex>

                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section19*/}
          {works && works[18] && works[18].title &&<Box
            w="100%" borderRadius="md"
            mt={"8"}
            py="8"
            backgroundSize="cover"
            backgroundImage={getImageLink(works[18].bgImage?.data?.attributes?.url)}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    w={{ sm: "100%", md: "50%", lg: "50%" }}
                    px="20"
                  >
                    <Image src={getImageLink(works[18].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="#f5c0c4"
                      fontWeight="bold"
                      pt={4}
                    >
                      {works[18].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      maxW="400px"
                    >
                      {works[18].title}
                    </Text>
                    <Button
                      px={8}
                      my="8"
                      py={5}
                      variant="outline"
                      borderColor="white"
                      borderWidth="2px"
                      color="white"
                      _hover={{ bg: "white", color: "black" }}
                      _focus={{ outline: "none" }}
                    >
                      {works[18].buttonText}
                    </Button>

                  </Flex>

                  <Flex
                    justifyContent={"center"}
                    width={"50%"}
                    display={{ sm: "none", md: "block", lg: "flex" }}
                  >
                    <Image
                      src={getImageLink(works[18].upperImage?.data?.attributes?.url)}
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </Flex>

                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section 20 */}
         {works && works[19] && works[19].title && <Box
            w="100%" borderRadius="md"
            mt={"8"}
            py="8"
            // height={{ sm: "100vh", lg: "auto" }}
            backgroundSize="cover"
            backgroundImage={getImageLink(works[19].bgImage?.data?.attributes?.url)}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box top="0" left="0" w="100%" h="auto">
                <Flex alignItems={"center"}>
                  <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                    h="100%"
                    w={{ sm: "100%", md: "50%", lg: "50%" }}
                    px="20"
                  >
                    <Image src={getImageLink(works[19].logoImage?.data?.attributes?.url)} maxW="220px" />
                    <Text
                      fontSize="sm"
                      color="rgba(255,255,255,0.6)"
                      fontWeight="bold"
                      pt={4}
                    >
                      {works[19].technologyName}
                    </Text>
                    <Text
                      color="white"
                      fontSize={["2xl", "3xl", "4xl"]}
                      fontWeight="bold"
                      pb={6}
                      maxW="400px"
                    >
                      {works[19].title}
                    </Text>
                    <Button
                      px={8}
                      my="8"
                      py={5}
                      variant="outline"
                      borderColor="white"
                      borderWidth="2px"
                      color="white"
                      _hover={{ bg: "white", color: "black" }}
                      _focus={{ outline: "none" }}
                    >
                      {works[19].buttonText}
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>}
          {/* section 21 */}
         
        </Box >
      </Container >
    </Box >
  );
}

export default Section2