import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { flow, slice, map, includes, get, size, isEmpty, isArray, first } from 'lodash/fp';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import PortfolioCard from '~/components/Common/PortfolioCard';

import FaGithub from 'react-icons/lib/fa/github';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

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
  font-size: 48px;
  font-size: 10vw;
  font-family: 'Kaushan Script';
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const SocialInformation = styled.section`
  font-size: 50px;
  margin-top: -240px;
  text-align: center;
  cursor: pointer;

  a {
    padding: 0 10px;
  }
`;


const Home = ({ portfolios }) => (
  <Fragment>
    <Wrapper isHome>
      <Title>
        Hello, I'm Alex!
      </Title>
      <Helmet>
        <title>
          Alexandra Swartz
        </title>
        <meta name="og:title" content="I'm Wonism!" />
      </Helmet>
    </Wrapper>
    <SocialInformation>
            <a
              href="https://github.com/fivegoblins"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/twelvegoblins"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:alexswartz9753@gmail.com"
              target="_blank"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandra-swartz-320a27173/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </SocialInformation>
    </Fragment>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
