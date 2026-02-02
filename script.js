const slidesData = [
    { img: "https://img.freepik.com/free-photo/happr-posing-pink-wall_197531-23653.jpg?semt=ais_hybrid&w=740&q=80", link: "women.html" },
    { img: "https://img.freepik.com/free-photo/portrait-young-handsome-bearded-man_1303-19639.jpg", link: "men.html" },
    { img: "https://media.istockphoto.com/id/863697778/photo/the-beautiful-little-girl-in-dress-standing-and-posing-over-white-background.jpg?s=612x612&w=0&k=20&c=5UkdZKDaYz0WBkjDFK0IEn4waIic66KfOlK1IQNeIcY=", link: "kid.html" }
];

const slides = document.getElementById("slides");

// STEP 1: Create slides
slidesData.forEach(item => createSlide(item));

// STEP 2: Clone first & last slide
const firstClone = slides.firstElementChild.cloneNode(true);
const lastClone = slides.lastElementChild.cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slides.firstElementChild);

// STEP 3: Start from real first slide
let index = 1;
slides.style.transform = `translateX(-100%)`;

function createSlide(item) {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
    <img src="${item.img}">
    <div class="slide-content">
      <a href="${item.link}">Shop Now</a>
    </div>
  `;
    slides.appendChild(slide);
}

// STEP 4: Infinite sliding logic
function autoSlide() {
    index++;
    slides.style.transition = "transform 0.8s ease-in-out";
    slides.style.transform = `translateX(-${index * 100}%)`;

    // when reaching clone
    if (index === slides.children.length - 1) {
        setTimeout(() => {
            slides.style.transition = "none";
            index = 1;
            slides.style.transform = `translateX(-100%)`;
        }, 800);
    }
}

setInterval(autoSlide, 3000);


// Card for home page
const products = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohVw3hwdSnUrzsr971NbefkY0X5OiH99jpA&s", name: "Womens", link: "women.html" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMchrqMEmEEcmAGd9lfGXBGDJUoToOrjchA&s", name: "Mens", link: "men.html" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61ysibJ6xiqEckSgfVtL6IhwmzCsAdm8VJQ&s", name: "Kids", link: "kid.html" }
];
const cards = document.getElementById("cards");

products.forEach(itemm => {
    cards.innerHTML += `
        <div class ="card">
            <img src = "${itemm.img}">
                <div class = "card-body">
                    <h3>${itemm.name}</h3>
                            <a href="${itemm.link}"><button>Show More</button></a>
                </div>
        </div>
    `;
});

const cardContainer = document.getElementById("upper-card");

    const upCard = [
    { img: "https://img.freepik.com/free-photo/portrait-photorealistic-female-cowboy-sunset_23-2151469198.jpg?semt=ais_hybrid&w=740&q=80", name: "Women", page: "women.html" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPv-s8nEX00ihQn1L4SC35dV1YqCs3Hhf4IA&s", name: "Men's", page: "men.html" },
    { img: "https://img.freepik.com/free-photo/portrait-young-boy_23-2150773104.jpg?semt=ais_hybrid&w=740&q=80", name: "Kid", page: "kid.html" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0l2x5Kjv3OyakXnr7FWuhULX_xjgWI4n6g&s", name: "Winter Edit", page: "winter.html" },
    { img: "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176694.jpg?semt=ais_hybrid&w=740&q=80", name: "GenZ Store", page: "genz.html" }
];


upCard.forEach(items => {
  cardContainer.innerHTML += `
    <div class="category">
      <a href="${items.page}" style="text-decoration: none; color: inherit;">
        <div class="cards">
          <img src="${items.img}" alt="">
        </div>
        <p>${items.name}</p>
      </a>
    </div>
  `;
});


function addToWishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push(products[index]);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  document.getElementById("wishlistCount").textContent = wishlist.length;
  alert("Added to Wishlist ❤️");
}

// STEP 4: Cart function
function addToCart(index) {
  
document.getElementById("cartCount").textContent = newCount;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("cartCount").textContent = cart.length;
  alert("Added to Cart 🛒");
}

// STEP 0.5: Update counters on page load
document.getElementById("cartCount").textContent = JSON.parse(localStorage.getItem("cart"))?.length || 0;
document.getElementById("wishlistCount").textContent = JSON.parse(localStorage.getItem("wishlist"))?.length || 0;

