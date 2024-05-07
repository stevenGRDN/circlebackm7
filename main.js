// document.addEventListener('DOMContentLoaded', function() {
//   var body = document.documentElement || document.body;

//   document.addEventListener('scroll', function() {
//       // "Disable" the horizontal scroll.
//       if (body.scrollLeft !== 0) {
//           body.scrollLeft = 0;
//       }
//   });
// });

// var body = document.documentElement || document.body;

// document.addEventListener('scroll', function() {
//     // "Disable" the horizontal scroll.
//     if (body.scrollLeft !== 0) {
//         body.scrollLeft = 0;
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var body = document.documentElement || document.body;

//   body.addEventListener('scroll', function(event) {
//       // Prevent the default horizontal scroll behavior
//       event.preventDefault();

//       // You can also set scrollLeft to 0 to make sure it stays at the top horizontally
//       body.scrollLeft = 0;
//   });
// });

let spBG = document.querySelector('.sp-bg');

// ---- Adding scene 1 imgs -----

for(let i=1;i <= 40; i++){
  if(i < 10) spBG.innerHTML += `<img fetchpriority="high" class="sc-1-img0${i} sc-1-img s1-img" src="scene1/img-min/v1000${i}.png" alt="">`
  if(i > 9) spBG.innerHTML += `<img fetchpriority="high" class="sc-1-img${i} sc-1-img s1-img" src="scene1/img-min/v100${i}.png" alt="">`
}

let loadingDiv = document.querySelector('.loading');
let allIMG = document.querySelectorAll('.s1-img');


let imgSC1Counter = 0;
allIMG.forEach(img =>{
  img.addEventListener('load', ()=>{
    imgSC1Counter++;
    console.log(imgSC1Counter);
    if(imgSC1Counter >= 44){
      loadingDiv.style.opacity = '0';
    }
  })
})

let stylesheet = document.querySelector('style');
console.log(stylesheet);

let cbSVG = document.querySelector('.cBackSVG');
let cbCar = document.querySelector('.CB-Car');
let cbBack = document.querySelector('.CB-Back');
let cbCircle = document.querySelector('.CB-Circle');
let anArray = [cbCar];

translateElem(10, cbCar, 5, 'CB1', 50);
translateElem(10, cbBack, 3, 'CB2', 50);
translateElem(10, cbCircle, 3, 'CB3', 50);

function translateElem(positionsAmo, elem, rangeVal, animName, duration){
  let percentage = 100 / positionsAmo;
  let defaultVal;
  stylesheet.innerHTML += `@keyframes ${animName}{\n`;
  for(let i = 0; i < positionsAmo; i++){
    console.log(i);
    if(i==0) {
      defaultVal = `${Math.floor(Math.random() * rangeVal) - (rangeVal / 2)}% ${Math.floor(Math.random() * rangeVal) - (rangeVal / 2)}%`
      stylesheet.innerHTML += `${(i * percentage)}%{translate: ${defaultVal}}\n`
      elem.style.translate = defaultVal;
    }
    else{
      stylesheet.innerHTML += `${(i * percentage)}%{translate: ${Math.floor(Math.random() * rangeVal) - (rangeVal / 2)}% ${Math.floor(Math.random() * rangeVal) - (rangeVal / 2)}%}\n`
    }
  }
  stylesheet.innerHTML += `100%{translate: ${defaultVal}}\n}\n`;
  elem.style.animation = `${animName} ${duration}s cubic-bezier(0.2, 0, 0.1, 1) 0.5s infinite forwards`;
}

let scrollTopVal;
let sc1IMG1 = document.querySelector('.sp-img-1');
let sc1IMG2 = document.querySelector('.sp-img-2');
let sc1IMG3 = document.querySelector('.sp-img-3');
let sc1IMG4 = document.querySelector('.sp-img-4');
let sc1IMG5 = document.querySelector('.sc-1-img00');
let sc1IMGs = document.querySelectorAll('.s1-img');
let wrapper = document.querySelector('.wrapper');
let randomHeight = document.querySelector('.random-height');
let overlaySC1 = document.querySelector('.overlay-sc1');
let allSC1IMGs = [...document.querySelectorAll('.sc-1-img')];

// wrapper.addEventListener('scroll', ()=>{
//   // console.log((document.documentElement.clientHeight + document.documentElement.scrollTop) / document.documentElement.clientHeight);
//   // console.log('bruh');
//   scrollTopVal = (document.documentElement.clientHeight + wrapper.scrollTop) / document.documentElement.clientHeight;
//   // console.log((scrollTopVal - 1.85) / 0.15);
//   if(scrollTopVal > 1.85 && scrollTopVal < 2.01) spBG.style.opacity = ((scrollTopVal - 1.86) / 0.14);
//   if(scrollTopVal > 2) spBG.style.opacity = 1;
//   if(scrollTopVal < 1.85) spBG.style.opacity = 0;

// })

