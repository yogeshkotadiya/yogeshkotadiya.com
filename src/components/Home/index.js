import React from "react";
import IndexStyled from "./IndexStyled";
import TopProjects from "../Projects/TopProjects";
import BlogList from "../Bloglist";
import Profile from "../../../static/profile.jpeg";

const Home = ({ data }) => (
  <>
    <IndexStyled>
      <div className="introduction">
        <img src={Profile} alt="Profile" />
        <p id="intro">
          Hi!
          <span role="img" aria-label="Wave Emoji">
            👋
          </span>{" "}
          I'm <span id="name">Yogesh Kotadiya</span>
        </p>
        <p>
          I'm a Javascript Developer from India
          <span role="img" aria-label="India Flag Emoji">
            🇮🇳
          </span>
          . I work with React,Typescript,GraphQL and Javascript(ES8+).
        </p>
        <p>
          You can follow me on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com/yogeshkotadiya"
          >
            @yogeshkotadiya
          </a>
          , I mostly tinker with new things in Javascript when i'm not doing
          anything, you can find my Open Source Porjects on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yogeshkotadiya"
          >
            Github
          </a>
          .
        </p>
      </div>
    </IndexStyled>
    <h1 className="page-heading">Projects</h1>
    <TopProjects />
    <h1 className="page-heading">Blog</h1>
    <BlogList title={data.site.siteMetadata.title} posts={data.allMdx.edges} />
  </>
);

export default Home;
