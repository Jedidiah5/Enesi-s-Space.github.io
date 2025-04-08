'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: "Front-End Web Development",
    description: "Creating responsive and interactive websites using modern technologies and best practices.",
    icon: "ri-global-line"
  },
  {
    title: "UI/UX Implementation",
    description: "Translating designs into functional interfaces with a focus on user experience and accessibility.",
    icon: "ri-palette-line"
  },
  {
    title: "Website Optimization",
    description: "Improving performance, SEO, and user experience through code optimization and best practices.",
    icon: "ri-flashlight-line"
  },
  {
    title: "E-commerce Websites",
    description: "Building secure and scalable online stores with payment integration and inventory management.",
    icon: "ri-shopping-cart-line"
  },
  {
    title: "Maintenance & Updates",
    description: "Regular updates, security patches, and feature additions to keep your website running smoothly.",
    icon: "ri-refresh-fill"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <i className="ri-tools-line text-xl sm:text-2xl"></i>
            My <span className="text-custom-orange">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-custom-blue/10 p-4 sm:p-6 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-custom-orange/10 rounded-lg">
                  <i className={`${service.icon} text-xl sm:text-2xl text-custom-orange`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 