import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Mude de "/React_Leo/" para "/" ou "./"
  base: "/",
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
