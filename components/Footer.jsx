import React from "react";
import styles from '../styles/Footer.module.css';
import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react';
import Link from "next/link";

class Footer extends React.Component {
    render() {
        return (
            <>
                <Row sidePadding="huge" gutters="small" bgColor="sky-10" padding="small" paddingBottom="micro" marginBottom="none">
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
                </Row>

                <Row sidePadding="huge" bgColor="sky-10" paddingBottom="micro" marginBottom="none">
                    <Portion>
                        <Text align="center" weight="600" marginBottom="none">Brought to you by</Text>
                    </Portion>
                    <Portion desktopSpan="6" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                        <img height="36" src={`${process.env.LINK_PREFIX}/org-logos/rbi.webp`} className={styles.mxauto} />
                    </Portion>
                    <Portion desktopSpan="6" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="12">
                        <img height="36" src={`${process.env.LINK_PREFIX}/org-logos/iamai.png`} className={styles.mxauto} />
                    </Portion>
                    <Portion desktopSpan="6" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="12">
                        <img height="36" src={`${process.env.LINK_PREFIX}/org-logos/pci.png`} className={styles.mxauto} />
                    </Portion>
                    <Portion desktopSpan="6" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="12">
                        <img height="36" src={`${process.env.LINK_PREFIX}/org-logos/iba.png`} className={styles.mxauto} />
                    </Portion>
                </Row >
            </>
        )

    }
}

export default Footer;