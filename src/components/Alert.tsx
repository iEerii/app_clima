import { ReactNode } from "react"
import styles from './Alert.module.css'

// Se puede crear un type aparte o puede señalar asi:
export default function Alert({children} : {children: ReactNode}) {
    return (
        <div className={styles.alert}>{children}</div>
    )
}
