import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { forEach, startsWith, get } from 'lodash/fp';
import Clearfix from '~/components/Common/Clearfix';
import IGShot from '../../screenshots/IGShot.png';
import NotesShot from '../../screenshots/NotesShot.png';


const Wrapper = styled.section`
  padding: 100px 0 0;
  margin: 0 auto;
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

  img {
    box-shadow: 2px 3px 3px 1px lightgray;
    border-radius: 5px;
    width: 80%;
    margin-bottom: 20px;
    height: 220px;

    @media (max-width: 500px) {
      height: 160px;
    }
  }
`;

const Screenshots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10%;
  width: 100%;
`;

const MDInformation = styled.section`
  font-size: 16px;
  display: none;

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
              ALEX | PROJECTS
            </title>
            <meta name="og:title" content="ALEX | PROJECTS" />
          </Helmet>
          <Screenshots>
            <a href='https://github.com/fivegoblins/Instagram-Clone' target='_blank'>
              <img src={IGShot}></img>
            </a>
            <a href='https://github.com/fivegoblins/back-end-project-week' target='_blank'>
              <img src={NotesShot}></img>
            </a>
            </Screenshots>
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
