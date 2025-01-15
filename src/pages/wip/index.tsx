import "react-phone-input-2/lib/style.css";

import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

import Seo from "@/components/Seo";
// import Splashscreen from "@/components/Splashscreen";
import { Meta } from "@/layouts/Meta";
import Main from "@/templates/Main";

const Container = styled.div`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  .heading-home {
    background: linear-gradient(270deg, #000000 51.69%, #666666 116.49%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 60px;
    font-weight: 600;
    padding-bottom: 1rem;
    line-height: 64.2px;
    letter-spacing: 0.03em;
    text-align: center;
  }
  .bg-home {
    position: absolute;
  }
`;
const Index = () => {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("home");
  }, []);

  return (
    <>
      <Seo />

      {/* <Splashscreen /> */}

      <Main
        noHeaderOnMobile
        // @ts-ignore
        meta={
          <Meta
            title="Abhishek Vishwakarma | Software Engineer"
            description="Welcome to my website, folks!"
          />
        }
      >
        <Container>
          <Stack alignItems="center" textAlign="center" spacing="1rem">
            <Text
              className="heading-home"
              fontFamily="sfpt"
              color="linear-gradient(270deg, #000000 51.69%, #666666 116.49%)"
            >
              work in progress
            </Text>
            <Text fontFamily="Beth Ellen" color="gray" fontSize="20px">
              I will make this page as soon as i get some time
            </Text>
          </Stack>
        </Container>
        <HStack
          className="bg-home"
          position="fixed"
          bottom={0}
          width="100%"
          zIndex={-10}
          justifyContent="space-between"
        >
          <Image src="/assets/imgs/home-left.png" alt="home-left" />
          <Image src="/assets/imgs/home-right.png" alt="home-right" />
        </HStack>
      </Main>
    </>
  );
};
export default Index;
