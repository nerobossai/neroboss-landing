import { Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { CA } from "@/constants";
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
const HomeSection3 = () => {
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
          A plethora of autonomous features
        </Text>
        <Text
          size="20px"
          color="white"
          opacity="0.5"
          maxWidth={["80%", "100%"]}
        >
          Empower your journey with scalable tools to build, deploy, and manage
          AI agents effortlessly.
        </Text>
        <Image
          width={["80vw", "80vw", "60vw"]}
          src="/assets/imgs/features.png"
          alt="features"
        />
      </Stack>
    </Container>
  );
};
export default HomeSection3;
