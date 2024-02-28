import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`${styles.paddingY} flex md:flex-row flex-col`}>
    <div
      className={`xl:px-0 sm:px-16 px-6 ${styles.flexStart} flex-1 flex-col `}
    >
      <div className="mb-2 py-[6px] px-4 flex flex-row items-center bg-discount-gradient rounded-[10px]">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="w-full  flex flex-row justify-between items-center">
        <h1 className="flex-1 font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[72px] text-[52px] text-white">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span> Payment Method.
        </h1>
        <div className="md:mr-4 mr-0 ss:flex hidden">
          <GetStarted />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
