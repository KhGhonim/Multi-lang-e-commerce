
import { LuLayoutDashboard } from "react-icons/lu";
import addidas from "../Assets/adidas.webp";
import armania from "../Assets/armania.webp";
import defacto from "../Assets/defacto.webp";
import mango from "../Assets/mango.webp";
import mavi from "../Assets/mavi.webp";
import phones from "../Assets/phones.webp";
import pijama from "../Assets/pijama.webp";
import { FiPackage } from "react-icons/fi";
import { BsPlusCircleFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa6";


export const firstBanner = [
  {
    pic: armania,
    alt: "A silver Pandora bracelet with a butterfly charm.",
    name: "Pandora",
    date: "9 August - 18 August",
    discount: "15",
  },
  {
    pic: defacto,
    alt: "A woman wearing a black jacket and wide-leg jeans.",
    name: "Bershka",
    date: "12 August - 31 August",
    discount: "10",
  },
  {
    pic: mango,
    alt: "A woman wearing a white crochet dress and sunglasses.",
    name: "Laçatı",
    date: "9 August - 16 August",
    discount: "25",
  },
];

export const secondBanner = [
  {
    pic: mavi,
    alt: "A silver Pandora bracelet with a butterfly charm.",
    name: "Pandora",
    date: "9 August - 18 August",
    discount: "15",
  },
  {
    pic: phones,
    alt: "A woman wearing a black jacket and wide-leg jeans.",
    name: "Bershka",
    date: "12 August - 31 August",
    discount: "10",
  },
  {
    pic: "https://cdn.dsmcdn.com/ty1470/pimWidgetApi/mobile_20240809152858_2702466KadinMobile202408091801.jpg",
    alt: "A woman wearing a white crochet dress and sunglasses.",
    name: "Laçatı",
    date: "9 August - 16 August",
    discount: "25",
  },
];

export const thirdBanner = [
  {
    pic: pijama,
    alt: "A woman wearing a blue dress with a denim jacket.",
    name: "Mavi",
    date: "10 September - 17 September",
    discount: "15",
  },
  {
    pic: addidas,
    alt: "A woman wearing a black and white tracksuit.",
    name: "Adidas",
    date: "12 September - 19 September",
    discount: "6",
  },
  {
    pic: mavi,
    alt: "A woman wearing a pink running shoe.",
    name: "Nike",
    date: "15 September - 22 September",
    discount: "10",
  },
];

export const fourthBanner = [
  {
    pic: addidas,
    alt: "A woman wearing a blue dress with a white cardigan.",
    name: "DeFacto",
    date: "28 August - 4 September",
    discount: "6",
  },
  {
    pic: defacto,
    alt: "A woman wearing a pink shirt and jeans.",
    name: "Koton",
    date: "3 September - 10 September",
    discount: "10",
  },
  {
    pic: armania,
    alt: "A woman wearing a red dress with a white belt.",
    name: "LC Waikiki",
    date: "5 September - 12 September",
    discount: "20",
  },
];

export const fifthBanner = [
  {
    pic: pijama,
    alt: "A woman wearing a floral dress and sandals.",
    name: "Mango",
    date: "15 August - 22 August",
    discount: "20",
  },
  {
    pic: phones,
    alt: "A woman wearing a striped shirt and denim shorts.",
    name: "H&M",
    date: "20 August - 27 August",
    discount: "10",
  },
  {
    pic: mavi,
    alt: "A woman wearing a black dress with a belt.",
    name: "Zara",
    date: "25 August - 3 September",
    discount: "15",
  },
];

export const categories = [
  { id: 1, name: "Electronic" },
  { id: 2, name: "Accessories" },
  { id: 3, name: "Home" },
  { id: 4, name: "Bags" },
  { id: 5, name: "Sports" },
  { id: 6, name: "Clothing" },
];
export const priceRanges = [
  { id: 1, min: 0, max: 50 },
  { id: 2, min: 51, max: 100 },
  { id: 3, min: 101, max: 200 },
  { id: 4, min: 201, max: 500 },
  { id: 5, min: 501, max: 1000 },
];

export const CategoriesForNavbar = [
  {
    id: "clothing",
    name: "Clothing",
    subcategories: ["Dresses", "Tops", "Pants", "Jackets"],
    link: "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "shoes",
    name: "Shoes",
    subcategories: ["Sneakers", "Boots", "Sandals", "Heels"],
    link: "https://images.unsplash.com/photo-1561348613-6d08019ace21?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "accessories",
    name: "Accessories",
    subcategories: ["Bags", "Jewelry", "Belts", "Sunglasses"],
    link: "https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?q=80&w=1743&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export const collections = [
  {
    id: 'summer',
    name: 'Summer Collection',
    products: [
      {
        id: 1,
        name: 'Summer Dress',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80',
      },
      {
        id: 2,
        name: 'Floral Blouse',
        price: '$59.99',
        image: 'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=400&q=80',
      },
      {
        id: 3,
        name: 'Linen Pants',
        price: '$79.99',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
      },
      {
        id: 4,
        name: 'Bloused oversized',
        price: '$129.99',
        image: 'https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 5,
        name: 'Striped Sweater',
        price: '$79.99',
        image: 'https://images.unsplash.com/photo-1541629007334-1f6c44705182?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 6,
        name: 'Autumn Coat',
        price: '$129.99',
        image: 'https://images.unsplash.com/photo-1700733862656-77e8a84c3129?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    id: 'autumn',
    name: 'Autumn Collection',
    products: [
      {
        id: 7,
        name: 'Wool Coat',
        price: '$199.99',
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&q=80',
      },
      {
        id: 8,
        name: 'Knit Sweater',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80',
      },
      {
        id: 9,
        name: 'Leather Boots',
        price: '$149.99',
        image: 'https://images.unsplash.com/photo-1494955464529-790512c65305?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 10,
        name: 'Tweed Pants',
        price: '$79.99',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 11,
        name: 'Denim Jacket',
        price: '$129.99',
        image: 'https://plus.unsplash.com/premium_photo-1698260795012-99a7785109d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Summer Fashion Trends 2024",
    excerpt: "Discover the hottest trends for the upcoming summer season.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
    date: "Mar 15, 2024",
  },
  {
    id: 2,
    title: "Sustainable Fashion Guide",
    excerpt:
      "How to build an eco-friendly wardrobe without compromising style.",
    image:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=400&q=80",
    date: "Mar 12, 2024",
  },
  {
    id: 3,
    title: "Accessorizing 101",
    excerpt: "Master the art of accessorizing with these simple tips.",
    image:
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=400&q=80",
    date: "Mar 10, 2024",
  },
];

export const SliderArray1 = [
  {
    Photo: "https://i.insider.com/5ed95c393f7370198527eea3?width=700",
    alt: "Frist Photo",
  },
  {
    Photo:
      "https://www.founderjar.com/wp-content/uploads/2022/05/Trending-Products-to-Sell-Online.jpg",
    alt: "Second Photo",
  },
  {
    Photo:
      "https://nypost.com/wp-content/uploads/sites/2/2022/03/hairgrowth.jpg?quality=75&strip=all",
    alt: "Thrid Photo",
  },
  {
    Photo:
      "https://www.paulaschoice-eu.com/on/demandware.static/-/Library-Sites-paulachoice/default/dwaf673b07/ExpertAdvice/Toss-out_Header.jpg",
    alt: "Foruth Photo",
  },
  {
    Photo:
      "https://people.com/thmb/4zkSBc0FajrSu-1OLxSxFBgGNqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(2999x0:3001x2)/the-best-beauty-products-people-editors-tried-tout-2-3ee7650afc2a430e8884e79850fca4ae.jpg",
    alt: "Fifth Photo",
  },
];

export const SliderArray2 = [
  {
    Photo:
      "https://media.glamour.com/photos/639d05c7d0d74927483ca574/3:2/w_3000,h_2000,c_limit/12-16-editors-picks.jpg",
    alt: "Frist Photo",
  },
  {
    Photo:
      "https://lh3.googleusercontent.com/Z5LKF4h_1_uix2KJ5f1tLXcLLLkN_P7gCHSPiSbYBfb8d8dIbt_DU05stfGOJkhd0-Khgnhawvy_QlLpZW8WUip_7NY_fftLMI6w5ZE",
    alt: "Second Photo",
  },
  {
    Photo:
      "https://cdn.logojoy.com/wp-content/uploads/20191023114758/AdobeStock_224061283-min-1024x683.jpeg",
    alt: "Thrid Photo",
  },
  {
    Photo:
      "https://c02.purpledshub.com/uploads/sites/41/2024/06/cosmetics.jpg?w=1029&webp=1",
    alt: "Foruth Photo",
  },
  {
    Photo:
      "https://us.123rf.com/450wm/peshkovaolga/peshkovaolga2012/peshkovaolga201200019/160544643-zero-waste-concept-flat-lay-eco-friendly-set-brushes-bags-bottles-and-jar-on-beige-background-top.jpg?ver=6",
    alt: "Fifth Photo",
  },
];

export const SliderArray3 = [
  {
    Photo:
      "https://images-us.nivea.com/-/media/nivea/local/in/product-banners/nivea-men-products_banner_revised.png?rx=1454&ry=0&rw=1452&rh=806",
    alt: "Frist Photo",
  },
  {
    Photo:
      "https://cdn.shopify.com/s/files/1/0513/2409/files/naturalskincare.jpg?v=1693253946",
    alt: "Second Photo",
  },
  {
    Photo:
      "https://www.packagingstrategies.com/ext/resources/ISSUES/2019/07-July/34-wahl.jpg",
    alt: "Thrid Photo",
  },
  {
    Photo:
      "https://www.insidehook.com/wp-content/uploads/2019/04/The-Ordinary-.jpg?fit=1200%2C675",
    alt: "Foruth Photo",
  },
  {
    Photo: "https://menshealth.com.au/wp-content/uploads/2023/01/37083457.png",
    alt: "Fifth Photo",
  },
];
export const SliderArray4 = [
  {
    Photo:
      "https://blogscdn.thehut.net/wp-content/uploads/sites/32/2018/04/17133037/1200x672_217775857-MC-MK-April-photography-batching-Shot14_1200x672_acf_cropped_1200x672_acf_cropped.jpg",
    alt: "Frist Photo",
  },
  {
    Photo:
      "https://www.mensjournal.com/.image/t_share/MTk5Mjk3MzIzMzAwNDk3MzU4/mens-grooming-deals-prime-day-2023.jpg",
    alt: "Second Photo",
  },
  {
    Photo:
      "https://stylestandard.com/cdn/shop/articles/StyleStandard_20200319_009_copy_1024x.jpg?v=1689062004",
    alt: "Thrid Photo",
  },
  {
    Photo:
      "https://media.gq-magazine.co.uk/photos/65e9cf40ad37d1f2a0f745a0/master/pass/Affordable-skincare-b.jpg",
    alt: "Foruth Photo",
  },
  {
    Photo:
      "https://www.businessoutreach.in/wp-content/uploads/2023/09/The-market-size-of-mens-grooming-brands-in-India.jpg",
    alt: "Fifth Photo",
  },
];

export const menuItems = [
  {
    title: 'Admin',
    IsAdmin: true,
    subItems: [
      { title: 'Inventory', href: '/admin/inventory' },
      { title: 'Add Product', href: '/admin/add-product' },
      { title: 'Orders', href: '/admin/orders' },
    ],
  },
  {
    title: 'Collections',
    subItems: [
      { title: 'Summer Collection', href: '/search' },
      { title: 'Autumn Collection', href: '/search' },
      { title: 'New Arrivals', href: '/search' },
      { title: 'Best Sellers', href: '/search' },
    ],
  },
  {
    title: 'Product',
    subItems: [
      { title: 'Simple Product', href: '/product/simple' },
      { title: 'Variable Product', href: '/product/variable' },
      { title: 'Digital Product', href: '/product/digital' },
    ],
  },
];

export const CategoriesDrawer = [
  {
    title: 'Accessories',
    icon: '👜',
    subCategories: [
      { title: 'Bags', href: '/category/accessories/bags' },
      { title: 'Belts', href: '/category/accessories/belts' },
      { title: 'Scarves', href: '/category/accessories/scarves' },
    ],
  },
  {
    title: 'Clothing',
    icon: '👔',
    subCategories: [
      { title: 'Dresses', href: '/category/clothing/dresses' },
      { title: 'Shirts', href: '/category/clothing/shirts' },
      { title: 'Pants', href: '/category/clothing/pants' },
      { title: 'Jackets', href: '/category/clothing/jackets' },
    ],
  },
  {
    title: 'Shoes',
    icon: '👟',
    subCategories: [
      { title: 'Sneakers', href: '/category/shoes/sneakers' },
      { title: 'Boots', href: '/category/shoes/boots' },
      { title: 'Sandals', href: '/category/shoes/sandals' },
    ],
  },
  {
    title: 'Jewelry',
    icon: '💍',
    subCategories: [
      { title: 'Necklaces', href: '/category/jewelry/necklaces' },
      { title: 'Rings', href: '/category/jewelry/rings' },
      { title: 'Earrings', href: '/category/jewelry/earrings' },
    ],
  },
];

export const initialProducts = [
  {
    id: '1',
    name: 'Sunsets Lotus Bottom',
    price: 105.00,
    image: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty...',
  },
  {
    id: '2',
    name: 'Sunsets Lotus Kauai Keyhole',
    price: 95.00,
    originalPrice: 105.00,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim....',
  },
];
export const items = [
  {
    name: "Samsung",
    alt: "Samsung!",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Samsung_202301271715.jpg",
    classes: "rounded-full border-2 border-orange-500 w-12 h-12 object-cover",
    link: "/RelatedSearch?q=samsung",
  },
  {
    name: "Xiamoi",
    alt: "Xiamoi",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg",
    classes: "rounded-full border-2 border-orange-500 w-12 h-12 object-cover",
    link: "/RelatedSearch?q=xiaomi",
  },
  {
    name: "Karaca",
    alt: "Karaca",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/13/Karaca_202302131917.jpg",
    classes: "rounded-full border-2 border-black w-12 h-12 object-cover",
    link: "/RelatedSearch?q=karaca",
  },
  {
    name: "Adidas",
    alt: "Adidas",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png",
    classes: "rounded-full border-2 border-gray-500 w-12 h-12 object-cover",
    link: "/RelatedSearch?q=adidas",
  },
  {
    name: "Bosch",
    alt: "Bosch",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Bosch_202301262207.png",
    classes: "rounded-full border-2 border-blue-500 w-12 h-12 object-cover",
    link: "/RelatedSearch?q=bosch",
  },
  {
    name: "Dyson",
    alt: "Dyson",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Dyson_202301270049.jpg",
    classes: "rounded-full border-2 border-orange-500 w-12 h-12 object-cover",
    link: "/RelatedSearch?q=dyson",
  },
  {
    name: "Sony",
    alt: "Sony",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Sony_202301271715.jpg",
    classes: "rounded-full border-2 border-orange-500 w-12 h-12 object-cover",
    link: "/RelatedSearch?q=sony",
  },
  {
    name: "Apple",
    alt: "Apple",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg",
    classes: "rounded-full border-2 border-gray-500 w-12 h-12 object-cover",
    link: "/RelatedSearch?q=apple",
  },
  {
    name: "Philips",
    alt: "Philips",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Philips_202301271558.jpg",
    classes: "rounded-full border-2 border-blue-500 w-12 h-12 object-cover",
    link: "/RelatedSearch?q=philips",
  },
  {
    name: "Vestel",
    alt: "Vestel",
    src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Vestel_202301280121.jpg",
    classes: "rounded-full border-2 border-gray-500 w-12 h-12 object-cover",
    link: "/RelatedSearch?q=vestel",
  },
];

export const mockArticles = [
  {
    id: 1,
    title: "The Rise of Sustainable Fashion: A New Era of Conscious Style",
    excerpt: "Discover how sustainable fashion is reshaping the industry and influencing consumer choices in 2024.",
    author: "Khaled Ghonim",
    date: "March 15, 2024",
    category: "Sustainable Fashion",
    image: "https://plus.unsplash.com/premium_photo-1713483623332-c82063245261?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Vintage Revival: How Classic Styles Are Making a Modern Comeback",
    excerpt: "Explore the resurgence of vintage fashion and learn how to incorporate timeless pieces into your wardrobe.",
    author: "Mohamed Elsayed",
    date: "March 14, 2024",
    category: "Vintage Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"
  },
  {
    id: 3,
    title: "Street Style: The Urban Fashion Revolution",
    excerpt: "From Tokyo to New York, street style is evolving. See how urban fashion is changing the game.",
    author: "Shahd Azziza",
    date: "March 13, 2024",
    category: "Street Style",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800"
  }
];


export const influencers = [
  {
    id: 1,
    name: "Azziza Ali",
    handle: "@sarahstyle",
    followers: "500K",
    image: "https://images.unsplash.com/photo-1615453261246-4b32e335a4a0?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instagramPosts: [
      "https://images.unsplash.com/photo-1615453262312-022a72d3842a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1612833833572-4f2709907bc4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 2,
    name: "Khaled Ghonim",
    handle: "@LoDa",
    followers: "320K",
    image: "https://translator.khaledghonim.com/_next/image?url=%2FDIHAD_Exhibition-08.jpg&w=640&q=100",
    instagramPosts: [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=200",
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=200",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200"
    ]
  }
];

export const article = {
  id: 1,
  title: "The Evolution of Sustainable Fashion: From Trend to Necessity",
  author: "Emma Thompson",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "Sustainable Fashion",
  image: "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  content: `
    <h2>The Rise of Eco-Conscious Fashion</h2>
    <p>The fashion industry is undergoing a revolutionary transformation, with sustainability at its core. This shift isn't just about using organic materials; it's about reimagining the entire fashion ecosystem.</p>
    
    <blockquote>
      "Sustainable fashion isn't a trend; it's a fundamental shift in how we think about, produce, and consume clothing." - Emma Thompson
    </blockquote>

    <h2>Key Innovations in Sustainable Materials</h2>
    <p>From recycled ocean plastics to bio-fabricated leather alternatives, innovative materials are reshaping the future of fashion. These advancements not only reduce environmental impact but also open new possibilities for design and functionality.</p>

    <figure>
      <img src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800" alt="Sustainable fabric samples" />
      <figcaption>New sustainable materials being developed in fashion labs</figcaption>
    </figure>
  `,
  tags: ["sustainability", "eco-fashion", "innovation"],
  likes: 245,
  comments: 28,
  relatedArticles: [
    {
      id: 2,
      title: "Circular Fashion: The Future of Clothing",
      excerpt: "Exploring how circular economy principles are transforming the fashion industry",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400"
    },
    {
      id: 3,
      title: "Sustainable Materials Revolution",
      excerpt: "New eco-friendly materials changing the fashion landscape",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400"
    }
  ]
};


export const mockOrders = [
  {
    id: "ORD-001",
    date: "2024-03-15",
    status: "Delivered",
    items: [
      {
        name: "Wireless Headphones",
        price: 129.99,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
      },
    ],
    total: 129.99,
  },
  {
    id: "ORD-002",
    date: "2024-03-10",
    status: "In Transit",
    items: [
      {
        name: "Smart Watch",
        price: 299.99,
        image:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200",
      },
    ],
    total: 299.99,
  },
];

export const metrics = {
  totalSales: '$24,567',
  totalOrders: '156',
  activeProducts: '89',
  newCustomers: '34'
};

export const recentActivity = [
  { id: 1, message: 'New order #1234 received', time: '2 minutes ago' },
  { id: 2, message: 'Product "iPhone 13" stock updated', time: '15 minutes ago' },
  { id: 3, message: 'Customer feedback received', time: '1 hour ago' },
];

export const AdminnavItems = [
  { path: '/admin', icon: LuLayoutDashboard, label: 'Dashboard' },
  { path: '/admin/inventory', icon: FiPackage, label: 'Inventory' },
  { path: '/admin/add-product', icon: BsPlusCircleFill, label: 'Add Product' },
  { path: '/admin/orders', icon: GiShoppingCart, label: 'Orders' },
  { path: '/admin/manage-orders', icon: FaClipboardList, label: 'Manage Orders' },
];