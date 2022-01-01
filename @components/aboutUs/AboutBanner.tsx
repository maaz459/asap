import { Box, Button, Container, Flex, Image, Text, chakra, Center, Divider } from "@chakra-ui/react";
import getImageLink from './../../utils/getImageLink';
interface BannerElements {
  image: any;
  text: IText[];
  heading1: string;
  heading2: string;
  underlineHeading: string;
}

interface IText {
  template?: string;
  content?: string;
  bold?: boolean;
  textcolor?: string;
}

export default function AboutBanner({ image, heading1, underlineHeading, heading2, text }: BannerElements) {
  return (
    <Box mt={{ md: 36, base: 16 }} bg="#ffffff">
      <Flex alignContent="center" wrap="wrap" w="auto">
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
                <Text w="90%" lineHeight={1.3} fontSize={48} fontWeight="bold" color="agray.200">
                  {heading1}
                  <chakra.span mr={3} lineHeight={0.8} display="inline-block" borderBottom="10px solid" borderColor="ared.100">
                    {underlineHeading}
                  </chakra.span>
                  {heading2}
                  
                </Text>
                <Text w="90%" letterSpacing={0.5} mt={8} color="agray.100" fontSize={{ md: "16px", base: "16px" }}>
                  {(text ?? []).map(({ template, content, textcolor, bold }, index) => {
                    switch (template) {
                      case "textBlock":
                        return (
                          <chakra.span key={index} d="inline" textColor={textcolor} {...(bold && { fontWeight: "bold" })}>
                            {content}
                          </chakra.span>
                        );
                      case "lineBreakBlock":
                        return (
                          <div key={index}>
                            <br />
                            
                          </div>
                        );
                      default:
                    }
                  })}
                </Text>
              </Box>
              <Box
                flex={{ base: "0 0 100%", md: "0 0 45%" }}
                maxW={{ base: "100%", md: "45%" }}
                display="flex"
                justifyContent="center"
                p={{ base: 0, sm: 10, md: 0 }}
              >
                <Image src={getImageLink(image?.data?.attributes?.url) || ""} maxW="100%" minW="100px" />
              </Box>
            </Flex>
          </Box>
          <Center bg="#ffffff" py={{ md: 36, base: 16 }}>
            <Divider orientation="horizontal" />
          </Center>
        </Container>
      </Flex>
    </Box>
  );
}
