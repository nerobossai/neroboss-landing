import Head from "next/head";
import React from "react";

function Seo() {
  return (
    <Head>
      <title>Abhishek Vishwakarma | Software Engineer</title>

      <link rel="icon" href="/favicon.ico" />

      <meta
        name="description"
        content="Software Engineer building future tech | Make startups go zero to one and beyond"
      />

      <meta
        property="og:title"
        content="Abhishek Vishwakarma | Software Engineer"
      />

      <meta
        property="og:description"
        content="Software Engineer building future tech | Make startups go zero to one and beyond"
      />

      <meta property="og:image" content="/share.jpg" />
    </Head>
  );
}

export default Seo;
