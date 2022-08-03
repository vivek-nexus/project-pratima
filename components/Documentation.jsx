import styles from '../styles/Icons.module.css'
import { Row, Portion, Text, Heading } from 'fictoan-react'
import 'animate.css';

import imageUrlPrefix from '../constants/imageUrlPrefix';

function Documentation() {
    return (
        <Row sidePadding="huge" marginBottom="small">
            <Portion isFullWidth>
                <Heading as="h4" marginBottom="micro">Documentation</Heading>
            </Portion>
            <Portion>
                <Row>
                    <Portion desktopSpan="24">
                        <Heading as="h5">Base grid</Heading>
                        <Text>Icon content should remain inside of the live area, which is the region of an image that is unlikely to be hidden from view.</Text>
                    </Portion>
                    <Portion desktopSpan="6">
                    </Portion>
                    <Portion desktopSpan="12">
                        <Row>
                            <Portion desktopSpan="8" tabletLandscapeSpan="8" tabletPortraitSpan="8" mobileSpan="8" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/docs-images/base-grid-1.svg`} alt="icon-grid" />
                                <Text align="center" weight="600">Gird — 24 x 24px</Text>
                            </Portion>
                            <Portion desktopSpan="8" tabletLandscapeSpan="8" tabletPortraitSpan="8" mobileSpan="8" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/docs-images/base-grid-2.svg`} alt="icon-grid" />
                                <Text align="center" weight="600">Padding — 2 x 2px</Text>
                            </Portion>
                            <Portion desktopSpan="8" tabletLandscapeSpan="8" tabletPortraitSpan="8" mobileSpan="8" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/docs-images/base-grid-3.svg`} alt="icon-grid" />
                                <Text align="center" weight="600">Live area — 2 x 2px</Text>
                            </Portion>
                        </Row>
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="24">
                        <Heading as="h5">Key lines</Heading>
                        <Text>Keyline shapes are the foundation of the grid. By using these core shapes as guidelines, you can maintain consistent visual proportions across system icons.</Text>
                    </Portion>
                    <Portion desktopSpan="10" tabletLandscapeSpan="8" tabletPortraitSpan="8" mobileSpan="8">
                    </Portion>
                    <Portion desktopSpan="5" tabletLandscapeSpan="8" tabletPortraitSpan="8" mobileSpan="8" marginBottom="small">
                        <img src={`${imageUrlPrefix}/docs-images/key-line.svg`} alt="key-lines" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="24">
                        <Heading as="h5">Key shapes</Heading>
                        <Text>Specific keylines are present for certain shapes: circle, square, rectangle, orthogonals, and diagonals. These basic shapes help unify the icons and regulate their placement on the icon grid.</Text>
                    </Portion>
                    <Portion desktopSpan="1">
                    </Portion>
                    <Portion desktopSpan="22">
                        <Row gutters="large">
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/docs-images/key-shape-1.svg`} alt="key-shapes" />
                                <Text align="center" weight="600" marginBottom="none">SQUARE</Text>
                                <Text align="center" margin="none">H — 18px, W — 18px</Text>
                            </Portion>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/docs-images/key-shape-2.svg`} alt="key-shapes" />
                                <Text align="center" weight="600" marginBottom="none">CIRCLE</Text>
                                <Text align="center" margin="none">Diameter — 20px</Text>
                            </Portion>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/docs-images/key-shape-3.svg`} alt="key-shapes" />
                                <Text align="center" weight="600" marginBottom="none">HORIZONTAL RECTANGLE</Text>
                                <Text align="center" margin="none">H — 18px, W — 20px</Text>
                            </Portion>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="12" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/docs-images/key-shape-4.svg`} alt="icon-grid" />
                                <Text align="center" weight="600" marginBottom="none">VERTICAL RECTANGLE</Text>
                                <Text align="center" margin="none">H — 20px, W — 18px</Text>
                            </Portion>
                        </Row>
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="24">
                        <Heading as="h5">Sizes</Heading>
                        <Text marginBottom="none">Icons are displayed as 24 x 24 px and can extend upto 32 x 32 px. All icons are available at 24 x 24 SVGs.</Text>
                    </Portion>
                    <Portion desktopSpan="6" tabletLandscapeSpan="5" tabletPortraitSpan="5" mobileSpan="5">
                    </Portion>
                    <Portion desktopSpan="12" tabletLandscapeSpan="18" tabletPortraitSpan="18" mobileSpan="18">
                        <Row style={{ alignItems: "end" }}>
                            <Portion desktopSpan="4" tabletLandscapeSpan="4" tabletPortraitSpan="4" mobileSpan="4">
                                <img src={`${imageUrlPrefix}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="icon-sizes" />
                                <Text align="center" weight="600">16px</Text>
                            </Portion>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="6" mobileSpan="6">
                                <img src={`${imageUrlPrefix}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="icon-sizes" />
                                <Text align="center" weight="600">24px</Text>
                            </Portion>
                            <Portion desktopSpan="8" tabletLandscapeSpan="8" tabletPortraitSpan="8" mobileSpan="8">
                                <img src={`${imageUrlPrefix}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="icon-sizes" />
                                <Text align="center" weight="600">32px</Text>
                            </Portion>
                        </Row>
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="24">
                        <Heading as="h5">Strokes</Heading>
                        <Text marginBottom="none">Pratima icons use a consistent stroke width of either 2px or 1.5 px or 1px, including curves, angles, and both interior and exterior strokes. Based on your brand guidelines, choose and maintain a consistent stroke for all icons.</Text>
                    </Portion>
                    <Portion desktopSpan="6">
                    </Portion>
                    <Portion desktopSpan="12">
                        <Row verticallyCenterItems>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="8" mobileSpan="8">
                                <img src={`${imageUrlPrefix}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="icon-strokes" />
                                <Text align="center" weight="600" margin="none">1px</Text>
                            </Portion>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="8" mobileSpan="8">
                                <img src={`${imageUrlPrefix}/icons/s1.5_r3_soft/ic_view_transaction_history_24_s1.5_r3_soft.svg`} alt="icon-strokes" />
                                <Text align="center" weight="600" margin="none">1.5px</Text>
                            </Portion>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="8" mobileSpan="8">
                                <img src={`${imageUrlPrefix}/icons/s2_r3_soft/ic_view_transaction_history_24_s2_r3_soft.svg`} alt="icon-strokes" />
                                <Text align="center" weight="600" margin="none">2px</Text>
                            </Portion>
                        </Row>
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="24">
                        <Heading as="h5">Corner radius</Heading>
                        <Text marginBottom="none">Corner radiuses are 2px by default, but it can range from 0 px to 4px based on your brand principles. Here are examples of corner radius on a 1px stroke.</Text>
                    </Portion>
                    <Portion desktopSpan="6">
                    </Portion>
                    <Portion desktopSpan="12">
                        <Row verticallyCenterItems>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="8" mobileSpan="8">
                                <img src={`${imageUrlPrefix}/icons/s1_r0_soft/ic_view_transaction_history_24_s1_r0_soft.svg`} alt="corner-radius" />
                                <Text align="center" weight="600" margin="none">0px</Text>
                            </Portion>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="8" mobileSpan="8">
                                <img src={`${imageUrlPrefix}/icons/s1_r2_soft/ic_view_transaction_history_24_s1_r2_soft.svg`} alt="corner-radius" />
                                <Text align="center" weight="600" margin="none">2px</Text>
                            </Portion>
                            <Portion desktopSpan="6" tabletLandscapeSpan="6" tabletPortraitSpan="8" mobileSpan="8">
                                <img src={`${imageUrlPrefix}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="corner-radius" />
                                <Text align="center" weight="600" margin="none">3px</Text>
                            </Portion>
                        </Row>
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="24">
                        <Heading as="h5">Edge variations</Heading>
                        <Text marginBottom="none">Two options for edges — soft and sharp. As per your brand principles, please choose the relevant edges to pair with the corner radius. Example here highlights soft and sharp edges on 0px and 2px corner radius, with 1px stroke.</Text>
                    </Portion>
                    <Portion desktopSpan="4">
                    </Portion>
                    <Portion desktopSpan="16">
                        <Row>
                            <Portion desktopSpan="5" tabletLandscapeSpan="5" tabletPortraitSpan="5" mobileSpan="12" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/icons/s1_r0_soft/ic_view_transaction_history_24_s1_r0_soft.svg`} alt="edge-variations" />
                                <Text align="center" weight="600" marginBottom="none">SOFT</Text>
                                <Text align="center" margin="none">0px</Text>
                            </Portion>
                            <Portion desktopSpan="5" tabletLandscapeSpan="5" tabletPortraitSpan="5" mobileSpan="12" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/icons/s1_r0_sharp/ic_view_transaction_history_24_s1_r0_sharp.svg`} alt="edge-variations" />
                                <Text align="center" weight="600" marginBottom="none">SHARP</Text>
                                <Text align="center" margin="none">0px</Text>
                            </Portion>
                            <Portion desktopSpan="4" tabletLandscapeSpan="4" tabletPortraitSpan="4" mobileSpan="0" hideOnMobile marginBottom="micro">
                            </Portion>
                            <Portion desktopSpan="5" tabletLandscapeSpan="5" tabletPortraitSpan="5" mobileSpan="12" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/icons/s1_r2_soft/ic_view_transaction_history_24_s1_r2_soft.svg`} alt="edge-variations" />
                                <Text align="center" weight="600" marginBottom="none">SOFT</Text>
                                <Text align="center" margin="none">2px</Text>
                            </Portion>
                            <Portion desktopSpan="5" tabletLandscapeSpan="5" tabletPortraitSpan="5" mobileSpan="12" marginBottom="micro">
                                <img src={`${imageUrlPrefix}/icons/s1_r2_sharp/ic_view_transaction_history_24_s1_r2_sharp.svg`} alt="edge-variations" />
                                <Text align="center" weight="600" marginBottom="none">SHARP</Text>
                                <Text align="center" margin="none">2px</Text>
                            </Portion>
                        </Row>
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="24">
                        <Heading as="h5">Colour</Heading>
                        <Text marginBottom="none">Pratima provides the flexibility of choosing your brand colours and style for each icon. Here are some examples of how colours can be applied on the icon. Note: You can use any colour palette that your brand supports, as long as it meets the accessibility guidelines.</Text>
                    </Portion>
                    <Portion desktopSpan="5">
                    </Portion>
                    <Portion desktopSpan="14" marginBottom="tiny">
                        <img src={`${imageUrlPrefix}/docs-images/icon-colour.png`} alt="icon-colour" />
                    </Portion>
                </Row>
                <Row>
                    <Portion desktopSpan="24">
                        <Heading as="h5">Background shapes</Heading>
                        <Text marginBottom="none">Pratima provides the flexibility of choosing your brand colours and background shapes for each icon.  Here are some examples of how background shape (Sharp Square, rounded Square, squircle, circle)  can be applied on the icon. Note: You can use any colour palette that your brand supports, as long as it meets the accessibility guidelines.</Text>
                    </Portion>
                    <Portion desktopSpan="5">
                    </Portion>
                    <Portion desktopSpan="14" marginBottom="tiny">
                        <img src={`${imageUrlPrefix}/docs-images/background-shapes.png`} alt="background-shapes" />
                    </Portion>
                </Row>
            </Portion >
        </Row >
    )
}

export default Documentation;