import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/Icons.module.css'
import { Row, Portion, Select, Text, InfoPanel, Card, Element, Button, HRule, Heading } from 'fictoan-react'
import 'animate.css';
import Drawer from "react-bottom-drawer";
import { isMobile } from 'react-device-detect';
import iconsArray from '../iconsArray';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const MotionPortion = motion(Portion)





function InfoPanelContents({ iconsArray, clickedIcon, strokeSize, cornerRadius, edges, size, setIsInfoPanelOpen, setIsBottomDrawerOpen }) {
    return (
        <>
            {
                iconsArray.map(item =>
                    <div key={item.fileName}>
                        {(clickedIcon == item.fileName) && (
                            <>
                                <Text as="h5" marginBottom="micro"
                                    className={styles.infoPanelHeading}
                                    onClick={() => { isMobile ? setIsBottomDrawerOpen(false) : setIsInfoPanelOpen(false) }}
                                >
                                    <Element
                                        as="span"
                                        className="material-symbols-outlined"
                                        marginRight="nano"
                                    >
                                        close
                                    </Element>{item.iconName}</Text>
                                <img
                                    src={`https://yakshag.github.io/project-pratima/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                    alt={`${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                    className="icon-large"
                                />
                                <a
                                    href={`https://yakshag.github.io/project-pratima/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                    download>
                                    <Button kind="primary" shadow="hard" shape="rounded" marginTop="micro">Download SVG</Button>
                                </a>
                                <HRule marginTop="micro" marginBottom="micro" />

                                <Text as="h6" weight="600" marginBottom="none">Related terms / nomenclature</Text>
                                {item.nomenclature.map(terms =>
                                    <Text
                                        key={terms}
                                        bgColor="slate-70"
                                        textColor="white"
                                        weight="600"
                                        className={styles.pill}
                                    >
                                        {terms}
                                    </Text>
                                )}

                                <HRule marginTop="micro" marginBottom="micro" />

                                <Text as="h6" weight="600">Usage recommendations</Text>
                                {item.notes.map(notes =>
                                    <Text
                                        key={notes}
                                    >
                                        {notes}
                                    </Text>
                                )}
                            </>
                        )}
                    </div>
                )
            }
        </>
    )
}

export default function Icons() {
    const [strokeSize, setStrokeSize] = useState("s1");
    const [cornerRadius, setCornerRadius] = useState("r0");
    const [edges, setEdges] = useState("sharp");
    const [size, setSize] = useState("24");
    const [clickedIcon, setClickedIcon] = useState("");
    const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
    const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);

    useEffect(() => {
        if (isInfoPanelOpen) {
            let dismissButtons = document.querySelectorAll('.dismiss-button')
            dismissButtons.forEach(element => {
                element.style.display = 'none'
            });
        }
    }, [clickedIcon])



    return (
        <Element as="div" className={styles.body}>
            <Head>
                <title>Icons</title>
                <meta name="description" content="Payment icons for India" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,1,0" />
            </Head>

            <Nav />

            {/* <div key={isInfoPanelOpen}> */}
            <Row sidePadding="huge" marginBottom="none">
                <Portion
                    desktopSpan={isInfoPanelOpen ? "16" : "24"}
                    tabletLandscapeSpan={isInfoPanelOpen ? "18" : "24"}
                    tabletPortraitSpan={isInfoPanelOpen ? "18" : "24"}
                    mobileSpan={false ? "12" : "24"}
                >
                    <Heading as="h4" marginBottom="tiny">Icons</Heading>
                    <Row padding="nano" gutters="huge">
                        <AnimatePresence>
                            <MotionPortion
                                layout
                                desktopSpan={isInfoPanelOpen ? "12" : "6"}
                                tabletLandscapeSpan={isInfoPanelOpen ? "10" : "6"} tabletPortraitSpan={isInfoPanelOpen ? "12" : "6"}
                                mobileSpan={false ? "24" : "12"}
                            // className={clickedIcon ? `animate__animated animate__headShake` : ``}
                            >
                                <Select
                                    onChange={function (e) {
                                        console.log(e.target.value)
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
                            // className={clickedIcon ? `animate__animated animate__headShake` : ``}
                            >
                                <Select
                                    onChange={function (e) {
                                        console.log(e.target.value)
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
                            // className={clickedIcon ? `animate__animated animate__headShake` : ``}
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
                            // className={clickedIcon ? `animate__animated animate__headShake` : ``}
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
            </Row >

            <Row sidePadding="huge">
                <Portion
                    desktopSpan={isInfoPanelOpen ? "16" : "24"}
                    tabletLandscapeSpan={isInfoPanelOpen ? "18" : "24"}
                    tabletPortraitSpan={isInfoPanelOpen ? "18" : "24"}
                    mobileSpan={false ? "12" : "24"}
                >
                    <Row
                        gutters="medium"
                    >
                        <AnimatePresence>
                            {iconsArray.map(item =>
                                <MotionPortion
                                    layout
                                    key={item.fileName}
                                    desktopSpan={isInfoPanelOpen ? "8" : "6"}
                                    tabletLandscapeSpan={isInfoPanelOpen ? "10" : "8"}
                                    tabletPortraitSpan={isInfoPanelOpen ? "12" : "8"} mobileSpan={false ? "24" : "12"} padding="nano"
                                // className={clickedIcon ? `animate__animated animate__headShake` : ``}
                                >
                                    <Card
                                        isFullHeight
                                        bgColor="slate-10"
                                        className={styles.cardIcon}
                                        onClick={() => {
                                            console.log(item.fileName)
                                            setClickedIcon(item.fileName)
                                            isMobile ? setIsBottomDrawerOpen(true) : setIsInfoPanelOpen(true)
                                        }}
                                    >
                                        <img
                                            src={`https://yakshag.github.io/project-pratima/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                            alt={`${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                            className={styles.iconThumnail}
                                            style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
                                        />


                                        <Card
                                            shadow="mild"
                                            className={styles.cardIconBottom}
                                        >
                                            <Text
                                                weight="600"
                                                margin="none"
                                                className={styles.iconNameLink}
                                            >
                                                {item.iconName} <Element as="span" marginLeft="nano" className="material-symbols-outlined">
                                                    chevron_right
                                                </Element>
                                            </Text>
                                        </Card>
                                    </Card>
                                </MotionPortion>)}
                        </AnimatePresence>
                    </Row>
                </Portion>
            </Row>
            {/* </div> */}


            <HRule sideMargin="huge" />

            <Row sidePadding="huge" marginBottom="small">
                <Portion isFullWidth>
                    <Heading as="h4">Documentation</Heading>
                </Portion>
                <Portion>
                    <Row>
                        <Portion desktopSpan="10" marginBottom="tiny">
                            <Heading as="h5">Base grid</Heading>
                            <Text>Icon content should remain inside of the live area, which is the region of an image that is unlikely to be hidden from view.</Text>
                        </Portion>
                        <Portion desktopSpan="14" marginBottom="tiny">
                            <img src="https://yakshaG.github.io/project-pratima/docs-images/icon-grid-1.png" />
                        </Portion>
                    </Row>
                    <Row>
                        <Portion desktopSpan="10" marginBottom="tiny">
                            <Heading as="h5">Key lines</Heading>
                            <Text>Keyline shapes are the foundation of the grid. By using these core shapes as guidelines, you can maintain consistent visual proportions across system icons.</Text>
                        </Portion>
                        <Portion desktopSpan="6" marginBottom="tiny">
                            <img src="https://yakshaG.github.io/project-pratima/docs-images/key-lines.png" />
                        </Portion>
                    </Row>
                    <Row>
                        <Portion desktopSpan="10" marginBottom="tiny">
                            <Heading as="h5">Key shapes</Heading>
                            <Text>Specific keylines are present for certain shapes: circle, square, rectangle, orthogonals, and diagonals. These basic shapes help unify the icons and regulate their placement on the icon grid.</Text>
                        </Portion>
                        <Portion desktopSpan="14" marginBottom="tiny">
                            <img src="https://yakshaG.github.io/project-pratima/docs-images/key-shapes.png" />
                        </Portion>
                    </Row>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            <Row sidePadding="huge" marginBottom="small">
                <Text as="h4">FAQs</Text>
            </Row>

            <HRule sideMargin="huge" />

            <Row sidePadding="huge" marginBottom="small">
                <Portion desktopSpan="10" mobileSpan="24">
                    <Heading as="h4">Figma community</Heading>
                    <Text>Download complete documentation and icons as a Figma file</Text>
                    <a href="https://www.figma.com/community/file/1087129513242287190" target="_blank" rel="noopener noreferrer">
                        <Button kind="primary" shadow="hard" shape="rounded" marginBottom="micro">Get a copy</Button>
                    </a>
                </Portion>
                <Portion desktopSpan="14" mobileSpan="24">
                    <a href="https://www.figma.com/community/file/1087129513242287190" target="_blank" rel="noopener noreferrer">
                        <Element as="img" shape="rounded" shadow="hard" src="https://yakshaG.github.io/project-pratima/cover.svg" alt="Figma file cover" />
                    </a>
                    {/* <Element as="iframe" borderColor="transparent" shape="rounded" style={{ width: "100%", aspectRatio: "16/9" }} src="https://www.figma.com/community/file/1087129513242287190" allowfullscreen></Element> */}
                </Portion>
            </Row>



            <Footer />

            <div key={clickedIcon}>
                <InfoPanel
                    width="large"
                    isOpen={isInfoPanelOpen}
                    onCloseCallback={() => { setIsInfoPanelOpen(false) }}
                    className={`${clickedIcon ? `${styles.infoPanel} animate__animated animate__pulse` : `${styles.infoPanel}`}`}
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

                {isMobile &&
                    <Drawer
                        isVisible={isBottomDrawerOpen}
                        className={styles.infoPanel}
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
                }
            </div>
        </Element >
    )
}
