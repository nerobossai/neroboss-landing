import {
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

import { Meta } from "@/layouts/Meta";
import Main from "@/templates/Main";

const Container = styled.div`
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
    font-weight: 600;
    letter-spacing: 0.03em;
    text-align: center;
  }
  .bg-home {
    position: absolute;
  }
`;

const BlogContainer = styled.div`
  /* padding: 5rem;
  padding-top: 2rem; */
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

        <meta
          name="description"
          content="What It's like to be a Founding Engineer"
        />

        <meta property="og:title" content="Abhishek Vishwakarma | Blogs" />

        <meta
          property="og:description"
          content="What It's like to be a Founding Engineer"
        />

        <meta property="og:image" content="/share.jpg" />
      </Head>

      <Main
        noHeaderOnMobile
        // @ts-ignore
        meta={
          <Meta
            title="Abhishek Vishwakarma | Blogs"
            description="What It's like to be a Founding Engineer"
          />
        }
      >
        <Container>
          <Stack alignItems="center" textAlign="center" spacing="1rem">
            <Text
              className="heading-home"
              fontFamily="sfpt"
              color="linear-gradient(270deg, #000000 51.69%, #666666 116.49%)"
              fontSize={["40px", "40px", "60px"]}
            >
              What it’s like to be a “Founding Engineer”
            </Text>
          </Stack>
        </Container>
        <BlogContainer>
          <Stack
            spacing={3}
            paddingLeft={["2rem", "2rem", "5rem"]}
            paddingRight={["2rem", "2rem", "5rem"]}
            paddingTop={["1rem"]}
            paddingBottom={["1rem"]}
          >
            <Text>
              Hello, I'm Abhishek, a Founding Engineer at Martian, and I'm
              excited to share my experience working on the cutting edge of
              crypto wallet technology. Our company, Martian, is revolutionizing
              the way people interact with cryptocurrencies, and being part of
              this journey has been nothing short of exhilarating.
            </Text>

            <Heading>The Remote Work Revolution</Heading>

            <Text>
              One of the most unique aspects of working at Martian is our fully
              remote setup. As a founding engineer, I have the flexibility to
              work from home, collaborating with team members spread across
              different time zones. This global approach allows us to leverage
              diverse perspectives and work around the clock, quite literally!
            </Text>

            <Heading>Speed is Our Middle Name</Heading>

            <Text>
              At Martian, we pride ourselves on our ability to launch features
              at an unprecedented pace. It's not uncommon for us to
              conceptualize, develop, and deploy new features within a 24-hour
              window. This rapid iteration cycle keeps us at the forefront of
              innovation in the crypto wallet space.
            </Text>

            <Heading> My Role as a Founding Engineer </Heading>

            <Text>
              As a founding engineer at Martian, my responsibilities extend far
              beyond just coding. A significant part of my role involves
              managing our entire cloud infrastructure, ensuring its
              scalability, and overseeing the system design. This includes:
            </Text>
            <UnorderedList>
              <Text>
                - <b>Building from the Ground Up:</b> As a founding engineer, I
                have the unique opportunity to shape the technical foundation of
                Martian. The decisions we make today will influence the
                company's trajectory for years to come.
              </Text>
              <Text>
                - <b>Wearing Multiple Hats:</b> On any given day, I might be
                coding, brainstorming new features, or even helping with product
                decisions. The variety keeps things exciting and allows for
                rapid professional growth.
              </Text>
              <Text>
                - <b>Constant Learning:</b> The crypto space evolves at
                breakneck speed. Staying updated with the latest technologies
                and market trends is not just encouraged—it's essential.
              </Text>
              <Text>
                - <b>Direct Impact:</b> Every line of code I write has a direct
                impact on our product and, by extension, our users. It's
                incredibly fulfilling to see your work make a difference in
                real-time.
              </Text>
              <Text>
                - <b>Cloud Infrastructure Management:</b> I'm responsible for
                architecting and maintaining our robust cloud infrastructure,
                ensuring it can handle our rapid growth and high-volume
                transactions.
              </Text>
              <Text>
                - <b>Scalability Solutions:</b> As we expand, I work on
                implementing scalable solutions that allow our platform to grow
                seamlessly without compromising performance.
              </Text>
              <Text>
                - <b>System Design:</b> I'm deeply involved in the overall
                system design, making crucial decisions that shape our technical
                architecture and future scalability.
              </Text>
            </UnorderedList>
            <Text>
              Perhaps most importantly, I play a key role in ensuring the
              security of our platform:
            </Text>
            <UnorderedList>
              <Text>
                - <b>End-to-End Wallet Security:</b> I manage the security of
                our wallet from end to end, implementing robust measures to
                protect our users' assets and data.
              </Text>
              <Text>
                - <b>Security Protocols:</b> This involves designing and
                implementing advanced security protocols, regular security
                audits, and staying ahead of potential threats in the crypto
                space.
              </Text>
            </UnorderedList>
            <Text>
              My role as a founding engineer at Martian is multifaceted and
              challenging, but it's incredibly rewarding to know that my work
              directly contributes to the safety and reliability of our platform
              for all our users.
            </Text>

            <Heading> Navigating the Time Zone Tango</Heading>

            <Text>
              Working with a team spread across different time zones presents
              its own set of challenges and opportunities. We've had to become
              masters of asynchronous communication, utilizing tools and
              practices that allow for seamless collaboration regardless of when
              team members are online.
            </Text>

            <Heading> The Thrill of Rapid Development </Heading>

            <Text>
              Our ability to launch features within 24 hours is both thrilling
              and demanding. It requires a delicate balance of agility,
              precision, and teamwork. We've honed our processes to minimize
              bureaucracy without sacrificing quality, allowing us to respond
              quickly to market demands and user feedback.
            </Text>

            <Text>
              Until next time, happy coding and may your crypto wallets always
              be secure!
            </Text>
            <Stack marginTop="1rem">
              <Text fontFamily="Beth Ellen">Abhishek Vishwakarma</Text>
              <Text fontFamily="sfpt" fontSize="13px">
                10<sup>th</sup> September, 2024
              </Text>
            </Stack>
          </Stack>
        </BlogContainer>
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
            opacity="0.3"
          />
          <Image
            src="/assets/imgs/home-right.png"
            alt="home-right"
            opacity="0.3"
          />
        </HStack>
      </Main>
    </>
  );
};
export default Index;
