import emailjs from '@emailjs/browser';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../../ui/SectionHeader"

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
}

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      showAlertMessage("success", "✓ Message envoyé avec succès !");
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      showAlertMessage("danger", "✗ Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-15 sm:py-25 px-6 lg:px-12 pb-35 sm:pb-50 bg-bg-main bg-[radial-gradient(ellipse_at_center,#5F35D5_10%,transparent_55%),radial-gradient(ellipse_at_center,#4C6FFF_0%,transparent_65%)]">
      <div className="max-w-7xl mx-auto">

        {/* ========== TITRE ========== */}
        <SectionHeader
          label="CONTACT"
          title="Et si on échangeait ?"
          subtitle="Intéressé par mon profil ? Je serais ravie d'en discuter avec vous."
        />

        {/* ========== FORMULAIRE ========== */}
        <div className="max-w-7xl flex justify-center">
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-5xl w-full flex flex-col justify-center px-4 py-8 sm:p-10 gap-6 bg-card-main border border-skills-border rounded-lg shadow-xl"
          >
            <div className="flex flex-col sm:flex-row gap-6">

              {/* ----- Nom ----- */}
              <motion.div
                variants={itemVariants}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full sm:w-1/2 flex flex-col gap-2"
              >
                <label
                  htmlFor="name"
                  className="text-title font-semibold"
                >
                  Nom Complet *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: "#5F35D5" }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="p-3 rounded-md bg-bg-main border border-skills-border text-text-main outline-none transition-colors"
                />
              </motion.div>

              {/* ----- Email ----- */}
              <motion.div
                variants={itemVariants}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full sm:w-1/2 flex flex-col gap-2"
              >
                <label
                  htmlFor="email"
                  className="text-title font-semibold"
                >
                  Email *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: "#5F35D5" }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@exemple.com"
                  className="p-3 rounded-md bg-bg-main border border-skills-border text-text-main outline-none transition-colors"
                />
              </motion.div>
            </div>

            {/* ----- Sujet ----- */}
            <motion.div
              variants={itemVariants}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-title font-semibold"
              >
                Sujet *
              </label>
              <motion.input
                whileFocus={{ scale: 1.01, borderColor: "#5F35D5" }}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet de votre message"
                className="p-3 rounded-md bg-bg-main border border-skills-border text-text-main outline-none transition-colors"
              />
            </motion.div>

            {/* ----- Message ----- */}
            <motion.div
              variants={itemVariants}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-title font-semibold"
              >
                Message *
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.005, borderColor: "#5F35D5" }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Votre message..."
                className="p-3 rounded-md bg-bg-main border border-skills-border text-text-main outline-none transition-colors resize-none"
              />
            </motion.div>

            {/* ----- Bouton ----- */}
            <motion.div
              variants={itemVariants}
              viewport={{ once: false, amount: 0.2 }}
              className="flex justify-center sm:justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className="bg-purple-accent text-title px-8 py-3 rounded-md font-bold hover:bg-purple-hover transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
              >
                {isLoading ? (
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    Envoi en cours...
                  </motion.span>
                ) : 'Envoyer'
                }
              </motion.button>
            </motion.div>

            {/* ----- Alerte ----- */}
            <AnimatePresence mode="wait">
              {showAlert && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 10 }}
                  className={`p-2 text-center font-medium overflow-hidden ${alertType === 'success' ? 'text-purple-accent' : 'text-red-500 border'
                    }`}
                >
                  {alertMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
