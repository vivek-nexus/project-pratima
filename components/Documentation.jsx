import { Row, Portion, Text, Heading, Element } from 'fictoan-react'
import 'animate.css';


function Documentation() {
    return (

        <>
            <Heading as="h4" marginBottom="micro">Documentation</Heading>
            <Element as="div" marginBottom="small">
                <Heading as="h5">Base grid</Heading>
                <Text>Icon content should remain inside of the live area, which is the region of an image that is unlikely to be hidden from view.</Text>

                <Element as="div" className="flex gap-4 items-top justify-center" >
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/base-grid-1.svg`} alt="icon-grid" />
                        <Text align="center" weight="600">Grid — 24 x 24px</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/base-grid-2.svg`} alt="icon-grid" />
                        <Text align="center" weight="600">Padding — 2 x 2px</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/base-grid-3.svg`} alt="icon-grid" />
                        <Text align="center" weight="600">Live area — 2 x 2px</Text>
                    </div>
                </Element>
            </Element>

            <Element as="div" marginBottom="small">
                <Heading as="h5">Key lines</Heading>
                <Text>Keyline shapes are the foundation of the grid. By using these core shapes as guidelines, you can maintain consistent visual proportions across system icons.</Text>

                <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/key-line.svg`} alt="key-lines" />
            </Element>

            <Element as="div" marginBottom="small">
                <Heading as="h5">Key shapes</Heading>
                <Text>Specific keylines are present for certain shapes: circle, square, rectangle, orthogonals, and diagonals. These basic shapes help unify the icons and regulate their placement on the icon grid.</Text>

                <Element as="div" className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center items-start">
                    <div className="mb-8 sm:mb-0">
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/key-shape-1.svg`} alt="key-shapes" />
                        <Text align="center" weight="600" marginBottom="none">SQUARE</Text>
                        <Text align="center" margin="none">H — 18px, W — 18px</Text>
                    </div>
                    <div className="mb-8 sm:mb-0">
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/key-shape-2.svg`} alt="key-shapes" />
                        <Text align="center" weight="600" marginBottom="none">CIRCLE</Text>
                        <Text align="center" margin="none">Diameter — 20px</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/key-shape-3.svg`} alt="key-shapes" />
                        <Text align="center" weight="600" marginBottom="none">HORIZONTAL RECTANGLE</Text>
                        <Text align="center" margin="none">H — 18px, W — 20px</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/key-shape-4.svg`} alt="icon-grid" />
                        <Text align="center" weight="600" marginBottom="none">VERTICAL RECTANGLE</Text>
                        <Text align="center" margin="none">H — 20px, W — 18px</Text>
                    </div>
                </Element>
            </Element>

            <Element as="div" marginBottom="small">
                <Heading as="h5">Sizes</Heading>
                <Text marginBottom="none">Icons are displayed as 24 x 24 px and can extend upto 32 x 32 px. All icons are available at 24 x 24 SVGs.</Text>

                <Element as="div" className="flex items-end justify-center">
                    <div>
                        <img className="h-16" src={`${process.env.LINK_PREFIX}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="icon-sizes" />
                        <Text align="center" margin="none" weight="600">16px</Text>
                    </div>
                    <div>
                        <img className="h-24" src={`${process.env.LINK_PREFIX}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="icon-sizes" />
                        <Text align="center" margin="none" weight="600">24px</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="icon-sizes" />
                        <Text align="center" margin="none" weight="600">32px</Text>
                    </div>
                </Element>
            </Element>

            <Element as="div" marginBottom="small">
                <Heading as="h5">Strokes</Heading>
                <Text marginBottom="none">Pratima icons use a consistent stroke width of either 2px or 1.5 px or 1px, including curves, angles, and both interior and exterior strokes. Based on your brand guidelines, choose and maintain a consistent stroke for all icons.</Text>

                <Element as="div" className="flex gap-4 items-center justify-center">
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="icon-strokes" />
                        <Text align="center" weight="600" margin="none">1px</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/icons/s1.5_r3_soft/ic_view_transaction_history_24_s1.5_r3_soft.svg`} alt="icon-strokes" />
                        <Text align="center" weight="600" margin="none">1.5px</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/icons/s2_r3_soft/ic_view_transaction_history_24_s2_r3_soft.svg`} alt="icon-strokes" />
                        <Text align="center" weight="600" margin="none">2px</Text>
                    </div>
                </Element>
            </Element>

            <Element as="div" marginBottom="small">
                <Heading as="h5">Corner radius</Heading>
                <Text marginBottom="none">Corner radiuses are 2px by default, but it can range from 0 px to 4px based on your brand principles. Here are examples of corner radius on a 1px stroke.</Text>

                <Element as="div" className="flex gap-4 items-top justify-center">
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/icons/s1_r0_soft/ic_view_transaction_history_24_s1_r0_soft.svg`} alt="corner-radius" />
                        <Text align="center" weight="600" margin="none">0px</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/icons/s1_r2_soft/ic_view_transaction_history_24_s1_r2_soft.svg`} alt="corner-radius" />
                        <Text align="center" weight="600" margin="none">2px</Text>
                    </div>
                    <div>
                        <img className="h-32 -mt-1" src={`${process.env.LINK_PREFIX}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} alt="corner-radius" />
                        <Text align="center" weight="600" margin="none">3px</Text>
                    </div>
                </Element>
            </Element>


            <Element as="div" marginBottom="small">
                <Heading as="h5">Edge variations</Heading>
                <Text marginBottom="none">Two options for edges — soft and sharp. As per your brand principles, please choose the relevant edges to pair with the corner radius. Example here highlights soft and sharp edges on 0px and 2px corner radius, with 1px stroke.</Text>

                <Element as="div" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-8 sm:mb-0">
                        <div className="flex justify-center gap-4">
                            <div>
                                <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/edge-variations-1.svg`} alt="edge-variations" />
                                <Text align="center" margin="none">Soft</Text>
                            </div>
                            <div>
                                <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/edge-variations-2.svg`} alt="edge-variations" />
                                <Text align="center" margin="none">Sharp</Text>
                            </div>
                        </div>
                        <div>
                            <Text align="center" weight="600" margin="none">1px corner radius</Text>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center gap-4">
                            <div>
                                <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/edge-variations-3.svg`} alt="edge-variations" />
                                <Text align="center" margin="none">Soft</Text>
                            </div>
                            <div>
                                <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/edge-variations-4.svg`} alt="edge-variations" />
                                <Text align="center" margin="none">Sharp</Text>
                            </div>
                        </div>
                        <div>
                            <Text align="center" weight="600" margin="none">2px corner radius</Text>
                        </div>
                    </div>

                </Element>
            </Element>


            <Element as="div" marginBottom="small">
                <Heading as="h5">Colour</Heading>
                <Text marginBottom="none">Pratima provides the flexibility of choosing your brand colours and style for each icon. Here are some examples of how colours can be applied on the icon. You can use any colour palette that your brand supports, as long as it meets the accessibility guidelines.</Text>

                <Element as="div" className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-center items-start">
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/colours-1.svg`} alt="colours" />
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/colours-2.svg`} alt="colours" />
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/colours-3.svg`} alt="colours" />
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/colours-4.svg`} alt="colours" />
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/colours-5.svg`} alt="colours" />
                    </div>
                </Element>
            </Element>

            <Element as="div" marginBottom="small">
                <Heading as="h5">Background shapes</Heading>
                <Text>Pratima provides the flexibility of choosing your brand colours and background shapes for each icon.  Here are some examples of how background shape (Sharp Square, rounded Square, squircle, circle)  can be applied on the icon.</Text>

                <Element as="div" className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center items-start">
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/background-shapes-1.svg`} alt="colours" />
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/background-shapes-2.svg`} alt="colours" />
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/background-shapes-3.svg`} alt="colours" />
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/background-shapes-4.svg`} alt="colours" />
                    </div>
                </Element>
            </Element>
        </>
    )
}

export default Documentation;