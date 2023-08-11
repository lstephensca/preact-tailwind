import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const isProduction = mode === "production";
	const baseUrl = isProduction ? "/server_url" : "/";

	return {
		base: baseUrl,
		plugins: [preact()],
		resolve: {
			alias: [
				{ find: "@", replacement: path.resolve(__dirname, "src") },
				{ find: "react", replacement: "preact/compat" },
				{ find: "react-dom", replacement: "preact/compat" },
			],
		},

		// Building options
		build: {
			outDir: "dist",
			emptyOutDir: true,
			assetsDir: "assets",
			rollupOptions: {
				input: {
					main: "index.html",
				},
				output: {
					entryFileNames: "assets/js/[name].js",
					chunkFileNames: "assets/js/[name].js",
					assetFileNames: (assetInfo) => {
						if (assetInfo.name?.endsWith("css")) {
							return "assets/css/css-name.css";
						}

						if (assetInfo.type === "asset" && /\.(jpe?g|png|gif|svg)$/i.test(assetInfo.name || "")) {
							return "assets/images/[name][extname]";
						}
						return "assets/[name].[ext]";
					},
				},
			},
		},
	};
});
