import img1 from "../assets/images/JMIA-356fb835.png";
import img2 from "../../../public/images/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import img3 from "../../../public/images/google-play-badge-logo-svgrepo-com.svg";
import search from "../assets/images/search_FILL0_wght400_GRAD0_opsz48.png";
import styles from "../../lib/styles/newsletter.module.scss";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LuMail } from "react-icons/lu";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import Image from "next/image";

function Newsletter() {
  return (
    <div className={` ${styles.container}`}>
      <div className=" w-full md:w-1/3 flex justify-center pt-3">
        <h3 className=" font-semibold text-3xl">KAPHstore</h3>
      </div>

      <div className=" w-full md:w-1/3 space-y-3 pt-3">
        <h4>NEW TO KAPHstore?</h4>
        <p>Subscribe to our newsletter to get updates on our latest offers!</p>
        <span className="w-full flex flex-row gap-x-2 relative">
          <Input
            placeholder="Enter E-mail address"
            className="w-2/3 h-12 px-8"
          />{" "}
          <LuMail className=" absolute top-4 left-2" size={19} />
          <Button className="hover:border-purple-700 hover:text-purple-700 hover:border h-12">
            Male
          </Button>{" "}
          <Button className="hover:border-purple-700 hover:text-purple-700 hover:border h-12">
            Female
          </Button>
        </span>
        <div className="flex flex-row gap-x-2 mt-2">
          <Checkbox className="mt-1" />
          <span className="flex gap-y-2 flex-col">
            <p>
              I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe
              from newsletters at any time.
            </p>
            <Link className="hover:underline" href="/terms-condition">
              I accept the Legal Terms
            </Link>
          </span>
        </div>
      </div>

      <div className=" w-full md:w-1/3 flex h-full flex-row pt-3 px-0">
        <div className=" w-1/2" />
        <div className="w-1/2">
          <div className="w-full">
            <p>DOWNLOAD KAPHstore FREE APP</p>
            <p>Get access to exclusive offers!</p>
          </div>
          <div className="w-full flex flex-row gap-3">
            <Image height={100} src={img2} alt="app store logo" />
            <Image height={100} src={img3} alt="play store logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
