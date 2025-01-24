import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaClipboardCheck, FaRegCopy } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

import Seo from "@/components/Seo";
import { CA } from "@/constants";
import { Paths } from "@/constants/paths";
// import Splashscreen from "@/components/Splashscreen";
import { Meta } from "@/layouts/Meta";
import { trackVisitor } from "@/modules/Home/services/analytics";
import Main from "@/templates/Main";
import { AppConfig } from "@/utils/AppConfig";

const Container = styled.div`
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: black;
  .heading-home {
    background: linear-gradient(180deg, #ffffff 0%, #bababa 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 64px;
    font-weight: 700;
    line-height: 77.45px;
    letter-spacing: -3.686000108718872px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
  /* .read-docs-btn {
    border-image: linear-gradient(180deg, #FFFFFF 0%, #999999 100%) 1;
  } */
  .bg-home {
    position: absolute;
  }
`;
const Index = () => {
  const router = useRouter();
  const [showTick, setShowTick] = useState(false);

  useEffect(() => {
    trackVisitor();
    document.body.classList.add("home");
  }, []);

  const copyCa = () => {
    navigator.clipboard.writeText(CA);
    setShowTick(true);
    setTimeout(() => {
      setShowTick(false);
    }, 500);
  };

  return (
    <>
      <Seo />

      {/* <Splashscreen /> */}

      <Main
        noHeaderOnMobile
        // @ts-ignore
        meta={
          <Meta title={AppConfig.title} description={AppConfig.description} />
        }
      >
        <Stack
          backgroundColor="#2b373d"
          borderRadius="100rem"
          width="30vw"
          height="60vh"
          position="absolute"
          left="35%"
          filter="blur(128px)"
          zIndex={-1000}
        />
        <Container>
          <Stack
            alignItems="center"
            textAlign="center"
            spacing="1rem"
            // backdropFilter={"blur(10px)"}
          >
            <HStack
              backgroundColor="white"
              padding="0.5rem"
              borderRadius="2rem"
              paddingLeft="1rem"
              paddingRight="1rem"
              marginBottom="2rem"
            >
              <Text>CA: {CA}</Text>
              <Box
                onClick={copyCa}
                _hover={{
                  opacity: 0.5,
                }}
              >
                {showTick ? <FaClipboardCheck color="green" /> : <FaRegCopy />}
              </Box>
            </HStack>
            <Text
              className="heading-home"
              fontFamily="Inter"
              fontSize={["40px", "40px", "60px"]}
            >
              Open Source Agent
              <br />
              Infrastructure on X
            </Text>
            <Text size="20px" width={400} color="white" opacity="0.5">
              Launch Autonomous Agents with a tweet and <br /> set them free on
              X
            </Text>
            <HStack spacing="1rem" marginTop="0.5rem">
              <Button
                borderRadius="2rem"
                fontSize="14px"
                fontWeight="400"
                rightIcon={<IoIosArrowForward />}
                onClick={() => window.open(Paths.app, "_blank")}
              >
                Enter App
              </Button>
              <Button
                className="read-docs-btn"
                fontSize="14px"
                fontWeight="400"
                color="whitesmoke"
                backgroundColor="transparent"
                _hover={{
                  opacity: 0.8,
                }}
                borderWidth="1px"
                borderRadius="2rem"
                rightIcon={<IoIosArrowForward />}
                onClick={() => window.open(Paths.docs, "_blank")}
              >
                Read Docs
              </Button>
            </HStack>
          </Stack>
        </Container>
        {/* <HomeSection2 /> */}
      </Main>
    </>
  );
};
export default Index;
