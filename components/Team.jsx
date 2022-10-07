import { Element, Text, Table, Tabs, Row, Portion, Heading } from 'fictoan-react';
import React from 'react';

import styles from '../styles/Team.module.css'

import teamArray from '../constants/TeamArray';
import OrgLogo from './OrgLogo';



// Content for tabs --------------------
const tabOneContent = () => (
    <>
        <Table bordersFor="rows" padding="tiny" isStriped isFullWidth className={styles.table}>
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
                <Table bordersFor="rows" padding="tiny" isStriped isFullWidth className={styles.table}>
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
        <Table bordersFor="rows" padding="tiny" isStriped isFullWidth className={styles.table}>
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
                <Table bordersFor="rows" padding="tiny" isStriped isFullWidth className={styles.table}>
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
            <Row sidePadding="huge" gutters="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Team</Heading>
                </Portion>
            </Row>
            <Row sidePadding="huge" marginBottom="none" gutters="huge">
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8" marginBottom="micro">
                    <OrgLogo org="whatsapp" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="mobikwik" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="eko" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8" marginBottom="micro">
                    <OrgLogo org="amazon-pay" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="payu" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="setu" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8" marginBottom="micro">
                    <OrgLogo org="sbi" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="fampay" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="jupiter" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8" marginBottom="micro">
                    <OrgLogo org="paytm" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="npci" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="visa" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="safexpay" format="svg" />
                </Portion>
                <Portion desktopSpan="3" tabletLandscapeSpan="4" tabletPortraitSpan="6" mobileSpan="8">
                    <OrgLogo org="hdfc" format="svg" />
                </Portion>
            </Row>



            <Row sidePadding="huge" marginBottom="medium">
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