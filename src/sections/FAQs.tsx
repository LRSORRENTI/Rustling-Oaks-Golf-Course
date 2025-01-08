'use client';

import { FC, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How do I book a tee time?",
    answer:
      "Booking a tee time is easy! You can book online through our website or call our pro shop directly. Tee times are available up to 7 days in advance.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "Rustling Oaks Golf Course is open daily from sunrise to sunset. The pro shop and driving range hours may vary, so check our website for the most up-to-date information.",
  },
  {
    question: "Do you offer golf lessons?",
    answer:
      "Yes, we have experienced golf professionals available for private lessons, group sessions, and clinics. Visit our Lessons page or contact the pro shop to schedule.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "We kindly request that all players adhere to our dress code: collared shirts, golf slacks or shorts, and proper golf footwear. Denim and non-golf attire are not permitted on the course.",
  },
  {
    question: "What amenities does Rustling Oaks offer?",
    answer:
      "In addition to our 36-hole championship course, we feature a driving range, mini golf, a fully stocked pro shop, and The Oaks Grill for dining and refreshments.",
  },
  {
    question: "Do you host tournaments or events?",
    answer:
      "Yes, we specialize in hosting tournaments, corporate outings, and private events. Contact our events coordinator for more details on packages and availability.",
  },
  {
    question: "Are golf carts available for rent?",
    answer:
      "Yes, golf carts are included with your green fee, and pull carts are also available for rent. Please inquire at the pro shop upon arrival.",
  },
  {
    question: "Can I bring my family to Rustling Oaks?",
    answer:
      "Of course! We have activities for all ages, including mini golf and dining at The Oaks Grill, making it a perfect outing for the whole family.",
  },
  {
    question: "Do you have membership options?",
    answer:
      "Yes, we offer several membership tiers, including individual, family, and corporate options. Memberships include exclusive benefits and discounts. Visit our Memberships page for details.",
  },
  {
    question: "What is your cancellation policy for tee times?",
    answer:
      "Cancellations or changes to tee times must be made at least 24 hours in advance to avoid any fees. Please call the pro shop for assistance with cancellations."
  }
];

const FAQs: FC = () => {

  const [selecedIndex, setSelectedIndex] = useState<number | null>(null);

  return <section className="section" id="faqs">
      <div className="container">
          <h2 className="text-4xl md:text-7xl lg:text-8xl ">FAQs</h2>
          <div className="mt-10 md:mt-16 lg:mt-20">
            {faqs.map(({question, answer}, faqIndex ) => (
              <div key={question} className="border-t border-stone-400 border-dotted last:border-b py-6 md:py-8 lg:py-10 relative isolate group/faq"
                  onClick={() => {
                    if (faqIndex === selecedIndex) {
                      setSelectedIndex(null);
                    } else  {
                      setSelectedIndex(faqIndex)}
                      }}>
                        <div
                          className={twMerge(`
                          absolute h-0 w-full
                          bottom-0 left-0
                          bg-stone-300 -z-10 group-hover/faq:h-full
                          transition-all duration-700
                        `, faqIndex === selecedIndex ? "h-full" : "")}>

                        </div>
                <div className={twMerge(`flex items-center justify-between gap-4 transition-all duration-700`, faqIndex === selecedIndex && 'lg:px-8')}>
                  <div className="text-2xl md:text-3xl lg:text-4xl">
                    {question}
                  </div>
                      <div className={twMerge ("inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-400 bg-stone-200", faqIndex === selecedIndex ? "  rotate-45" : "")}>
                          <svg 
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                  </div>
                </div>
                <AnimatePresence>
                {faqIndex === selecedIndex && (
                    <motion.div
                      className="overflow-hidden lg:px-8"
                      initial={{height: 0}}
                      animate={{height: 'auto'}}
                      exit={{height: 0}}
                      transition={{
                              duration: 0.5, ease: 'easeOut'}}
                    >
                      <p className="text-xl mt-4">{answer}</p>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
            ))}
          </div>
      </div>
  </section>
};

export default FAQs;
