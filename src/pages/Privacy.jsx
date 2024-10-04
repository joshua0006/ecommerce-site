import React from "react";

function Privacy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, make a purchase, or contact us for support. This
            may include your name, email address, postal address, phone number,
            and payment information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, to process your transactions, to send you technical
            notices and support messages, and to communicate with you about
            products, services, offers, and events.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Information Sharing and Security
          </h2>
          <p>
            We do not sell or rent your personal information to third parties.
            We take reasonable measures to help protect your personal
            information from loss, theft, misuse, unauthorized access,
            disclosure, alteration, and destruction.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Your Choices</h2>
          <p>
            You may update, correct, or delete your account information at any
            time by logging into your online account or by contacting us. You
            may also opt out of receiving promotional communications from us by
            following the instructions in those messages.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
          <p>
            We may change this privacy policy from time to time. If we make
            changes, we will notify you by revising the date at the top of the
            policy and, in some cases, we may provide you with additional
            notice.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
