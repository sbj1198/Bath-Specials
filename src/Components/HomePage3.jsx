import SimpleSlider from "./HomePage3Slider";
import styles from "./HomePage3.module.css";
import { IoLogoInstagram } from "react-icons/io";
const Twoimg = (props) => {
  const { img1, img2, alt } = props;
  return (
    <div>
      <div className={styles.Holiday_img1}>
        <img src={img1} alt={alt} />
      </div>
      <div className={styles.Holiday_img2}>
        <img src={img2} alt={alt} />
      </div>
    </div>
  );
};
const HomePage3 = () => {
  const GoodThing = [
    { img: "/Image/homepage/Good_Thing1.jpg", Text: "Join the VIPs" },
    { img: "/Image/homepage/Good_Thing2.jpg", Text: "Shop your way" },
    { img: "/Image/homepage/Good_Thing3.jpg", Text: "Sign up for Text" },
    { img: "/Image/homepage/Good_Thing4.jpg", Text: "Sign up for emails" },
    { img: "/Image/homepage/Good_Thing5.jpg", Text: "Check out Auto Refresh" },
    {
      img: "/Image/homepage/Good_Thing6.jpg",
      Text: "See Return Policy for details and condition",
    },
  ];
  const Button_arr = [
    "STOCKING STUFFERS",
    "GIFT SETS",
    "GIFT UNDER $15",
    "GIFT UNDER $40",
    "GIFT FOR HER",
    "GIFT for HIM",
  ];
  return (
    <div className={styles.HomePage3_Main}>
      <Twoimg
        img1="/Image/homepage/Holiday_img_1.jpg"
        img2="/Image/homepage/Holiday_img_2.jpg"
        alt="Holiday_Img"
      />
      {/* button  arrays*/}
      <div className={styles.HomePage3_button_arr}>
        {Button_arr.map((el, i) => (
          <div key={i}>{el}</div>
        ))}
      </div>
      {/* Second img */}
      <Twoimg
        img1="/Image/homepage/lmig5.jpg"
        img2="/Image/homepage/lmig6.jpg"
        alt="ShopMoxy"
      />
      {/* MORE GOOD THINGS, THIS WAY */}
      <div className={styles.HomePage3_Head}>MORE GOOD THINGS, THIS WAY</div>
      <div className={styles.GoodThing_Main}>
        {GoodThing.map((el, i) => (
          <div key={i}>
            <img src={el.img} alt={el.Text} />
            <p>{el.Text}</p>
          </div>
        ))}
      </div>
      {/* Slider */}
      <div>
        <div className={styles.IG_Main}>
          <div>
            <hr className={styles.IG_Hr} />
          </div>
          <div className={styles.IG_Head}>
            <IoLogoInstagram className={styles.IG_font} />
            <p>@BATHANDBODYWORKS</p>
          </div>
          <div className={styles.IG_Text}>
            Daily inspiration. Instant happiness. Right here.
          </div>
        </div>
        <SimpleSlider />
        <div>
          <div className={styles.IG_Part3_Head}>Bath & Body Works</div>
          <div className={styles.IG_Part3_Text}>
            {`Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care, we make finding your perfect something special a happy-memory-making experience. Searching for new seasonal creations or your favorite discontinued scents? We’ve got you covered there, too. Oh! And while you're browsing, shop our latest & greatest selection of lotions, soaps and candles!`}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage3;
