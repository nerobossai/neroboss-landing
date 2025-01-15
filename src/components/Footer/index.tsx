import { Center, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

import { Paths } from "@/constants/paths";

const Container = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

function Footer() {
  return (
    <Container>
      <Center width="100%">
        <HStack spacing={8} color="primary.600">
          <Link href={Paths.twitter} target="_blank">
            <Text>Twitter</Text>
          </Link>
          <Link href={Paths.linkedin} target="_blank">
            <Text>LinkedIn</Text>
          </Link>
          <Link href={Paths.github} target="_blank">
            <Text>GitHub</Text>
          </Link>
        </HStack>
      </Center>
    </Container>
  );
}

export default Footer;
