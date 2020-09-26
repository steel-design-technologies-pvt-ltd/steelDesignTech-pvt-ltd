let frameworkContent = {
    "headerSection": {
        "logoSection" : {
            "label": "SteelDesign Technology",
            "smallLabel": "Designs",
            "linkUrl": "/home",
            "mobileMenuLabel": "Menu"
        }
    }
}

let navigationSection = [
    {
        "navigationLabel": "HOME",
        "navigationUrl": "/home"
    },
    // {
    //     "navigationLabel": "HOME-DESIGNS",
    //     "navigationUrl": "/homeDesigns"
    // },
    {
        "navigationLabel": "EQUIPMENT",
        "navigationUrl": "/equipments"
    },
    {
        "navigationLabel": "SERVICES",
        "navigationUrl": "/services"
    },
    {
        "navigationLabel": "CONTACT",
        "navigationUrl": "/contact"
    }
];

let footerSection = {
    "companyDescription" : {
        "descriptionHeading": "SDT SteelDesign Pvt LTD",
        "descriptionText": "We are one of top leading companies in providing hospitality solutions.",
        "descriptionLink": {
            "label": "Read more...",
            "linkUrl": "/about"
        }
    },
    "quickLinkSection": {
        "descriptionHeading": "PRODUCT LINKS",
        "quickLinks": [
            {
                "linkLabel": "Cafe Layouts",
                "pathname": "/productsDescription/",
                "search": "?productID=cafe_plans"
            },
            {
                "linkLabel": "Food-Van Layouts",
                "pathname": "/productsDescription/",
                "search": "?productID=food_van_plans"
            },
            {
                "linkLabel": "Exhibition Layouts",
                "pathname": "/productsDescription/",
                "search": "?productID=exhibition_plans"
            },
            {
                "linkLabel": "More Products",
                "pathname": "/serviceFeature",
                "search": ""
            }
        ]
    },
    "popularLinksSection": {
        "descriptionHeading": "POPULAR CITIES",
        "popularLinks": [
            {
                "linkLabel": "New Delhi",
                "projectCount": "320 Projects",
                "linkURL": "/newDelhiCity"
            },
            {
                "linkLabel": "Punjab",
                "projectCount": "294 Projects",
                "linkURL": "/punjabCity"
            },
            {
                "linkLabel": "Chandiragh",
                "projectCount": "300 Projects",
                "linkURL": "/chandigarhCity"
            },
            {
                "linkLabel": "Bangalore",
                "projectCount": "268 Projects",
                "linkURL": "/bangaloreCity"
            },
            {
                "linkLabel": "Haryana",
                "projectCount": "342 Projects",
                "linkURL": "/haryanaCity"
            } 
        ]
    },
    subscribeSection: {
        "descriptionHeading": "SUBSCRIBE",
        "subscribeEmailSentence": "Never miss out latest news and updates from us.",
        "subscribeEmailButton": {
            "buttonLabel": "Send"
        }
    }
}

let sliderComponent = {
    searchSection : {
        headingText : "Search your next dream home here",
        inputText : "Enter text to search",
        searchButtonText : "Start Search"
    },
    slideSection : [
        {
            slideUrl : '',
            slideName : '',
            backgroundImagePath: 'https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/slider%2Fcarousel-1.jpg?alt=media&token=3da2177d-87b2-4a89-bc5d-2c8ded6a07c3'
        },
        {
            slideUrl : '',
            slideName : '',
            backgroundImagePath: 'https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/slider%2Fcarousel-2.jpg?alt=media&token=c5908b80-07ce-4202-9729-cb3102a4b3f4'
        },
        {
            slideUrl : '',
            slideName : '',
            backgroundImagePath: 'https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/slider%2Fcarousel-4.jpg?alt=media&token=b0badcda-78fc-49ef-b104-95f39333ae4d'
        },
        {
            slideUrl : '',
            slideName : '',
            backgroundImagePath: 'https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/slider%2Fcarousel-3.jpg?alt=media&token=803586a3-9c61-44e3-9153-7276273cc866'
        }
    ]
}

