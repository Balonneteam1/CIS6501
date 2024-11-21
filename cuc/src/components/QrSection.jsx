import React from "react";
import { motion } from "framer-motion"; // For animation effects

const QRSection = () => {
  return (
    <section className="bg-background via-accent to-secondary py-16 px-6 text-center mb-0">
      <h2 className="text-4xl font-bold text-primary mb-6">Scan QR Codes for Instant Access</h2>
      <p className="text-lg text-primary mb-8">
        Scan QR codes on business or career profiles to instantly access more details and opportunities. Get started with the following steps:
      </p>

      {/* Step-wise layout with images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-accent">
          <motion.img
            className="w-full h-40 object-cover rounded-md mb-4"
            src="https://media.istockphoto.com/id/1481997000/vector/qr-code-scan-me-template-with-a-smartphone-for-application-screenshot-presentation-can-use.jpg?s=612x612&w=0&k=20&c=8tVK15M9FaolbVz_uEq3pruvV8pCOjKhhdDPb5fGGX4="
            alt="Step 1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <h3 className="text-xl font-bold text-primary mb-2">Step 1: Locate the QR Code</h3>
          <p className="text-lg text-gray-700">Find the QR code on business or career profiles you want to explore.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-accent">
          <motion.img
            className="w-full h-40 object-cover rounded-md mb-4"
            src="https://s39613.pcdn.co/wp-content/uploads/2023/07/hand-holding-and-touching-smartphone-screen-with-thumb-scan-qr-code-vector-illustration_s1024x1024wisk20c60ak_N87cngM8pJ6hVHVh6NAmiFfMW_OJLL8csVewzc.jpg"
            alt="Step 2"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <h3 className="text-xl font-bold text-primary mb-2">Step 2: Scan the QR Code</h3>
          <p className="text-lg text-gray-700">Use your smartphone or tablet to scan the QR code to access more details instantly.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-accent">
          <motion.img
            className="w-full h-40 object-cover rounded-md mb-4"
            src="https://i0.wp.com/nyido.org/wp-content/uploads/2020/09/opportunities-in-new-markets.jpg?resize=870%2C580&ssl=1"
            alt="Step 3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <h3 className="text-xl font-bold text-primary mb-2">Step 3: Explore Opportunities</h3>
          <p className="text-lg text-gray-700">Get instant access to more details and career or business opportunities with a single scan.</p>
        </div>
      </div>

      {/* QR Code Circle */}
      <motion.div
        className="mx-auto w-40 h-40 bg-white rounded-full flex items-center justify-center mb-6 border-4 border-accent"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Placeholder for QR code image */}
        <img
          src="https://media.istockphoto.com/id/1358621997/vector/qr-code-smartphone-scanner-linear-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=ePiWZHIbseW9GwmM498rRKC_Dvk8IsKv41nqnC8iZhQ="
          alt="QR Code"
          className="w-24 h-24 rounded-full"
        />
      </motion.div>

      {/* Learn More Link */}
      <motion.a
        href="#"
        className="text-primary underline text-xl font-semibold hover:text-accent transition duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Learn More
      </motion.a>
    </section>
  );
};

export default QRSection;
