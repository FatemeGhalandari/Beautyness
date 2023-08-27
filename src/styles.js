const styles = {
  boxWidth: "xl:max-w-[1920px] w-full",

  coloredBg:
    "flex flex-col md:flex-row items-center justify-between w-full bg-[#EBF3F5] ",

  footers:
    "text-[#FFF] font-playfair text-[22px] font-semibold",
  features:
    "flex flex-col items-start justify-center hover:bg-[#EBF3F5] p-4 rounded-md",
  heading2:
    "text-[#141414] font-playfair sm:text-[26px] text-[24px] font-semibold leading-[120%] mt-4",
  paragraph:
    "text-[#555] font-manrope text-[15px] font-normal leading-[165%] max-w-[327px] mt-2",
  bt: "flex justify-center items-start sm:py-4 py-[10px] sm:px-8 px-4 border-[3px] border-[#5C8692] mt-8 rounded-[4px]",
  btSpan:
    "text-[#141414] text-center font-Manrope sm:text-[14px] text-[12px] font-semibold tracking-widest leading-[125%] uppercase ",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
