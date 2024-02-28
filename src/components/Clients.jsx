import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`my-4 ${styles.flexCenter}`}>
    <div className={`w-full ${styles.flexCenter} flex-wrap`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`sm:min-w-[192px] min-w-[120px] ${styles.flexCenter} flex-1`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
