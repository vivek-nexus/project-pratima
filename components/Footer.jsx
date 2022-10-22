import React from "react";
import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react';
import Link from "next/link";

function Footer() {
    return (
        <>
            <Row sidePadding="huge" gutters="small" bgColor="blue-10" padding="small" paddingBottom="micro" marginBottom="none">
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="24" marginBottom="micro">
                    <Link href="/">
                        <Button shape="circular" bgColour="slate-40">
                            <Text size="large">PP</Text>
                        </Button>
                    </Link>
                </Portion>
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                    <Heading as="h6">ABOUT</Heading>
                    <a>
                        <Link href="/">
                            <Text weight="400">Overview</Text>
                        </Link>
                    </a>
                    <a>
                        <Link href="/#design-principles">
                            <Text weight="400">Design principles</Text>
                        </Link>
                    </a>
                    <a>
                        <Link href="/#team">
                            <Text weight="400">Team</Text>
                        </Link>
                    </a>
                </Portion>
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                    <Heading as="h6">RESOURCES</Heading>
                    <a>
                        <Link href="/icons">
                            <Text weight="400">Icons</Text>
                        </Link>
                    </a>
                    <a>
                        <Link href="/icons#documentation">
                            <Text weight="400">Documentation</Text>
                        </Link>
                    </a>
                    <a>
                        <Link href="/icons#figma-community">
                            <Text weight="400">Figma community</Text>
                        </Link>
                    </a>
                </Portion>
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                    <Heading as="h6">HELP</Heading>
                    <a>
                        <Link href="/icons#faqs">
                            <Text weight="400">FAQs</Text>
                        </Link>
                    </a>
                </Portion>
                <Portion desktopSpan="12" tabletLandscapeSpan="12" tabletPortraitSpan="12" mobileSpan="12">
                    <Text align="center" weight="600" marginBottom="nano">Brought to you by</Text>
                    <a href="https://paymentscouncil.in/" target="_blank" rel="noreferrer">
                        <img height="36" src={`${process.env.LINK_PREFIX}/org-logos/pci.png`} className="w-auto mx-auto" />
                    </a>
                </Portion>
                <Portion desktopSpan="12" tabletLandscapeSpan="12" tabletPortraitSpan="12" mobileSpan="12">
                    <Text align="center" weight="600" marginBottom="nano">In association with</Text>
                    <a href="https://www.iba.org.in/" target="_blank" rel="noreferrer">
                        <img height="36" src={`${process.env.LINK_PREFIX}/org-logos/iba.png`} className="w-auto mx-auto" />
                    </a>
                </Portion>
            </Row>
        </>
    )
}

export default Footer;