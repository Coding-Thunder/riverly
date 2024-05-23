import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Growing Together, <br className="sm:block hidden" /> Embracing Convenience.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Riverly is evolving with you, now embracing new payment methods as we expand. Your convenience is our priority as we grow together.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
