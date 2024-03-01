import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.marginY} ${styles.padding} ${styles.flexCenter} sm:flex-row flex-col rounded-[20px] box-shadow bg-black-gradient-2`}
  >
    <div className="flex flex-col flex-1">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className={`sm:ml-10 ml-0 sm:mt-0 mt-10 ${styles.flexCenter}`}>
      <Button />
    </div>
  </section>
);

export default CTA;
