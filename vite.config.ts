import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        define: {
            VITE_EMAILJS_SERVICE_ID: JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
            VITE_EMAILJS_TAMPLATE_ID: JSON.stringify(env.VITE_EMAILJS_TAMPLATE_ID),
            VITE_EMAILJS_PB_KEY: JSON.stringify(env.VITE_EMAILJS_PB_KEY),
            VITE_EMAILJS_SK_KEY: JSON.stringify(env.VITE_EMAILJS_SK_KEY),
            VITE_BACKEND_URL: JSON.stringify(env.VITE_BACKEND_URL),
            VITE_AWS_BUCKET_NAME: JSON.stringify(env.VITE_AWS_BUCKET_NAME),
            VITE_AWS_REGION: JSON.stringify(env.VITE_AWS_REGION),
        },
        plugins: [react()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    };
});
