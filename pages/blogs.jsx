import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Section1 from "../@components/blogPage/Section1";
import client from "../apollo-client";
import { footer, navbar, blogs } from "./../graphql/queries";

const Blogs = (props) => {
  const { blogs: data } = props;
  return (
    <Box>
      <Head>
        <title>Blogs page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section1 blogs={data} />
    </Box>
  );
};
export async function getServerSideProps() {
  const { data: navbarData } = await client.query({
    query: navbar,
  });
  const { data: footerData } = await client.query({
    query: footer,
  });
  const { data: blogsData } = await client.query({
    query: blogs,
  });
  return {
    props: {
      navbar: navbarData.navbar.data,
      footer: footerData.footer.data,
      blogs: blogsData.blogs.data,
    },
    
  };
}
export default Blogs;
