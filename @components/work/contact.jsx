
import { Box, Button, FormControl, Textarea, Input, SimpleGrid, Text } from "@chakra-ui/react";
const ContactForm = () => {
    return (
        <Box>
            <Text
                fontWeight={700}
                fontSize={"24px"}>Let’s work together</Text>
            <Text
                color={"textColor.100"}
                fontSize={"17px"}>Turn your idea into a reality. San Francisco App Developers.</Text>
            <FormControl isRequired>
                <SimpleGrid columns={3}
                    py="6"
                    spacing={10}>
                    <Input id='name' type='text' placeholder="Name*" />
                    <Input id='email' type='email' placeholder="Email*" />
                    <Input id='telphone' type='tel' placeholder="Phone*" />
                </SimpleGrid>

                <Textarea id='telphone' type='tel' placeholder="Tell us about your project..." />
                <Button my="6"
                    color={"white"}
                    backgroundColor={"#cd1337"}
                    py="6"
                    px="10"
                >Submit</Button>
            </FormControl>

        </Box>
    )
}

export default ContactForm