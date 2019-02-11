import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';

const titleHover = keyframes`
  0% {
    color: #D61F73;
  }
  100% {
    color: #672CBA;
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

  &:hover {
    color: black;
    animation: ${titleHover} 1s forwards;
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
    </Fragment>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
