import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`w-[140px] h-[140px] p-[2px] ${styles.flexCenter} rounded-full bg-blue-gradient cursor-pointer`}
  >
    <div
      className={`w-[100%] h-[100%] ${styles.flexCenter} flex-col bg-primary rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="mr-2 font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
