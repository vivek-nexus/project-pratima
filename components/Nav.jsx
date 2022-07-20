import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react';
import Link from 'next/link'
import React from 'react';

class Nav extends React.Component {
    render() {
        return <Row bgColor='grey-10'>
        <Portion desktopSpan="20">
        </Portion>
        <Portion desktopSpan="2">
          <Link href="about">
            <Text weight="600">About</Text>
          </Link>
        </Portion>
        
        <Portion desktopSpan="2">
          <Link href="icons">
            <Text weight="600">Icons</Text>
          </Link>
        </Portion>
      </Row> 
    }
}

export default Nav;