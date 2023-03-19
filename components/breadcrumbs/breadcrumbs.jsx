import styles from '/components/breadcrumbs/breadcrumbs.module.css'



export function Breadcrumbs(props) {
    return (
        <div className={styles.breadcrumbs}>
           {props.page}
        </div>
    )
}