document.addEventListener('scroll', ()=>{
  // console.log((document.documentElement.clientHeight + document.documentElement.scrollTop) / document.documentElement.clientHeight);
  // console.log('bruh');
  scrollTopVal = (document.documentElement.clientHeight + document.documentElement.scrollTop) / document.documentElement.clientHeight;
  
  // console.log(document.documentElement.scrollHeight);
  // console.log(document.documentElement.offsetHeight);
  // console.log(document.documentElement.scrollHeight / document.documentElement.offsetHeight);
  // It's actually better we set it, cause we obviously will change the height of the document as we add more pages
  // So it is 3.35 actually


  // console.log((scrollTopVal - 1.85) / 0.15);
  if(scrollTopVal > 1.85 && scrollTopVal < 2.01) spBG.style.opacity = ((scrollTopVal - 1.86) / 0.14);
  if(scrollTopVal < 2) cbSVG.style.display = 'block';
  if(scrollTopVal > 2) {spBG.style.opacity = 1; cbSVG.style.display = 'none';};
  if(scrollTopVal < 1.85) spBG.style.opacity = 0;

  console.log(scrollTopVal);
  if(scrollTopVal < 3.35){
    sc1IMG1.style.translate = `0 ${(3.35 - scrollTopVal) * 1}vh`;
    sc1IMG2.style.translate = `0 ${(3.35 - scrollTopVal) * 15}vh`;
    sc1IMG3.style.translate = `0 ${(3.35 - scrollTopVal) * 60}vh`;
    sc1IMG4.style.translate = `0 ${(3.35 - scrollTopVal) * 62}vh`;
    sc1IMG5.style.translate = `0 ${(3.35 - scrollTopVal) * 68}vh`;
  }

  if(scrollTopVal < 3.35){
    randomHeight.style.display = 'none';
    spBG.style.inset = '0';
    spBG.style.bottom = 'none';
    spBG.style.position = 'relative';
  }

  if(scrollTopVal >= 3.35) sc1IMGs.forEach(img => img.style.translate = '0 0');

  if(scrollTopVal >= 3.35){
    randomHeight.style.display = 'block';
    spBG.style.inset = 'auto';
    spBG.style.bottom = '0';
    spBG.style.position = 'fixed';
  }

  if(scrollTopVal < 3.5 && scrollTopVal > 2.5) {
    allSC1IMGs.forEach(img => img.style.visibility = 'hidden');
    document.querySelector('.sc-1-img00').style.visibility = 'visible';
  }

  // I think there should be a gap from vertical to horizontal scroll

  if(scrollTopVal > 3.5 && scrollTopVal < 6){
    // console.log(Math.trunc((scrollTopVal - 3.35)*20)+1); // we want a frame per 5vh scroll so *20 actually works perfectly
    allSC1IMGs.forEach(img => img.style.visibility = 'hidden');
    let imgVal = Math.trunc((scrollTopVal - 3.5)*20);
    if(imgVal > 40) imgVal = 40;
    allSC1IMGs[imgVal].style.visibility = 'visible';

    // 2 is (5.35 - 3.35 - the difference between the scroll, * 25 so we get to 50%)
    // console.log((2 - (5.35 - scrollTopVal)) * 25);
    sc1IMG2.style.translate = `${(2 - (5.5 - scrollTopVal)) * 5}% 0`;
    sc1IMG3.style.translate = `${(2 - (5.5 - scrollTopVal)) * 24}% 0`;
    sc1IMG4.style.translate = `${(2 - (5.5 - scrollTopVal)) * 25}% 0`;
  }
  
  if(scrollTopVal > 5.3 && scrollTopVal < 5.8){
    // console.log((0.1 - (5.5 - scrollTopVal)) * 10);
    overlaySC1.style.opacity = `${(0.1 - (5.5 - scrollTopVal)) * 10}`;
  }
  else if(scrollTopVal < 5.3){
    overlaySC1.style.opacity = `0`;
  }

  if(scrollTopVal > 5.8){
    // overlaySC1.style.transition = 'opacity 0.3s ease';
    // overlaySC1.style.opacity = '0';
    // setTimeout(() => {
    //   overlaySC1.style.position = 'relative';
    // }, 500);
    randomHeight.style.display = 'none';
    spBG.style.inset = '0';
    spBG.style.bottom = 'none';
    spBG.style.position = 'relative';
  }
  else if(scrollTopVal < 5.8 && scrollTopVal > 3.5){
    // overlaySC1.style.transition = 'opacity 0.1s ease';
    // overlaySC1.style.transition = 'none';
    randomHeight.style.display = 'block';
    spBG.style.inset = 'auto';
    spBG.style.bottom = '0';
    spBG.style.position = 'fixed';
    overlaySC1.style.position = 'fixed';
  }

  // ------------------------------------------------------------------
  //                       - First Transition -
  // ------------------------------------------------------------------

  // To automate everything easily
  // Make an array of arrays.
  // The arrays will have the values like :scrollAbove element attribute attributeSelect(ifneeded) newValue
  // So it will basically be something like: 5.8      spBG    style     opacity                   0
  // Or it will basically be something like: 5.3      spBG    innerHTML                           'newText'
  // Now since all of these will be in an array we can sellect it and do something like
  // if(scrollTop < array[2][1] && scrollTop > array[1][1]){ etc.}
  // after that we need a for loop for the amount of values in array and so we can use i+1 i-1 and then
  // we probably have to add it to the innerHTML of the <script> from HTML, cause otherwise idk how we'd do it automatically
  
})
