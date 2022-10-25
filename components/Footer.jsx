import React from "react";
import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from "fictoan-react";
import Link from "next/link";

function Footer() {
    return (
        <Row marginBottom="none" bgColor="blue-10">
            <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1"></Portion>
            <Portion desktopSpan="16" tabletLandscapeSpan="18" tabletPortraitSpan="20" mobileSpan="20">
                <Row gutters="small" paddingTop="small" paddingBottom="micro" marginBottom="none">
                    <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="24" marginBottom="micro">
                        <Link href="/">
                            <Button kind="primary" shape="circular" bgColour="slate-40">
                                <Text size="huge">P</Text>
                            </Button>
                        </Link>
                    </Portion>
                    <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                        <Heading as="h6">ABOUT</Heading>

                        <Link href="/">
                            <Text className="cursor-pointer" weight="400">Overview</Text>
                        </Link>


                        <Link href="/#design-principles">
                            <Text className="cursor-pointer" weight="400">Design principles</Text>
                        </Link>


                        <Link href="/#team">
                            <Text className="cursor-pointer" weight="400">Team</Text>
                        </Link>

                    </Portion>
                    <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                        <Heading as="h6">RESOURCES</Heading>

                        <Link href="/icons">
                            <Text className="cursor-pointer" weight="400">Icon library</Text>
                        </Link>


                        <Link href="/icons#documentation">
                            <Text className="cursor-pointer" weight="400">Documentation</Text>
                        </Link>


                        <Link href="/icons#figma-community">
                            <Text className="cursor-pointer" weight="400">Figma community</Text>
                        </Link>

                    </Portion>
                    <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                        <Heading as="h6">HELP</Heading>

                        <Link href="/icons#faqs">
                            <Text className="cursor-pointer" weight="400">FAQs</Text>
                        </Link>

                    </Portion>
                </Row>
                <Row sidePadding="huge" paddingBottom="micro" marginBottom="none">
                    <Portion desktopSpan="12" tabletLandscapeSpan="12" tabletPortraitSpan="12" mobileSpan="12">
                        <Text align="center" weight="600" marginBottom="nano">Brought to you by</Text>
                        <a href="https://paymentscouncil.in/" target="_blank" rel="noreferrer">
                            <img height="36" src={`${process.env.LINK_PREFIX}/org-logos/pci.png`} alt="pci-logo" className="w-auto mx-auto" />
                        </a>
                    </Portion>
                    <Portion desktopSpan="12" tabletLandscapeSpan="12" tabletPortraitSpan="12" mobileSpan="12">
                        <Text align="center" weight="600" marginBottom="nano">In association with</Text>
                        <a href="https://www.iba.org.in/" target="_blank" rel="noreferrer">
                            <img height="36" src={`${process.env.LINK_PREFIX}/org-logos/iba.png`} alt="iba-logo" className="w-auto mx-auto" />
                        </a>
                    </Portion>
                </Row>
            </Portion>
            <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1"></Portion>

        </Row>
    )
}

export default Footer;