let CompanyFeaturesStaticContent = {
    features: [
        {
            featureImage: {
                url: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/icons%2Fsteel_equipment.png?alt=media&token=991f79a0-9fda-4098-9aa3-ab34eca8acf2",
                alt: "feature1"
            },
            featureHeading: "Best Steel Equipment",
            featureDescription: "High Quality steel equipments (customized or ready-made) for restaurant, cafe, dhaba etc. All must have equipment at one place at affordable price.",
            featureLink: {
                textLabel: "Find out more",
                linkUrl: "/serviceFeature"
            },
            featureId: "BEST_EQUIPMENTS"
        },
        {
            featureImage: {
                url: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/icons%2Flayout-icon.png?alt=media&token=aa1ec543-c66f-4576-b762-02d0b43a8429",
                alt: "premium-layout-planning"
            },
            featureHeading: "Premium Layout Planning",
            featureDescription: "Get layout planning of your home/restaurant/dhaba/cafe from our experienced designers. World class layout designs to scale your business",
            featureLink: {
                textLabel: "Find out more",
                linkUrl: "/serviceFeature"
            },
            featureId: "PREMIUM_LAYOUTS"
        },
        {
            featureImage: {
                url: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/icons%2Fassistance.png?alt=media&token=6ad5a814-26b2-4c49-a91e-005e0dc62544",
                alt: "feature3"
            },
            featureHeading: "Assistance Guaranteed",
            featureDescription: "Get help from our experienced professionals. Site visits, on call assistance or meetings, we are committed to deliver best customer service possible 24 / 7.",
            featureLink: {
                textLabel: "Find out more",
                linkUrl: "/serviceFeature"
            },
            featureId: "ASSISTANCE_GUARANTEED"
        }
    ]
}

let CompanyPresencesStaticContent = {
    sectionHeading : "Our Presence",
    companyPresencePageUrl: "/companyPresencePage",
    presences : [
        {
            presenceLocation: "New Delhi",
            backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/project_cities%2Fdelhi.jpg?alt=media&token=b7872415-987c-484a-8056-f98c9cb85f91",
            projectsOngoing: "430 Projects",
            presenceID: "PRESENCE_DELHI"
        },
        {
            presenceLocation: "Punjab",
            backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/project_cities%2Fpunjab.jpg?alt=media&token=f333360d-8050-4195-8cf3-6b0516aec157",
            projectsOngoing: "294 Projects",
            presenceID: "PRESENCE_PUNJAB"
        },
        {
            presenceLocation: "Chandigarh",
            backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/project_cities%2Fchandigarh.jpg?alt=media&token=3b1c5552-be32-41a1-b910-f7689aafe519",
            projectsOngoing: "300 Projects",
            presenceID: "PRESENCE_CHANDIGARH"
        },
        {
            presenceLocation: "Bangalore",
            backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/project_cities%2Fbangalore.jpg?alt=media&token=bb558634-bcba-4619-ad83-351fe96c104c",
            projectsOngoing: "120 Projects",
            presenceID: "PRESENCE_BANGALORE"
        },
        {
            presenceLocation: "Gurgaon",
            backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/project_cities%2Fgurgaon.jpg?alt=media&token=58763400-ca90-4ddf-92ba-912db6fd6e83",
            projectsOngoing: "103 Projects",
            presenceID: "PRESENCE_HARYANA"
        }
    ],
    bestLayoutContent: {
        bestLayoutHeading: "Best food-business / hospitality project planning",
        backgroundImageURL: 'https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/homepage%2Frestaurant_image.jpg?alt=media&token=a87da833-db8a-4664-b689-c234b6b0dc47',
        bestLayoutDescription: "Our layouts and design can make your restaurant/cafe 'Talk of the Town'. Contact Us to know more.",
        linkToBestLayout: {
            label: "Contact Now",
            bestLayoutUrl: "/contact"
        }
    }
};

