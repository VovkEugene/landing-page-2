import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`sm:mb-20 mb-6 ${styles.flexCenter} flex-row flex-wrap`}>
    {stats.map((stat, index) => (
      <div
        key={stat.id}
        className={`m-3 flex flex-1 flex-row justify-start items-center`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="ml-3 font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase text-gradient ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
