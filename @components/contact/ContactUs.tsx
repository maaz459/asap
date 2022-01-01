import { Box, Button, Container, Flex, FormControl, Input, Text, Textarea } from "@chakra-ui/react";

interface IContact {
  heading?: string;
  text?: string;
  name?: string;
  email?: string;
  phone?: string;
  tellMore?: string;
  button?:string
}

export default function ContactUs({ heading, text, name, email, phone, tellMore,button }: IContact) {
  let contactUs = typeof window !== "undefined" && window.location.pathname === "/contact-us";
  return (
    <Box pb={20}>
      <Box>
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Box bg="white" boxShadow="0 10px 50px rgb(0 0 0 / 8%), 0 13px 45px rgb(0 0 0 / 8%)" p={[6, 10, 16, 16]}>
            {!contactUs && (
              <>
                <Text fontSize="2xl" fontWeight="bold" pb={2}>
                  {heading}
                </Text>
                <Text>{text}</Text>
              </>
            )}
            <Flex direction="column">
              <Flex pb={6}>
               {name && <FormControl id="name" isRequired>
                  <Input
                    placeholder={`${name}*`}
                    bg="bgcolor.100"
                    py="6"
                    borderWidth="0"
                    _focus={{ borderColor: "ared.100", borderWidth: "2px" }}
                  />
                </FormControl>}
               {email && <FormControl id="email" isRequired mx={4}>
                  <Input
                    placeholder={`${email}*`}
                    bg="bgcolor.100"
                    py="6"
                    borderWidth="0"
                    _focus={{ borderColor: "ared.100", borderWidth: "2px" }}
                  />
                </FormControl>}
               {phone && <FormControl id="phone" isRequired>
                  <Input
                    placeholder={`${phone}*`}
                    bg="bgcolor.100"
                    py="6"
                    borderWidth="0"
                    _focus={{ borderColor: "ared.100", borderWidth: "2px" }}
                  />
                </FormControl>}
              </Flex>
             {tellMore && <Box>
                <Textarea
                  placeholder={`${tellMore}*`}
                  bg="bgcolor.100"
                  py="6"
                  borderWidth="0"
                  _focus={{ borderColor: "ared.100", borderWidth: "2px" }}
                />
              </Box>}
            </Flex>
            <Button
              bg="ared.100"
              color="white"
              borderRadius="sm"
              size="lg"
              mt={10}
              _hover={{
                transform: "translateY(-3px)",
                boxShadow: "2xl",
              }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
