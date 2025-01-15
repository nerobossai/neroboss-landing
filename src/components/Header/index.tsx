import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { Paths } from "@/constants/paths";

import { Logo } from "../Svgs/Logo";

const Container = styled.header`
  width: 100%;
`;

function Header() {
  const router = useRouter();
  return (
    <Container>
      <Stack
        direction={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems="center"
        paddingTop="0rem"
        paddingLeft="2rem"
        paddingRight="2rem"
        paddingBottom="2rem"
      >
        <Link href="/">
          <Logo />
        </Link>
        <HStack spacing={8} color="primary.600">
          <Link href={Paths.wip}>
            <Text>Experiences</Text>
          </Link>
          <Link href={Paths.blogs.landing}>
            <Text>Blogs</Text>
          </Link>
          <Link href={Paths.connect} target="_blank">
            <Text>Let's Talk</Text>
          </Link>
          {/* <Link href={Paths.github} target="_blank">
            <Text>GitHub</Text>
          </Link> */}
        </HStack>
      </Stack>
    </Container>
  );
}

export default Header;
