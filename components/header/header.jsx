import styles from '/components/header/header.module.css'
import Link from 'next/link'

export function Header() {
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
                            <Link href="/" >Home</Link>
                        </li>
                        <li className={styles.lists}>
                            <Link href="/about" >About</Link>
                        </li>
                        <li className={styles.lists}>
                            <Link href="/service" >Service</Link>
                        </li>
                        <li className={styles.lists}>
                            <Link href="/news" >News</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}
