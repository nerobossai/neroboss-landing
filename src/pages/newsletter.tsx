import { Spinner, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Index() {
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("newsletter")) {
      router.push("/?show=newsletter");
    }
  }, [router]);

  return (
    <>
      <Header />
      <Stack minHeight="70vh" justifyContent="center" alignItems="center">
        <Spinner />
      </Stack>
      <Footer />
    </>
  );
}

export default Index;
