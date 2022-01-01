import { Box, Button, Container, Flex, Image, Stack, Text, Link, chakra } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import getImageLink from './../../utils/getImageLink';
interface BannerElements {
  image?: string;
  text?: IText[];
  name?: string;
  isLink?: boolean;
  linkText?: string;
}

interface IText {
  template: string;
  content?: string;
  bold?: boolean;
  textcolor?: string;
}

export default function Skills({ image, text, name, isLink, linkText }: BannerElements) {
  return (
    <Box mt={{ base: 16, md: 36 }}>
      <Flex alignContent="center" wrap="wrap" w="auto">
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Stack bg="white" display="flex" flexDir={{ base: "column", md: "row" }}>
            <Box
              flex={{ base: "0 0 100%", md: "0 0 48%" }}
              maxW={{ base: "100%", md: "50%" }}
              display="flex"
              justifyContent="center"
            >
              <Image
                _hover={{ transform: "scale(0.9)", transition: "all 1s" }}
                src={getImageLink(image!)  || ""}
                maxW="100%"
                minW="100px"
              />
            </Box>
            <Box textAlign="center" w="100%">
              <Flex wrap="wrap" alignItems="center">
                <Box textAlign="start">
                  <Text
                    width={{ base: "60%", md: "50%" }}
                    lineHeight={1.3}
                    fontSize={{ md: "38px", base: "24px" }}
                    color="ared.100"
                    textAlign="start"
                    fontWeight={700}
                    ml={{ md: 16, base: 8 }}
                    mt={{ md: 24, base: 8 }}
                  >
                    {name}{" "}
                  </Text>
                  <Text
                    pl={{ md: 16, base: 8 }}
                    w={{md:"85%",base:"90%"}}
                    letterSpacing={0.5}
                    mt={8}
                    color="agray.100"
                    fontSize={{ md: "16px", base: "16px" }}
                  >
                    {(text ?? []).map(({ template, content, textcolor, bold }, index) => {
                      switch (template) {
                        case "textBlock":
                          return (
                            <chakra.span
                              key={index}
                              d="inline"
                              textColor={textcolor}
                              {...(bold && { fontWeight: "bold" })}
                            >
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
                <Box my={12} ml={{ md: 16, base: 8 }}>
                  {isLink && (
                    <Box display="flex" gap={2}>
                      <BsArrowRight color="#444" size="20px" />
                      <Link href="" target="_blank" _hover={{ textDecoration: "none" }} fontSize={14}>
                        {linkText}
                      </Link>
                    </Box>
                  )}
                </Box>
              </Flex>
            </Box>
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
}
