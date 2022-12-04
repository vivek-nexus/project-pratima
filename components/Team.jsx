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

            <Element as="div" marginBottom="none" id="team">
                <Heading as="h4" marginBottom="nano">Team</Heading>
                <Element as="div" className="flex gap-4 sm:gap-8 flex-wrap items-center">
                    <OrgLogo org="amazon-pay" format="svg" />

                    <OrgLogo org="eko" format="svg" />

                    <OrgLogo org="fampay" format="svg" />

                    <OrgLogo org="hdfc" format="webp" />

                    <OrgLogo org="jupiter" format="svg" />

                    <OrgLogo org="mobikwik" format="svg" />

                    <OrgLogo org="npci" format="png" />

                    <OrgLogo org="paytm" format="svg" />

                    <OrgLogo org="payu" format="png" />

                    <OrgLogo org="safexpay" format="png" />

                    <OrgLogo org="sbi" format="png" />

                    <OrgLogo org="setu" format="svg" />

                    <OrgLogo org="visa" format="png" />

                    <OrgLogo org="whatsapp" format="svg" />
                </Element>
            </Element>



            <Row>
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