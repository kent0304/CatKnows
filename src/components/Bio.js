import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import imgAvatar from "../constants/kent.jpg";
import svgTwitter from "../svg/socials/twitter.svg";
import svgUser from "../svg/socials/user.svg";

const BioWrapper = styled.div`
  position: sticky;
  top: 2em;
  width: ${(props) => props.theme.sizes.bioWidth};
  padding: 1.5em;
  font-size: 15.5px;
  background: ${(props) => props.theme.colors.blackLight};
  border-radius: 15px;
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    position: relative;
    margin: 2em 0;
    width: 100%;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 1.3em 1em;
  }
`;

const AvatarImage = styled.img`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const BioHeader = styled.div`
  display: flex;
  align-items: center;
`;
const BioName = styled.div`
  margin-left: 10px;
  a {
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.3em;
    color: #fff;
  }
`;
const BioMain = styled.div`
  margin-top: 1em;
`;
const BioText = styled.p`
  color: #fff;
  font-size: 0.92em;
`;
const BioLinks = styled.div`
  margin-top: 1.5em;
  display: flex;
  color: #fff;
  text-align: center;
  max-width: 244px;
  img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 33px;
  }
`;

const BioLink = styled.a`
  width: 33.3%;
  display: block;
  font-weight: 700;
  font-size: 0.9em;
  line-height: 30px;
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0.5px;
  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <BioWrapper>
            <BioHeader>
              <AvatarImage src={imgAvatar} alt={author} />
              <BioName>
                <a href={`https://twitter.com/${social.twitter}`}>{author}</a>
              </BioName>
            </BioHeader>
            <BioMain>
              <BioText>
                MLエンジニア。教育系のサービスを作っています。
              </BioText>
              <BioLinks>
                <BioLink href="https://kent34.netlify.app/">
    
                  <div>Portfolio</div>
                </BioLink>
                <BioLink
                  className="bio-link--email"
                  href="https://github.com/kent0304"
                >
                  <div>GitHub</div>
                </BioLink>
                <BioLink href="https://twitter.com/k3ntrr">
                  <div>Twitter</div>
                </BioLink>
              </BioLinks>
            </BioMain>
          </BioWrapper>
        );
      }}
    />
  );
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
