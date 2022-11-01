import Head from "next/head"
import Link from "next/link"
import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from "fictoan-react"
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Team from "../components/Team";
import DesignPrinciples from "../components/DesignPrinciples";
import { customColours } from "../styles/FictoanTheme";



function Home() {
  return (
    <Element as="div">
      <Head>
        <title>Project Pratima — Home</title>
      </Head>

      <Row marginBottom="none">
        <Portion>
          <Element as="div" className="bg-gray-300 sm:bg-cover"
            style={{
              backgroundImage: `url(${process.env.LINK_PREFIX}/hero.svg)`,
            }}>
            <Nav />
            <Row marginBottom="none">
              <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1"></Portion>
              <Portion desktopSpan="16" tabletLandscapeSpan="20" tabletPortraitSpan="22" mobileSpan="22">
                <Row>
                  <Portion

                    padding="small"
                    desktopSpan="14"
                    tabletLandscapeSpan="14"
                    tabletPortraitSpan="18"
                    mobileSpan="24"
                    style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(8px)" }}
                    className={"my-24 bg-white/80 bg-center bg-cover bg-no-repeat rounded-lg m animate__animated animate__zoomIn"}
                  >
                    <Heading as="h4" marginBottom="micro">Project Pratima</Heading>
                    <Element as="div" className="pl-3 border-l-4 rounded border-0 border-solid" style={{ borderColor: customColours.hue }}>
                      <Heading as="h6">An icon library for all financial institutions in India</Heading>
                      <Text marginTop="nano" marginBottom="tiny">Brought to you by Payments Council of India</Text>
                    </Element>
                    <Text marginBottom="tiny">An initiative to suuport RBI's vision of driving adoption and simplifying digital payments</Text>
                    <Link href="#icons">
                      <Button kind="primary" shadow="hard">Read more</Button>
                    </Link>
                  </Portion>
                </Row>
              </Portion>
              <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1"></Portion>
            </Row>
          </Element>
        </Portion>
      </Row>

      <Row id="icons" paddingTop="small" marginBottom="none">
        <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1"></Portion>

        <Portion desktopSpan="16" tabletLandscapeSpan="20" tabletPortraitSpan="22" mobileSpan="22">
          <Heading marginBottom="micro" as="h4">Icons</Heading>
          <Row>
            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12">
              <Element as="img" src={`${process.env.LINK_PREFIX}/icons/s1_r3_soft/ic_send_money_24_s1_r3_soft.svg`} alt="send-money" className="icon-huge">
              </Element>
              <Text size="medium">Send money</Text>
            </Portion>
            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12">
              <Element as="img" src={`${process.env.LINK_PREFIX}/icons/s1_r3_soft/ic_bank_transfer_24_s1_r3_soft.svg`} alt="bank-transfer" className="icon-huge" >
              </Element>
              <Text size="medium">Bank transfer</Text>
            </Portion>
            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12">
              <Element as="img" src={`${process.env.LINK_PREFIX}/icons/s1_r3_soft/ic_self_transfer_24_s1_r3_soft.svg`} alt="self-transfer" className="icon-huge">
              </Element>
              <Text size="medium">Self transfer</Text>
            </Portion>
            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12">
              <Element as="img" src={`${process.env.LINK_PREFIX}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="transaction history" className="icon-huge">
              </Element>
              <Text size="medium">Transaction history</Text>
            </Portion>
          </Row>
          <Link href="icons">
            <Button kind="primary" shadow="hard">Go to icon library</Button>
          </Link>
        </Portion>
        <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1"></Portion>
      </Row>

      <Row>
        <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1"></Portion>
        <Portion desktopSpan="16" tabletLandscapeSpan="20" tabletPortraitSpan="22" mobileSpan="22">
          <HRule kind="primary" id="design-principles" />

          <DesignPrinciples />

          <HRule kind="primary" id="team" />

          <Team />
        </Portion>
        <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1"></Portion>
      </Row>

      <Footer />





    </Element >
  )
}

export default Home;