let companyServicesStaticContent = {
    whyChooseUsSection: {
        topSubheading: "Why Choose Us",
        mainHeading: "Start your business with the Best!",
        descriptionSection1: "We understand that hospitality is central to Restaurant/Cafe business. It involves making people feel welcome and that begins with the Ambience/Vibes one perceives at restaurant/cafe. Our services provides best of what people are looking for before stepping out for hangout. Your will love our services, we can guarantee on that.",
        descriptionSection2: "Quality is never an accident. It is always the result of an intelligent effort. ~ John Ruskin",
        readMoreButton: {
            buttonLabel: "Find out more",
            buttonUrl: "/serviceFeature"
        },
        imageUrl: "",
        imageAlt: "whyChooseUsImage"
    },
    ourServicesSection: [
        {
            iconClass: "icon-list2",
            serviceHeading: "Project Planning",
            serviceDescription: "Simple and effective approach to convert your business idea into reality. We planning strategy will help your business establish and reachable to customers."
        },
        {
            iconClass: "icon-power-cord",
            serviceHeading: "Commercial Kitchen layouts",
            serviceDescription: "Kitchen is the heart of food business. We are commited to provide best kitchen layout possible which fits you business as well as Chef needs."
        },
        {
            iconClass: "icon-price-tag2",
            serviceHeading: "Steel Equipment",
            serviceDescription: "We Provide ready-made SS Equipment needed in a restaurant/cafe. We also provide 'Customised SS Equipment' according to business need requested."
        },
        {
            iconClass: "icon-direction",
            serviceHeading: "Food-Truck, Take-Away-Point",
            serviceDescription: "Our Services include efficient layout design for food-truck, take-away-point. Choose and order layout from our premium collection or request layout according to you business needs."
        },
        {
            iconClass: "",
            serviceHeading: "Exhibition Stall",
            serviceDescription: "Reach out to us for end-to-end Exhibition stall solution.Our experienced professionals will make sure you Exhibition Stall stand out from you competition."
        },
        {
            iconClass: "icon-home3",
            serviceHeading: "Floor Layout",
            serviceDescription: "World class Home-Layouts and Floor-Planning service.Customized layouts fitting you requirements. Our experienced designer help people convert their dream home into reality."
        }
    ]
}

let pageBannerStaticContent = [
    {
        pageId: "homeDesigns",
        pageName: "Home Designs",
        breadCrumbUrl: [{"linkName": "home","link": "/home"}],
        currentLocation: "homeDesigns"
    },{
        pageId: "equipments",
        pageName: "Hospitality Equipments",
        breadCrumbUrl: [{"linkName": "home","link": "/home"}],
        currentLocation: "equipments"
    },{
        pageId: "services",
        pageName: "Our Services",
        breadCrumbUrl: [{"linkName": "home","link": "/home"}],
        currentLocation: "services"
    },{
        pageId: "contact",
        pageName: "Contact Us",
        breadCrumbUrl: [{"linkName": "home","link": "/home"}],
        currentLocation: "contact"
    }
];

let AboutPageStaticContent = {
    aboutCompanySection: {
        mainImageAlt: "Our Company",
        leftSubsectionHeading : "Our Mission",
        leftSubsectionDesc: "At SDT SteelDesign Pvt Ltd. we are actively involved in helping emerging business in food sector. We provide a wide range of solution, from designing solution to finalising complete project. Providing the quality service is primary focus, the whole process is designed to keep client requirement centralized. Our trained professional understands and owns the responsibility of their task. Out step-wise process helps us deliver the projects in the timelines.",
        rightSubsectionHeading: "Our Vision",
        rightSubsectionDesc: "We are future ready with advancement of the food-industry business. We aspire to provide end-to-end hospitality solution pretty soon. We plan to reach other metro cities as soon as possible, where we will be providing the complete solution to the new business minds.",
    },
    companyHistorySection: {
        topSubheading: "Know Us More",
        mainHeading: "Company History",
        descriptionSection1: "We here at SDT STEELDESIGN Pvt Ltd have been working in hospitality domain for more than six years. We have successfully delivered many remarkable projects in India and all over the world.",
        descriptionSection2: "",
        readMoreButton: {
            buttonLabel: "Company History",
            buttonUrl: "/serviceFeature"
        },
        imageUrl: "",
        imageAlt: "whyChooseUsImage"
    }
};

