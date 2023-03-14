import styles from '/components/header/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.area_logo_header}>
                    <a className={styles.logo}href="https://github.com/suzusou">
                        <div className={styles.logo_name}>Sample Site</div>
                    </a>
                </div>
                
                <nav className={styles.area_nav_header}>
                    <ul className={styles.list_nav_header}>
                        <li className={styles.lists}>
                            <a href="" className={styles.list1}>Section1</a>
                        </li>
                        <li className={styles.lists}>
                            <a href="" className={styles.list2}>Section2</a>
                        </li>
                        <li className={styles.lists}>
                            <a href="" className={styles.list3}>Section3</a>
                        </li>
                        <li className={styles.lists}>
                            <a href="" className={styles.list4}>Section4</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
  )
}
