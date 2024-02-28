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
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="md:mr-4 mr-0 ss:flex hidden">
          <GetStarted />
        </div>
      </div>
      <h1 className="w-full font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[68px] text-[52px] text-white">
        Payment Method.
      </h1>
      <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className={`relative md:my-0 my-10 flex flex-1 ${styles.flexCenter}`}>
      <img
        src={robot}
        alt="billing"
        className="relative w-[100%] h-[100%] z-[5]"
      />
      <div className="absolute w-[40%] h-[35%] top-0 pink__gradient z-[0]" />
      <div className="absolute w-[80%] h-[80%] bottom-40 rounded-full white__gradient z-[0]" />
      <div className="absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient z-[0]" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
