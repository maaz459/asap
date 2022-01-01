// components/Layout.js

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, navbar, footer }: any) {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const Checkscroll = () => setScrollTop(document.documentElement.scrollTop);
    window.addEventListener("scroll", Checkscroll);
    Checkscroll();
    return () => window.removeEventListener("scroll", Checkscroll);
  }, []);

  return (
    <>
      <Navbar data={navbar} scrollTop={scrollTop} />
      <Box minH="calc(100vh - 96px)" bg="bgcolor.100">
        <main>{children}</main>
      </Box>
      <Footer navbar={navbar} footer={footer}/>
    </>
  );
}
