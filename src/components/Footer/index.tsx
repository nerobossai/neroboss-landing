import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
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
      <HStack
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        fontSize="13px"
        flexDirection={["column", "row", "row"]}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          paddingLeft={["0rem", "2rem", "2rem"]}
          paddingBottom={["1rem", "2rem", "2rem"]}
        >
          {/* <ServiceStatus /> */}
          <Stack mb="1rem" width="20vw" ml="2rem">
            <Text opacity={0.5}>Get Neroboss Updates</Text>
            <InputGroup>
              <Input
                pr="4.5rem"
                placeholder="Your Email"
                fontSize={13}
                colorScheme="gray"
                type="email"
              />
              <InputRightElement width="6rem">
                <Button fontSize={13}>Subscribe</Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Text opacity={0.5}>
            Copyright © All rights by Keygen Labs, Inc.
          </Text>
        </Stack>
        <HStack
          paddingRight={["0rem", "2rem", "2rem"]}
          flexDirection={["column", "row", "row"]}
          spacing={["2rem", "5rem", "5rem"]}
          alignItems="flex-start"
        >
          <Stack>
            <Text opacity={0.5}>COMMUNITY</Text>
            <Link href={Paths.twitter} target="_blank">
              <Text>X</Text>
            </Link>
            <Link href={Paths.telegram} target="_blank">
              <Text>Telegram</Text>
            </Link>
            <Link href={Paths.github} target="_blank">
              <Text>GitHub</Text>
            </Link>
          </Stack>
          <Stack>
            <Text opacity={0.5}>LINKS</Text>
            <Link href={Paths.raydium} target="_blank">
              <Text>Buy NEROBOSS</Text>
            </Link>
            <Link href={Paths.app} target="_blank">
              <Text>Open Nerocity</Text>
            </Link>
            <Link href={Paths.docs} target="_blank">
              <Text>Read Docs</Text>
            </Link>
            <Link href={Paths.github} target="_blank">
              <Text>Star on GitHub</Text>
            </Link>
          </Stack>
          {/* <Stack>
            <Text opacity={0.5}>LEGAL</Text>
            <Link href={Paths.twitter} target="_blank">
              <Text>Terms of Service</Text>
            </Link>
            <Link href={Paths.telegram} target="_blank">
              <Text>Privacy Policy</Text>
            </Link>
          </Stack> */}
        </HStack>
      </HStack>
    </Container>
  );
}

export default Footer;
