import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react';
import Link from 'next/link'
import React from 'react';

class Nav extends React.Component {
    render() {
        return <Row bgColor='grey-10'>
        <Portion desktopSpan="20">
        </Portion>
        <Portion desktopSpan="2">
          <Link href="/">
            <a>
            <Text weight="600">About</Text>
            </a>
          </Link>
        </Portion>
        
        <Portion desktopSpan="2">
          <Link href="icons">
            <a>
            <Text weight="600">Icons</Text>
            </a>
          </Link>
        </Portion>
      </Row> 
    }
}

export default Nav;