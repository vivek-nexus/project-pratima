import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react';
import Link from 'next/link'
import React from 'react';

function Nav() {

  return <Row sidePadding="huge" marginBottom="none" className="bg-white/70" shadow="mild"
    style={{ backdropFilter: "blur(16px)" }}
  >

    <Portion desktopSpan='20' tabletLandscapeSpan='20' tabletPortraitSpan='20' mobileSpan='8' verticallyCenterItems>
      <Link href="/">
        <Button shape="circular" size="small" bgColour="slate-40">PP</Button>
      </Link>
    </Portion>

    <Portion desktopSpan="2" tabletLandscapeSpan='2' tabletPortraitSpan='2' mobileSpan='8'>
      <Link href="/#design-principles">
        <a>
          <Text align="right" weight="600">About</Text>
        </a>
      </Link>
    </Portion>

    <Portion desktopSpan="2" tabletLandscapeSpan='2' tabletPortraitSpan='2' mobileSpan='8'>
      <Link href="icons">
        <a>
          <Text align="right" weight="600">Icons</Text>
        </a>
      </Link>
    </Portion>
  </Row>
}

export default Nav;