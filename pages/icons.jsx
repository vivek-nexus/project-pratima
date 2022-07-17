import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Icons.module.css'
import { Row, Portion, Select, Text, InfoPanel, Card, Element, Button, HRule } from 'fictoan-react'

function InfoPanelContents({ iconsArray, clickedIcon, strokeSize, cornerRadius, edges, size }) {
    return (
        <>
            {
                iconsArray.map(item =>
                    <div key={item.fileName}>
                        {(clickedIcon == item.fileName) && (
                            <>
                                <Text as="h5" marginBottom="micro">{item.iconName}</Text>
                                <a
                                    href={`https://yakshag.github.io/project-pratima/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                    download={`https://yakshag.github.io/project-pratima/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}>
                                    <Button kind="primary" shadow="hard" shape="rounded">Download SVG</Button>
                                </a>

                                <HRule marginTop="micro" marginBottom="micro" />

                                <Text weight="600" marginBottom="none">Related terms</Text>
                                {item.nomenclature.map(terms =>
                                    <Text
                                        key={terms}
                                        bgColor="slate-10"
                                        className={styles.pill}
                                    >
                                        {terms}
                                    </Text>
                                )}

                                <HRule marginTop="micro" marginBottom="micro" />

                                <Text weight="600">Usage recommendations</Text>
                                {item.notes.map(notes =>
                                    <Text
                                        key={notes}
                                        marginTop="none">
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
    const iconsArray = [
        {
            "fileName": "ic_send_money",
            "iconName": "Send money",
            "nomenclature": ["Pay", "Send", "Pay money", "Send money", "Give  money"],
            "notes": ["The upward arrow paired with a rupee symbol indicates outgoing money.",
                "The upward arrow without the context of the rupee could mean upload and the horizontal arrows are not very intuitive for the user to understand the direction of money."]
        },
        {
            "fileName": "ic_recieve_money",
            "iconName": "Receive money",
            "nomenclature": ["Request", "Request money", "Receive", "Receive money", "Get", "Get money", "Ask", "Ask for money"],
            "notes": ["The downward arrow paired with a rupee symbol indicates incoming money.",
                "The downward arrow without the context of the rupee could mean download and using horizontal arrows are not very intuitive for the user to understand the direction of money."]
        },
        {
            "fileName": "ic_bank_transfer",
            "iconName": "Bank transfer",
            "nomenclature": ["Bank transfer", "Bank"],
            "notes": ["Typically banks are identified as the building with a triangular roof and pillars across various payment apps. It proves efficient to build on this mental model."]
        },
        {
            "fileName": "ic_UPI_id",
            "iconName": "Pay to UPI ID",
            "nomenclature": ["Pay UPI", "UPI ID", "Pay to UPI", "Pay to UPI ID"],
            "notes": ["The Bhim UPI logo is widely accepted and is a veritable identity for mobile payments. Adding other symbols to the already established symbol would only dilute the message."]
        },
        {
            "fileName": "ic_self_transfer",
            "iconName": "Pay to self",
            "nomenclature": ["Pay to self", "Self pay", "Pay yourself", "Self transfer"],
            "notes": ["Self transfer could mean either transfering between two bank accounts that the person holds or transfering from a wallet to their bank account. Hence we have kept the icon ambiguous enough yet conveying that it only involves a single person — self."]
        },
        {
            "fileName": "ic_to_contact",
            "iconName": "Pay to contact",
            "nomenclature": ["Pay to contact", "Pay to mobile number", "Pay to mobile no.", "Pay to Mobile #", "Pay contact"],
            "notes": ["A phone book is a strong metaphor for contacts, pairing that with an upward arrow in this context would mean 'send money to contact.", "Having a phone symbol or just a contact book without the context of the verb would confuse the user on the action associated with it."]
        },
        {
            "fileName": "ic_qr",
            "iconName": "Scan QR",
            "nomenclature": ["Scan and pay", "Scan QR", "QR", "Pay via QR"],
            "notes": ["Ever since advent of smartphones, QR scanning has been associated with small grid of boxes in a square frame which resembles a simplified version of the actual QR code."]
        },
        {
            "fileName": "ic_view_transaction_history",
            "iconName": "Transction history",
            "nomenclature": ["Past transactions", "View transactions", "Transactions", "Passbook"],
            "notes": ["The term passbook is always associated with a booklet that encompasses all the transactions conducted through an account. In this case, adding the binder rings reinforced the identity of the book symbol and addition of the rupee symbol set the context of money/ transaction."]
        },
        {
            "fileName": "ic_check_balance",
            "iconName": "Check balance",
            "nomenclature": ["Check balance", "Bank balance", "Check bank balance",
                "Balance check", "Balance"],
            "notes": ["Magnifying glass brought out thoughts such as search for money.",
                "A question mark indicates \"asking for something\" and rupee reinforces the same thought as \"asking for balance\"."]
        },
        {
            "fileName": "ic_success",
            "iconName": "Success",
            "nomenclature": ["Done", "Successful"],
            "notes": ["Tick communicates success state. Green colour is used to reinforce it.",
                "However, colour should not be used a fail-safe way to communicate due to accessibility reasons (colour blindness)"]
        },
        {
            "fileName": "ic_failure",
            "iconName": "Failure",
            "nomenclature": ["Failed", "Unsuccessful"],
            "notes": ["Cross communicates error state. Red colour is used to reinforce it.",
                "However, colour should not be used a fail-safe way to communicate due to accessibility reasons (colour blindness)"]
        },
        {
            "fileName": "ic_pending",
            "iconName": "Pending",
            "nomenclature": ["Pending", "Processing", "In transit", "In progress"],
            "notes": ["Timer with dotted lines communicates pending state."]
        },
    ];

    const [strokeSize, setStrokeSize] = useState("s1");
    const [cornerRadius, setCornerRadius] = useState("r0");
    const [edges, setEdges] = useState("sharp");
    const [size, setSize] = useState("24");
    const [clickedIcon, setClickedIcon] = useState("");
    const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);



    return (
        <div className={styles.body}>
            <Head>
                <title>Icons</title>
                {/* <base href="/project-pratima/" /> */}
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,1,0" />
            </Head>

            <Row sidePadding="huge" padding="nano" marginTop="small" marginBottom="small" gutters="huge">
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="12" mobileSpan="12">
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
                                label: "1px",
                                value: "1px"
                            },
                            {
                                label: "1.5px",
                                value: "1.5px"
                            },
                            {
                                label: "2px",
                                value: "2px"
                            },
                        ]}
                    />
                </Portion>
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="12" mobileSpan="12">
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
                                label: "0px",
                                value: "0px"
                            },
                            {
                                label: "2px",
                                value: "2px"
                            },
                            {
                                label: "3px",
                                value: "3px"
                            },
                        ]}
                    />
                </Portion>
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="12" mobileSpan="12">
                    <Select
                        onChange={function (e) {
                            setEdges(e.target.value)
                        }}
                        id="edges"
                        label="Edges"
                        options={[
                            {
                                label: "sharp",
                                value: "sharp"
                            },
                            {
                                label: "soft",
                                value: "soft"
                            },
                        ]}
                    />
                </Portion>
                <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="12" mobileSpan="12">
                    <Select
                        id="size"
                        label="Size"
                        options={[
                            {
                                label: "24px",
                                value: "24px"
                            },
                        ]}
                    />
                </Portion>
            </Row>

            <Row sidePadding="huge" gutters="medium">
                {iconsArray.map(item =>
                    <Portion key={item.fileName} desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="8" mobileSpan="12" padding="nano">
                        <Card
                            bgColor="slate-10"
                            className={styles.cardIcon}
                        >
                            <a
                                href={`https://yakshag.github.io/project-pratima/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                download={`https://yakshag.github.io/project-pratima/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}>
                                <img
                                    src={`https://yakshag.github.io/project-pratima/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                    alt={`${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`} />
                            </a>


                            <Card
                                shadow="mild"
                                className={styles.cardIconBottom}
                            >
                                <Text
                                    weight="600"
                                    margin="none"
                                    className={styles.iconNameLink}
                                    onClick={() => {
                                        console.log(item.fileName)
                                        setClickedIcon(item.fileName)
                                        setIsInfoPanelOpen(true)
                                    }}
                                >
                                    {item.iconName} <Element as="span" marginLeft="nano" className="material-symbols-outlined">
                                        chevron_right
                                    </Element>
                                </Text>
                            </Card>
                        </Card>
                    </Portion>)}
            </Row>

            <InfoPanel
                width="medium"
                showOnlyOnDesktop showOnlyOnTabletLandscape showOnlyOnTabletPortrait
                isOpen={isInfoPanelOpen}
                onCloseCallback={() => { setIsInfoPanelOpen(false) }}
            >
                <InfoPanelContents
                    iconsArray={iconsArray}
                    clickedIcon={clickedIcon}
                    strokeSize={strokeSize}
                    cornerRadius={cornerRadius}
                    edges={edges}
                    size={size}
                />
            </InfoPanel>

            <InfoPanel
                width="huge"
                showOnlyOnMobile
                isOpen={isInfoPanelOpen}
                onCloseCallback={() => { setIsInfoPanelOpen(false) }}
                padding="medium"
            >
                <InfoPanelContents
                    iconsArray={iconsArray}
                    clickedIcon={clickedIcon}
                    strokeSize={strokeSize}
                    cornerRadius={cornerRadius}
                    edges={edges}
                    size={size}
                />
            </InfoPanel>
        </div >
    )
}
