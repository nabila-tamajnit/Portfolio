import emailjs from "@emailjs/browser"

// EmailJS keys come from the local .env file (never committed):
// VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
const {
    VITE_EMAILJS_SERVICE_ID: serviceId,
    VITE_EMAILJS_TEMPLATE_ID: templateId,
    VITE_EMAILJS_PUBLIC_KEY: publicKey,
} = import.meta.env

// Sends the contact form through EmailJS. The parameter names match the EmailJS template.
// limitRate refuses a second send from the same browser within 10 seconds (double clicks, spam).
export const sendContactMessage = ({ name, email, subject, message }) =>
    emailjs.send(
        serviceId,
        templateId,
        {
            from_name: name.trim(),
            from_email: email.trim().toLowerCase(),
            subject: subject.trim(),
            message: message.trim(),
        },
        {
            publicKey,
            limitRate: { id: "contact-form", throttle: 10_000 },
        },
    )
