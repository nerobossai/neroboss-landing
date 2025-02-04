import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

import { Paths } from "@/constants/paths";

const Container = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const toast = useToast();

  const subscribe = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.post(
        "https://api.neroboss.ai/public/subscribe",
        {
          email,
        },
      );

      console.log(resp);
      toast({
        title: resp.data.status === "success" ? "Subscribed" : "Error",
        description: resp.data.message,
        status: resp.data.status === "success" ? "success" : "error",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        description: "Sorry something went wrong!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          <Stack mb="1rem" width={["100vw", "100%", "20vw"]} ml="2rem">
            <Text opacity={0.5}>Get Neroboss Updates</Text>
            <InputGroup>
              <Input
                pr="4.5rem"
                placeholder="Your Email"
                fontSize={13}
                colorScheme="gray"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputRightElement width="6rem">
                <Button fontSize={13} isLoading={isLoading} onClick={subscribe}>
                  Subscribe
                </Button>
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
