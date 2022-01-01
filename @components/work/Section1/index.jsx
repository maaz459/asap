import { Box, Button, Container, Flex, Image, Text,chakra } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

export default function Banner({heading,button}) {
    return (
        <Box h="100vh">
            <Flex h="100vh" alignContent="center" wrap="wrap" w="auto">
                <Container
                    maxW={{
                        base: "container.xlg",
                        xl: "container.xlg",
                        "2xl": "container.xl",
                    }}
                >
                    <Box textAlign="center" >
                    <Text  
                        fontSize={{ base: "3xl", sm: "4xl", md: "3.3rem" }}
                        fontWeight="bold"
                        textAlign="center"
                        lineHeight="1.1em"
                        mb={12}
                        px={{md:48,base:0}}
                        color="agray.100"
                    >
                        {heading?.preHeading}
                        <chakra.span mx={3} lineHeight={0.8} display="inline-block" borderBottom="10px solid" borderColor="ared.100">
                            {heading?.underlineHeading}
                        </chakra.span>
                        {heading?.postHeading}
                    </Text>

                        <Button
                            variant="outline"
                            color="black"
                            borderColor="agray.300"
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
                </Container>
            </Flex>
        </Box >
    );
}
