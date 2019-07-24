import React from "react";
import styled from "styled-components";
import SLPSBanner from "Images/slps-project-banner.webp";

function SLPS() {
  return (
    <div>
      <BannerContainer>
        <BannerImage src={SLPSBanner} />
      </BannerContainer>
      <Container>
        <Head>
          <HeadTitle>SLPS</HeadTitle>
          <HeadSubtitle>React Native Application</HeadSubtitle>
          <StackList>
            <li>+ React Native</li>
            <li>+ Apollo</li>
            <li>+ Prisma</li>
            <li>+ Node.js GraphQL</li>
          </StackList>
        </Head>
        <Section>
          <SectionTitle>Background / Motivation</SectionTitle>
        </Section>
      </Container>
    </div>
  );
}

export default SLPS;

const BannerContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BannerImage = styled.img`
  height: 70rem;
  box-shadow: 0 4rem 1.5rem -2rem #00000040;
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem auto;
  font-family: "inconsolata";
`;

const Head = styled.div`
  padding: 5rem 1rem 0 1rem;
  position: relative;
  z-index: 1000;
  border-bottom: 0.5rem solid #3a3a2a;
  &:before {
    content: "";
    position: absolute;
    display: block;
    z-index: -1;
    width: 25%;
    opacity: 0.6;
    transform: translate(-10rem, 8rem) rotate(-45deg);
    border-bottom: 1rem solid ${props => props.theme.primary};
  }
`;

const HeadTitle = styled.h1`
  font-size: 6rem;
`;

const HeadSubtitle = styled.p`
  font-size: 2rem;
  padding: 1rem 0;
`;

const StackList = styled.ul`
  list-style: none;
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
`;

const Section = styled.section`
  margin: 1rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-family: "inconsolata";
`;
