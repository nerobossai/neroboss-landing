import { GoogleAnalytics } from "@next/third-parties/google";
import type { ReactNode } from "react";
import React from "react";
import styled from "styled-components";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Container = styled.div<{ $noHeaderOnMobile?: boolean }>`
  width: 100%;
  height: 100%;
  // @media (max-width: 767px) {
  //   .dual-header {
  //     display: ${(props) => (props.$noHeaderOnMobile ? "none" : "block")};
  //   }
  // }
`;

// const MainArea = styled.div<{ $bgcolor?: string; $nopadding?: boolean }>`
//   background-color: ${(props) => props.$bgcolor || defaultBgColor};
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   min-height: 100vh;
//   padding: ${(props) => (props.$nopadding ? "0px" : "33px 42px")};
//   padding-top: ${(props) => (props.$nopadding ? "0px" : "4.8rem")};
//   padding-bottom: ${(props) => (props.$nopadding ? "0px" : "1rem")};
// `;

interface IPropType {
  heading?: string;
  bgcolor?: string;
  meta?: JSX.Element;
  children?: ReactNode;
  nopadding?: boolean;
  nofooter?: boolean;
  nomain?: boolean;
  noHeaderOnMobile?: boolean;
}

const Main = (props: IPropType) => {
  const { children, bgcolor, nopadding, nofooter, nomain, noHeaderOnMobile } =
    props;

  return (
    <Container $noHeaderOnMobile={noHeaderOnMobile}>
      <GoogleAnalytics gaId="G-7KQEXTEH06" />
      <Header />
      {children}
      {nofooter ? null : <Footer />}
    </Container>
  );
};

export default Main;
