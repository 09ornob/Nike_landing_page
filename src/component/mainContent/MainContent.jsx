
import styles from './MainContent.module.css';

const MainContent = () => {
    console.log(styles)
  return (
    <section className={`${styles.mainContent}`}>
        <div className={`${styles.left}`}>
            <h1>YOUR FEET<br /> 
                DESERVE<br />
                THE BEST</h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO<br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE<br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR<br /> SHOES.
            </p>

            <button className={styles.redButton}>Shop Now</button>
            <button className={styles.whiteButton}>Category</button>

            <p className={styles.last}>Also Available On</p>
            <img src="images/flipkart.png" alt="Flipkart" />
            <img src="images/amazon.png" alt="Amazon" />
        </div>

        <div className={`${styles.right}`}>
            <img src="images/shoe_image.png" alt="Shoe" />
        </div>
    </section>
  )
}

export default MainContent;
