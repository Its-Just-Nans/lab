import { writable } from "svelte/store";
import GithubIcon from "./GithubIcon.svelte";
import CubeIcon from "./CubeIcon.svelte";

export const menus = [
    [
        {
            ico: "👨‍💻",
            link: "./css-editor",
            title: "CSS Editor",
            subtitle: null,
        },
        {
            ico: "🎒",
            link: "./pack-your-bag",
            title: "Pack your bag",
            subtitle: null,
        },
        {
            ico: "🎨",
            link: "./notpaint",
            title: "NotPaint",
            subtitle: null,
        },
        {
            ico: "📺",
            link: "./time-based-animation",
            title: "Time based animation",
            subtitle: null,
        },
        {
            ico: "👀",
            link: "./threlte",
            title: "Threlte",
            subtitle: null,
        },
        {
            ico: "⚙️",
            link: "./coupling",
            title: "Schmidt coupling",
            subtitle: null,
        },
        {
            ico: CubeIcon,
            link: "./3d-rotation",
            title: "3D rotation",
            subtitle: "",
        },
        //     {
        //         ico: null,
        //         link: "./Waldo",
        //         title: "Waldo",
        //         subtitle: null,
        //     },
    ],
    [
        {
            ico: "🧮",
            link: "https://its-just-nans.github.io/function-viewer/",
            title: "Function viewer",
            subtitle: null,
        },
        {
            ico: "🌐",
            link: "https://its-just-nans.github.io/domains/",
            title: "Domains",
            subtitle: null,
        },
    ],
    [
        {
            ico: GithubIcon,
            link: "https://github.com/Its-Just-Nans",
            title: "Its-Just-Nans",
            subtitle: "",
        },
    ],
];

export const showMenu = writable(false);
