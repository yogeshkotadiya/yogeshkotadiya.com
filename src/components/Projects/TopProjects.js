import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

const TOP_PROJECTS_Query = graphql`
  {
    github {
      viewer {
        pinnedRepositories(
          first: 6
          orderBy: { direction: DESC, field: STARGAZERS }
        ) {
          nodes {
            name
            url
            description
          }
        }
      }
    }
  }
`;

const TopProjects = () => {
  return (
    <TopStyled>
      <StaticQuery
        query={TOP_PROJECTS_Query}
        render={data => {
          const node = data.github.viewer.pinnedRepositories.nodes;
          return node.map(repo => (
            <div className="singleProject">
              <a target="_blank" rel="noopener noreferrer" href={repo.url}>
                {repo.name}
              </a>
              <p>{repo.description}</p>
            </div>
          ));
        }}
      />
    </TopStyled>
  );
};

const TopStyled = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  .singleProject {
    height: 150px;
    border-radius: 10px;
    padding: 10px;
    background: ${props => props.theme.primaryLight};
    color: #fff;
    transition: all 0.2s;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 2.5rem;
    }
    p {
      font-size: 1.6rem;
      color: #fff;
    }
    &:hover {
      transform: scale(1.1);
    }
    &:nth-child(1) {
      background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
      &:hover {
        box-shadow: 0 4px 10px #43e97b;
      }
    }
    &:nth-child(2) {
      background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
      &:hover {
        box-shadow: 0 4px 10px #209cff;
      }
    }
    &:nth-child(3) {
      background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      &:hover {
        box-shadow: 0 4px 10px #667eea;
      }
    }
    &:nth-child(4) {
      background-image: linear-gradient(
        to right,
        #b8cbb8 0%,
        #b8cbb8 0%,
        #b465da 0%,
        #cf6cc9 33%,
        #ee609c 66%,
        #ee609c 100%
      );
      &:hover {
        box-shadow: 0 4px 10px #ee609c;
      }
    }
    &:nth-child(5) {
      background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
      &:hover {
        box-shadow: 0 4px 10px #f83600;
      }
    }
    &:nth-child(6) {
      background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
      &:hover {
        box-shadow: 0 4px 10px #0acffe;
      }
    }
  }
  @media screen and (max-width: 860px) {
    margin: 20px 10px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    .singleProject {
      height: 180px;
    }
  }
  @media screen and (max-width: 580px) {
    margin: 20px 10px;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    height: 200px;
  }
`;

export default TopProjects;
