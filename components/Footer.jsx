import React from "react";
import styles from '../styles/Footer.module.css';
import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react';
import Icons from "../pages/icons";
import Link from "next/link";

class Footer extends React.Component {
    render() {
        return <Row sidePadding="small" gutters="small" bgColor="sky-10" padding="small">
            <Portion desktopSpan="6">
                <Link href="/">
                    <Button shape="circular" bgColour="slate-40">LOGO</Button>
                </Link>
            </Portion>
            <Portion desktopSpan="6">   
                <Heading as="h6">ABOUT</Heading>        
                <Text>Overview</Text>
                <Text>Team</Text>
                <Text>Icons</Text>
            </Portion>
            <Portion desktopSpan="6">
                <Heading as="h6">HELP</Heading>
                <Text>FAQs</Text>
                <Text>Contact Us</Text>
                <Text>Discussion Forum</Text>
            </Portion>
            <Portion desktopSpan="6">
                <Heading as="h6">DEVELOPERS</Heading>
                <Text>Documentation</Text>
                <Text>Figma Community</Text>
            </Portion>
        </Row>
    }
}

export default Footer;