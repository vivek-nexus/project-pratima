import { Element } from "fictoan-react";

function OrgLogo({ org }) {
    return (
        <Element
            as="img"
            src={`/org-logos/${org}.svg`}
            style={{ height: "36px" }}
        />
    )
}

export default OrgLogo;