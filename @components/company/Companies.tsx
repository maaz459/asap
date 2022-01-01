import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import getImageLink from './../../utils/getImageLink';

interface IProps {
  heading?: string;
  awards?: any;
}

export default function Companies({ heading, awards }: IProps) {
  return (
    <Box pb={20}>
      <Box bg="white">
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Box py={20}>
            <Text
              color="agray.100"
              fontSize={["lg", "xl", "xl", "2xl", "3xl"]}
              fontWeight="bold"
              textAlign="center"
              pb={10}
            >
              {heading}
            </Text>
            <Flex justifyContent="space-between" wrap="wrap" alignItems="center">
              {awards?.map((x: any, index: any) => (
                <Box key={index} m={4}>
                  <Image src={ getImageLink(x.image?.data?.attributes?.url) || ""} w="80px" />
                </Box>
              ))}
            </Flex>
            {/* Header end*/}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
