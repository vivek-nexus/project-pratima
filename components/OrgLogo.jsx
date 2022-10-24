import { Element } from "fictoan-react";

function OrgLogo({ org, format }) {
    return (
        <Element
            as="img"
            src={`${process.env.LINK_PREFIX}/org-logos/${org}.${format}`}
            height="36px"
            alt={`${org}-logo`}
            isFullWidth
        />
    )
}

export default OrgLogo;