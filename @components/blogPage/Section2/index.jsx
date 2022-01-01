import {
    Box,
    Flex,
    Heading,
    Img,
    Link,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import * as React from 'react';
// import { BsClockFill } from 'react-icons/bs';
import moment from 'moment'
import getImageLink from './../../../utils/getImageLink';
const Blog = (props) => {
    const { title, id, description, media, author, category,date } = props
    const router = useRouter()
    var newDate = new Date(date);
    return (
        <LinkBox
            as="article"
            bg={{ sm: mode('white', 'gray.700') }}
            shadow={{ sm: 'base' }}
            rounded={{ sm: 'md' }}
            overflow="hidden"
            transition="all 0.2s"
            _hover={{ shadow: { sm: 'lg' } }}
        >
            <Flex direction="column" onClick={() => {
                router.push(`blogs/${id}`)
            }}>
                <Img height="60" objectFit="cover" alt={title} src={media} />
                <Flex direction="column" px={{ sm: '6' }} py="5">
                        <Text
                        fontSize={"10px"}
                        color={"agray.700"}
                        my={2}>
                           {moment(newDate).format('MMMM DD, YYYY') }
                        </Text>
                        <Heading as="h3" size="sm" mb="2"
                            color="ared.100"
                            fontSize={"20px"}
                            lineHeight="">
                            <LinkOverlay href={`blogs/${id}`}>{title}</LinkOverlay>
                        </Heading>
                    
                    <Text noOfLines={2} mb="8" color={"agray.700"}>
                        {description}
                    </Text>
                </Flex>
            </Flex>
        </LinkBox>
    )
}

const BlogCard = ({blogs}) => {
    return (
        <Box as="section" >
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" >

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing="5" mb="10">
                   { blogs && blogs.slice(0,3).map((blog,index)=>{
                        return <Blog
                        key={index}
                        category={blog?.attributes?.category}
                        media={getImageLink(blog?.attributes?.thumbnail?.data?.attributes?.url)}
                        title={blog?.attributes?.title}
                        description={blog?.attributes?.excerpt}
                        id={blog?.id}
                        author={blog?.attributes?.bloggerName}
                        date={blog?.attributes?.date}
                    />
                    })
                }
                </SimpleGrid>
                {/* <Link fontSize="xl" fontWeight="bold" color={mode('blue.600', 'blue.400')}>
                    <span>View all articles</span>
                    <Box as={BsArrowRight} display="inline-block" ms="2" />
                </Link> */}
            </Box>
        </Box>
    )
}
export default BlogCard