import styles from '/components/header/header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.area_logo_header}>
                    <Link href="https://github.com/suzusou" legacyBehavior>
                        <a className={styles.logo} >
                            <div className={styles.logo_name}>Sample Site</div>
                        </a>
                    </Link>
                </div>

                <nav className={styles.area_nav_header}>
                    <ul className={styles.list_nav_header}>
                        <li className={styles.lists}>
                            <Link href="/" >Section1</Link>
                        </li>
                        <li className={styles.lists}>
                            <Link href="/" >Section2</Link>
                        </li>
                        <li className={styles.lists}>
                            <Link href="/" >Section3</Link>
                        </li>
                        <li className={styles.lists}>
                            <Link href="/" >Section4</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}
