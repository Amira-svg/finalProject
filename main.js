let email1=document.getElementById('email1');
let password1=document.getElementById('password1');
let validation1=[{
    email:"amira@gmail.com",password:12345
}]
let sbmt1=document.getElementById('sbmt1');
if(sbmt1)
{
sbmt1.onclick=function()
{
    validation1.forEach(i=>{
    if(email1.value==i.email&&password1.value==i.password)
    {
window.location.href="Home.html";
    }
    else{
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Data entered wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    }

    });
}
}
let products=[
    {name:"Samsung-Galaxy"
        ,price:JSON.stringify(5000),
        src:"https://miamicenters.com/wp-content/uploads/2025/05/SAMSUNG-A56-GRAPHTIE.png"
    },
    {
        name:"Oppo-Pro",
        price:JSON.stringify(10000),
        src:"https://www.oppo.com/content/dam/oppo/product-asset-library/a/a5-pro/green-brown/v1/assets/images-ksp-1-pc-1-90.jpg.webp"
    },
    {
        name:"Oppo A-5 Pro-Max",
        price:JSON.stringify(20000),
        src:"https://angkormeas.com/wp-content/uploads/2025/06/Oppo-A5X.jpg"
    },
    {
        name:"Smart Watch",
        price:JSON.stringify(29999.99),
        src:"https://tyrhino.com/wp-content/uploads/2023/02/Black.jpg"
    },
    {
        name:"Smart-pro-watch",
        price:JSON.stringify(49999.99),
        src:"https://m.media-amazon.com/images/I/61s734tDFyL._UF894,1000_QL80_.jpg"

    },
    {
        name:"earbuds x7 lite",
        price:JSON.stringify(999.999),
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2plbYeWUKGIB6xPbSU_yubU9s4J-8dfz2zg&s"
    },
    {
        name:"Honour-proMax",
        price:JSON.stringify(2999.999),
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnV_VF-ydMB83hgkQxdNXHpLJqBmuTo7z0w&s"
    },
    {
        name:"Apple-Waterwolf",
        price:JSON.stringify(1000000),
        src:"https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-ip15/pink/landscape-front.png"
    },{
        name:"Samsung-Galaxy",
        price:JSON.stringify(100000),
        src:"https://www.protectyourbubble.com/images/default-source/guides-images/2-silver-phone-in-water.jpg?Status=Master&sfvrsn=ec955c6c_1"
    }
]
 let items = JSON.parse(localStorage.getItem('items')) || [];
let cart=document.getElementById('cart');
let button=document.createElement("button");
button.style.backgroundColor="red";
button.style.color="white";
button.style.height="30px";
button.style.width="30px";
button.style.borderRadius="20px";
button.style.position="fixed";
button.style.right="4px";
button.style.top="36px";
button.innerText=items.length;

// cart.appendChild(button);

let txt=document.createElement('div');
txt.className="mydiv";
let body1 = document.getElementById('body1');

if (body1) {
    body1.appendChild(button);
}
let products1=JSON.parse(localStorage.getItem('products'))||[];

products1.forEach(item => {
  let div = document.createElement("div");

  let img = document.createElement('img');
  img.src = item.src;
  div.appendChild(img);

  let name = document.createElement('h2');
  name.innerText = item.name;
  div.appendChild(name);

  let price = document.createElement('h4');
  price.innerText = `${item.price}$`;
  div.appendChild(price);

  let btn = document.createElement('button');
  btn.innerText = "Add to cart";
  btn.onclick = function () {
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    button.innerText = items.length;
    console.log(items.length);
btn.className="mybtn1";    
  };
  div.appendChild(btn);

  let btn2 = document.createElement('button');
  btn2.innerText = "Remove";
  div.appendChild(btn2);
if(body1)
{
  body1.appendChild(div);

  body1.classList.add('row', 'p-4', 'justify-content-start');
  body1.style.margin = "10px 0";
  body1.style.background = "linear-gradient(to left,rgb(180, 255, 255),aliceblue,rgb(243, 176, 233))";

  img.classList.add('card-img-top', 'p-2');
  name.classList.add('text-center', 'p-3');
  price.classList.add('text-center', 'p-1');

  div.style.borderRadius = "10px";
  div.style.minHeight = "500px";
  div.classList.add('card', 'col-lg-3', 'm-2', 'p-2', 'd-flex', 'flex-column', 'justify-content-between', 'shadow');

  btn.style.cssText = "background-color:gray;color:white;border-radius:10px;padding:10px;margin:10px;";
  btn2.style.cssText = "background-color:gray;color:white;border-radius:10px;padding:10px;margin:10px;";
  btn2.className="mybtn2";
}
  btn2.onclick = function () {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        let indx = items.findIndex(i => i.name == item.name && i.src == item.src);
        if (indx != -1) {
          items.splice(indx, 1);
          localStorage.setItem('items', JSON.stringify(items));
        }
        button.innerText = items.length;

        button.onclick();

        Swal.fire({
          title: "Deleted!",
          text: "Your card has been deleted.",
          icon: "success",
        });
      }
    });
  };
});

button.onclick = function () {
  txt.innerHTML = "";
  let container = document.createElement("div");
  let mytotal = document.createElement("div");
  let totalprice = 0;

  let productdata = JSON.parse(localStorage.getItem("items") || "[]");

  productdata.forEach((i, index) => {
    let img2 = document.createElement("img");
    img2.src = i.src;
    img2.style.width = "90%";

    let titlename = document.createElement("h4");
    titlename.innerText = i.name;
    titlename.style.fontSize = "14px";

    let priceproduct = document.createElement("div");
    priceproduct.innerText = Number(i.price) + "$";
    priceproduct.style.fontSize = "10px";

    totalprice += Number(i.price);

    container.appendChild(img2);
    container.appendChild(titlename);
    container.appendChild(priceproduct);
  });

  mytotal.innerText = "Total: " + totalprice + "$";
  mytotal.style.fontSize="11px";
  container.appendChild(mytotal);

  txt.appendChild(container);
  let h22=document.getElementById('h22');
txt.style.position="absolute";
txt.style.right="20px";
txt.style.zIndex=9999;
txt.style.padding="10px";
txt.style.width="200px";
txt.style.top="50px";
  txt.style.backgroundColor = "rgb(225, 218, 218)";
  container.style.margin="10px"
  txt.style.borderRadius="10px";
  if(h22)
  {

  h22.appendChild(txt);
  
  }
  
};


if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify(products));
}

let sbmt2=document.getElementById('sbmt2');
if(sbmt2)
{
sbmt2.onclick=function(e){
let productname=document.getElementById('productname');
let name=productname.value;
let Price=document.getElementById('Price');
let price=Price.value;
let image=document.getElementById('image');
let src=image.value;
let products=JSON.parse(localStorage.getItem('products'))||[];
let newproduct={
    name:name,price:price,src:src,
    


};
products.push(newproduct);
localStorage.setItem('products',JSON.stringify(products));

}

}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: { 
    el: ".swiper-pagination", 
    clickable: true 
  },
  autoplay: {
    delay: 2000,  
    disableOnInteraction: false,
  },
  loop: true, 
});
