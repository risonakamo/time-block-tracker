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

    // resolve:{
    //     alias:{
    //         components:`${__dirname}/web/components`,
    //         lib:`${__dirname}/web/lib`,
    //         css:`${__dirname}/web/css`,
    //         apis:`${__dirname}/web/apis`,
    //         hooks:`${__dirname}/web/hooks`,
    //         store:`${__dirname}/web/store`,
    //         assets:`${__dirname}/web/assets`
    //     }
    // },

    build:{
        outDir:`${__dirname}/build`,
        target:["esnext"],
        sourcemap:true,
        emptyOutDir:true,

        rollupOptions:{
            input:{
                index:`${__dirname}/web/html/index.html`,
                "component test":`${__dirname}/web/html/component-test/index.html`,
            }
        }
    }
});