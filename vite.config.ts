import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
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