let ContactStaticContent = {
    contactForm : {
        firstNameLabel : "FIRST NAME",
        lastNameLabel : "LAST NAME",
        emailLabel : "EMAIL",
        phoneLabel: 'Phone',
        messageLabel: "MESSAGE",
        submitFormButtonLabel: "Send Message",
        querySubmitSuccessIcon: 'https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/icons%2Fsucess-icon.svg?alt=media&token=1947907b-c6d2-4d5e-b8fa-88a022194ed7'
    },
    contactAddress: {
        contactHeading: "Corporate Office",
        address1: "#361, Som Bazaar Chowk, main 33 feet road (near nav-jeevan public school), Shiv Vihar (Shiv Vihar Metro), Kawawal Nagar Delhi 110094",
        address2: '#16, street no 1, West Kanti Nagar, Shahadara, Delhi - 51',
        contactMail: "steeldesigntechnologies@gmail.com",
        contactNumber: "+91-9650465689, +91-9110801390"
    },
    feedback: {
        feedbackHeading: "Feedback",
        feedbackText: "We are always open for feedbacks from our customers. If you have any suggestion or query, feel free to contact us via contact-form. We will try to resolve your query as-soon-as-possible",
        feedbackButtonLabel: "Learn More",
        feedbackLink: "/feedbackLink"
    }
};

let homeDesignPackages = {
    packagesData: [
        {
            contentData: {
                packageID: "1B-FULL-PLAN",
                layoutType: "1BHK",
                packageImageUrl: 'https://via.placeholder.com/400X200.png',
                otherImage : [
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                ],
                packageImageAlt: "1 bed home design planning",
                packageHeading: "1 BHK Layout Planning",
                packageDescription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
                packageCategory: "Home Designs",
                packagePrice: 19000,
                packageCurrency: "Rs.",
                packageDetails: [
                    {
                        name: "Area",
                        value: "180 yrd"
                    },
                    {
                        name: "Beds",
                        value: "1"
                    },
                    {
                        name: "Baths",
                        value: "1"
                    },
                    {
                        name: "Garages",
                        value: "1"
                    }
                ]
            }
        },
        {
            contentData: {
                packageID: "2B-FULL-PLAN",
                layoutType: "2BHK",
                packageImageUrl: 'https://via.placeholder.com/400X200.png',
                otherImage : [
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                ],
                packageImageAlt: "2 bed home design planning",
                packageHeading: "2 BHK Layout Planning",
                packageDescription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
                packageCategory: "Home Designs",
                packagePrice: 25000,
                packageCurrency: "Rs.",
                packageDetails: [
                    {
                        name: "Area",
                        value: "250 yrd"
                    },
                    {
                        name: "Beds",
                        value: "2"
                    },
                    {
                        name: "Baths",
                        value: "2"
                    },
                    {
                        name: "Garages",
                        value: "1"
                    }
                ]
            }
        },
        {
            contentData: {
                packageID: "3B-FULL-PLAN",
                layoutType: "3BHK",
                packageImageUrl: 'https://via.placeholder.com/400X200.png',
                otherImage : [
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                ],
                packageImageAlt: "3 bed home design planning",
                packageHeading: "3 BHK Layout Planning",
                packageDescription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
                packageCategory: "Home Designs",
                packagePrice: 29000,
                packageCurrency: "Rs.",
                packageDetails: [
                    {
                        name: "Area",
                        value: "320 yrd"
                    },
                    {
                        name: "Beds",
                        value: "3"
                    },
                    {
                        name: "Baths",
                        value: "3"
                    },
                    {
                        name: "Garages",
                        value: "1"
                    }
                ]
            }
        },
        {
            contentData: {
                packageID: "1B-FULL-PLAN",
                layoutType: "1BHK",
                packageImageUrl: 'https://via.placeholder.com/400X200.png',
                otherImage : [
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                    "https://via.placeholder.com/125X125.png",
                ],
                packageImageAlt: "1 bed home design planning",
                packageHeading: "1 BHK Layout Planning",
                packageDescription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
                packageCategory: "Home Designs",
                packagePrice: 20000,
                packageCurrency: "Rs.",
                packageDetails: [
                    {
                        name: "Area",
                        value: "200 yrd"
                    },
                    {
                        name: "Beds",
                        value: "1"
                    },
                    {
                        name: "Baths",
                        value: "1"
                    },
                    {
                        name: "Garages",
                        value: "1"
                    }
                ]
            }
        }
    ],
    orderButtonLabel: "Place Order",
    relatedProductSection: {
        sectionHeading: "Related Products"
    }
};

