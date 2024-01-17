// import NftCoverImage from "../assets/project-images/NFT/nft-cover.png";
// import NftFrontImage from "../assets/project-images/NFT/nft-front.png";
// import NftFirstImage from "../assets/project-images/NFT/nft-desktop.png";
// import NftSecondImage from "../assets/project-images/NFT/nft-phones-1.jpg";
// import NftThirdImage from "../assets/project-images/NFT/nft-phones-2.jpg";

// import TreactCoverImage from "../assets/project-images/treact/treact-cover.jpg";
// import TreactFrontImage from "../assets/project-images/treact/treact-front.png";
// import TreactFirstImage from "../assets/project-images/treact/treact-desktop.png";
// import TreactSecondImage from "../assets/project-images/treact/treact-phones-1.jpg";
// import TreactThirdImage from "../assets/project-images/treact/treact-phones-2.png";

// import EcommerceCover from "../assets/project-images/ecommerce/ecommerce-cover.png";
// import EcommerceFrontImage from "../assets/project-images/ecommerce/ecommerce-front.png";
// import EcommerceFirstImage from "../assets/project-images/ecommerce/ecommerce-desktop.png";
// import EcommerceSecondImage from "../assets/project-images/ecommerce/ecommerce-phones-1.jpg";
// import EcommerceThirdImage from "../assets/project-images/ecommerce/ecommerce-phones-2.jpg";

import nftCover from "../assets/project-images/nft_cover.png";
import ecommerceCover from "../assets/project-images/ecommerce_cover.png";
import animeCover from "../assets/project-images/anime_cover.png";

import nftFront from "../assets/project-images/nft marketplace.png";
import ecommerceFront from "../assets/project-images/summarist.png";
import animeFront from "../assets/project-images/anime search.png";

const projectsConfig = [
  {
    title: "NFT Marketplace",
    type: "Web App",
    description:
      "A functional NFT Marketplace. The marketplace connects to an external database of NFT products, creators, and owners. Fully responsive with dynamic routing. Utilized Git version control to upload steady changes and features.",
    liveLink: "https://tedric-internship.vercel.app/",
    githubLink: "https://github.com/tedricc/tedric-internship",
    coverImage: nftCover,
    topImage: nftFront,
    // firstImage: NftFirstImage,
    // secondImage: NftSecondImage,
    // thirdImage: NftThirdImage,
  },
  {
    title: "eBook Platform",
    type: "Web App",
    description:
      "A functional eBook platform. The platform connects to an external API to fetch various eBooks and Firebase for authentication and a backend cloud datastore. Stripe handles subscriptions and payments with a Firebase extension.",
    liveLink: "https://tedric-advanced-internship.vercel.app/",
    githubLink: "https://github.com/tedricc/tedric-advanced-internship",
    coverImage: ecommerceCover,
    topImage: ecommerceFront,
    // firstImage: TreactFirstImage,
    // secondImage: TreactSecondImage,
    // thirdImage: TreactThirdImage,
  },
  {
    title: "Anime Search Project",
    type: "Web App",
    description:
      "A functional search engine. Built using the React library, the connected AniList GraphQL API enables users to discover various animated programs through dynamic routing. Fully responsive and can be connected to different APIs for other functions.",
    liveLink: "https://effortless-malabi-f8734b.netlify.app/",
    githubLink: "https://github.com/tedricc/anime-search-react",
    coverImage: animeCover,
    topImage: animeFront,
    // firstImage: EcommerceFirstImage,
    // secondImage: EcommerceSecondImage,
    // thirdImage: EcommerceThirdImage,
  },
];

export default projectsConfig;
