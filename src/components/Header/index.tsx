import { Button, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { Paths } from "@/constants/paths";

import { StarIcon } from "../Svgs/Star";

const Container = styled.header`
  width: 100%;
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
`;

function Header() {
  const router = useRouter();
  return (
    <Container>
      <Stack
        direction={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems="center"
        paddingTop="1rem"
        paddingLeft="2rem"
        paddingRight="2rem"
        paddingBottom="2rem"
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
