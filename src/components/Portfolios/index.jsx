import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { isEmpty, isArray, includes, map, get, first } from 'lodash/fp';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import * as image from '../../images/image.jpg';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaEnvelope from 'react-icons/lib/fa/envelope';

const Wrapper = SimpleWrapper.extend`
  padding: 100px 0 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 414px) {
    padding: 70px 0 0;
  }

  div {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 40px;

    @media (max-width: 500px) {
      flex-direction: column;
      width: 90%;
      align-content: center;
      margin-left: 10%;
    }
  }

  img {
    border-radius: 100%;
    height: 150px;
    width: 150px;

    @media (max-width: 500px) {
      margin-left: 25%;
      margin-bottom: 15px;
    }

  }
  
  p {
    width: 60%;
    line-height: 1.75;
    font-size: 18px;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  span {
    color: #D61F73;
  }

  section {
    width: 20%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-right: 1.5%;

    @media (max-width: 500px) {
      width: 60%;
    }
  }

  a {
    font-size: 30px;
    color: #672CBA;

    @media (max-width: 500px) {
      font-size: 40px;
    }
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
      <div>
        <img src={image}></img>
        <p>Hi! My name is <span>Alexandra Swartz</span>. I’m a <span>software developer </span>from Philadelphia, Pennsylvania.<br></br>I attended Lambda School’s Web Development program, and later worked there as a Project Manager. I build full-stack JavaScript applications with <span>React</span>, <span>Redux</span>, and <span>Node</span>.<br></br>Check out some of my projects and <span>get in touch </span>with me if you’d like to work together!</p>
     </div>
     <section>
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
     </section>
    </Wrapper>
  );
};

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;
