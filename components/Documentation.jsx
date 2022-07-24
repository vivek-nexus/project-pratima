import styles from '../styles/Icons.module.css'
import { Row, Portion, Text, Heading } from 'fictoan-react'
import 'animate.css';

function Documentation() {
    return (
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
                        <img src="https://yakshaG.github.io/project-pratima/docs-images/base-grid.png" alt="icon-grid" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <Heading as="h5">Key lines</Heading>
                        <Text>Keyline shapes are the foundation of the grid. By using these core shapes as guidelines, you can maintain consistent visual proportions across system icons.</Text>
                    </Portion>
                    <Portion desktopSpan="5" tabletPortraitSpan="8" marginBottom="tiny">
                        <img src="https://yakshaG.github.io/project-pratima/docs-images/key-lines.png" alt="key-lines" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <Heading as="h5">Key shapes</Heading>
                        <Text>Specific keylines are present for certain shapes: circle, square, rectangle, orthogonals, and diagonals. These basic shapes help unify the icons and regulate their placement on the icon grid.</Text>
                    </Portion>
                    <Portion desktopSpan="14" marginBottom="tiny">
                        <img src="https://yakshaG.github.io/project-pratima/docs-images/key-shapes.png" alt="key-shapes" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <Heading as="h5">Sizes</Heading>
                        <Text>Icons are displayed as 24 x 24 px and can extend upto 32 x 32 px. All icons are available at 24 x 24 SVGs.</Text>
                    </Portion>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <img src="https://yakshaG.github.io/project-pratima/docs-images/icon-size.png" alt="icon-size" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <Heading as="h5">Strokes</Heading>
                        <Text>Pratima icons use a consistent stroke width of either 2dp or 1.5 dp or 1dp, including curves, angles, and both interior and exterior strokes. Based on your brand guidelines, choose and maintain a consistent stroke for all icons.</Text>
                    </Portion>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <img src="https://yakshaG.github.io/project-pratima/docs-images/icon-stroke.png" alt="icon-stroke" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <Heading as="h5">Corner radius</Heading>
                        <Text>Corner radiuses are 2dp by default, but it can range from 0 dp to 4dp based on your brand principles. Here are examples of corner radius on a 2dp stroke.</Text>
                    </Portion>
                    <Portion desktopSpan="14" marginBottom="tiny">
                        <img src="https://yakshaG.github.io/project-pratima/docs-images/corner-radius.png" alt="corner-radius" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <Heading as="h5">Edge variations</Heading>
                        <Text>Two options for edges. As per your brand principles, please choose the relevant edges to pair with the corner radius. Example Here highlights soft edges on 0-4dp corner radius, with 2dp stroke.</Text>
                    </Portion>
                    <Portion desktopSpan="14" marginBottom="tiny">
                        <img src="https://yakshaG.github.io/project-pratima/docs-images/edge-variations.png" alt="edge-variations" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <Heading as="h5">Colour</Heading>
                        <Text>Pratima provides the flexibility of choosing your brand colours and style for each icon. Here are some examples of how colours can be applied on the icon. Note: you can use any colour palette that your brand supports, as long as it meets the accessibility guidelines.</Text>
                    </Portion>
                    <Portion desktopSpan="14" marginBottom="tiny">
                        <img src="https://yakshaG.github.io/project-pratima/docs-images/icon-colour.png" alt="icon-colour" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="10" marginBottom="tiny">
                        <Heading as="h5">Background shapes</Heading>
                        <Text>Pratima provides the flexibility of choosing your brand colours and background shapes for each icon.  Here are some examples of how background shape (Sharp Square, rounded Square, squircle, circle)  can be applied on the icon. Note: you can use any colour palette that your brand supports, as long as it meets the accessibility guidelines.</Text>
                    </Portion>
                    <Portion desktopSpan="14" marginBottom="tiny">
                        <img src="https://yakshaG.github.io/project-pratima/docs-images/background-shapes.png" alt="background-shapes" />
                    </Portion>
                </Row>
            </Portion>
        </Row>
    )
}

export default Documentation;