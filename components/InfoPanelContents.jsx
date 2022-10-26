import { Text, Element, Button, HRule } from "fictoan-react"
import { isMobile } from "react-device-detect";


function InfoPanelContents({ iconsArray, clickedIcon, strokeSize, cornerRadius, edges, size, setIsInfoPanelOpen, setIsBottomDrawerOpen }) {
    return (
        <>
            {
                iconsArray.map(item =>
                    <div key={item.fileName}>
                        {(clickedIcon == item.fileName) && (
                            <>
                                <Text as="h5" marginBottom="micro"
                                    className="cursor-pointer flex items-center"
                                    onClick={() => { isMobile ? setIsBottomDrawerOpen(false) : setIsInfoPanelOpen(false) }}
                                >
                                    <Element
                                        as="img"
                                        marginRight="nano"
                                        className="w-auto h-[24px]"
                                        src={`${process.env.LINK_PREFIX}/close.svg`}
                                    >
                                    </Element>{item.iconName}</Text>
                                <img
                                    src={`${process.env.LINK_PREFIX}/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                    alt={`${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                    className="h-32 w-auto"
                                />
                                <a
                                    href={`${process.env.LINK_PREFIX}/icons/${strokeSize}_${cornerRadius}_${edges}/${item.fileName}_${size}_${strokeSize}_${cornerRadius}_${edges}.svg`}
                                    download>
                                    <Button kind="primary" shadow="hard" shape="rounded" marginTop="micro">Download SVG</Button>
                                </a>
                                <HRule kind="primary" marginTop="micro" marginBottom="micro" />

                                <Text as="h6" weight="600" marginBottom="none">Other labels or nomenclature</Text>
                                {item.nomenclature.map(terms =>
                                    <Text
                                        key={terms}
                                        bgColor="slate-70"
                                        textColor="white"
                                        weight="600"
                                        className="px-4 py-1 inline-block mr-2 mb-0 rounded-full"
                                    >
                                        {terms}
                                    </Text>
                                )}

                                <HRule kind="primary" marginTop="micro" marginBottom="micro" />

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

export default InfoPanelContents;