import {
  HStack,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

import { AllBlogs } from "@/constants/blogs";
// import Splashscreen from "@/components/Splashscreen";
import { Meta } from "@/layouts/Meta";
import Main from "@/templates/Main";

const Container = styled.div`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  .heading-home {
    background: linear-gradient(270deg, #000000 51.69%, #666666 116.49%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 60px;
    font-weight: 600;
    padding-bottom: 2rem;
    line-height: 64.2px;
    letter-spacing: 0.03em;
    text-align: center;
  }
  .bg-home {
    position: absolute;
  }
`;
const Index = () => {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("home");
  }, []);

  return (
    <>
      <Head>
        <title>Abhishek Vishwakarma | Blogs</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="My all blogs | read them all!" />

        <meta property="og:title" content="Abhishek Vishwakarma | Blogs" />

        <meta
          property="og:description"
          content="My all blogs | read them all!"
        />

        <meta property="og:image" content="/share.jpg" />
      </Head>

      {/* <Splashscreen /> */}

      <Main
        noHeaderOnMobile
        // @ts-ignore
        meta={
          <Meta
            title="Abhishek Vishwakarma | Blogs"
            description="My all blogs | read them all!"
          />
        }
      >
        <Container>
          <Stack spacing="1rem">
            <Text
              className="heading-home"
              //   fontFamily="sfpt"
              fontFamily="Beth Ellen"
              color="linear-gradient(270deg, #000000 51.69%, #666666 116.49%)"
            >
              Blogs
            </Text>
            <UnorderedList
              textAlign={["center", "start"]}
              styleType={["", "initial"]}
            >
              {AllBlogs.map((d) => {
                return (
                  <ListItem key={d.name}>
                    <Link href={d.path}>
                      <Text
                        fontFamily="sfpt"
                        color={d.coming_soon ? "lightgray" : "gray"}
                        fontSize="20px"
                      >
                        {d.name}
                      </Text>
                    </Link>
                  </ListItem>
                );
              })}
            </UnorderedList>
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
