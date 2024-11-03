import { z } from "zod";

export const formSchema = z.object({
    email: z.string().email({
        message: "Wprowadź poprawyn aders emial.",
    }),
    subject: z.string().min(4, {
        message: "Temat musi składać sie conajmniej z 4 znaków.",
    }),
    message: z.string().min(10, {
        message: "Wiadomość musi mieć conajmniej 10 znaków.",
    }),
    hidden: z.string(),
});
