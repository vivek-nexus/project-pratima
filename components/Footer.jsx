import React from "react";
import styles from '../styles/Footer.module.css';
import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react';
import Icons from "../pages/icons";
import Link from "next/link";

class Footer extends React.Component {
    render() {
        return <Row sidePadding="huge" gutters="small" bgColor="sky-10" padding="small" marginBottom="none">
            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="24" marginBottom="small">
                <Link href="/">
                    <Button shape="circular" bgColour="slate-40">LOGO</Button>
                </Link>
            </Portion>
            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="small">
                <Heading as="h6">ABOUT</Heading>
                <a>
                    <Link href="/">
                        <Text>Overview</Text>
                    </Link>
                </a>
                <a>
                    <Link href="/#design-principles">
                        <Text>Design principles</Text>
                    </Link>
                </a>
                <a>
                    <Link href="/#team">
                        <Text>Team</Text>
                    </Link>
                </a>
            </Portion>
            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="small">
                <Heading as="h6">RESOURCES</Heading>
                <a>
                    <Link href="/icons">
                        <Text>Icons</Text>
                    </Link>
                </a>
                <a>
                    <Link href="/icons#documentation">
                        <Text>Documentation</Text>
                    </Link>
                </a>
                <a>
                    <Link href="/icons#figma-community">
                        <Text>Figma community</Text>
                    </Link>
                </a>
            </Portion>
            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="small">
                <Heading as="h6">HELP</Heading>
                <a>
                    <Link href="/icons#faqs">
                        <Text>FAQs</Text>
                    </Link>
                </a>
            </Portion>
        </Row>
    }
}

export default Footer;