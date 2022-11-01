import { Element, Text, Table, Tabs, Row, Portion, Heading } from "fictoan-react";
import React from "react";
import teamArray from "../constants/TeamArray";
import OrgLogo from "./OrgLogo";



// Content for tabs --------------------
const tabOneContent = () => (
    <>
        <Table bordersFor="rows" padding="tiny" isStriped isFullWidth className="table-fixed w-1/3">
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
                <Table bordersFor="rows" padding="tiny" isStriped isFullWidth className="table-fixed w-1/3">
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
        <Table bordersFor="rows" padding="tiny" isStriped isFullWidth className="table-fixed w-1/3">
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
                <Table bordersFor="rows" padding="tiny" isStriped isFullWidth className="table-fixed w-1/3">
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
            <Row gutters="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Team</Heading>
                    <Text>In the case of digital retail payments, there are currently different symbols/icons that are being used across digital payment application operators /payment entities. This could be unclear for new users as well as the un-initiated for adoption of digital payments.



                        Project Pratima aims to introduce a universal set of icons for basic payment processes, viz. transaction’s success, failure, pending/ processing, and ‘call to action’ icons such as collect receive and pay/ send, etc. The project has created an icon (symbol) library that can be used by all financial institutions across India for ease of icon recognition by anyone using digital payments, irrespective of age, literacy and education level.



                        Through the deployment of this initiative, the project aims to improve the trust, security and familiarity of digital payment icons. The icon library has been created using a design first approach, which provide organizations the options to customize the icons per brand requirements while retaining the underlying message for the consumer.



                        Project Pratima is an initiative by PCI (Payments Council of India)



                        By way of introduction, PCI is a body representing over 90% of non-Bank companies in the Payments ecosystem with licenses to operate under Prepaid Payment Instruments, Payments Banks, Payment Gateways, Merchant Aggregators, Card Networks, International Remittance and Trade providers, along with BBPOU and UPI providers. The purpose of PCI is being the platform for non-bank players in the Payments ecosystem to deliberate, integrate and lead the development of Payments for our economy.</Text>
                </Portion>
            </Row>
            <Row marginBottom="none" gutters="huge">
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



            <Row marginBottom="medium">
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