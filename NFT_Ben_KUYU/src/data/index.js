import { PiWalletLight } from "react-icons/pi"
import { VscCloudDownload } from "react-icons/vsc";
import { IoPricetagOutline } from "react-icons/io5";
import { RiBitCoinLine } from "react-icons/ri";

export const navLinks = [
    {
        id: "/",
        title:"Home"
    },
    {
        id: "topSale",
        title:"Top Sales"
    },
    {
        id: "collections",
        title:"Collections"
    },
    {
        id: "ourBlog",
        title:"Our blog"
    },
    {
        id: "aboutUs",
        title:"About us"
    },


]


export const collectionFilters = [
    {
        id: "all",
        title: "All Categories",
        active:true
    },
    {
        id: "art",
        title: "Art",
        active:false
    },
    {
        id: "celebrities",
        title: "Celebrities",
        active:false
    },
    {
        id: "gaming",
        title: "Gaming",
        active:false
    },
    {
        id: "sport",
        title: "Sport",
        active:false
    },


]


 export const collectionData = [

    {
        image:"/collection1.jpg",
        title:"CyberPunk",
        value:68
    },
    {
        image:"/collection2.png",
        title:"Durolost Boll - Upper",
        value:68
    },
    {
        image:"/collection3.png",
        title:"Space X Wiper",
        value:68
    },
    {
        image:"/collection4.png",
        title:"Snoop Dogg",
        value:68
    },
]



export const stepsData = [
    {
        icon: PiWalletLight,
        title: 'Set up your wallet',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
        icon:VscCloudDownload,
        title: 'Add your NFT’s',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
        icon: IoPricetagOutline,
        title: 'Promote your NFT’s',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
        icon: RiBitCoinLine,
        title: 'Sell your NFT’s',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },

]


