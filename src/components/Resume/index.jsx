import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import FaPinrt from 'react-icons/lib/fa/print';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import { forEach, startsWith, get } from 'lodash/fp';
import Clearfix from '~/components/Common/Clearfix';
import * as profileUrl from '~/resources/me.png';
import * as profilePic from '../../images/profilepic.jpg';

const Wrapper = styled.section`
  padding: 100px 0 0;
  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  & > ${Clearfix} {
    margin: auto;
    max-width: 640px;
  }

  button {
    float: right;
  }
`;

const BasicInformation = styled.section`
  text-align: center;
  font-size: 20px;
  color: #D61F73;

  h1 {
    font-size: 2em;
    margin: .67em 0;
  }

  a {
    margin: .67em 0;
    font-size: 0.75em;
    margin-top: -50px;
    color: #672CBA;
  }

  img {
    border-radius: 50%;
    width: 118px;
    height: 110px;
  }
`;

const SocialInformation = styled.section`
  font-size: 30px;
  text-align: center;
  padding-top: 10px;

  a {
    padding: 15px 8px;
    color: #672CBA;
  }
`;

const MDInformation = styled.section`
  font-size: 16px;

  h2 {
    font-size: 1.5em;
    margin: .67em 0;
  }

  ul {
    margin: 16px 0 0;
    padding: 0 0 0 20px;
    line-height: 2em;
    list-style: disc;
  }

  li ul {
    margin: 0 0 16px;;
    padding: 0 0 0 20px;
    list-style: circle;
  }

  a {
    text-decoration: underline;
  }
`;

class Resume extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({ date: PropTypes.object }).isRequired,
    printPage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const anchors = this.$mdWrapper.getElementsByTagName('a');

    forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (startsWith('http')(href)) {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noreferrer noopener');
      }
    })(anchors);
  }

  render() {
    const { data, printPage } = this.props;
    const resume = get('markdownRemark')(data);

    return (
      <Wrapper>
        <Clearfix>
          <Helmet>
            <title>
              ALEX | RESUME
            </title>
            <meta name="og:title" content="ALEX | RESUME" />
          </Helmet>
          <Clearfix>
            <button type="button" onClick={printPage}>
              <FaPinrt />
              Print
            </button>
          </Clearfix>
          <BasicInformation>
            <img
              src={profilePic}
              alt=""
              width="120"
              height="120"
            />
            <h1>
              alexandra swartz
            </h1>
            <a href="mailto:alexswartz9753@gmail.com">
              alexswartz9753@gmail.com
            </a>
          </BasicInformation>
          <SocialInformation>
            <a
              href="https://github.com/fivegoblins"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/twelvegoblins"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandra-swartz-320a27173/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
          </SocialInformation>
          <MDInformation>
            <div
              ref={(mdWrapper) => { this.$mdWrapper = mdWrapper; }}
              dangerouslySetInnerHTML={{ __html: get('html')(resume) }}
            />
          </MDInformation>
        </Clearfix>
      </Wrapper>
    );
  }
}

export default Resume;
