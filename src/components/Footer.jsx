import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
    <div className={`w-full mb-8 ${styles.flexStart} md:flex-row flex-col`}>
      <div className="mr-10 flex flex-col justify-start flex-1">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`max-w-[310px] mt-4 ${styles.paragraph}`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="w-full md:mt-0 mt-10 flex flex-row flex-[1.5] flex-wrap justify-between">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="min-w-[150px] ss:my-0 my-4 flex flex-col"
          >
            <h4 className="font-poppins font-medium leading-[27px] text-[18px] text-white">
              {footerLink.title}
            </h4>
            <ul className="mt-4 list-none">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  } font-poppins font-normal leading-[24px] text-[16px] text-dimWhite hover:text-secondary cursor-pointer`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full pt-6 flex justify-between items-center md:flex-row flex-col border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal leading-[27px] text-center text-[18px] text-white">
        Copyright Ⓒ 2024 HooBank. All Rights Reserved.
      </p>
      <div className="md:mt-0 mt-6 flex flex-row">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            } object-contain cursor-pointer`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
