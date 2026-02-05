import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-4 font-sans text-gray-800 max-w-full md:max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start sm:items-center mb-6">
        <img src="/logo.png" alt="Logo" className="h-20 mb-3 w-auto" />
        <h1 className="text-xl sm:text-2xl font-bold text-amber-900">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">
          Effective Date: February 5, 2026
        </p>
      </div>

      {/* Content */}
      <p className="mb-3 text-sm sm:text-base">
        At <strong>Hea By Pink Bubbles</strong>, your privacy is important to
        us. This Privacy Policy explains how we handle any information you
        provide through our contact form or when interacting with our social
        media links.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mt-5 mb-1">
        1. Information We Collect
      </h2>
      <p className="mb-2 text-sm sm:text-base">
        We only collect information that you{" "}
        <strong>voluntarily provide</strong> through our contact form:
      </p>
      <ul className="list-disc list-inside mb-3 space-y-1 text-sm sm:text-base">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Message content</li>
      </ul>
      <p className="mb-3 text-sm sm:text-base">
        We do not track page visits, clicks, or browsing activity.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mt-5 mb-1">
        2. How We Use Your Information
      </h2>
      <p className="mb-2 text-sm sm:text-base">
        The information you provide is used only to:
      </p>
      <ul className="list-disc list-inside mb-3 space-y-1 text-sm sm:text-base">
        <li>Respond to your inquiries</li>
        <li>Forward your message via WhatsApp, email, or Instagram</li>
        <li>
          Provide assistance or information related to our products and services
        </li>
      </ul>
      <p className="mb-3 text-sm sm:text-base">
        We do not use your information for marketing unless you explicitly
        opt-in in the future.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mt-5 mb-1">
        3. Sharing Your Information
      </h2>
      <p className="mb-2 text-sm sm:text-base">
        We do not sell, rent, or trade your personal information. We may only
        share it:
      </p>
      <ul className="list-disc list-inside mb-3 space-y-1 text-sm sm:text-base">
        <li>
          With trusted service providers who help us operate the contact form or
          messaging services
        </li>
        <li>When required by law or legal process</li>
      </ul>

      <h2 className="text-lg sm:text-xl font-semibold mt-5 mb-1">
        4. Third-Party Services
      </h2>
      <p className="mb-3 text-sm sm:text-base">
        When you send a message through our contact form, WhatsApp, email, or
        Instagram may process your message to deliver it to us. We are not
        responsible for the privacy practices of these third-party services.
        Please review their privacy policies.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mt-5 mb-1">
        5. Data Security
      </h2>
      <p className="mb-3 text-sm sm:text-base">
        We take reasonable measures to protect the information you provide from
        unauthorized access, loss, or misuse.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mt-5 mb-1">
        6. Your Rights
      </h2>
      <p className="mb-2 text-sm sm:text-base">You have the right to:</p>
      <ul className="list-disc list-inside mb-3 space-y-1 text-sm sm:text-base">
        <li>Access any personal information you submitted to us</li>
        <li>Request correction or deletion of your information</li>
        <li>Opt-out of promotional messages in the future</li>
      </ul>
      <p className="mb-2 text-sm sm:text-base">
        To exercise these rights, contact us at:
      </p>
      <ul className="list-disc list-inside mb-3 space-y-1 text-sm sm:text-base">
        <li>
          Email:{" "}
          <a
            href="mailto:heabypinkbubbles@gmail.com"
            className="text-amber-900 underline"
          >
            heabypinkbubbles@gmail.com
          </a>
        </li>
        <li>
          Phone/WhatsApp:{" "}
          <a
            href="https://wa.me/917356524462"
            className="text-amber-900 underline"
          >
            +91 73565 24462
          </a>
        </li>
      </ul>

      <h2 className="text-lg sm:text-xl font-semibold mt-5 mb-1">
        7. Changes to This Privacy Policy
      </h2>
      <p className="mb-3 text-sm sm:text-base">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with the updated effective date.
      </p>
    </div>
  );
}
