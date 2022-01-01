import React, { useState, useRef } from "react";
import { Box, Button, Container, Flex, Image, Text, HStack, chakra } from "@chakra-ui/react";
import useDraggableScroll from "use-draggable-scroll";
import getImageLink from './../../utils/getImageLink';

interface IStep {
  heading?: string;
  image?: any;
  text?: IText[];
}

interface IText {
  template: string;
  content?: string;
  bold?: boolean;
  margin?: string;
  textcolor?: string;
}

interface IProcedure {
  steps?: IStep[];
  readyToLaunch: boolean;
  stayTuned: boolean;
}

const SingleStep = ({ heading, image, text }: IStep) => {
  const [check, setCheck] = useState(false);
  return (
    <Box>
      <Box
        onMouseLeave={() => setCheck(false)}
        onMouseEnter={() => setCheck(true)}
        width={{ base: "300px", md: "400px" }}
        border="1px solid rgba(0,0,0,.08)"
        position="relative"
        zIndex={0}
        minH="350px"
      >
        <Image
          zIndex="-1"
          height="100%"
          position="absolute"
          width="full"
          top={0}
          display={check ? "block" : "none"}
          src={getImageLink(image?.data?.attributes?.url) || ""}
        ></Image>
        <Box
          _hover={{
            bgColor: "rgba(205,19,55,0.8)",
            color: "white",
          }}
          zIndex={1}
          minH="350px"
          p="20% 11%"
        >
          <Box>
            <Text lineHeight={2} letterSpacing={2} fontWeight={700} color={check ? "white" : "agray.200"} fontSize={24}>
              {heading}
            </Text>
            <Text mt={3} fontSize={16} color={check ? "white" : "agray.200"}>
              {(text ?? []).map(({ template, content, textcolor, bold, margin }, index) => {
                switch (template) {
                  case "textBlock":
                    return (
                      <chakra.span key={index} d="inline" textColor={textcolor} {...(bold && { fontWeight: "bold" })}>
                        {content}
                      </chakra.span>
                    );
                  case "lineBreakBlock":
                    return <div key={index}></div>;
                  default:
                }
              })}
            </Text>

            <Text color={check ? "white" : "agray.200"} fontSize={16} mt={5}>
              <strong>Let’s get started!</strong>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ReadyToLaunch = () => {
  return (
    <Box>
      <Box minH="350px" width={{ base: "300px", md: "400px" }} position="relative" zIndex={1}>
        <Image
          zIndex="-1"
          height="100%"
          position="absolute"
          width="full"
          top={0}
          display="block"
          src="assets/lunch.jpg"
        ></Image>
        <Box bgColor="rgba(205,19,55,0.8)" minH="350px" color="white" zIndex={10} p="15% 11%">
          <Box>
            <Text fontWeight={700} color="white" lineHeight={1} fontSize={42}>
              YOU ARE READY TO LAUNCH!{" "}
            </Text>
            <Text mt={3} fontSize={16} color="white">
              But you can always grow!
            </Text>

            <Text color="white" fontSize={16} mt={7}>
              We have the experience to scale your product using AWS
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const StayTuned = () => {
  return (
    <Box>
      <Box minH="350px" width={{ base: "300px", md: "400px" }}>
        <Box bgColor="white" p="28% 11%">
          <Box>
            <Text fontWeight={700} bgColor="ared.100" pl={6} py={2} color="white" lineHeight={1} fontSize={24}>
              STAY TUNED
            </Text>
            <Text color="ared.100" fontSize={16} mt={7}>
              Videoconferencing plus fluent English mean you can follow up with anyone on the team anytime.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default function Steps(props: IProcedure) {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });
  return (
    <Box mr={{ sm: 10 }}>
      <Flex alignContent="center" wrap="wrap" w="auto">
        <HStack
          _hover={{
            cursor: "pointer",
          }}
          className="ScrollBar"
          gridGap={4}
          py={16}
          overflowY="auto"
          ref={ref}
          pl={{ md: 32, base: 8 }}
          onMouseDown={onMouseDown}
        >
          {props.steps?.map(({ heading, image, text }) => (
            <SingleStep heading={heading} image={image} text={text} />
          ))}
          {props.readyToLaunch && <ReadyToLaunch />}
          {props.stayTuned && <StayTuned />}
        </HStack>
      </Flex>
    </Box>
  );
}
