// Simple check: something@something.something, without spaces
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const MESSAGE_MIN_LENGTH = 10

// Returns an object with one French error message per invalid field (empty when everything is valid).
export const validateContact = ({ name, email, subject, message }) => {
    const errors = {}

    if (!name.trim()) errors.name = "Indiquez votre nom."

    if (!email.trim()) errors.email = "Indiquez votre adresse email."
    else if (!EMAIL_PATTERN.test(email.trim())) errors.email = "Cette adresse email ne semble pas valide."

    if (!subject.trim()) errors.subject = "Indiquez le sujet de votre message."

    if (message.trim().length < MESSAGE_MIN_LENGTH) {
        errors.message = `Votre message doit contenir au moins ${MESSAGE_MIN_LENGTH} caractères.`
    }

    return errors
}
