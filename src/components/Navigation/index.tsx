import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import styles from "./index.module.scss"

const Navigation = ()=>{
    return <header className={styles.container}>
        <Image src={Logo.src} objectFit="contain" height={30} width={80} alt="ORganization" />
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>asdf</li>
            </ul>
        </nav>
    </header>
}
export default Navigation;