let equipmentPackagesData = [{
	"name" : "Stock pot range",
    "equipmentImageURL" : "https://via.placeholder.com/400X200.png",
    "equipmentOtherImages" : [
        "https://via.placeholder.com/125X125.png",
        "https://via.placeholder.com/125X125.png"
    ],
    "imageAlt": "equipment",
	"equipmentID" : "STEEL_EQUI",
	"dimension" : "600mmX600mmX600mm",
	"built_material" : "Stainless Steel - 304 Grade",
    "application" : "Used in hotel ,restaurant & catering bulk cooking",
    "equipmentCurrency": "Rs.",
    "equipmentPrice" : 17400,
    "sellingPrice": 20000,
    "equipmentAvailability" : true,
    "equipmentCategory": "restaurant, cafe, dhaba",
    "equipmentDetails": [
        {
            "name": "quantity",
            "value": "1"
        },
        {
            "name": "warranty",
            "value": "12 days"
        },
        {
            "name": "rating",
            "value": "4.9"
        },
        {
            "name": "delivery",
            "value": "7-8 work days"
        }
    ],
	"paymentMode" : "cash/IMPS/PAYTM",
	"special_req" : [
		"ELECTRICITY      :       N.A",
		"PLUMBING     :       N.A",
		"DRAINAGE       :      N.A",
		"GAS      :      LPG GAS REQUIRED",
		"HVAC      :         N.A"
	],
	"construction_details" : [
		"16 G.A  S.S. top with all sides turned down 50mm & in 12mm, all sides 18 G.A",
		"S.S paneling with louvers on both side for air ventilation",
		"450mmx450mm cast iron pan support",
		"Top secured with S.S channel frame work",
		"1 nos. L.P.G gas canteen burner ,with separate on/off valve for pilot & main burner ,gas inlet point at back side",
		"One nos.  S.S drip tray below burner for collecting waste",
		"4 nos. Dia 38mm legs , 16 G.A S.S round pipe with adjustable bullet feet with 18 G.A , S.S shelf all sides turned down 38mm & in 12mm",
		"Image displayed on the website is for reference, The ProductSpecification will be same however. The Actual product color might differ/superior."
	]
},{
	"name" : "Other Equipment",
    "equipmentImageURL" : "https://via.placeholder.com/400X200.png",
    "equipmentOtherImages" : [
        "https://via.placeholder.com/125X125.png",
        "https://via.placeholder.com/125X125.png"
    ],
    "imageAlt": "equipment",
	"equipmentID" : "STEEL_IRON_MIX",
	"dimension" : "600mmX600mmX600mm",
	"built_material" : "Stainless Steel - 304 Grade",
    "application" : "Used in hotel ,restaurant & catering bulk cooking",
    "equipmentCurrency": "Rs.",
	"equipmentPrice" : 7400,
    "equipmentAvailability" : true,
    "equipmentCategory": "restaurant, cafe, dhaba",
    "equipmentDetails": [
        {
            "name": "quantity",
            "value": "1"
        },
        {
            "name": "warranty",
            "value": "12 days"
        },
        {
            "name": "rating",
            "value": "4.9"
        },
        {
            "name": "delivery",
            "value": "7-8 work days"
        }
    ],
	"paymentMode" : "cash/IMPS/PAYTM",
	"special_req" : [
		"ELECTRICITY      :-       N.A",
		"PLUMBING     :-       N.A",
		"DRAINAGE       :-      N.A",
		"GAS      :-      LPG GAS REQUIRED",
		"HVAC      :-         N.A"
	],
	"construction_details" : [
		"16 G.A  S.S. top with all sides turned down 50mm & in 12mm, all sides 18 G.A",
		"S.S paneling with louvers on both side for air ventilation",
		"450mmx450mm cast iron pan support",
		"Top secured with S.S channel frame work",
		"1 nos. L.P.G gas canteen burner ,with separate on/off valve for pilot & main burner ,gas inlet point at back side",
		"One nos.  S.S drip tray below burner for collecting waste",
		"4 nos. Dia 38mm legs , 16 G.A S.S round pipe with adjustable bullet feet with 18 G.A , S.S shelf all sides turned down 38mm & in 12mm",
		"Image displayed on the website is for reference, The ProductSpecification will be same however. The Actual product color might differ/superior."
	]
}];

