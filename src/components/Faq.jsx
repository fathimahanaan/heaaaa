import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do you handle my personal information?",
      answer:
        "We only collect information you voluntarily provide through our contact form, WhatsApp, Instagram, or email. We do not track your browsing activity and do not sell or trade your information except for trusted service providers or legal requirements.",
    },
    {
      question: "Can I request deletion of my data?",
      answer:
        "Yes! You can request deletion via WhatsApp, Instagram, or email. See the 'Delete My Data' section in our Privacy Policy for detailed instructions.",
    },
    {
      question: "Will I receive marketing messages?",
      answer:
        "We do not send marketing messages by default. If you opt in, we may send you promotional messages about our products, collections, or updates.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take reasonable measures to protect your information from unauthorized access, loss, or misuse.",
    },
    {
      question: "Who can I contact if I have further questions?",
      answer:
        "You can reach us via Email, WhatsApp, Instagram DM, or visit our Help Center. All contact info is listed in our Privacy Policy.",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 max-w-full md:max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md">
            <button
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span className="ml-2 text-amber-900">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-sm sm:text-base bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
