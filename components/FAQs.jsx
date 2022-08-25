import styles from '../styles/Icons.module.css'
import { Row, Portion, Text, Heading } from 'fictoan-react'
import 'animate.css';
import imageUrlPrefix from '../constants/imageUrlPrefix';

function FAQs() {
    return (
        <Row sidePadding="huge" gutters="huge" marginBottom="small">
            <Portion>
                <Heading as="h4">FAQs</Heading>
            </Portion>
            <Portion>
                <Heading as="h5">Base grid</Heading>
                <Text>Icon content should remain inside of the live area.</Text>
                <img style={{ width: "30%", margin: "auto" }} src={`${imageUrlPrefix}/docs-images/base-grid-dd.png`} alt="base-grid" />
            </Portion>
            <Portion>
                <Heading as="h5">Stroke consistency</Heading>
                <Text>Use the same thickness across all icons to maintain consistency. Do not manipulate the thickness.</Text>
                <img style={{ width: "30%", margin: "auto" }} src={`${imageUrlPrefix}/docs-images/stroke-dd.png`} alt="stroke" />
            </Portion>
            <Portion>
                <Heading as="h5">Set consistency</Heading>
                <Text>Use the same set of icons across all 12 icons. Eg: Do not use 2px for Pay and 1.5px for Bank transfer.</Text>
                <img style={{ width: "75%", margin: "auto" }} src={`${imageUrlPrefix}/docs-images/set-dd.png`} alt="set" />
            </Portion>
            <Portion>
                <Heading as="h5">Themes</Heading>
                <Text>Pratima only supports stroked icons, do not manipulate the icons to fill or add gradients.</Text>
                <img style={{ width: "50%", margin: "auto" }} src={`${imageUrlPrefix}/docs-images/theme-dd.png`} alt="theme" />
            </Portion>
            <Portion>
                <Heading as="h5">Success</Heading>
                <Text>Use tick and green circle. Any size, minimum 24 x 24 dp.</Text>
                <img style={{ width: "75%", margin: "auto" }} src={`${imageUrlPrefix}/docs-images/success-dd.png`} alt="success" />
            </Portion>
            <Portion>
                <Heading as="h5">Failure</Heading>
                <Text>Use a white cross on a red circle.</Text>
                <img style={{ width: "75%", margin: "auto" }} src={`${imageUrlPrefix}/docs-images/failure-dd.png`} alt="failure" />
            </Portion>
        </Row>
    )
}

export default FAQs;