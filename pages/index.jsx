import React from 'react'
import Head from 'next/head'

import theme from '../src/styles/theme'
import { Title, Container, Link, Links, TitleContainer, ProfileImage } from '../src/styles/index'
const Home = () => {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Pedrinho Lemes</title>

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={theme.primary} />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Container>
        <TitleContainer>
          <ProfileImage src="https://avatars3.githubusercontent.com/u/59403164?s=460&u=80f2478328257db74c486e8e2fd8d81f5d98ddf4&v=4" />
          <Title>Pedrinho Lemes</Title>
        </TitleContainer>
        <Links>
          <Link
            href="https://twitter.com/pedrinho_lemes"
            target="_blank"
          >
            Twitter
        </Link>
          <Link
            href="https://instagram.com/pedrinho.lemes"
            target="_blank"
          >
            Instagram
        </Link>
          <Link
            href="https://github.com/pedrinholemes"
            target="_blank"
          >
            Github
        </Link>
          <Link
            href="https://facebook.com/pedrinholemes.f"
            target="_blank"
          >
            Facebook
        </Link>
          <Link
            href="https://app.rocketseat.com.br/me/pedrinholemes"
            target="_blank"
          >
            Rocketseat
        </Link>
        </Links>
      </Container>
    </>
  )
};

export default Home;
