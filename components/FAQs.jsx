import { Row, Portion, Text, Heading, Element } from 'fictoan-react'
import 'animate.css';

function FAQs() {
    return (
        <Element as="div" marginBottom="small">

            <Heading as="h4" marginBottom="micro">FAQs</Heading>


            <Heading as="h5">Base grid</Heading>
            <Text>Icon content should remain inside of the live area.</Text>
            <img style={{ width: "30%", margin: "auto" }} src={`${process.env.LINK_PREFIX}/docs-images/base-grid-dd.png`} alt="base-grid" />

            <Heading as="h5">Stroke consistency</Heading>
            <Text>Use the same thickness across all icons to maintain consistency. Do not manipulate the thickness.</Text>
            <img style={{ width: "30%", margin: "auto" }} src={`${process.env.LINK_PREFIX}/docs-images/stroke-dd.png`} alt="stroke" />

            <Heading as="h5">Set consistency</Heading>
            <Text>Use the same set of icons across all 12 icons. Eg: Do not use 2px for Pay and 1.5px for Bank transfer.</Text>
            <img style={{ width: "75%", margin: "auto" }} src={`${process.env.LINK_PREFIX}/docs-images/set-dd.png`} alt="set" />

            <Heading as="h5">Themes</Heading>
            <Text>Pratima only supports stroked icons, do not manipulate the icons to fill or add gradients.</Text>
            <img style={{ width: "50%", margin: "auto" }} src={`${process.env.LINK_PREFIX}/docs-images/theme-dd.png`} alt="theme" />

            <Heading as="h5">Success</Heading>
            <Text>Use tick and green circle. Any size, minimum 24 x 24 dp.</Text>
            <img style={{ width: "75%", margin: "auto" }} src={`${process.env.LINK_PREFIX}/docs-images/success-dd.png`} alt="success" />

            <Heading as="h5">Failure</Heading>
            <Text>Use a white cross on a red circle.</Text>
            <img style={{ width: "75%", margin: "auto" }} src={`${process.env.LINK_PREFIX}/docs-images/failure-dd.png`} alt="failure" />

        </Element >
    )
}

export default FAQs;