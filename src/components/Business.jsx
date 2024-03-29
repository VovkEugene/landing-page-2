import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } p-6 flex flex-row rounded-[20px] feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="ml-3 flex flex-col flex-1 ">
      <h4 className="mb-1 font-poppins font-semibold text-[18px] leading-[23px] text-white">
        {title}
      </h4>
      <p className="mb-1 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle the
        money.
      </h2>
      <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
