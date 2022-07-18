import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/Icons.module.css'
import { Row, Portion, Select, Text, InfoPanel, Card, Element, Button, HRule } from 'fictoan-react'
import 'animate.css';
import iconsArray from '../iconsArray';




function InfoPanelContents({ iconsArray, clickedIcon, strokeSize, cornerRadius, edges, size, setIsInfoPanelOpen }) {
    return (
        <>
            {
                iconsArray.map(item =>
                    <div key={item.fileName}>
                        {(clickedIcon == item.fileName) && (
                            <>
                                <Text as="h5" marginBottom="micro"
                                    className={styles.infoPanelHeading}
                                    onClick={() => { setIsInfoPanelOpen(false) }}
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

            <Row sidePadding="huge">
                <Portion desktopSpan="18" tabletLandscapeSpan="18" tabletPortraitSpan="18" mobileSpan="12">
                    <Row padding="nano" marginTop="small" marginBottom="small" gutters="huge">
                        <Portion desktopSpan="6" tabletLandscapeSpan="12" tabletPortraitSpan="12" mobileSpan="24">
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
                        </Portion>
                        <Portion desktopSpan="6" tabletLandscapeSpan="12" tabletPortraitSpan="12" mobileSpan="24">
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
                        </Portion>
                        <Portion desktopSpan="6" tabletLandscapeSpan="12" tabletPortraitSpan="12" mobileSpan="24">
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
                        </Portion>
                        <Portion desktopSpan="6" tabletLandscapeSpan="12" tabletPortraitSpan="12" mobileSpan="24">
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
                        </Portion>
                    </Row>
                </Portion>
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12">
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion desktopSpan="18" tabletLandscapeSpan="18" tabletPortraitSpan="18" mobileSpan="12">
                    <Row
                        // sidePadding="huge"
                        gutters="medium">
                        {iconsArray.map(item =>
                            <Portion key={item.fileName} desktopSpan="8" tabletLandscapeSpan="10" tabletPortraitSpan="10" mobileSpan="24" padding="nano">
                                <Card
                                    isFullHeight
                                    bgColor="slate-10"
                                    className={styles.cardIcon}
                                    onClick={() => {
                                        console.log(item.fileName)
                                        setClickedIcon(item.fileName)
                                        setIsInfoPanelOpen(true)
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
                            </Portion>)}
                    </Row>
                </Portion>
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12">
                    {/* <Card borderColor="none"> */}
                    <Text as="h5" paddingTop="nano" className={styles.infoPanelHeading}
                    >Select an icon
                    </Text>
                    {/* </Card> */}
                </Portion>
            </Row>

            <div key={clickedIcon}>
                <InfoPanel
                    width="large"
                    showOnlyOnDesktop showOnlyOnTabletLandscape showOnlyOnTabletPortrait
                    isOpen={isInfoPanelOpen}
                    onCloseCallback={() => { setIsInfoPanelOpen(false) }}
                    className={`${clickedIcon ? `${styles.infoPanel} animate__animated animate__pulse` : `${styles.infoPanel}`}`}
                >
                    <InfoPanelContents
                        iconsArray={iconsArray}
                        clickedIcon={clickedIcon}
                        strokeSize={strokeSize}
                        cornerRadius={cornerRadius}
                        edges={edges}
                        size={size}
                        setIsInfoPanelOpen={setIsInfoPanelOpen}
                    />
                </InfoPanel>

                <InfoPanel
                    width="huge"
                    showOnlyOnMobile
                    isOpen={isInfoPanelOpen}
                    onCloseCallback={() => { setIsInfoPanelOpen(false) }}
                    className={`${clickedIcon ? `${styles.infoPanel} animate__animated animate__pulse` : `${styles.infoPanel}`}`}
                    padding="medium"
                >
                    <InfoPanelContents
                        iconsArray={iconsArray}
                        clickedIcon={clickedIcon}
                        strokeSize={strokeSize}
                        cornerRadius={cornerRadius}
                        edges={edges}
                        size={size}
                        setIsInfoPanelOpen={setIsInfoPanelOpen}
                    />
                </InfoPanel>
            </div>
        </Element >
    )
}