let filterStaticContent = {
    filterSectionHeading: "Filter Data",
    labelFilter: [
        {
            value: "1BHK",
            id: "1BHK"
        },
        {
            value: "2BHK",
            id: "2BHK"
        },
        {
            value: "3BHK",
            id: "3BHK"
        },
        {
            value: "ALL",
            id: "ALL"
        }
    ]
}

let equipmentFilterContent = {
    filterSectionHeading: "Filter By Price",
    labelFilter: [
        {
            value: "< 5000",
            id: "BELOW5000"
        },
        {
            value: "All",
            id: "ALL"
        }
    ]
};

let equipmentCategoryFilter = {
    filterSectionHeading: "Category Filter",
    labelFilter: [
        {
            value: "Steel Equipment",
            id: "STEEL_EQUI"
        },
        {
            value: "Exhaust hood",
            id: "EXHAUT_HOOD"
        },
        {
            value: "All",
            id: "ALL"
        }
    ]
}

let companyProductsStaticContent = {
    sectionHeading : "Our Services",
    companyProductsPageUrl: "/companyPresencePage",
    products : [
        {
            productName: "Home Layout Plans",
            backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/home_layouts%2Fhome_layout_planning.jpeg?alt=media&token=bad1eec5-125c-42b2-8ec1-6a64cd5a4273",
            productID: "home_plans"
        },{
            productName: "Cafe Layout Plans",
            backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/cafe_layouts%2Factual-images%2Fcafe_14.jpg?alt=media&token=25bbc5d0-8d9d-4d29-a649-dd5ec4f0720c",
            productID: "cafe_plans"
        },
        {
            productName: "Food Van Layouts",
            backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/food_van%2Ffood_van_actual.jpg?alt=media&token=e98b5895-90e4-4c50-9e65-f3b774897c52",
            productID: "food_van_plans"
        },
        {
            productName: "Exhibition Layouts",
            backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/exhibition_layouts%2Fexhibition_layout_10.jpg?alt=media&token=e6553bd9-d2fc-4400-8c81-505ca68cfe9e",
            productID: "exhibition_plans"
        }
    ]
};

