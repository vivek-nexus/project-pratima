import React from "react";
import Link from 'next/link';
import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react';

function DesignPrinciples() {
    return (
        <Row sidePadding='huge'>
            <Portion desktopSpan="24">
                <Heading as="h4" marginBottom="micro">Design principles</Heading>
            </Portion>
            <Portion desktopSpan="12" tabletLandscapeSpan="12" tabletPortraitSpan="24" mobileSpan="24" >
                <Card
                    padding="micro"
                    shape="rounded"
                    bgColour="blue-10"
                    isFullHeight
                >
                    <Row marginBottom="none">
                        <Portion desktopSpan="6">
                            <Element as="img" marginBottom="micro" src={`${process.env.LINK_PREFIX}/design-principles/recognisable.svg`} className="h-[60px] w-auto" alt="recognisable">
                            </Element>
                        </Portion>
                        <Portion desktopSpan="16">
                            <Heading as="h6">Recognisable</Heading>
                            <Text marginBottom="none">
                                Icons should be intuitive to understand without labels. Metaphors should be familiar and language agnostic.
                            </Text>
                        </Portion>
                    </Row>
                </Card>
            </Portion>
            <Portion desktopSpan="12" tabletLandscapeSpan="12" tabletPortraitSpan="24" mobileSpan="24">
                <Card
                    padding="micro"
                    shape="rounded"
                    bgColour="blue-10"
                    isFullHeight
                >
                    <Row marginBottom="none">
                        <Portion desktopSpan="6">
                            <Element as="img" marginBottom="micro" src={`${process.env.LINK_PREFIX}/design-principles/accessible.svg`} className="h-[64px] w-auto" alt="accessible">
                            </Element>
                        </Portion>
                        <Portion desktopSpan="16">
                            <Heading as="h6">Accessible</Heading>
                            <Text marginBottom="none">
                                Construction should be done so that screen readers and other accessibility guidelines are honoured.
                            </Text>
                        </Portion>
                    </Row>
                </Card>
            </Portion>
            <Portion desktopSpan="12" tabletLandscapeSpan="12" tabletPortraitSpan="24" mobileSpan="24">
                <Card
                    padding="micro"
                    shape="rounded"
                    bgColour="blue-10"
                    isFullHeight
                >
                    <Row marginBottom="none">
                        <Portion desktopSpan="6">
                            <Element as="img" marginBottom="micro" src={`${process.env.LINK_PREFIX}/design-principles/scalable.svg`} className="h-[52px] w-auto" alt="scalable">
                            </Element>
                        </Portion>
                        <Portion desktopSpan="16">
                            <Heading as="h6">Scalable</Heading>
                            <Text marginBottom="none">
                                Minimum construction yet scalable, readable, and most importantly, easily reproducible.
                            </Text>
                        </Portion>
                    </Row>
                </Card>
            </Portion>
            <Portion desktopSpan="12" tabletLandscapeSpan="12" tabletPortraitSpan="24" mobileSpan="24">
                <Card
                    padding="micro"
                    shape="rounded"
                    bgColour="blue-10"
                    isFullHeight
                >
                    <Row marginBottom="none">
                        <Portion desktopSpan="6">
                            <Element as="img" marginBottom="micro" src={`${process.env.LINK_PREFIX}/design-principles/flexible.svg`} className="h-[68px] w-auto" alt="flexible">
                            </Element>
                        </Portion>
                        <Portion desktopSpan="16">
                            <Heading as="h6">Flexible</Heading>
                            <Text marginBottom="none">
                                Should be easily adaptable for various brands, languages, and various other contexts.
                            </Text>
                        </Portion>
                    </Row>
                </Card>
            </Portion>
        </Row>
    )
}

export default DesignPrinciples;