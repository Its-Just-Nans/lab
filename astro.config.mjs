import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    base: "/lab/",
    site: "https://n4n5.dev/lab/",
    integrations: [
        svelte(),
        sitemap({
            changefreq: "weekly",
            priority: 0.7,
            lastmod: new Date(),
        }),
    ],
    vite: {
        build: {
            assetsInlineLimit: 0,
        },
    },
});
