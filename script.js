import React from "react";
import ReactDOM from "react-dom";

// Header
//      -logo
//      nav items
//
// Body
//     -search
//     -restorent container
//
// Footer
//     -copyright
//     -links
//     -Address

const resObjList = [
  {
    info: {
      id: "382647",
      name: "Wendy's",
      cloudinaryImageId: "f1aa621021a2826088089b89842d4e7c",
      locality: "Central Hall",
      areaName: "Seshadripuram",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.3,
      parentId: "972",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wendys-central-hall-seshadripuram-bangalore-382647",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "826446",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId: "67d17abfeb3a5da6103b9424f6dbe973",
      locality: "Jayanagar",
      areaName: "Jayanagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 4.8,
      parentId: "306806",
      avgRatingString: "4.8",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-jayanagar-bangalore-826446",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "341895",
      name: "Burger Seigneur",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/2e01532b-e100-46fd-a7f5-8d430dd714b4_341895.jpg",
      locality: "Indiranagar",
      areaName: "Indiranagar",
      costForTwo: "₹1300 for two",
      cuisines: ["American", "Continental", "Burgers", "Beverages"],
      avgRating: 4.4,
      parentId: "12095",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-seigneur-indiranagar-bangalore-341895",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "192280",
      name: "McCafe by McDonald's",
      cloudinaryImageId: "bqahuozuzz8xdaerbky9",
      locality: "2nd Stage",
      areaName: "Banashankari",
      costForTwo: "₹250 for two",
      cuisines: ["Beverages", "Desserts"],
      avgRating: 4.9,
      parentId: "8263",
      avgRatingString: "4.9",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mccafe-by-mcdonalds-2nd-stage-banashankari-bangalore-192280",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "792327",
      name: "Wendy's Flavor Fresh Burgers",
      cloudinaryImageId: "f1aa621021a2826088089b89842d4e7c",
      locality: "Central Hall",
      areaName: "Seshadripuram",
      costForTwo: "₹500 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
      avgRating: 3.8,
      parentId: "470493",
      avgRatingString: "3.8",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wendys-flavor-fresh-burgers-central-hall-seshadripuram-bangalore-792327",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "792327",
      name: "Wendy's Flavor Fresh Burgers",
      cloudinaryImageId: "f1aa621021a2826088089b89842d4e7c",
      locality: "Central Hall",
      areaName: "Seshadripuram",
      costForTwo: "₹500 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
      avgRating: 3.8,
      parentId: "470493",
      avgRatingString: "3.8",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wendys-flavor-fresh-burgers-central-hall-seshadripuram-bangalore-792327",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "770772",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId: "4b44c7921b1b6073a4ffa58b38f8def1",
      locality: "Ali Askar Road",
      areaName: "Cunningham Road",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.3,
      parentId: "11633",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-ali-askar-road-cunningham-road-bangalore-770772",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "506324",
      name: "Louis Burger",
      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
      locality: "6Th Block, Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.3,
      parentId: "22485",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/louis-burger-6th-block-koramangala-bangalore-506324",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5934",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 06:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
      type: "WEBLINK",
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-1536x1536.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const ResCards = (props) => {
  const { resData } = props;
  return (
    <div className="res-Card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt=""
        className="card-img"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(" , ")}</h4>
      <h4>Address : {resData.info.areaName}</h4>
      <h4>AvgRating - {resData.info.avgRating}</h4>
      <h3>{resData.info.costForTwo.toUpperCase()}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResCards resData={resObjList[0]} />
        <ResCards resData={resObjList[1]} />
        <ResCards resData={resObjList[2]} />
        <ResCards resData={resObjList[3]} />
        <ResCards resData={resObjList[4]} />
        <ResCards resData={resObjList[5]} />
        <ResCards resData={resObjList[6]} />
        <ResCards resData={resObjList[7]} />
        <ResCards resData={resObjList[8]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
