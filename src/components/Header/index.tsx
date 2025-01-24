import { Button, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { Paths } from "@/constants/paths";

import { StarIcon } from "../Svgs/Star";

const Container = styled.header`
  width: 100%;
  padding-left: 10rem;
  padding-right: 10rem;
  border-bottom-width: 1px;
  border-bottom-color: #2b2b2e;
  .nerologo {
    font-family: Space Mono;
    font-size: 20px;
    font-weight: 700;
    line-height: 62.72px;
    letter-spacing: -1px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
  .divider-main {
    background: linear-gradient(
        217deg,
        rgba(0, 0, 0, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(
        217deg,
        rgba(255, 255, 255, 0.6),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(31, 31, 31, 1), rgba(0, 255, 0, 0) 70.71%);
    position: absolute;
    height: 100%;
    width: 1px;
    z-index: -1000;
  }
  .divider-right {
    right: 5rem;
  }
  .divider-last {
    background: linear-gradient(
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 0, 0, 0) 25%,
      rgba(255, 0, 0, 0) 50%,
      rgba(255, 0, 0, 0) 75%,
      rgba(255, 0, 0, 0) 100%
    );
  }
`;

function Header() {
  const router = useRouter();
  return (
    <Container>
      <div className="divider-main" style={{ left: "5rem" }} />
      <div className="divider-main divider-last" style={{ left: "10rem" }} />
      <div className="divider-main divider-right" />
      <div
        className="divider-main divider-right divider-last"
        style={{ right: "10rem" }}
      />
      <Stack
        direction={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems="center"
        paddingTop="1rem"
        paddingLeft="2rem"
        paddingRight="2rem"
        paddingBottom="1rem"
      >
        <Link href="/">
          {/* <Logo /> */}
          <Text className="nerologo">Neroboss</Text>
        </Link>
        <HStack spacing={3} color="primary.600">
          <Button
            borderRadius="2rem"
            fontWeight={600}
            onClick={() => window.open(Paths.raydium, "_blank")}
          >
            Buy NEROBOSS
          </Button>
          <Button
            borderRadius="2rem"
            leftIcon={<StarIcon />}
            borderWidth="1px"
            borderColor="white"
            backgroundColor="#171719"
            color="white"
            fontWeight={500}
            _hover={{
              opacity: 0.8,
            }}
            onClick={() => window.open(Paths.github, "_blank")}
          >
            Star on Github
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
}

export default Header;
