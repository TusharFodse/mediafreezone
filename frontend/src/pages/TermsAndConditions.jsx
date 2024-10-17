import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Terms and Conditions
        </h1>

        <div className="text-gray-700 text-sm">
          <h2 className="text-xl font-bold mb-4">1. Copyright-Free Images</h2>
          <p className="mb-4">
            By uploading images to this platform, you agree that all images are
            copyright-free, meaning you either own the rights to the images or
            the images are public domain, Creative Commons licensed, or
            otherwise free of any copyright restrictions. You will be solely
            responsible for any copyright violations that may arise from the
            use of copyrighted content without permission.
          </p>

          <h2 className="text-xl font-bold mb-4">2. Image Usage Rights</h2>
          <p className="mb-4">
            You agree that all images uploaded to this platform can be used,
            shared, or displayed by the platform for public viewing. You grant
            this platform the rights to display your content as part of its
            service.
          </p>

          <h2 className="text-xl font-bold mb-4">3. Prohibited Content</h2>
          <p className="mb-4">
            The following content is prohibited from being uploaded to this
            platform:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Infringing copyrighted content</li>
            <li>Illegal content or images promoting illegal activities</li>
            <li>Hate speech, violence, or offensive material</li>
            <li>Adult or explicit content</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">4. Account Responsibility</h2>
          <p className="mb-4">
            You are responsible for the security of your account and all
            activities that occur under your account. You agree to notify us
            immediately of any unauthorized use of your account or any other
            security breach.
          </p>

          <h2 className="text-xl font-bold mb-4">5. Modifications to the Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. We will
            notify you of changes by updating the terms on this page. Continued
            use of the platform after changes signifies your agreement to the
            updated terms.
          </p>

          <h2 className="text-xl font-bold mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
            We are not liable for any direct, indirect, or consequential losses
            arising from the use or inability to use the platform or any
            material posted on the platform.
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Last updated: [Insert Date]
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
