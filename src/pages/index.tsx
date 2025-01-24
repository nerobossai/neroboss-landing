import {
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

import Seo from "@/components/Seo";
// import Splashscreen from "@/components/Splashscreen";
import { Meta } from "@/layouts/Meta";
import { trackVisitor } from "@/modules/Home/services/analytics";
import Main from "@/templates/Main";

const Container = styled.div`
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  .bg-home {
    position: absolute;
  }
`;
const Index = () => {
  const router = useRouter();

  useEffect(() => {
    trackVisitor();
    document.body.classList.add("home");
  }, []);

  return (
    <>
      <Seo />

      {/* <Splashscreen /> */}

      <Main
        noHeaderOnMobile
        // @ts-ignore
        meta={
          <Meta
            title="Abhishek Vishwakarma | Software Engineer"
            description="Welcome to my website, folks!"
          />
        }
      >
        <Container>
          <Stack alignItems="center" textAlign="center" spacing="1rem">
            <Text
              className="heading-home"
              fontFamily="Inter"
              fontSize={["40px", "40px", "60px"]}
            >
              Open Source Agent
              <br />
              Infrastructure on X
            </Text>
            <List>
              <UnorderedList styleType="" spacing={3}>
                <ListItem>
                  <Text fontFamily="sfpt" color="gray" fontSize="20px">
                    Architect of{" "}
                    <Link href="https://neroboss.ai" target="_blank">
                      <Text as="span" color="#2c4db8">
                        Neroboss AI
                      </Text>
                    </Link>
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="sfpt" color="gray" fontSize="20px">
                    Founding Engineer & Head of Engineering {"@ "}
                    <Link href="https://martianwallet.xyz" target="_blank">
                      <Text as="span" color="#2c4db8">
                        Martian
                      </Text>
                    </Link>
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="sfpt" color="gray" fontSize="20px">
                    Scaling Martian for Millions of Users
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="sfpt" color="gray" fontSize="20px">
                    {"Working on Web3 <> AI DApps"}
                  </Text>
                </ListItem>
                {/* <ListItem>
                  <Text fontFamily="sfpt" color="gray" fontSize="20px">
                    I Code in NodeJS, Python, GoLang, Rust and Sometimes in React/NextJS
                  </Text>
                </ListItem> */}
                <ListItem>
                  <Text fontFamily="sfpt" color="gray" fontSize="20px">
                    Open Source Contributor
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="sfpt" color="gray" fontSize="20px">
                    Databases Enthusiast
                  </Text>
                </ListItem>
              </UnorderedList>
            </List>
          </Stack>
        </Container>
        <HStack
          className="bg-home"
          position="fixed"
          bottom={0}
          width="100%"
          zIndex={-10}
          justifyContent="space-between"
        >
          <Image
            src="/assets/imgs/home-left.png"
            alt="home-left"
            opacity="0.5"
          />
          <Image
            src="/assets/imgs/home-right.png"
            alt="home-right"
            opacity="0.5"
          />
        </HStack>
      </Main>
    </>
  );
};
export default Index;
