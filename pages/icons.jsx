import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Row, Portion, Select, Text, InfoPanel, Card, Element, Button, HRule, Heading } from 'fictoan-react'
import 'animate.css';
import Drawer from "react-bottom-drawer";
import { isMobile } from 'react-device-detect';
import { motion, AnimatePresence } from 'framer-motion';

import iconsArray from '../constants/iconsArray'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import InfoPanelContents from '../components/InfoPanelContents'
import Documentation from '../components/Documentation'
import FAQs from '../components/FAQs'
import InfoPanelStyled from "../styles/InfoPanel.styled";
import BottomDrawerStyled from "../styles/BottomDrawer.styled";

const MotionPortion = motion(Portion)







export default function Icons() {
    const [strokeSize, setStrokeSize] = useState("s1");
    const [cornerRadius, setCornerRadius] = useState("r0");
    const [edges, setEdges] = useState("sharp");
    const [size, setSize] = useState("24");
    const [clickedIcon, setClickedIcon] = useState("");
    const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
    const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);



    return (
        <Element as="div">
            <Head>
                <title>Icons</title>
            </Head>

            <Nav />
            <Row sidePadding="huge" marginBottom="none" marginTop="small">
                <Heading as="h4" marginBottom="tiny">Icons</Heading>
            </Row>


            <Row sidePadding="huge" marginBottom="none" >
                {/* ////////////////// */}
                {/* Dropdowns */}
                <Portion
                    desktopSpan={isInfoPanelOpen ? "16" : "24"}
                    tabletLandscapeSpan={isInfoPanelOpen ? "18" : "24"}
                    tabletPortraitSpan={isInfoPanelOpen ? "18" : "24"}
                    mobileSpan={false ? "12" : "24"}
                    className="sticky top-0 z-10 bg-white/80"
                    style={{ backdropFilter: "blur(8px)" }}
                    shape="rounded"
                    padding="nano"
                >
                    <Row padding="nano" marginBottom="none">
                        <AnimatePresence>
                            <MotionPortion
                                layout
                                desktopSpan={isInfoPanelOpen ? "12" : "6"}
                                tabletLandscapeSpan={isInfoPanelOpen ? "10" : "6"} tabletPortraitSpan={isInfoPanelOpen ? "12" : "6"}
                                mobileSpan={false ? "24" : "12"}
                            >
                                <Select
                                    onChange={function (e) {
                                        if (e.target.value == "1px")
                                            setStrokeSize("s1")
                                        if (e.target.value == "1.5px")
                                            setStrokeSize("s1.5")
                                        if (e.target.value == "2px")
                                            setStrokeSize("s2")
                                    }}
                                    id="stroke-size"
                                    label="Stroke size"
                                    options={[
                                        {
                                            name: "1px",
                                            value: "1px"
                                        },
                                        {
                                            name: "1.5px",
                                            value: "1.5px"
                                        },
                                        {
                                            name: "2px",
                                            value: "2px"
                                        },
                                    ]}
                                />
                            </MotionPortion>
                        </AnimatePresence>
                        <AnimatePresence>
                            <MotionPortion
                                layout
                                desktopSpan={isInfoPanelOpen ? "12" : "6"}
                                tabletLandscapeSpan={isInfoPanelOpen ? "10" : "6"} tabletPortraitSpan={isInfoPanelOpen ? "12" : "6"}
                                mobileSpan={false ? "24" : "12"}
                            >
                                <Select
                                    onChange={function (e) {
                                        if (e.target.value == "0px")
                                            setCornerRadius("r0")
                                        if (e.target.value == "2px")
                                            setCornerRadius("r2")
                                        if (e.target.value == "3px")
                                            setCornerRadius("r3")
                                    }}
                                    id="corner-radius"
                                    label="Corner radius"
                                    options={[
                                        {
                                            name: "0px",
                                            value: "0px"
                                        },
                                        {
                                            name: "2px",
                                            value: "2px"
                                        },
                                        {
                                            name: "3px",
                                            value: "3px"
                                        },
                                    ]}
                                />
                            </MotionPortion>
                        </AnimatePresence>
                        <AnimatePresence>
                            <MotionPortion
                                layout
                                desktopSpan={isInfoPanelOpen ? "12" : "6"}
                                tabletLandscapeSpan={isInfoPanelOpen ? "10" : "6"} tabletPortraitSpan={isInfoPanelOpen ? "12" : "6"}
                                mobileSpan={false ? "24" : "12"}
                            >
                                <Select
                                    onChange={function (e) {
                                        setEdges(e.target.value)
                                    }}
                                    id="edges"
                                    label="Edges"
                                    options={[
                                        {
                                            name: "sharp",
                                            value: "sharp"
                                        },
                                        {
                                            name: "soft",
                                            value: "soft"
                                        },
                                    ]}
                                />
                            </MotionPortion>
                        </AnimatePresence>
                        <AnimatePresence>
                            <MotionPortion
                                layout
                                desktopSpan={isInfoPanelOpen ? "12" : "6"}
                                tabletLandscapeSpan={isInfoPanelOpen ? "10" : "6"} tabletPortraitSpan={isInfoPanelOpen ? "12" : "6"}
                                mobileSpan={false ? "24" : "12"}
                            >
                                <Select
                                    id="size"
                                    label="Size"
                                    options={[
                                        {
                                            name: "24px",
                                            value: "24px"
                                        },
                                    ]}
                                />
                            </MotionPortion>
                        </AnimatePresence>
                    </Row>
                </Portion>


                {/* ////////////////// */}
                {/* Icons */}
                <Portion
                    desktopSpan={isInfoPanelOpen ? "16" : "24"}
                    tabletLandscapeSpan={isInfoPanelOpen ? "18" : "24"}
                    tabletPortraitSpan={isInfoPanelOpen ? "18" : "24"}
                    mobileSpan={false ? "12" : "24"}
                >
                    <Row gutters="medium">
                        <AnimatePresence>
                            {iconsArray.map(item =>
                                <MotionPortion
                                    layout
                                    key={item.fileName}
                                    desktopSpan={isInfoPanelOpen ? "8" : "6"}
                                    tabletLandscapeSpan={isInfoPanelOpen ? "10" : "8"}
                                    tabletPortraitSpan={isInfoPanelOpen ? "12" : "8"} mobileSpan={false ? "24" : "12"} padding="nano"
                                >
                                    <Card
                                        isFullHeight
                                        bgColor="slate-10"
                                        className="flex flex-col justify-between rounded-xl cursor-pointer hover:shadow-xl duration-300 h-max"
                                        onClick={() => {
                                            setClickedIcon(item.fileName)
                                            isMobile ? setIsBottomDrawerOpen(true) : setIsInfoPanelOpen(true)
                                        }}
                                    >
                                        <img
                                            src={`${process.env.LINK_PREFIX}/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                            alt={`${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                            className="mx-auto w-3/4"

                                        />


                                        <Card
                                            shadow="mild"
                                            className="flex justify-between items-center rounded-b-lg p-4"
                                        >
                                            <Text
                                                weight="600"
                                                margin="none"
                                            >
                                                {item.iconName}
                                            </Text>
                                            <img className="w-auto h-[32px]" src={`${process.env.LINK_PREFIX}/chevron_right.svg`} />
                                        </Card>
                                    </Card>
                                </MotionPortion>)}
                        </AnimatePresence>
                    </Row>
                    <a
                        href={`${process.env.LINK_PREFIX}/project-pratima-icons.zip`}
                        download>
                        <Button kind="tertiary" shadow="mild" shape="rounded" marginLeft="nano">Download all</Button>
                    </a>
                </Portion>
            </Row>


            <HRule id="documentation" sideMargin="huge" />

            <Documentation />

            <HRule id="faqs" sideMargin="huge" />

            <FAQs />

            <HRule id="figma-community" sideMargin="huge" />

            <Row sidePadding="huge" marginBottom="small">
                <Portion desktopSpan="10" mobileSpan="24">
                    <Heading as="h4">Figma community</Heading>
                    <Text>Download complete documentation and icons as a Figma file</Text>
                    <a href="https://www.figma.com/file/2JP8urOlZv4U48ojZHnRQv/Project-Pratima?node-id=4%3A125" target="_blank" rel="noopener noreferrer">
                        <Button kind="primary" shadow="hard" shape="rounded" marginBottom="micro">Get a copy</Button>
                    </a>
                </Portion>
                <Portion desktopSpan="14" mobileSpan="24">
                    <a href="https://www.figma.com/file/2JP8urOlZv4U48ojZHnRQv/Project-Pratima?node-id=4%3A125" target="_blank" rel="noopener noreferrer">
                        <Element as="img" shape="rounded" shadow="hard" src={`${process.env.LINK_PREFIX}/cover.svg`} alt="Figma file cover" />
                    </a>
                </Portion>
            </Row>



            <Footer />

            {/* ////////////////// */}
            {/* Info panel */}
            <div key={clickedIcon}>
                <InfoPanelStyled>
                    <InfoPanel
                        width="large"
                        isOpen={isInfoPanelOpen}
                        onCloseCallback={() => { setIsInfoPanelOpen(false) }}
                        className={`bg-blue-100/80 shadow-md  z-50 ${clickedIcon ? `animate__animated animate__pulse animate__faster` : ``}`}
                        style={{ backdropFilter: "blur(8px)" }}
                        padding="small"
                    >
                        <InfoPanelContents
                            iconsArray={iconsArray}
                            clickedIcon={clickedIcon}
                            strokeSize={strokeSize}
                            cornerRadius={cornerRadius}
                            edges={edges}
                            size={size}
                            setIsInfoPanelOpen={setIsInfoPanelOpen}
                            setIsBottomDrawerOpen={setIsBottomDrawerOpen}
                        />
                    </InfoPanel>
                </InfoPanelStyled>

                {isMobile &&
                    <BottomDrawerStyled>
                        <Drawer
                            isVisible={isBottomDrawerOpen}
                            className="drawer"
                            onClose={() => { setIsBottomDrawerOpen(false) }}
                        >

                            <Element as="div" padding="micro">
                                <InfoPanelContents
                                    iconsArray={iconsArray}
                                    clickedIcon={clickedIcon}
                                    strokeSize={strokeSize}
                                    cornerRadius={cornerRadius}
                                    edges={edges}
                                    size={size}
                                    setIsInfoPanelOpen={setIsInfoPanelOpen}
                                    setIsBottomDrawerOpen={setIsBottomDrawerOpen}
                                />
                            </Element>
                        </Drawer>
                    </BottomDrawerStyled>
                }
            </div>
        </Element >
    )
}
