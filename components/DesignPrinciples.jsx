import React from "react";
import Link from 'next/link';
import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react';
import imageUrlPrefix from '../constants/imageUrlPrefix';

class DesignPrinciples extends React.Component {
    render () {
        return <Row sidePadding='huge'>
            <Portion desktopSpan="24">
                <Heading as="h4" marginBottom="micro">Design Principles</Heading>
             </Portion>
             <Portion desktopSpan="12">
                <Card
                    padding="micro"
                    shape="rounded"
                    bgColour="sky-20"
                >
                    <Row marginBottom="none">
                        <Portion desktopSpan="6">
                            <Element as="img" src={`${imageUrlPrefix}/design-principles/accesible.svg`} className="icon-huge">
                            </Element>                            
                        </Portion>
                        <Portion desktopSpan="17">
                            <Heading as="h6">Recognisable</Heading>
                            <Text marginBottom="none">
                                Icons should be intuitive to understand without labels. Metaphors should be familiar and language agnostic.
                            </Text>
                        </Portion>
                    </Row>
                </Card>  
             </Portion>
             <Portion desktopSpan="12">
                <Card
                    padding="micro"
                    shape="rounded"
                    bgColour="sky-20"
                >
                    <Row marginBottom="none">
                        <Portion desktopSpan="6">
                            <Element as="img" src={`${imageUrlPrefix}/design-principles/flexibility.svg`} className="icon-huge">
                            </Element>    
                        </Portion>
                        <Portion desktopSpan="17">
                            <Heading as="h6">Accessible</Heading>
                            <Text marginBottom="none">
                                Construction should be done so that screen readers and other accessibility guidelines are honoured.
                            </Text>
                        </Portion>
                    </Row>
                </Card>      
             </Portion>
             <Portion desktopSpan="12">
                <Card
                    padding="micro"
                    shape="rounded"
                    bgColour="sky-20"
                >
                    <Row marginBottom="none">
                        <Portion desktopSpan="6">
                            <Element as="img" src={`${imageUrlPrefix}/design-principles/recognisable.svg`} className="icon-huge">
                            </Element>                            
                        </Portion>
                        <Portion desktopSpan="17">
                            <Heading as="h6">Scalable</Heading>
                            <Text marginBottom="none">
                                Minimum construction yet scalable, readable, and most importantly, easily reproducible.
                            </Text>
                        </Portion>
                    </Row>
                </Card>     
             </Portion>
             <Portion desktopSpan="12">
                <Card
                    padding="micro"
                    shape="rounded"
                    bgColour="sky-20"
                >
                    <Row marginBottom="none">
                        <Portion desktopSpan="6">
                            <Element as="img" src={`${imageUrlPrefix}/design-principles/scalable.svg`} className="icon-huge">
                            </Element>                            
                        </Portion>
                        <Portion desktopSpan="17">
                            <Heading as="h6">Flexible</Heading>
                            <Text marginBottom="none">
                                Should be easily adaptable for various brands, languages, and various other contexts.
                            </Text>
                        </Portion>
                    </Row>
                </Card>     
             </Portion>
        </Row>
    
    }
}

export default DesignPrinciples;