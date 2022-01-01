import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../@components/banner/Banner";
import Blogs from "../@components/blogs/Blogs";
import Clients from "../@components/clients/Clients";
import Companies from "../@components/company/Companies";
import ContactUs from "../@components/contact/ContactUs";
import Stories from "../@components/stories/Stories";
import WhatWeDo from "../@components/whatWeDo/WhatWeDo";

import client from "../apollo-client";
import { blogs, footer, homeData, navbar } from "./../graphql/queries";

const Home: NextPage = (props: any) => {
  const { attributes: data } = props.home;
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        heading={data?.banner?.heading}
        button={data?.banner?.button}
        text={data?.banner?.text}
        image={data?.banner?.image?.data?.attributes?.url}
      />
      <WhatWeDo
        supportHeading={data?.supportHeading}
        supportText={data?.supportText}
        button={data?.supportButton}
        heading={data?.weDoHeading}
        functionalities={data?.functionalities}
      />
      <Stories heading={data?.clientStoriesText} stories={data?.clientStories} />
      <Clients heading={data?.reviewText}  reviews={data?.reviews} />
      <Companies heading={data?.awardsText} awards={data?.awards}  />
      <Blogs data={props?.blogs} number={3}  />
      <ContactUs
          heading={props?.home?.attributes?.contactTitle}
          text={props?.home?.attributes?.contactText}
          name={props?.home?.attributes?.contact[0].name}
          email={props?.home?.attributes?.contact[0].email}
          phone={props?.home?.attributes?.contact[0].phone}
          tellMore={props?.home?.attributes?.contact[0].tellMore}
        />
    </Box>
  );
};

export async function getServerSideProps() {
  const { data: homePageData } = await client.query({
    query: homeData,
  });
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
      home: homePageData.home.data,
      navbar: navbarData.navbar.data,
      footer: footerData.footer.data,
      blogs: blogsData.blogs.data,

    },
  };
}

export default Home;
