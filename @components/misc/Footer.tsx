import { Box, chakra, Container, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

interface IFooter {
  footer?: any;
  navbar?: any;
}
const Icons: any = {
  facebook: <FaFacebookF size="22px" />,
  twitter: <AiOutlineTwitter size="18px" />,
  instagram: <AiOutlineInstagram size="18px" />,
  google: <FaGooglePlusG size="18px" />,
  linkedin: <GrLinkedinOption size="18px" />,
};

export default function Footer({ footer, navbar }: IFooter) {
  const linksLength = Math.floor(footer?.links.length / 2);
  return (
    <Box>
      <Container
        maxW={{
          base: "container.lg",
          xl: "container.lg",
          "2xl": "container.xl",
        }}
      >
        <Box py={14}>
          <Flex wrap="wrap">
            <Box flex={{ base: "0 0 100%", md: "0 0 50%" }} maxW={{ base: "100%", md: "50%" }}>
              <Text color="#2e2c4f" fontSize="md" fontWeight="bold" letterSpacing="3px">
                {footer?.addressText}
              </Text>
              <Flex>
                <Box flex="0 0 50%" maxW="50%" pr={4}>
                  {/* <Text fontSize="sm" fontWeight="semibold" mt={2}>
                    San Francisco
                  </Text>
                  <Text fontSize="sm" mt={1}>
                    535 Mission St, 14th floor
                  </Text>
                  <Text fontSize="sm" mt={1}>
                    San Francisco, CA 94105
                  </Text>
                  <Text fontSize="sm" mt={2}>
                    (+1)415 967 3920
                  </Text> */}
                  <Text fontSize="sm" color="#2e2c4f" mt={2}>
                    {(footer?.address ?? []).map(({ template, content, textcolor, bold }: any, index: any) => {
                      switch (template) {
                        case "textBlock":
                          return (
                            <chakra.span
                              key={index}
                              d="inline"
                              textColor={textcolor}
                              {...(bold && { fontWeight: "semibold" })}
                              fontSize="sm"
                              lineHeight={index + 1 == footer?.address.length ? "66px" : 0}
                            >
                              {content}
                            </chakra.span>
                          );
                        case "lineBreakBlock":
                          return <div key={index}></div>;
                        default:
                      }
                    })}
                  </Text>
                </Box>
                <Box flex="0 0 50%" maxW="50%" pr={4}>
                  {/* <Text fontSize="sm" fontWeight="semibold" mt={2}>
                    Montevideo, Uruguay
                  </Text>
                  <Text fontSize="sm" mt={1}>
                    18 de Julio 1117, Apt. 601
                  </Text>
                  <Text fontSize="sm" mt={2}>
                    (+1)415 967 3920
                  </Text> */}
                  <Text fontSize="sm" color="#2e2c4f" mt={2}>
                    {(footer?.address2 ?? []).map(({ template, content, bold }: any, index: any) => {
                      switch (template) {
                        case "textBlock":
                          return (
                            <chakra.span
                              key={index}
                              d="inline"
                              {...(bold && { fontWeight: "semibold" })}
                              fontSize="sm"
                              lineHeight={index + 1 === footer?.address.length ? "66px" : 0}
                            >
                              {content}
                            </chakra.span>
                          );
                        case "lineBreakBlock":
                          return <div key={index}></div>;
                        default:
                      }
                    })}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box flex={{ base: "0 0 100%", md: "0 0 50%" }} maxW={{ base: "100%", md: "50%" }} mt={{ base: 6, md: 0 }}>
              <Text fontSize="md" fontWeight="bold" letterSpacing="3px">
                {footer?.companyText}
              </Text>
              <Flex>
                <Box flex="0 0 50%" maxW="50%" pr={4}>
                  {footer?.links?.slice(0, linksLength).map((link: any, index: any) => {
                    return (
                      <Text key={index} fontSize="sm" mt={2}>
                        {link.linkText}{" "}
                      </Text>
                    );
                  })}
                </Box>
                <Box flex="0 0 50%" maxW="50%" pr={4}>
                  {footer?.links?.slice(linksLength).map((link: any, index: any) => {
                    return (
                      <Text key={index} fontSize="sm" mt={2}>
                        {link.linkText}{" "}
                      </Text>
                    );
                  })}
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent={{ base: "center", md: "flex-end" }}>
          <Stack direction="row" spacing="2" mb="2" mr={{ base: 0, md: 14 }}>
            {navbar?.icons.map((icon: any, index: any) => {
              return (
                <IconButton
                  key={index}
                  icon={Icons[icon?.icon]}
                  aria-label={icon?.icon}
                  variant="ghost"
                  color="gray.300"
                  opacity="0.8"
                  _focus={{ outline: "none" }}
                />
              );
            })}
            {/* <IconButton
              icon={<AiOutlineTwitter size="20px" />}
              aria-label="twitter"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            />
            <IconButton
              icon={<FaFacebookF size="20px" />}
              aria-label="facebook"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            />
            <IconButton
              icon={<GrLinkedinOption size="20px" />}
              aria-label="GrLinkedinOption"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            />
            <IconButton
              icon={<FaGooglePlusG size="22px" />}
              aria-label="GrLinkedinOption"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            />
            <IconButton
              icon={<AiOutlineInstagram size="20px" />}
              aria-label="GrLinkedinOption"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            /> */}
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
