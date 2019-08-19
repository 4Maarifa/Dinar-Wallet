/**
*
* PageFooter
*
*/

import React from 'react';
import { github } from 'utils/constants';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { StickyFooter } from './sticky';


const Footer = StickyFooter.extend`
  textAlign: center;
  background: #efeeee;
  color: #5a5a5a;
  padding: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  color: #b9b9b9;
  margin-top:3px;
`;

function PageFooter() {
  return (
    <Footer>
      <Row>
        <Col sm={12} xs={24}>
          {'ETH Hot Wallet - '}
          <a href={github} target="_blank" rel="noopener">
            Ethereum Wallet with ERC20 support (GitHub)
          </a><br />
          Created using: eth-lightwallet, React.js, Ant design...
        </Col>

        <Span>
          <Col sm={12} xs={24}>
            <a href="https://DinarCoin.org" target="_blank" rel="noopener">
              Dinar Coin Homepage
            </a>
            <br />
            ETH: 0x6187a4A4808cCA7F9f2A95e2371F9A2C7bFD3327
          </Col>
        </Span>

      </Row>
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;
