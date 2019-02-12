import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { isEmpty, isArray, includes, map, get, first } from 'lodash/fp';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import * as image from '../../images/image.jpg';

const Wrapper = SimpleWrapper.extend`
  padding: 100px 0 0;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 414px) {
    padding: 70px 0 0;
  }

  img {
    border-radius: 100%;
    height: 150px;
    width: 150px;
  }
`;



const Portfolios = ({ data }) => {
  const portfolios = get('allMarkdownRemark.edges')(data);

  return (
    <Wrapper>
      <Helmet>
        <title>
          ALEX | ABOUT
        </title>
        <meta name="og:title" content="ALEX | ABOUT" />
      </Helmet>
     <img src={image}></img>
    </Wrapper>
  );
};

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;
