import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import styled from "styled-components";

import { CA } from "@/constants";
import { Paths } from "@/constants/paths";
import { trackVisitor } from "@/modules/Home/services/analytics";

const Container = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  margin-top: 5rem;
  .heading-home {
    background: linear-gradient(180deg, #ffffff 0%, #bababa 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Inter;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -2px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;
const HomeSection2 = () => {
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
    <Container>
      <Stack
        alignItems="center"
        textAlign="center"
        spacing="1rem"
        // backdropFilter={"blur(10px)"}
      >
        <Text
          className="heading-home"
          fontFamily="Inter"
          fontSize={["25px", "25px", "36px"]}
        >
          Launch AI agents directly from X
        </Text>
        <Text size="20px" color="white" opacity="0.5" maxWidth="60%">
          Tweet to launch AI agent - NeroSDK automatically creates an AI Agent
          with your description and launches a Token on Solana with a bonding
          curve
        </Text>
        <HStack spacing="1rem" marginTop="0.5rem">
          <Button
            borderRadius="2rem"
            fontSize="14px"
            bgGradient="linear-gradient(270deg, #000000 0%, #232323 100%)"
            color="white"
            fontWeight="600"
            _hover={{
              opacity: 0.8,
            }}
            rightIcon={<FaXTwitter />}
            onClick={() => window.open(Paths.app, "_blank")}
            borderLeftWidth="1px"
            borderColor="rgba(116, 116, 116, 0.8)"
          >
            TRY ON
          </Button>
        </HStack>
        <Box
          width={["80vw", "50vw"]}
          height={["60vh", "40vh"]}
          marginTop="1rem"
        >
          <iframe
            width="100%"
            height="100%"
            title="neroboss"
            src="https://video.twimg.com/ext_tw_video/1867479944164720640/pu/vid/avc1/1280x720/ZVm9pxdRVH-Xvi0u.mp4?tag=12"
            allowFullScreen
          />
        </Box>
      </Stack>
    </Container>
  );
};
export default HomeSection2;
