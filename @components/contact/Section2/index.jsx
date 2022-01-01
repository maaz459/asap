import { Box, Button, Container, Flex, Text, SimpleGrid,chakra } from "@chakra-ui/react";
import ContactUsForm from '../ContactUs'
import GoogleMapReact from './map';
import { useState } from "react";

export default function Section2({name,email,tellMore,phone,address,address2}) {

    return (
        <Box >
            <Flex alignContent="center" wrap="wrap" w="auto">
                <Container
                    position={"relative"}
                    zIndex={"3"}
                    maxW={{
                        base: "container.xlg",
                        xl: "container.xlg",
                        "2xl": "container.xl",
                    }}
                >
                    <Box
                        textAlign="left" w="100%">
                        <ContactUsForm name={name} email={email} phone={phone} tellMore={tellMore}  />
                    </Box>

                </Container>
                <SimpleGrid
                    marginTop={"-13rem"}
                    bgColor={"#cbcbcb"}
                    alignItems={"center"}
                    width={"100%"}
                    columns={2} spacing={0}>
                    <Box  >
                        {/* map */}
                        <GoogleMapReact />
                    </Box>
                    {console.log(address)}
                    <Box
                        py="12"
                        px="8"
                        mt="20" >
                        <Text
                            mt="12"
                            color={"agray.100"}
                            fontSize={"19px"}
                            >
                            {address && address.map(({ template, content, textcolor, bold },index) => {
                            switch (template) {
                                case "textBlock":
                                return (
                                    <chakra.span
                                    key={index}
                                    d="inline"
                                    textColor={textcolor}
                                    {...(bold && { fontWeight: "700" })}
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

                        <br />
                        <br />
                        <Text
                            mt="12"
                            color={"agray.100"}
                            fontSize={"19px"}
                            >
                            {address2 && address2.map(({ template, content, textcolor, bold },index) => {
                            switch (template) {
                                case "textBlock":
                                return (
                                    <chakra.span
                                    key={index}
                                    d="inline"
                                    textColor={textcolor}
                                    {...(bold && { fontWeight: "700" })}
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
                </SimpleGrid>
            </Flex>
        </Box >
    );
}
