import { z } from "zod";
import { formSchema } from "@/schemas/formSchema";
import axios from "axios";

export const sendMail = (values: z.infer<typeof formSchema>) => {
    return axios.post(`${import.meta.env.VITE_BACKEND_URL}/email`, {
        subject: values.subject,
        from: values.email,
        text: values.message,
    });
};
