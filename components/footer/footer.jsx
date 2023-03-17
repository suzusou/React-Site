import styles from '/components/footer/footer.module.css'
import Link from 'next/link'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.social}>
                <Link href="/" legacyBehavior><a> <i className="fab fa-instagram"></i></a></Link>
                <Link href="/" legacyBehavior><a><i className="fab fa-twitter"></i></a></Link>
                <Link href="https://github.com/suzusou" legacyBehavior><a><i className="fab fa-github"></i></a></Link>
                <Link href="/" legacyBehavior><a><i className="fab fa-facebook"></i></a></Link>
            </div>

            <ul className={styles.list}>
                <li>
                <Link href="/" > Section1</Link>
                </li>
                <li>
                <Link href="/" > Section2</Link>
                </li>
                <li>
                <Link href="/" > Section3</Link>
                </li>
                <li>
                <Link href="/" > Section4</Link>
                </li>
                <li>
                <Link href="/" > Section5</Link>
                </li>
                
                <p className={styles.copyright}>
                    S.S-20220219 @ 2023
                </p>
            </ul>

        </footer>

    )
}
