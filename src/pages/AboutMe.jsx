import styles from "../styles";
import { Hero } from "../components";

const AboutMe = () => {
  return(
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  )  
}

export default AboutMe
