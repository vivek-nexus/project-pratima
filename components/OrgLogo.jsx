import { Element } from "fictoan-react";

import imageUrlPrefix from '../constants/imageUrlPrefix';
import styles from '../styles/Team.module.css'

function OrgLogo({ org, format }) {
    return (
        <Element
            as="img"
            src={`${imageUrlPrefix}/org-logos/${org}.${format}`}
            className={styles.orgLogos}
        />
    )
}

export default OrgLogo;