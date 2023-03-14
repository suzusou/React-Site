import styles from '/components/footer/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
            <div className={styles.social}>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="https://github.com/suzusou"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
            </div>

            <ul className={styles.list}>
                <li>
                    <a href="#">Section1</a>
                </li>
                <li>
                    <a href="#">Section2</a>
                </li>
                <li>
                    <a href="#">Section3</a>
                </li>
                <li>
                    <a href="#">Section4</a>
                </li>
                <li>
                    <a href="#">Section5</a>
                </li>
                <p className={styles.copyright}>
                    S.S-20220219 @ 2023
                </p>
            </ul>

        </footer>

  )
}
