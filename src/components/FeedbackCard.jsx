import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <article className="max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 px-10 py-12 flex flex-col justify-between rounded-[20px] feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="my-10 font-poppins font-normal text-[18px] leading-[32px] text-white">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="ml-4 flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </article>
);

export default FeedbackCard;
