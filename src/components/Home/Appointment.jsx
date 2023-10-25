import styles from "../../styles";
import OfferCard from "./OfferCard";
import OfferForm from "./OfferForm";

const Appointment = () => (
  <div className="flex md:flex-row flex-col md:px-6 px-2 justify-center items-center py-24 gap-24 bg-[#EDF5F7]">
    <div className="flex flex-col items-start justify-center px-6">
      <p className={`${styles.paragraph} uppercase`}>Flat Discount </p>
      <h2 className="text-[#141414] font-playfair sm:text-[45px] text-[35px] font-bold leading-[115%] max-w-[510px] mt-4">
        Claim up to 50% offer on ‍the most popular services...
      </h2>
      <p className="text-[#555] font-manrope sm:text-[18px] text-[15p] font-normal leading-[165%] max-w-[534px] md:mt-2 mt-4">
        Our Beautyness scouts are busy pounding the streets across the country,
        sussing out the very best salons to welcome to the Beautyness family.
        Check out the expert boutiques that have joined our ranks of feel-good
        beauty givers and get 50% off as a welcome party treat!
      </p>
      <div className="border border-[#95BFCB] bg-[#FFF] w-full mt-4 rounded-[2px]">
        <OfferCard />
      </div>
    </div>
    <div className="flex px-3">
      <OfferForm />
    </div>
  </div>
);

export default Appointment;
