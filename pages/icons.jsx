import Head from "next/head"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Row, Portion, Select, Text, InfoPanel, Card, Element, Button, HRule, Heading } from "fictoan-react"
import Drawer from "react-bottom-drawer";
import { isMobile } from "react-device-detect";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-hook-inview"

import iconsArray from "../constants/iconsArray"
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import InfoPanelContents from "../components/InfoPanelContents"
import Documentation from "../components/Documentation"
import FAQs from "../components/FAQs"
import InfoPanelStyled from "../styles/InfoPanel.styled";
import BottomDrawerStyled from "../styles/BottomDrawer.styled";
import { customColours } from "../styles/FictoanTheme";

const MotionPortion = motion(Portion)







export default function Icons() {
    const [strokeSize, setStrokeSize] = useState("s1");
    const [cornerRadius, setCornerRadius] = useState("r0");
    const [edges, setEdges] = useState("sharp");
    const [size, setSize] = useState("24");
    const [clickedIcon, setClickedIcon] = useState("");
    const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
    const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);


    const [ref1, isVisible1] = useInView({ threshold: 0.2 })
    const [ref2, isVisible2] = useInView({ threshold: 0.2 })
    const [ref3, isVisible3] = useInView({ threshold: 0.2 })
    const [ref4, isVisible4] = useInView({ threshold: 0.2 })



    return (
        <Element as="div">
            <Head>
                <title>Project Pratima — Icon library</title>
            </Head>

            <Nav />
            <Row>
                <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1">

                </Portion>
                <Portion desktopSpan="16" tabletLandscapeSpan="20" tabletPortraitSpan="22" mobileSpan="22">
                    <Row marginBottom="none" marginTop="small">
                        <Portion>
                            <Heading as="h4" marginBottom="tiny">Icon library</Heading>
                        </Portion>

                        {/* ////////////////// */}
                        {/* Dropdowns */}
                        <Portion
                            ref={ref1}
                            desktopSpan={isInfoPanelOpen ? "16" : "24"}
                            tabletLandscapeSpan={isInfoPanelOpen ? "18" : "24"}
                            tabletPortraitSpan={isInfoPanelOpen ? "18" : "24"}
                            mobileSpan={false ? "12" : "24"}
                            className="sticky top-0 z-10 bg-white/80"
                            style={{ backdropFilter: "blur(8px)" }}
                            shape="rounded"
                            paddingBottom="nano"
                        >
                            <Row paddingBottom="nano" gutters="medium" marginBottom="none">
                                <AnimatePresence>
                                    <MotionPortion
                                        layout
                                        desktopSpan={isInfoPanelOpen ? "12" : "6"}
                                        tabletLandscapeSpan={isInfoPanelOpen ? "10" : "6"} tabletPortraitSpan={isInfoPanelOpen ? "12" : "6"}
                                        mobileSpan={false ? "24" : "12"}
                                        paddingLeft="nano"
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
                                        paddingLeft="nano"
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
                                        paddingLeft="nano"
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
                                        paddingLeft="nano"
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
                                            <Element as="div"
                                                isFullHeight
                                                className="flex flex-col rounded-lg cursor-pointer hover:shadow-xl duration-300"
                                                shadow="mild"
                                                onClick={() => {
                                                    setClickedIcon(item.fileName)
                                                    isMobile ? setIsBottomDrawerOpen(true) : setIsInfoPanelOpen(true)
                                                }}
                                            >
                                                <Element
                                                    as="div"
                                                    bgColor="blue-10 rounded-t-lg"
                                                >
                                                    <img
                                                        src={`${process.env.LINK_PREFIX}/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                                        alt={`${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                                        className="mx-auto w-3/4"

                                                    />
                                                </Element>
                                                <Element
                                                    as="div"
                                                    className="flex justify-between items-center bg-white rounded-b-lg p-4 flex-grow"
                                                >
                                                    <Text
                                                        weight="600"
                                                        margin="none"
                                                    >
                                                        {item.iconName}
                                                    </Text>
                                                    <img className="w-auto h-[32px]" src={`${process.env.LINK_PREFIX}/chevron_right.svg`} alt="chevron-right-icon" />
                                                </Element>
                                            </Element>
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

                    <Element as="div" ref={ref2}>
                        <HRule kind="primary" id="documentation" />
                        <Documentation />
                    </Element>

                    <Element as="div" ref={ref3}>
                        <HRule kind="primary" id="faqs" />
                        <FAQs />
                    </Element>

                    <Element as="div" ref={ref4}>
                        <HRule kind="primary" id="figma-community" />

                        <Row marginBottom="small">
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
                    </Element>
                </Portion>


                {/* /////////////////////////////////// */}
                {/* RIGHT STICKY ON THIS PAGE CONTAINER */}
                <Portion desktopSpan="4" tabletLandscapeSpan="2" tabletPortraitSpan="1" mobileSpan="1">
                    <Element
                        as="div"
                        className="sticky top-6"
                        showOnlyOnDesktop
                        marginTop="small"
                        marginRight="micro"
                        padding="micro"
                        shape="rounded"
                        shadow="mild"
                        bgColor="blue-10"
                    >
                        <Heading as="h6" weight="400" marginTop="nano" marginBottom="nano">On this page</Heading>
                        <HRule kind="secondary" marginTop="nano" marginBottom="nano" />
                        <Link href="/icons" >
                            <Text
                                weight={isVisible1 ? `600` : ``}
                                style={{ color: isVisible1 ? `${customColours.hue}` : `` }}
                                className="cursor-pointer"
                            >Icon library
                            </Text>
                        </Link>
                        <Link href="/icons/#documentation">
                            <Text
                                weight={isVisible2 ? `600` : ``}
                                style={{ color: isVisible2 ? `${customColours.hue}` : `` }}
                                className="cursor-pointer"
                            >
                                Documentation
                            </Text>
                        </Link>
                        <Link href="/icons/#faqs">
                            <Text
                                weight={isVisible3 ? `600` : ``}
                                style={{ color: isVisible3 ? `${customColours.hue}` : `` }}
                                className="cursor-pointer"
                            >
                                FAQs
                            </Text>
                        </Link>
                        <Link href="/icons/#figma-community">
                            <Text
                                weight={isVisible4 ? `600` : ``}
                                style={{ color: isVisible4 ? `${customColours.hue}` : `` }}
                                className="cursor-pointer"
                                marginBottom="none"
                            >
                                Figma community
                            </Text>
                        </Link>
                    </Element>
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
