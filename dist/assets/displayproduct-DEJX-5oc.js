(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();function n(){const r=document.querySelector(".header__bars"),t=document.querySelector(".mobile__nav"),s=document.querySelectorAll(".mobile-nav__link");let i=!1;r.addEventListener("click",()=>{i=!i,i?(t.style.display="none",document.body.style.overflowY="auto"):(t.style.display="flex",document.body.style.overflowY="hidden")}),s.forEach(e=>{e.addEventListener("click",()=>{i=!1,t.style.display="none",document.body.style.overflowY="auto"})})}function l(){document.querySelectorAll(".sun-js").forEach(t=>{t.addEventListener("click",()=>{document.body.classList.toggle("light-mode")})})}const o=[{id:"1",image:"../../images/cake1.svg",name:"Blueberry Bliss Cupcake",priceCents:2090,flavor:"Blueberry",description:"Moist cupcake with tangy blueberry.",type:"cake"},{id:"2",image:"../../images/cake2.svg",name:"Cherry Delight Cake",priceCents:2490,flavor:"Cherry",description:"Delightful cherry cake with a burst of flavor.",type:"cake"},{id:"3",image:"../../images/cake3.svg",name:"Cake Roll with Jelly Fillings",priceCents:2950,flavor:"Jelly",description:"Rolled cake filled with delicious jelly.",type:"cake"},{id:"4",image:"../../images/cake4.svg",name:"Strawberry Chocolate Delight",priceCents:3180,flavor:"Strawberry",description:"Strawberry cake topped with rich chocolate.",type:"cake"},{id:"5",image:"../../images/cake5.svg",name:"Orange Butter Layered Cake",priceCents:2750,flavor:"Orange",description:"Cake layered with butter and orange syrup.",type:"cake"},{id:"6",image:"../../images/cake6.svg",name:"Berry Cookie Crunch",priceCents:2680,flavor:"Berry",description:"Cookie with a burst of berry flavor and crunch.",type:"cake"},{id:"7",image:"../../images/cake7.svg",name:"White Jelly Filling Cake",priceCents:3120,flavor:"Jelly",description:"Cake filled with smooth white jelly.",type:"cake"},{id:"8",image:"../../images/cake8.svg",name:"Crinkled Donut",priceCents:3360,flavor:"Donut",description:"Donut with delicious crinkles.",type:"cake"},{id:"9",image:"../../images/cake9.svg",name:"Jelly Ice Cream Gelatine",priceCents:2630,flavor:"Jelly",description:"Gelatine topped with creamy ice cream and jelly.",type:"cake"},{id:"10",image:"../../images/cake10.svg",name:"Chocolate Cookie Cake",priceCents:3190,flavor:"Chocolate",description:"Cake made of chocolate cookies.",type:"cake"},{id:"11",image:"../../images/cake11.svg",name:"Crunchy Chocolate Cake",priceCents:2800,flavor:"Chocolate",description:"Crunchy cake with rich chocolate topping.",type:"cake"},{id:"12",image:"../../images/cake12.svg",name:"Milk Cherry Cake",priceCents:3010,flavor:"Milk",description:"Milk flavored cake with cherry syrup.",type:"cake"},{id:"13",image:"../../images/candies/candy1.svg",name:"chocolate nips",priceCents:3010,flavor:"chocolate",description:"choco nips",type:"candies"},{id:"14",image:"../../images/candies/candy2.svg",name:"Peanut Butter Bliss",priceCents:2800,flavor:"peanut butter",description:"Indulge in the creamy goodness of peanut butter delight.",type:"candies"},{id:"15",image:"../../images/candies/candy3.svg",name:"Caramel Crunch",priceCents:3200,flavor:"caramel",description:"Satisfy your sweet tooth with this crunchy caramel treat.",type:"candies"},{id:"16",image:"../../images/candies/candy4.svg",name:"Berry Blast Bonanza",priceCents:2900,flavor:"berry",description:"Experience the explosion of fruity flavors with every bite.",type:"candies"},{id:"17",image:"../../images/candies/candy5.svg",name:"Lemon Drop Delight",priceCents:3100,flavor:"lemon",description:"Tangy and refreshing lemon candies to brighten your day.",type:"candies"},{id:"18",image:"../../images/candies/candy6.svg",name:"Minty Marvel",priceCents:2700,flavor:"mint",description:"Cool and refreshing mint candies to freshen your breath.",type:"candies"},{id:"19",image:"../../images/candies/candy7.svg",name:"Strawberry Dream",priceCents:3e3,flavor:"strawberry",description:"A delightful combination of sweet and tangy strawberry goodness.",type:"candies"},{id:"20",image:"../../images/candies/candy8.svg",name:"Butterscotch Bliss",priceCents:3300,flavor:"butterscotch",description:"Rich and creamy butterscotch candies for a truly indulgent treat.",type:"candies"},{id:"21",image:"../../images/candies/candy9.svg",name:"Fruity Fusion Frenzy",priceCents:3100,flavor:"mixed fruit",description:"An exciting blend of assorted fruit flavors to tantalize your taste buds.",type:"candies"},{id:"22",image:"../../images/candies/candy10.svg",name:"Fruity Fusion Frenzy",priceCents:2100,flavor:"mixed fruit",description:"An exciting blend of assorted fruit flavors to tantalize your taste buds.",type:"candies"},{id:"23",image:"../../../../../../images/candies/candy11.svg",name:"Fruity Fusion Frenzy",priceCents:2100,flavor:"mixed fruit",description:"An exciting blend of assorted fruit flavors to tantalize your taste buds.",type:"candies"},{id:"24",image:"../../images/customize/custom1.svg",name:"Fruity Fusion Frenzy",priceCents:3100,flavor:"mixed fruit",description:"An exciting blend of assorted fruit flavors to tantalize your taste buds.",type:"customize"},{id:"25",image:"../../images/customize/custom2.svg",name:"Berry Blast",priceCents:3200,flavor:"berry",description:"A burst of juicy berry flavors that will leave you craving for more.",type:"customize"},{id:"26",image:"../../images/customize/custom3.svg",name:"Tropical Tango",priceCents:3300,flavor:"tropical",description:"Escape to paradise with this tropical fruit medley.",type:"customize"},{id:"27",image:"../../images/customize/custom4.svg",name:"Citrus Sensation",priceCents:3100,flavor:"citrus",description:"Experience the zesty burst of citrus fruits in every bite.",type:"customize"},{id:"28",image:"../../images/customize/custom5.svg",name:"Creamy Coconut",priceCents:3400,flavor:"coconut",description:"Indulge in the creamy richness of tropical coconut flavor.",type:"customize"},{id:"29",image:"../../images/customize/custom6.svg",name:"Peach Paradise",priceCents:3200,flavor:"peach",description:"Delight in the sweet and succulent taste of ripe peaches.",type:"customize"},{id:"30",image:"../../images/customize/custom7.svg",name:"Mango Madness",priceCents:3300,flavor:"mango",description:"Satisfy your cravings with the tropical sweetness of mango.",type:"customize"},{id:"31",image:"../../images/customize/custom8.svg",name:"Pineapple Pleasure",priceCents:3100,flavor:"pineapple",description:"Transport yourself to a tropical island with the taste of fresh pineapple.",type:"customize"},{id:"32",image:"../../images/customize/custom9.svg",name:"Exotic Exhilaration",priceCents:3400,flavor:"exotic",description:"Embark on a flavor adventure with this exotic fruit combination.",type:"customize"}];function d(){let r="";function t(s){r="",o.filter(i=>i.type===s).forEach(i=>{r+=`
          <div class="menu__card">
            <div class="card__image-container">
              <img src="${i.image}" alt="" class="card__image" />
            </div>
            <div class="card__content">
              <h3 class="card__name">${i.name}</h3>
              <p class="card__price">${i.priceCents}</p>
              <p class="card__description">${i.description}</p>
              <a class="card__btn btn" href="#order__page" data-product-id="${i.id}">Add to cart</a>
            </div>
          </div>
        `}),document.querySelector(".menu__products-flex").innerHTML=r}document.querySelectorAll(".product__category-name").forEach(s=>{s.addEventListener("click",function(){document.querySelectorAll(".product__category-name").forEach(e=>{e.parentElement.classList.remove("categorist__btn-list-active")}),this.parentElement.classList.add("categorist__btn-list-active");const i=this.classList[1];t(i)})}),t("cake")}export{d,n as s,l as t};