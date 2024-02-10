import React from 'react';
import SiteMetadata from '@theme-original/SiteMetadata';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';


export default function SiteMetadataWrapper(props) {
 
  const image = '/img/generated/single'+ useLocation().pathname + ".png"
  return (
    <>
      <SiteMetadata {...props} />
      <Head>
	      <meta name={"og:image"} content={image} />
	      <meta property={"og:image"} content={image} />
	      <meta name={"twitter:image"} content={image} />
      </Head>
    </>
  );
}
