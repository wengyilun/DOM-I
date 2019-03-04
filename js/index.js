const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Get Navigation Items
let navList = document.querySelector('nav') // HTMLElement
let navData = siteContent["nav"] 
let navAnchors =  navList.children  // NodeList
let navItemNames = Object.values(navData)  // Get a value

for(let i=0; i<navItemNames.length-1; i++){
   navAnchors[i].textContent = navItemNames[i]
}
// Get cta data
let ctaElements = document.getElementsByClassName("cta");
let ctaTextElement =  document.querySelector('.cta-text')
 document.querySelector('#cta-img').src =  siteContent["cta"]["img-src"]
 document.querySelector('.cta-text h1').textContent = siteContent["cta"]["h1"]
 document.querySelector('.cta-text button').textContent = siteContent["cta"]["button"]


 // Get main-content
 // top-content
let mainElement = document.querySelector('.main-content')
let mainTopContentElement = document.querySelector('.top-content')
let textConentList = document.querySelectorAll('.main-content > .top-content > .text-content')
textConentList[0].children[0].textContent = siteContent["main-content"]["features-h4"]
textConentList[0].children[1].textContent = siteContent["main-content"]["features-content"]
textConentList[1].children[0].textContent = siteContent["main-content"]["about-h4"]
textConentList[1].children[1].textContent = siteContent["main-content"]["about-content"]

// main-content img
document.querySelector('.middle-img').src = siteContent["main-content"]["middle-img-src"]


 // bottom-content
 let mainBottomContentElement = document.querySelector('.bottom-content')
 let textConentListBottom = document.querySelectorAll('.main-content > .bottom-content > .text-content')
 textConentListBottom[0].children[0].textContent = siteContent["main-content"]["services-h4"]
 textConentListBottom[0].children[1].textContent = siteContent["main-content"]["services-content"]
 textConentListBottom[1].children[0].textContent = siteContent["main-content"]["product-h4"]
 textConentListBottom[1].children[1].textContent = siteContent["main-content"]["product-content"]
 textConentListBottom[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
 textConentListBottom[2].children[1].textContent = siteContent["main-content"]["vision-content"]

//Get contact
let contactElement = document.querySelector('.contact')
let contactChildren = contactElement.children
contactChildren[0].textContent = siteContent["contact"]["contact-h4"] 
contactChildren[1].textContent = siteContent["contact"]["address"] 
contactChildren[2].textContent = siteContent["contact"]["phone"] 
contactChildren[3].textContent = siteContent["contact"]["email"] 