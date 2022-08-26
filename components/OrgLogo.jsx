import { Element } from "fictoan-react";

import linkUrlPrefix from '../constants/linkUrlPrefix';
import styles from '../styles/Team.module.css'

function OrgLogo({ org, format }) {
    return (
        <Element
            as="img"
            src={`${linkUrlPrefix}/org-logos/${org}.${format}`}
            className={styles.orgLogos}
        />
    )
}

export default OrgLogo;