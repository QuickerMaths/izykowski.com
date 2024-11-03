import { MutableRefObject, useRef } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoReload } from "react-icons/io5";
import { formSchema } from "@/schemas/formSchema";

const ContactForm = () => {
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: "",
            email: "",
            message: "",
            hidden: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className="m-auto w-[90%] sm:w-full md:max-w-[600px] lg:max-w-[700px] py-5 px-10 md:py-10 md:px-20 bg-gray-50 shadow-lg rounded-lg p-8 max-w-md mx-auto text-center border border-gray-200">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
                Skontaktuj się ze mną
            </h2>
            <p className="text-gray-600 mb-6">
                Zadaj pytanie dotyczące naszych usług. Jesteśmy do Twojej dyspozycji!
            </p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                    ref={formRef}
                >
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Subject</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border-black"
                                        placeholder="Temat"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription className="sr-only">
                                    Input field for subject of a email
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border-black"
                                        placeholder="Mail"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription className="sr-only">
                                    Input field for email of a email sender
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="border-black"
                                        placeholder="Wiadomość"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription className="sr-only">
                                    Input field for message to a recipient
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="hidden"
                        render={({ field }) => (
                            <FormItem className="h-0 w-0 invisible pointer-events-none">
                                <FormLabel className="sr-only">Hidden</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        className="w-full bg-[#38b2ac] text-white"
                        variant="outline"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? (
                            <>
                                <IoReload className="mr-2 h-4 w-4 animate-spin" />
                                Wysyłanie
                            </>
                        ) : (
                            "Wyślij"
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ContactForm;