let productDescriptionStaticContent = [{
    productID: 'cafe_plans',
    heading: "Cafe Layout Plans",
    caseStudyHeading: "Case-Study Projects",
    modalButtonText: 'Get In Touch!',
    images : [{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/cafe_layouts%2Factual-images%2Fcafe_1.jpg?alt=media&token=cc7de7d9-1fff-4e62-accc-6f051045fa03",
        alt:"productImage1",
        figCaption: "Park Themed Cafe"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/cafe_layouts%2Factual-images%2Fcafe_3.jpg?alt=media&token=27d977e0-ec60-4f53-ae03-2c3eaf268e23",
        alt:"productImage2",
        figCaption: "In above cafe-planning the target customers were Business-people, Students, Writers, sociologist. The theme of the cafe was planned such that it was comforting enough for continuous hours. The menu of the cafe had to be in accordance with the target customers i.e which offers light-weight food, helpful in continous long working hours"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/cafe_layouts%2Factual-images%2Fcafe_5.jpg?alt=media&token=fe51d9bc-67e7-4844-ae85-c3853c749d3e",
        alt:"productImage3",
        figCaption: "Park Themed Cafe"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/cafe_layouts%2Factual-images%2Fcafe_6.jpg?alt=media&token=db56740a-b7c3-42c1-852c-16a0ea5523b4",
        alt:"productImage4",
        figCaption: "Fine-Dining"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/cafe_layouts%2Flayouts%2Fcafe_layout_8.jpg?alt=media&token=1f45ea84-01b0-4a10-9fb6-ebc4cc61d6e1",
        alt:"productImage5",
        figCaption: "Cafe Sitting Plan-1"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/cafe_layouts%2Flayouts%2Fcafe_layout_1.jpg?alt=media&token=6bab2449-3f5e-48ef-935b-210b926ece4b",
        alt:"productImage6",
        figCaption: "Cafe Sitting Plan-2"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/cafe_layouts%2Flayouts%2Fcafe_layout_3.jpeg?alt=media&token=761958db-ae83-454e-be77-861cd42f7706",
        alt:"productImage7",
        figCaption: "Cafe Sitting Plan-3"
    }],
    projectBrief: "If you are planning to start a cafe then, congratulations! you are at the correct place. Our expertise in cafe-planning and providing best-solutions, is our commitment as a service provider. We take our customers feedback very sincerely and we have received a positive response from our customers as feedback. We would like to thank all our customers for encouraging us to proceed ahead.",
    projectCaption: "We are delighted to help our customers and they are taking advantages from our services. If you are also planning for a cafe, let us get in touch.",
    projectDetailedProcess: "",
    projectCosting: {
        heading: "Cafe layout planning service at affordable price -",
        subHeading: "",
        gridValues: {
            "Requirement Gathering Phase": "We will be sending one of our professionals to collect business requirement from client which will lay the foundation of our planning. This phase will charge you zero cost.",
            "Rough Layout Planning Phase": "We will be creating a rough layout from the requirement we have collected. This layout will be presented to client for correction if any. This phase will charge client 15% of the total project cost.",
            "Requirement Lock Phase": "Upon agreement from you, we will freeze the requirement and proceed with final layout planning. This phase will charge client 20% of the total project cost.",
            "Infrastructure Readiness": "Start of actual implementation of the layout planning. This phase involves infrastructure readiness. This phase will charge client 40%% of the total project cost.",
            "Project Completion and Handover": "This phase concludes the project with all the requirement implemented. Project completion sign-off will be taken from the client. This phase will charge client remaining 25% of the total project cost."
        }
    }
},{
    productID: 'food_van_plans',
    heading: "Food Van Layouts",
    caseStudyHeading: "Case-Study Projects",
    modalButtonText: 'Get In Touch!',
    images : [{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/food_van%2Ffood_van_actual1.jpg?alt=media&token=45d04dd5-d00e-4c45-a04e-52b578f1f34d",
        alt:"productImage1",
        figCaption: "Food Van"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/food_van%2Ffood_van_actual.jpg?alt=media&token=e98b5895-90e4-4c50-9e65-f3b774897c52",
        alt:"productImage2",
        figCaption: "Actual Image"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/food_van%2Ffood_van_aerial.jpg?alt=media&token=1f652b21-f01c-484a-8939-6ad6ef13b14e",
        alt:"productImage3",
        figCaption: "Aerial View"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/food_van%2Ffood_van_parts.jpg?alt=media&token=64b7f978-6671-422a-8f97-15cf3e340e98",
        alt:"productImage4",
        figCaption: "Part View"
    }],
    projectBrief: "Street-Food has covered major part in overal food-business in India. Since the competition is high, your business must stand out from the crowd. That is where we come into picture. We Provide the best possible layout for Food-Van business which makes the whole process seamless. The layout are created strategically that maximum customers can be handled simultaneously.",
    projectCaption: "Overall we are delighted to help our customers taking advantage from our services. If you are also planning for a Food-Van business, we are looking forward to hear from you...",
    projectDetailedProcess: "Please note: The outer appearance of food van is not included in our services. Our services includes, commercial kitchen planning and providing equipments as per the menu agreed. The charges for electrical-fitting plumbing will be additional.",
    projectCosting: {
        heading: "Food-Van Planning service at affordable price -",
        subHeading: "please refer below...",
        gridValues: {
            "Requirement Gathering Phase": "We will be sending one of our professionals to collect business requirement from client which will lay the foundation of our planning. This phase will charge you zero cost.",
            "Rough Layout Planning Phase": "We will be creating a rough layout from the requirement we have collected. This layout will be presented to client for correction if any. This phase will charge client 15% of the total project cost.",
            "Requirement Lock Phase": "Upon agreement from you, we will freeze the requirement and proceed with final layout planning. This phase will charge client 20% of the total project cost.",
            "Infrastructure Readiness": "Start of actual implementation of the layout planning. This phase involves infrastructure readiness. This phase will charge client 40%% of the total project cost.",
            "Project Completion and Handover": "This phase concludes the project with all the requirement implemented. Project completion sign-off will be taken from the client. This phase will charge client remaining 25% of the total project cost."
        }
    }
},{
    productID: 'exhibition_plans',
    heading: "Exhibition Layouts",
    caseStudyHeading: "Case-Study Projects",
    modalButtonText: 'Get In Touch!',
    images : [{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/exhibition_layouts%2Fexhibition_layout_1.jpg?alt=media&token=ff849d69-b962-41b6-8e41-46801ecca9b4",
        alt:"productImage1",
        figCaption: "Exhibition Stall"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/exhibition_layouts%2Fexhibition_layout_10.jpg?alt=media&token=e6553bd9-d2fc-4400-8c81-505ca68cfe9e",
        alt:"productImage2",
        figCaption: "Actual Image"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/exhibition_layouts%2Fexhibition_layout_2.jpg?alt=media&token=41a6701b-ee6d-48f6-aba1-e2edfbde4b1f",
        alt:"productImage3",
        figCaption: "Actual Image"
    },{
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/exhibition_layouts%2Fexhibition_layout_16.jpg?alt=media&token=4aa7bd9f-c3b6-40ab-a1c7-5f952b0cced5",
        alt:"productImage4",
        figCaption: "Actual Image"
    }],
    projectBrief: "We live in a world of advertisement. In order to reach out to maximum people we put a lot of efforts, and there are multiple options to advertise business. One of fastest growing method of advertisement is Exhibition Stall. People visits these exhibition which can be leveraged to reach maximum people. Our unique exhibition-stall-designs help our customers to leave behind their market competition by a large margin.",
    projectCaption: "We are delighted to help our customers taking advantage from our services. If you are also planning to setup an Exhibition for brand advertisement, we believe we can be very helpful.",
    projectDetailedProcess: "",
    projectCosting: {
        heading: "Exhibition Stall service at affordable price -",
        subHeading: "please refer below...",
        gridValues: {
            "Requirement Gathering Phase": "We will be sending one of our professionals to collect business requirement from client which will lay the foundation of our planning. This phase will charge you zero cost.",
            "Rough Layout Planning Phase": "We will be creating a rough layout from the requirement we have collected. This layout will be presented to client for correction if any. This phase will charge client 15% of the total project cost.",
            "Requirement Lock Phase": "Upon agreement from you, we will freeze the requirement and proceed with final layout planning. This phase will charge client 20% of the total project cost.",
            "Infrastructure Readiness": "Start of actual implementation of the layout planning. This phase involves infrastructure readiness. This phase will charge client 40%% of the total project cost.",
            "Project Completion and Handover": "This phase concludes the project with all the requirement implemented. Project completion sign-off will be taken from the client. This phase will charge client remaining 25% of the total project cost."
        }
    }
}];

