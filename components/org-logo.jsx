import { Element } from "fictoan-react";

import imageUrlPrefix from '../constants/imageUrlPrefix';

function OrgLogo({ org }) {
    return (
        <Element
            as="img"
            src={`${imageUrlPrefix}/org-logos/${org}.svg`}
            style={{ height: "36px" }}
        />
    )
}

export default OrgLogo;