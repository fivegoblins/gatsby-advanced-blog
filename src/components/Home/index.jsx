import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaEnvelope from 'react-icons/lib/fa/envelope';

const titleHover = keyframes`
  0% {
    color: #D61F73;
  }
  50% {
    color: #672CBA;
  }
  100% {
    color: #D61F73;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5em;
  line-height: 1.5em;
  color: #D61F73;
  font-size: 48px;
  font-size: 10vw;
  font-family: 'Kaushan Script';
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  div {
    animation: ${fadeIn} 4s forwards;
  }

  &:hover {
    color: black;
    animation: ${titleHover} 2s forwards;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -260px;
  margin-bottom: 100px;
  animation: ${fadeIn} 2s forwards;

  a {
    font-size: 60px;
    padding: 0 10px;
    color: #672CBA;
  }
`;

const Home = ({ portfolios }) => (
  <Fragment>
    <Wrapper isHome>
      <Title>
        <div>
        Hello, I'm Alex!
        </div>
      </Title>
      <Helmet>
        <title>
          Alexandra Swartz
        </title>
        <meta name="og:title" content="I'm Wonism!" />
      </Helmet>
    </Wrapper>
    <SocialMediaWrapper>
      <a href='https://github.com/fivegoblins'>
        <FaGithub/>
      </a>
      <a href='https://twitter.com/twelvegoblins'>
        <FaTwitter/>
      </a>
      <a href='https://linkedin.com/in/alexandra-swartz-320a27173/'>
        <FaLinkedin/>
      </a>
      <a href='mailto:alexswartz9753@gmail.com'>
        <FaEnvelope/>
      </a>
      </SocialMediaWrapper>
    </Fragment>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
