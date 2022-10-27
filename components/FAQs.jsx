import { Row, Portion, Text, Heading, Element } from "fictoan-react"

function FAQs() {
    return (
        <Element as="div" marginBottom="small">

            <Heading as="h4" marginBottom="micro">FAQs</Heading>


            <Element as="div" marginBottom="small">
                <Heading as="h5">Base grid</Heading>
                <Text>Icon content should remain inside of the live area.</Text>
                <Element as="div" className="grid grid-cols-2 gap-4 items-center justify-center">
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/base-grid-yes.svg`} alt="base-grid-yes" />
                        <Text align="center" weight="600" size="huge" margin="none">👍</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/base-grid-no.svg`} alt="base-grid-no" />
                        <Text align="center" weight="600" size="huge" margin="none">👎</Text>
                    </div>
                </Element>
            </Element>

            <Element as="div" marginBottom="small">
                <Heading as="h5">Stroke consistency</Heading>
                <Text>Use the same thickness across all icons to maintain consistency — do not manipulate the thickness.</Text>
                <Element as="div" className="grid grid-cols-2 gap-4 items-center justify-center">
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/stroke-consistency-yes.svg`} alt="stroke-consistency-yes" />
                        <Text align="center" weight="600" size="huge" margin="none">👍</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/stroke-consistency-no.svg`} alt="stroke-consistency-no" />
                        <Text align="center" weight="600" size="huge" margin="none">👎</Text>
                    </div>
                </Element>
            </Element>

            <Element as="div" marginBottom="small">
                <Heading as="h5">Set consistency</Heading>
                <Text>Use the same set of icons across all 12 icons. For example, do not use 2px for Pay and 1.5px for Bank transfer.</Text>
                <Element as="div" className="grid grid-cols-1 sm:grid-cols-2 sm:gap-32 justify-center items-start">
                    <div className="mb-8 sm:mb-0">
                        <div className="grid grid-cols-2 gap-4 items-center justify-center">
                            <div>
                                <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/set-consistency-yes-1.svg`} alt="set-consistency-yes" />
                                <Text align="center" margin="none">1px</Text>
                            </div>
                            <div>
                                <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/set-consistency-yes-2.svg`} alt="set-consistency-yes" />
                                <Text align="center" margin="none">1px</Text>
                            </div>
                        </div>
                        <div>
                            <Text align="center" weight="600" size="huge" margin="none">👍</Text>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-4 items-center justify-center">
                            <div>
                                <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/set-consistency-no-1.svg`} alt="set-consistency-no" />
                                <Text align="center" margin="none">1px</Text>
                            </div>
                            <div>
                                <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/set-consistency-no-2.svg`} alt="set-consistency-no" />
                                <Text align="center" margin="none">1.5px</Text>
                            </div>
                        </div>
                        <div>
                            <Text align="center" weight="600" size="huge" margin="none">👎</Text>
                        </div>
                    </div>
                </Element>
            </Element>

            <Element as="div" marginBottom="small">
                <Heading as="h5">Themes</Heading>
                <Text>Pratima only supports stroked icons — do not add shadows.</Text>
                <Element as="div" className="grid grid-cols-2 gap-4 items-center justify-center">
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/themes-yes.svg`} alt="themes-yes" />
                        <Text align="center" weight="600" size="huge" margin="none">👍</Text>
                    </div>
                    <div>
                        <img className="h-32" src={`${process.env.LINK_PREFIX}/docs-images/faqs/themes-no-2.svg`} alt="themes-no" />
                        <Text align="center" weight="600" size="huge" margin="none">👎</Text>
                    </div>
                </Element>
            </Element>

            <Heading as="h5">Success</Heading>
            <Text>Use tick and green circle of any size — minimum 24 x 24 px.</Text>
            <Element as="div" className="flex flex-wrap gap-12 items-center justify-center">
                <div>
                    <img className="h-64 shadow-xl rounded-xl" src={`${process.env.LINK_PREFIX}/docs-images/faqs/success-yes.png`} alt="success-yes" />
                    <Text align="center" weight="600" size="huge" marginBottom="none">👍</Text>
                </div>
                <div>
                    <img className="h-64 shadow-xl rounded-xl" src={`${process.env.LINK_PREFIX}/docs-images/faqs/success-no.png`} alt="success-no" />
                    <Text align="center" weight="600" size="huge" marginBottom="none">👎</Text>
                </div>
            </Element>

            <Heading as="h5">Failure</Heading>
            <Text>Use a white cross on a red circle.</Text>
            <Element as="div" className="flex flex-wrap gap-12 items-center justify-center">
                <div>
                    <img className="h-64 p-20 shadow-xl rounded-xl" src={`${process.env.LINK_PREFIX}/docs-images/faqs/failure-yes.svg`} alt="failure-yes" />
                    <Text align="center" weight="600" size="huge" marginBottom="none">👍</Text>
                </div>
                <div>
                    <img className="h-64 shadow-xl rounded-xl" src={`${process.env.LINK_PREFIX}/docs-images/faqs/failure-no.png`} alt="failure-no" />
                    <Text align="center" weight="600" size="huge" marginBottom="none">👎</Text>
                </div>
            </Element>

        </Element >
    )
}

export default FAQs;