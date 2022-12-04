import { Element } from "fictoan-react";

function OrgLogo({ org, format, className }) {
    return (
        <Element
            as="img"
            src={`${process.env.LINK_PREFIX}/org-logos/${org}.${format}`}
            alt={`${org}-logo`}
            className={`w-[25%] sm:w-[10%] aspect-[3/2] object-contain ${className}`}
        />
    )
}

export default OrgLogo;