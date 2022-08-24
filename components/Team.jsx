import { Element, Text, Table, Tabs, Row, Portion, Heading } from 'fictoan-react';
import React from 'react';
import Image from 'next/image';

import styles from '../styles/Team.module.css'

import teamArray from '../constants/TeamArray';
import OrgLogo from './org-logo';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

// Content for tabs --------------------
const tabOneContent = () => (
    <>
        <Table bordersFor="rows" padding="tiny" isStriped isHoverable isFullWidth className={styles.table}>
            <thead>
                <tr>
                    <th><Text margin="none" weight="600">Name</Text></th>
                    <th><Text margin="none" weight="600">Designation</Text></th>
                    <th><Text margin="none" weight="600">Organisation</Text></th>
                </tr>
            </thead>
        </Table>
        {teamArray.coreGroup.map((item) =>
            <Element as="div" key={item.name}>
                <Table bordersFor="rows" padding="tiny" isStriped isHoverable isFullWidth className={styles.table}>
                    <tbody>
                        <tr>
                            <td><Text margin="none">{item.name}</Text></td>
                            <td><Text margin="none">{item.designation}</Text></td>
                            <td><Text margin="none">{item.org}</Text></td>
                        </tr>
                    </tbody>
                </Table>
            </Element>)
        }
    </>
)

const tabTwoContent = () => (
    <>
        <Table bordersFor="rows" padding="tiny" isStriped isHoverable isFullWidth className={styles.table}>
            <thead>
                <tr>
                    <th><Text margin="none" weight="600">Name</Text></th>
                    <th><Text margin="none" weight="600">Designation</Text></th>
                    <th><Text margin="none" weight="600">Organisation</Text></th>
                </tr>
            </thead>
        </Table>
        {teamArray.workingGroup.map((item) =>
            <Element as="div" key={item.name}>
                <Table bordersFor="rows" padding="tiny" isStriped isHoverable isFullWidth className={styles.table}>
                    <tbody>
                        <tr>
                            <td><Text margin="none">{item.name}</Text></td>
                            <td><Text margin="none">{item.designation}</Text></td>
                            <td><Text margin="none">{item.org}</Text></td>
                        </tr>
                    </tbody>
                </Table>
            </Element>)
        }
    </>
)



function Team() {
    return (
        <>
            <Row sidePadding="huge" marginBottom="tiny" gutters="huge">
                <Portion>
                    <Heading as="h4" marginBottom="none">Team</Heading>
                </Portion>
            </Row>
            <Row sidePadding="huge" marginBottom="none" gutters="huge">
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8" marginBottom="micro">
                    <OrgLogo org="whatsapp" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="mobikwik" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="eko" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8" marginBottom="micro">
                    <OrgLogo org="amazon-pay" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="payu" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="setu" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8" marginBottom="micro">
                    <OrgLogo org="sbi" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="fampay" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="jupiter" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8" marginBottom="micro">
                    <OrgLogo org="paytm" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="npci" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="visa" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="safexpay" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="hdfc" />
                </Portion>
            </Row>



            <Row sidePadding="huge">
                <Portion>
                    <Tabs
                        tabs={[
                            {
                                key: "tab1",
                                label: "Core group",
                                content: tabOneContent()
                            },
                            {
                                key: "tab2",
                                label: "Working group",
                                content: tabTwoContent()
                            }
                        ]}
                    />
                </Portion>
            </Row >

            {/* <Accordion allowZeroExpanded={true} style={{ borderRadius: "4px" }}>
                <AccordionItem style={{ borderRadius: "4px" }}>
                    <AccordionItemHeading style={{ borderRadius: "4px" }}>
                        <AccordionItemButton style={{ borderRadius: "4px" }}>
                            <Text weight="600" margin="none" paddingLeft="nano" style={{ display: "inline-block" }}>Core group members</Text>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <Table bordersFor="both" padding="tiny" isStriped isHoverable isFullWidth style={{
                            tableLayout: "fixed",
                            width: "100px"
                        }}>
                            <thead>
                                <tr>
                                    <th><Text margin="none" weight="600">Name</Text></th>
                                    <th><Text margin="none" weight="600">Designation</Text></th>
                                    <th><Text margin="none" weight="600">Organisation</Text></th>
                                </tr>
                            </thead>
                        </Table>
                        {teamArray.coreGroup.map((item) =>
                            <Element as="div" key={item.name}>
                                <Table bordersFor="both" padding="tiny" isStriped isHoverable isFullWidth style={{
                                    tableLayout: "fixed",
                                    width: "100px"
                                }}>
                                    <tbody>
                                        <tr>
                                            <td><Text margin="none">{item.name}</Text></td>
                                            <td><Text margin="none">{item.designation}</Text></td>
                                            <td><Text margin="none">{item.org}</Text></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Element>)
                        }
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem style={{ borderRadius: "4px" }}>
                    <AccordionItemHeading style={{ borderRadius: "4px" }}>
                        <AccordionItemButton style={{ borderRadius: "4px" }}>
                            <Text weight="600" margin="none" paddingLeft="nano" style={{ display: "inline-block" }}>Working group members</Text>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {teamArray.workingGroup.map((item) =>
                            <Element as="div" key={item.name}>
                                <Text>
                                    {item.name} — {item.designation} @ {item.org}
                                </Text>
                            </Element>)}
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion> */}
        </>
    );
}

export default Team;