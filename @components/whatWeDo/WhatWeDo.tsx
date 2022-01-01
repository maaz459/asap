import { Box, Button, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineMobile, AiOutlineSetting } from "react-icons/ai";
import { MdDesktopMac } from "react-icons/md";

interface IProps {
  heading?: string;
  functionalities?: any;
  supportHeading?: string;
  supportText?: string;
  button?: any;
}

const Icons: any = {
  web: <MdDesktopMac size="45px" />,
  mobile: <AiOutlineMobile size="45px" />,
  design: <AiOutlineSetting size="45px" />,
};

export default function WhatWeDo({ heading, functionalities, supportHeading, supportText, button }: IProps) {
  return (
    <Box pb={20}>
      <Container
        maxW={{
          base: "container.lg",
          xl: "container.lg",
          "2xl": "container.xl",
        }}
      >
        <Box>
          <Text textAlign="center" fontSize="3xl" fontWeight="bold" letterSpacing="3px">
            {heading}
          </Text>
          <Box py={8}>
            <Flex wrap="wrap" justifyContent="center">
              {functionalities?.map((func: any, index: any) => {
                return <CardKit key={index} icon={Icons[func?.type]} title={func?.heading} text={func?.text} />;
              })}
            </Flex>
          </Box>
          <Box mt={10} textAlign="center">
            <Text color="ared.100" fontSize="xl" fontWeight="bold">
              {supportHeading}{" "}
            </Text>
            <Text color="agray.200" fontSize="lg" maxW="600px" m="0 auto" pt={4} mb={10}>
              {supportText}
            </Text>
            <Button
              variant="outline"
              color="black"
              borderColor="color"
              px={8}
              py={5}
              borderRadius="4px"
              borderWidth="2px"
              fontWeight="normal"
              fontSize="sm"
              _hover={{ bg: "agray.300", color: "white" }}
              _focus={{ outline: "none" }}
            >
              {button?.buttonText}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const CardKit = ({ icon, title, text }: { icon: any; title: string; text: string }) => {
  return (
    <Box
      bg="white"
      p={8}
      boxShadow="0 10px 50px rgb(0 0 0 / 8%), 0 13px 45px rgb(0 0 0 / 8%)"
      flex={{ base: "0 0 100%", lg: "0 0 30%" }}
      display="flex"
      alignItems="center"
      mx={2}
      mb={{ base: 6, lg: 0 }}
      maxW={{ base: "100%", lg: "30%" }}
      transition="transform 0.5s"
      _hover={{ transform: "translateY(-6px)" }}
    >
      <Flex alignItems="center" justifyContent="flex-start">
        <Box>
          <IconButton aria-label="mac" icon={icon} color="ared.100" variant="ghost" _focus={{ outline: "none" }} />
        </Box>
        <Flex direction="column" pl={8}>
          <Text fontSize="lg" fontWeight="semibold" color="agray.100">
            {title}
          </Text>
          <Text fontSize={{ base: "xs", xl: "sm" }} color="agray.100">
            {text}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
