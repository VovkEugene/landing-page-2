import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="relative w-[100%] h-[100%] z-[5]"
      />
      <div className="absolute w-[50%] h-[50%] top-0 -left-1/2 rounded-full white__gradient z-[3]" />
      <div className="absolute w-[50%] h-[50%] bottom-0 -left-1/2 rounded-full pink__gradient z-[0]" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="sm:mt-10 mt-6 flex flex-row flex-wrap">
        <img
          src={apple}
          alt="app_store"
          className="w-[128px] h-[42px] mr-5 object-contain cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