export const gotoTopicon = "https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/icons%2Fup-icon.png?alt=media&token=80e4b213-0480-4543-a644-46562ca8d593"; 

let getProductEnquiryStaticContent = {
    heading: "Impressed? Let's get in touch",
    formNameLabel: "Your Name",
    formMailLabel: "Your Email",
    formContactLabel: "Your Contact",
    formSubmitButtonLabel: "Send Equiry"
};

let getInTouchFormStaticContent = {
    heading: 'Get In Touch With Us',
    nameField: 'Your Name',
    mailField: 'Your Mail Address',
    clientPhone: 'Phone',
    messageField: 'Additional Message',
    actionButton: 'Send Message',
    successMessage: 'We have received you request. Our executive will reach you shortly.',
    querySubmitSuccessIcon: 'https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/icons%2Fsucess-icon.svg?alt=media&token=1947907b-c6d2-4d5e-b8fa-88a022194ed7'
}

export { frameworkContent, navigationSection, footerSection, sliderComponent, CompanyFeaturesStaticContent, CompanyPresencesStaticContent, companyServicesStaticContent, pageBannerStaticContent, AboutPageStaticContent, ContactStaticContent, homeDesignPackages, equipmentPackagesData, companyProductsStaticContent, filterStaticContent, equipmentFilterContent, equipmentCategoryFilter, productDescriptionStaticContent, getProductEnquiryStaticContent, getInTouchFormStaticContent};