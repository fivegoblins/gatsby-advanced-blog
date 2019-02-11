import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';



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
`;

const SocialInformation = styled.section`
  font-size: 50px;
  margin-top: -240px;
  text-align: center;
  

  a {
    padding: 0 10px;
    cursor: pointer;
    color: #672CBA;
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
