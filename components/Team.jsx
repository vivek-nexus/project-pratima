import { Element, Text, Table, Tabs, Row, Portion, Heading } from 'fictoan-react';
import React from 'react';
import Image from 'next/image';

import styles from '../styles/Team.module.css'

import teamArray from '../constants/TeamArray';
import OrgLogo from './OrgLogo';



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
        </>
    );
}

export default Team;