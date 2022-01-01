import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { useEffect, useState } from "react";
import getImageLink from './../../utils/getImageLink';

interface IProps {
  scrollTop: number;
  data?: any;
}

const Icons: any = {
  facebook: <FaFacebookF size="22px" />,
  twitter: <AiOutlineTwitter size="18px" />,
  instagram: <AiOutlineInstagram size="18px" />,
  google: <FaGooglePlusG size="18px" />,
  linkedin: <GrLinkedinOption size="18px" />,
};

export default function Navbar({ scrollTop, data }: IProps) {
  const [navBg, setNavBg] = useState(false);
  const [grayBg, setgrayBg] = useState(false);
  const { isOpen, onClose, onToggle } = useDisclosure();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (navBg && scrollTop < 70) {
      setNavBg(false);
    } else if (!navBg && scrollTop > 70) {
      setNavBg(true);
    }

    if (typeof window !== "undefined" && window.location.pathname === "/blogs") {
      setNavBg(false);
      setgrayBg(true);
    }
  }, [scrollTop]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Box
      position="fixed"
      w="100%"
      zIndex="999"
      bg={isOpen ? "ared.100" : navBg ? "white" : grayBg ? "#f9fafb" : "transparent"}
      // color={}
    >
      <Flex
        alignItems="center"
        h={{ base: "54px", md: "96px" }}
        boxShadow={isOpen ? "none" : navBg || grayBg ? "0 0 3px 0 rgb(0 0 0 / 22%)" : "none"}
      >
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Flex alignItems="center" w="100%">
            <Flex justifyContent="flex-start" flex="auto">
              <Box>
                {isOpen ? (
                  <Image
                    src={getImageLink(data?.logo2?.data?.attributes?.url) || ""}
                    w={{ base: "80px", md: "110px" }}
                  />
                ) : (
                  <Image
                    src={getImageLink(data?.logo?.data?.attributes?.url)  || ""}
                    w={{ base: "80px", md: "110px" }}
                  />
                )}
              </Box>
            </Flex>
            <Flex justifyContent="flex-end" alignItems="center">
              <Stack
                direction="row"
                spacing="8"
                align="center"
                color={id ? "#fff" : "gray.500"}
                display={{ base: "none", md: isOpen ? "none" : "flex" }}
              >
                {data?.link && data?.link[0] && (
                  <Text color="gray.500" fontWeight="bold" fontSize="lg" display={{ base: "none", md: "block" }}>
                    <Link href={data?.link[0].linkAddress || ""}>
                      <a>{data?.link[0].linkText}</a>
                    </Link>
                  </Text>
                )}
                {data?.link && data?.link[1] && (
                  <Text color="gray.500" fontWeight="bold" fontSize="lg">
                    <Link href={data?.link[1].linkAddress || ""}>
                      <a>{data?.link[1].linkText}</a>
                    </Link>
                  </Text>
                )}
                {data?.link[2] && data.link[2] && (
                  <Link href="/contact-us">
                    <a href={data?.link[2].linkAddress || ""}>
                      <Button
                        variant="outline"
                        color="gray.500"
                        borderColor="gray.500"
                        borderWidth="2px"
                        px={5}
                        _hover={{
                          color: "ared.100",
                          borderColor: "ared.100",
                          borderWidth: "2px",
                        }}
                        // _focus={{ borderColor: "ared.100", borderWidth: "2px" }}
                      >
                        {data?.link[2].linkText}
                      </Button>
                    </a>
                  </Link>
                )}
              </Stack>
              <IconButton
                icon={isOpen ? <AiOutlineClose size="32px" /> : <HiOutlineMenuAlt2 size="26px" />}
                ml={8}
                color={isOpen ? "gray.300" : "gray.500"}
                aria-label="hammenu"
                variant="ghost"
                onClick={onToggle}
                _focus={{ outline: "none" }}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
              />
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <NavDropdown data={data} onClose={onClose} />
      </Collapse>
    </Box>
  );
}

const NavDropdown = (props: any) => {
  let { onClose, data } = props;
  return (
    <Box bg="ared.100">
      <Flex h={{ base: "calc(100vh - 54px)", md: "calc(100vh - 96px)" }} direction="column">
        <Flex alignItems="center" flex="auto">
          <Container
            maxW={{
              base: "container.lg",
              xl: "container.lg",
              "2xl": "container.xl",
            }}
            pb={20}
            pr={14}
          >
            <Stack direction="column" spacing="1" align="flex-end" display={{ base: "flex", md: "none" }} pb={1}>
              {data?.link && data?.link[0] && (
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color="gray.300"
                  opacity="0.8"
                  _hover={{ color: "white", opacity: 1 }}
                >
                  <Link href={data?.link[0].linkAddress || ""}>
                    <a>{data?.link[0].linkText}</a>
                  </Link>
                </Text>
              )}
              {data?.link && data?.link[1] && (
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color="gray.300"
                  opacity="0.8"
                  _hover={{ color: "white", opacity: 1 }}
                >
                  <Link href={data?.link[1].linkAddress || ""}>
                    <a>{data?.link[1].linkText}</a>
                  </Link>
                </Text>
              )}
            </Stack>
            <Stack direction="column" spacing={{ base: 1, md: 4 }} align="flex-end">
              {data?.link.slice(3).map((linkItem: any, index: any) => {
                return (
                  <Text
                    key={index}
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontWeight="bold"
                    color="gray.300"
                    opacity="0.8"
                    onClick={() => onClose(false)}
                    _hover={{ color: "white", opacity: 1 }}
                  >
                    <Link href={linkItem?.linkAddress || ""}>
                      <a>{linkItem?.linkText}</a>
                    </Link>
                  </Text>
                );
              })}
            </Stack>
          </Container>
        </Flex>
        <Flex justifyContent={{ base: "center", md: "flex-end" }} alignItems="flex-end">
          <Box pr={6} py={4}>
            <Box
              width="50%"
              h="1px"
              bg="gray.300"
              m="0 auto"
              mb={6}
              display={{ base: "block", md: "none" }}
              opacity="0.8"
            />
            <Stack direction="row" spacing="2" mb={[12, 12, 0, 0]}>
              {data?.icons.map((icon: any) => {
                return (
                  <IconButton
                    icon={Icons[icon?.icon]}
                    aria-label={icon?.icon}
                    variant="ghost"
                    color="gray.300"
                    opacity="0.8"
                    _focus={{ outline: "none" }}
                    _hover={{ bg: "transparent", color: "white", opacity: 1 }}
                  />
                );
              })}
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
