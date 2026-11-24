import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, title, issuer, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className='w-full rounded-2xl border border-[#915EFF]/20 bg-tertiary p-6 sm:w-[300px]'
  >
    <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#915EFF] text-xl font-bold text-white'>
      {index + 1}
    </div>
    <h3 className='text-[20px] font-bold text-white'>{title}</h3>
    <p className='mt-2 text-[14px] font-semibold text-[#915EFF]'>{issuer}</p>
    <p className='mt-3 text-[14px] leading-6 text-secondary'>{description}</p>
  </motion.div>
);

const Certificates = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Verified learning</p>
      <h2 className={styles.sectionHeadText}>Certificates.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary'
    >
      I have completed 5 Google and Coursera certifications focused on Python,
      artificial intelligence, machine learning, and applied professional skills.
    </motion.p>

    <div className='mt-14 flex flex-wrap justify-center gap-7'>
      {certificates.map((certificate, index) => (
        <CertificateCard
          key={certificate.title}
          index={index}
          {...certificate}
        />
      ))}
    </div>
  </>
);

export default SectionWrapper(Certificates, "certificates");
