import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

declare const __dirname:string;

export default defineConfig({
    root:`${__dirname}/web/html`,
    mode:"development",

    plugins:[
        react(),
        checker({
            typescript:true
        }),
        tsconfigPaths()
    ],

    build:{
        outDir:`${__dirname}/build`,
        target:["esnext"],
        sourcemap:true,
        emptyOutDir:true,

        rollupOptions:{
            input:{
                index:`${__dirname}/web/html/index.html`,
            }
        }
    }
});