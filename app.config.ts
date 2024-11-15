import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    ssr: false,
    server: {
        static: true,
        prerender: {
            crawlLinks: true,
        }
    }
});
