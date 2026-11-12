import { useState } from "react"
import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react"
import { Button } from "../../ui/Button"
import { FormField } from "./FormField"
import { validateContact } from "./validateContact"
import { sendContactMessage } from "../../../services/sendContactMessage"
import { email } from "../../../data/navigation"

const EMPTY_VALUES = { name: "", email: "", subject: "", message: "" }
const FIELD_ORDER = ["name", "email", "subject", "message"]

// Contact form: validation in French, then sending through EmailJS.
// status: "idle" → "sending" → "success" or "error"
export const ContactForm = ({ className = "" }) => {
    const [values, setValues] = useState(EMPTY_VALUES)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState("idle")

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues((current) => ({ ...current, [name]: value }))
        // Typing again hides the result of the previous sending
        if (status === "success" || status === "error") setStatus("idle")
        // Once a field shows an error, re-check it while typing so the message disappears when fixed
        if (errors[name]) {
            const fieldError = validateContact({ ...values, [name]: value })[name]
            setErrors((current) => ({ ...current, [name]: fieldError }))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget

        // Hidden "website" field: real visitors never fill it, spam bots usually do
        if (form.elements.website.value) {
            setStatus("success")
            return
        }

        const validationErrors = validateContact(values)
        setErrors(validationErrors)
        const firstInvalidField = FIELD_ORDER.find((field) => validationErrors[field])
        if (firstInvalidField) {
            form.elements[firstInvalidField].focus()
            return
        }

        setStatus("sending")
        try {
            await sendContactMessage(values)
            setValues(EMPTY_VALUES)
            setStatus("success")
        } catch (error) {
            console.error("EmailJS send failed:", error)
            setStatus("error")
        }
    }

    const isSending = status === "sending"

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            aria-labelledby="contact-form-title"
            className={`flex flex-col gap-[22px] px-3 pb-4 pt-[30px] md:justify-center md:px-[18px] md:py-7 lg:gap-[26px] lg:px-9 lg:py-10 ${className}`}
        >
            <h3 id="contact-form-title" className="font-serif text-[30px] lg:text-[36px]">
                Un message pour <em className="text-brique">moi ?</em>
            </h3>

            <div className="flex flex-col gap-[22px] lg:flex-row lg:flex-wrap lg:gap-[26px]">
                <FormField
                    id="name"
                    label="Nom"
                    placeholder="Votre nom"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                    className="lg:flex-[1_1_200px]"
                />
                <FormField
                    id="email"
                    label="Email"
                    type="email"
                    inputMode="email"
                    placeholder="nom@exemple.be"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    className="lg:flex-[1_1_200px]"
                />
            </div>
            <FormField
                id="subject"
                label="Sujet"
                placeholder="Une opportunité, un projet…"
                value={values.subject}
                onChange={handleChange}
                error={errors.subject}
            />
            <FormField
                id="message"
                label="Votre message"
                multiline
                rows={4}
                placeholder="Bonjour Nabila…"
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                fieldClassName="h-[113px] md:h-[89px] lg:h-[113px]"
            />

            {/* Honeypot: hidden from people and screen readers, see handleSubmit */}
            <div aria-hidden="true" className="hidden">
                <label>
                    Ne pas remplir
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
            </div>

            <div>
                <Button
                    type="submit"
                    variant="dark"
                    withArrow={!isSending}
                    disabled={isSending}
                    className="w-full py-[17px] md:w-auto md:px-7 md:py-4 lg:gap-3 lg:px-8 lg:py-[17px]"
                >
                    {isSending && <LoaderCircle size={16} aria-hidden="true" className="motion-safe:animate-spin" />}
                    {isSending ? "Envoi en cours…" : "Envoyer mon message"}
                </Button>

                {/* Result of the sending, announced by screen readers */}
                <div role="status" className={status === "success" || status === "error" ? "mt-4" : ""}>
                    {status === "success" && (
                        <p className="flex items-start gap-2 text-[14px] leading-[1.6] text-olive-fonce">
                            <CircleCheck size={18} aria-hidden="true" className="mt-0.5 flex-none" />
                            Merci, votre message est bien parti. Je vous réponds au plus vite.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="flex items-start gap-2 text-[14px] leading-[1.6] text-brique-fonce">
                            <CircleAlert size={18} aria-hidden="true" className="mt-0.5 flex-none" />
                            <span>
                                Le message n'a pas pu être envoyé. Réessayez dans un instant ou écrivez-moi à{" "}
                                <a href={`mailto:${email}`} className="underline underline-offset-2">
                                    {email}
                                </a>
                                .
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </form>
    )
}
