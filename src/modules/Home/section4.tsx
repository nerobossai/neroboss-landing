import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { StarIcon } from "@/components/Svgs/Star";
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
const HomeSection4 = () => {
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
      <HStack
        alignItems="center"
        textAlign="center"
        spacing="1rem"
        // backdropFilter={"blur(10px)"}
      >
        <Image
          src="/assets/imgs/boxes.png"
          alt="boxes"
          draggable={false}
          hideBelow={["sm"]}
        />
        <Stack justifyContent="center" alignItems="center">
          <Text
            className="heading-home"
            fontFamily="Inter"
            fontSize={["25px", "25px", "36px"]}
          >
            Multi Framework Integration
          </Text>
          <Text
            size="20px"
            color="white"
            opacity="0.5"
            maxWidth={["80%", "80%"]}
          >
            Integrated with some of the best agent frameworks - Solana Agent
            Kit, Zerepy, Eliza & others
          </Text>
          <HStack
            spacing={3}
            color="primary.600"
            marginTop="1rem"
            flexDirection={["column", "row", "row"]}
          >
            <Button
              borderRadius="2rem"
              fontSize="14px"
              bgGradient="linear-gradient(270deg, white 0%, white 100%)"
              color="black"
              fontWeight="600"
              _hover={{
                opacity: 0.8,
              }}
              onClick={() => window.open(Paths.docs, "_blank")}
              borderLeftWidth="1px"
              borderColor="rgba(116, 116, 116, 0.8)"
            >
              Read NeroDocs
            </Button>
            <Button
              borderRadius="2rem"
              fontSize="14px"
              bgGradient="linear-gradient(270deg, #000000 0%, #232323 100%)"
              color="white"
              fontWeight="600"
              _hover={{
                opacity: 0.8,
              }}
              rightIcon={<StarIcon />}
              onClick={() => window.open(Paths.app, "_blank")}
              borderLeftWidth="1px"
              borderColor="rgba(116, 116, 116, 0.8)"
            >
              Star on Github
            </Button>
          </HStack>
        </Stack>
        <Image
          src="/assets/imgs/boxes.png"
          alt="boxes"
          draggable={false}
          hideBelow={["sm"]}
        />
      </HStack>
    </Container>
  );
};
export default HomeSection4;
