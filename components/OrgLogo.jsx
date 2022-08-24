import { Element } from "fictoan-react";

import imageUrlPrefix from '../constants/imageUrlPrefix';
import styles from '../styles/Team.module.css'

function OrgLogo({ org }) {
    return (
        <Element
            as="img"
            src={`${imageUrlPrefix}/org-logos/${org}.svg`}
            className={styles.orgLogos}
        />
    )
}

export default OrgLogo;