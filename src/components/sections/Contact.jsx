import emailjs from '@emailjs/browser'
import { useState } from "react"

export const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [isLoading, setIsLoading] = useState(false)

  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")


  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const showAlertMessage = (type, message) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 4000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      showAlertMessage(
        "success",
        "✓ Message envoyé avec succès ! Je vous répondrai rapidement."
      )

      setFormData({ name: "", email: "", subject: "", message: "" })

    } catch (error) {
      console.error("Erreur EmailJS :", error)
      showAlertMessage(
        "danger",
        "✗ Erreur lors de l'envoi. Veuillez réessayer."
      )
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <section id="contact" className="py-15 sm:py-25 px-6 lg:px-12 pb-35 sm:pb-50 bg-bg-main bg-[radial-gradient(ellipse_at_center,#5F35D5_10%,transparent_55%),radial-gradient(ellipse_at_center,#4C6FFF_0%,transparent_65%)] sm:bg-[radial-gradient(ellipse_at_center,#5F35D5_10%,transparent_20%),radial-gradient(ellipse_at_center,#4C6FFF_0%,transparent_45%)]">
      <div className="max-w-7xl mx-auto">

        {/* Titre */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-0.5 bg-gradient-to-l from-[#5F35D5] to-[#5F35D5]/0 w-20 lg:w-60"></div>
            <h4 className="text-sm text-white font-medium tracking-widest mx-2">CONTACT</h4>
            <div className="h-0.5 bg-gradient-to-r from-[#5F35D5] to-[#5F35D5]/0 w-20 lg:w-60"></div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-title mb-6 leading-tight">
            Et si on échangeait ?
          </h2>

          <p className="text-xl text-text-main max-w-2xl mx-auto">
            Intéressé par mon profil ? Je serais ravie d'en discuter avec vous.
          </p>
        </div>

        {/* Formulaire */}
        <div className="max-w-7xl flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-5xl flex flex-col justify-center px-2 py-5 sm:p-8 gap-5 bg-card-main border border-skills-border rounded-lg"
          >
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
              
              <div className="w-full sm:w-1/2 flex flex-col gap-1.5 text-title">
                <label htmlFor="name" className="text-title font-semibold">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="p-3 rounded-md bg-bg-main border border-skills-border text-text-main"
                />
              </div>

              
              <div className="w-full sm:w-1/2 flex flex-col gap-1.5 text-title">
                <label htmlFor="email" className="text-title font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@exemple.com"
                  className="p-3 rounded-md bg-bg-main border border-skills-border text-text-main"
                />
              </div>
            </div>

            
            <div className="flex flex-col gap-1.5 text-title">
              <label htmlFor="subject" className="text-title font-semibold">
                Sujet *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet de votre message"
                className="p-3 rounded-md bg-bg-main border border-skills-border text-text-main"
              />
            </div>

            
            <div className="flex flex-col gap-1.5 text-title">
              <label htmlFor="message" className="text-title font-semibold">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Votre message..."
                className="p-3 rounded-md bg-bg-main border border-skills-border text-text-main"
              />
            </div>

            {/* Bouton */}
            <div className="flex justify-center sm:justify-end mt-5">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-purple-accent text-title p-3 rounded-sm cursor-pointer hover:bg-purple-hover active:bg-purple-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </div>


            {showAlert && (
              <div className={`mt-4 p-4 rounded text-center ${
                alertType === 'success' ? 'text-purple-accent' : ' text-red-600'
              }`}>
                {alertMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}