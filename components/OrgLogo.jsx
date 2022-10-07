import { Element } from "fictoan-react";

import styles from '../styles/Team.module.css'

function OrgLogo({ org, format }) {
    return (
        <Element
            as="img"
            src={`${process.env.LINK_PREFIX}/org-logos/${org}.${format}`}
            className={styles.orgLogos}
            isFullWidth
        />
    )
}

export default OrgLogo;