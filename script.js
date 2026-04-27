// Menu Data Array (Updated — All Images from Web)
const menuItems = [
    // BREAKFAST
    { id: 1, name: "Masala Dosa", category: "Breakfast", price: 70, image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg" },
    { id: 2, name: "Plain Dosa", category: "Breakfast", price: 50, image: "https://images.unsplash.com/photo-1743517894265-c86ab035adef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhaW4lMjBkb3NhfGVufDB8fDB8fHwwg" },
    { id: 3, name: "Onion Dosa", category: "Breakfast", price: 60, image: "https://images.unsplash.com/photo-1743615467204-8fdaa85ff2db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25pb24lMjBkb3NhfGVufDB8fDB8fHwwg" },
    { id: 4, name: "Ghee Roast Dosa", category: "Breakfast", price: 80, image: "https://images.unsplash.com/photo-1643268972535-a2b100ff3632?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2hlZSUyMHJvYXN0fGVufDB8fDB8fHwwg" },
    { id: 5, name: "Idli Sambar", category: "Breakfast", price: 40, image: "https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/08/3297.jpg" },
    { id: 6, name: "Rava Idli", category: "Breakfast", price: 50, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF2YSUyMGlkbGl8ZW58MHx8MHx8fDA%3D" },
    { id: 7, name: "Medu Vada", category: "Breakfast", price: 30, image: "https://bonmasala.com/wp-content/uploads/2022/12/medu-vada-recipe.webp" },
    { id: 8, name: "Pongal", category: "Breakfast", price: 60, image: "https://media.istockphoto.com/id/678434780/photo/ven-pongal-traditional-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=qglWwS5-kOHxxQEWOoYp0MObkhgNeVxDoMrXxZiF_3Y=" },
    { id: 9, name: "Upma", category: "Breakfast", price: 50, image: "https://media.istockphoto.com/id/1488737992/photo/upma-recipe-suji-ka-upma-rava-upma-with-red-and-coconut-chutney.webp?a=1&b=1&s=612x612&w=0&k=20&c=1zjO85hiNAi55VhDbcISJjm2291mEw_pszwU1QuJKzs=" },
    { id: 10, name: "Puri Bhaji", category: "Breakfast", price: 70, image: "https://media.istockphoto.com/id/183324460/photo/thali-traditional-rajastani-meal.webp?a=1&b=1&s=612x612&w=0&k=20&c=s9Hg-zM4nCimleNUpAeSq3M05--bPpjCSdKSFawZuV0=" },
    { id: 11, name: "Pesarattu", category: "Breakfast", price: 60, image: "https://media.istockphoto.com/id/2242464910/photo/pesarattu-combo-tray.webp?a=1&b=1&s=612x612&w=0&k=20&c=LhSy08JcGPLQbtJeUxxBjtET8LeNiLoiMYlr-rY_txM=" },
    { id: 12, name: "Set Dosa", category: "Breakfast", price: 65, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2V0JTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 13, name: "Mysore Bonda", category: "Breakfast", price: 50, image: "https://media.istockphoto.com/id/1282000923/photo/fresh-and-tasty-mysore-bonda-in-a-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=cxL9bky2LiVsHtelWlJSs3nWvjag_IF_jnKCivkhsVM=" },
    { id: 14, name: "Uttapam", category: "Breakfast", price: 70, image: "https://images.unsplash.com/photo-1683533746199-9e3920bf3eab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXR0YXBhbXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 15, name: "Tomato Bath", category: "Breakfast", price: 60, image: "https://images.unsplash.com/photo-1642102903911-5d4ae2475af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvbWF0byUyMGJhdGh8ZW58MHx8MHx8fDA%3D" },
    { id: 16, name: "Kesari Bath", category: "Breakfast", price: 50, image: "https://media.istockphoto.com/id/481467646/photo/kesari-bath-indian-sweet-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=YJUvqh17NLa_B1AEQZGLzEf4BMfmI61e-vqZ2nE0K0U=" },
    { id: 17, name: "Bread Omelette", category: "Breakfast", price: 40, image: "https://plus.unsplash.com/premium_photo-1694630656689-13d76af27fbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tYmluZWQlMjBicmVhZCUyMG9tZWxldHRlfGVufDB8fDB8fHww" },
    { id: 18, name: "Egg Dosa", category: "Breakfast", price: 80, image: "https://media.istockphoto.com/id/1152229281/photo/egg-dosa-anda-dosa.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ath3mcyzGytRdOfVW_DaGTvWsu1UQpBdtTRSMRrDO1E=" },
    { id: 19, name: "Mini Tiffin", category: "Breakfast", price: 90, image: "https://media.istockphoto.com/id/2194546798/photo/south-indian-triangle-dosa.webp?a=1&b=1&s=612x612&w=0&k=20&c=t0PczNFunECDFEVvAdZpmR-wns6j3noL9xbOk20I6HI=" },
    { id: 20, name: "Butter Dosa", category: "Breakfast", price: 90, image: "https://media.istockphoto.com/id/1306083166/photo/masala-sin.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qh2VmSGhreqrkQVYk-6G02oaeNmRXYPYOdnAivHLLCM=" },

    // LUNCH
    { id: 21, name: "Veg Meals", category: "Lunch", price: 120, image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwbWVhbHN8ZW58MHx8MHx8fDA%3D" },
    { id: 22, name: "Chicken Biryani", category: "Lunch", price: 180, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&w=800" },
    { id: 23, name: "Mutton Biryani", category: "Lunch", price: 220, image: "https://images.unsplash.com/photo-1696950169729-228abf39fbaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11dHRvbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D" },
    { id: 24, name: "Prawn Biryani", category: "Lunch", price: 250, image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg" },
    { id: 25, name: "Fish Curry Meals", category: "Lunch", price: 180, image: "https://images.unsplash.com/photo-1654863404432-cac67587e25d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaCUyMGN1cnJ5JTIwbWVhbHN8ZW58MHx8MHx8fDA%3Dg" },
    { id: 26, name: "Curd Rice", category: "Lunch", price: 60, image: "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VyZCUyMHJpY2V8ZW58MHx8MHx8fDA%3D" },
    { id: 27, name: "Sambar Rice", category: "Lunch", price: 70, image: "https://media.istockphoto.com/id/1255854695/photo/sambhar-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=GhHBZqHYYR2gkmdJGp9mDylNTqsdJlO2tZhSTIwofQ8=" },
    { id: 28, name: "Lemon Rice", category: "Lunch", price: 70, image: "https://images.unsplash.com/photo-1733414717545-1d7031befbcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlbW9uJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 29, name: "Pulihora", category: "Lunch", price: 60, image: "https://media.istockphoto.com/id/902200214/photo/indian-street-food-puli-hora-or-pulihodarai.webp?a=1&b=1&s=612x612&w=0&k=20&c=nD3gVspF8dn2KHJ4WLOXbyGa0NRSi-2lXEVsyRKNZG4=" },
    { id: 30, name: "Fried Rice", category: "Lunch", price: 120, image: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww" },
    { id: 31, name: "Jeera Rice", category: "Lunch", price: 100, image: "https://media.istockphoto.com/id/1205482227/photo/indian-traditional-dal-fry-and-jeera-rice-also-known-as-dal-chawal-cooked-lentils-served-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=2tI4k1UE92zo6VF0eEf8sjf1ALUZHOYD-T501A3gDIQ=" },
    { id: 32, name: "Paneer Curry", category: "Lunch", price: 150, image: "https://images.unsplash.com/photo-1642821369314-100fece91d3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhbmVlciUyMGN1cnJ5fGVufDB8fDB8fHww" },
    { id: 33, name: "Dal Tadka", category: "Lunch", price: 120, image: "https://images.unsplash.com/photo-1680359874318-efc78dbaa7f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhbCUyMHRhZGthfGVufDB8fDB8fHww" },
    { id: 34, name: "Rajma Rice", category: "Lunch", price: 130, image: "https://media.istockphoto.com/id/1451840010/photo/rajma-chawal-an-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=iWMQnMdGLwT5sG2cVei3PvimdbLlEW6XORtFcCsZvCg=" },
    { id: 35, name: "Veg Biryani", category: "Lunch", price: 140, image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 36, name: "Egg Curry", category: "Lunch", price: 130, image: "https://images.unsplash.com/photo-1764315197254-94385571df22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWdnJTIwY3VycnklMjByaWNlfGVufDB8fDB8fHww" },
    { id: 37, name: "Chicken Curry", category: "Lunch", price: 160, image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 38, name: "Fish Fry", category: "Lunch", price: 200, image: "https://media.istockphoto.com/id/1264331055/photo/image-of-metal-tongs-turning-crispy-fried-fish-in-a-frying-pan-on-hotplate-goan-fish-curry.webp?a=1&b=1&s=612x612&w=0&k=20&c=qZ5EHXZD48CGVzLdVj1vMP3IdUeJa553WmQszKdJn7s=" },
    { id: 39, name: "Chapati + Curry", category: "Lunch", price: 90, image: "https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcGF0aSUyMHdpdGglMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3Dg" },
    { id: 40, name: "South Indian Thali", category: "Lunch", price: 150, image: "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291dGglMjBpbmRpYW4lMjB0aGFsaXxlbnwwfHwwfHx8MA%3D%3D" },

    // STARTERS
    { id: 41, name: "Chicken 65", category: "Starters", price: 150, image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&w=800" },
    { id: 42, name: "Chilli Chicken", category: "Starters", price: 170, image: "https://images.unsplash.com/photo-1710508774177-7ac2f3492675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaWxsaSUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D" },
    { id: 43, name: "Paneer 65", category: "Starters", price: 140, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/paneer-65.jpg" },
    { id: 44, name: "Gobi Manchurian", category: "Starters", price: 130, image: "https://media.istockphoto.com/id/1334115358/photo/cabbage-manchurian.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Cc0h0HIZgyKq3qEMX5v1DjDYrHAqTnOqHWc0l-M33I=" },
    { id: 45, name: "Veg Spring Rolls", category: "Starters", price: 120, image: "https://images.unsplash.com/photo-1720786913573-a4006333d2c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZlZyUyMHNwcmluZyUyMHJvbGxzfGVufDB8fDB8fHww" },

    // DINNER
    { id: 46, name: "Malabar Parotta", category: "Dinner", price: 45, image: "https://images.news18.com/ibnlive/uploads/2022/06/malabar-paratha.jpg" },
    { id: 47, name: "Butter Naan", category: "Dinner", price: 40, image: "https://media.istockphoto.com/id/1251069947/photo/homemade-butter-naan-isolated-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=jfher3PMYgjk8LRRiUS0oqmtxhtpFv3bGtf72ocHxc0=" },
    { id: 48, name: "Garlic Naan", category: "Dinner", price: 50, image: "https://plus.unsplash.com/premium_photo-1700064757499-c4ff9b488b35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FybGljJTIwbmFhbnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 49, name: "Chapati", category: "Dinner", price: 30, image: "https://images.unsplash.com/photo-1600935926387-12d9b03066f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcGF0aXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 50, name: "Veg Korma", category: "Dinner", price: 120, image: "https://plus.unsplash.com/premium_photo-1713088501718-85c529d1849e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnJTIwa29ybWF8ZW58MHx8MHx8fDA%3D" },

    // DESSERTS
    { id: 51, name: "Payasam", category: "Desserts", price: 60, image: "https://thumbs.dreamstime.com/z/mithai-payasam-kerala-india-sweet-confectionery-main-dish-onam-vishu-festivals-70660223.jpg" },
    { id: 52, name: "Gulab Jamun", category: "Desserts", price: 50, image: "https://media.istockphoto.com/id/2177992427/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=IREPeN0lqAhR-lPo5bF8lSnXK8ymaiCDfdivdc2BjJQ=" },
    { id: 53, name: "Rasgulla", category: "Desserts", price: 50, image: "https://media.istockphoto.com/id/1044080542/photo/indian-rasgulla-or-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=DIQag-19lJnJ1PX5T2ppu2fc3hH0Pg83j2-9A-YPeSo=" },
    { id: 54, name: "Ice Cream", category: "Desserts", price: 40, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&w=800" },

    // DRINKS
    { id: 55, name: "Filter Coffee", category: "Drinks", price: 30, image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&w=800" },
    { id: 56, name: "Tea", category: "Drinks", price: 20, image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhfGVufDB8fDB8fHww" },
    { id: 57, name: "Lassi", category: "Drinks", price: 40, image: "https://media.istockphoto.com/id/2214375556/photo/lassi-in-clay-cup-topped-with-dry-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=OsxAg9ZKpsQI-lc4bcmujNQb6kQCPVUun4e_aHeEUMY=" },
    { id: 58, name: "Buttermilk", category: "Drinks", price: 30, image: "https://images.unsplash.com/photo-1630409346699-79481a79db52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwbWlsa3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 59, name: "Fresh Lime Soda", category: "Drinks", price: 35, image: "https://images.unsplash.com/photo-1613478223460-f448a4de829d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZXNoJTIwbGltZSUyMHNvZGF8ZW58MHx8MHx8fDA%3D" }
];

// (Rest of your code stays exactly the same)


// Cart State
let cart = {};

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function renderMenu(filteredItems = menuItems) {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    filteredItems.forEach(item => {
        const qty = cart[item.id] || 0;
        
        const card = document.createElement('div');
        card.className = 'menu-card fade-in';
        card.innerHTML = `
            <img src="${item.image || 'https://via.placeholder.com/150'}" alt="${item.name}">
            <div class="menu-info">
                <span class="category-badge">${item.category}</span>
                <h3>${item.name}</h3>
                <p class="price">₹${item.price}</p>
                <div class="cart-controls">
                    <button class="qty-btn" onclick="updateCart(${item.id}, -1)">-</button>
                    <span id="qty-${item.id}"><b>${qty}</b></span>
                    <button class="qty-btn" onclick="updateCart(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
        menuContainer.appendChild(card);
    });
}
function searchMenu() {
    const input = document.getElementById('searchInput').value.toLowerCase();

    const filtered = menuItems.filter(item =>
        item.name.toLowerCase().includes(input) ||
        item.category.toLowerCase().includes(input)
    );

    renderMenu(filtered);
}// Filter menu items by search input
function filterMenu() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchTerm));
    displayMenu(filteredItems); // Call the same function that renders menu items
}

// Example of displayMenu function (you probably already have similar code)
function displayMenu(items) {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    if(items.length === 0) {
        container.innerHTML = '<p class="no-results">No dishes found.</p>';
        return;
    }

    items.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        menuCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button class="btn primary-btn" onclick="addToCart(${item.id})"><i class="fas fa-cart-plus"></i> Add</button>
        `;
        container.appendChild(menuCard);
    });
}

// Initial render
displayMenu(menuItems);

// Update Cart Quantities
function updateCart(itemId, change) {
    if (!cart[itemId]) cart[itemId] = 0;
    
    cart[itemId] += change;
    
    if (cart[itemId] < 0) {
        cart[itemId] = 0;
    }
    
    document.getElementById(`qty-${itemId}`).innerHTML = `<b>${cart[itemId]}</b>`;
    renderBilling();
}

// Render Billing Section
function renderBilling() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    
    cartItemsList.innerHTML = '';
    let total = 0;
    let hasItems = false;

    const GST_RATE = 0.05; // ✅ 5% GST

    menuItems.forEach(item => {
        if (cart[item.id] > 0) {
            hasItems = true;
            const li = document.createElement('li');
            li.className = 'cart-item';
            
            const basePrice = item.price * cart[item.id];
            const gstAmount = basePrice * GST_RATE;
            const itemTotal = basePrice + gstAmount;

            total += itemTotal;
            
            li.innerHTML = `
                <span>
                    ${item.name} (x${cart[item.id]})<br>
                    <small>GST: ₹${gstAmount.toFixed(2)}</small>
                </span>
                <span>₹${itemTotal.toFixed(2)}</span>
            `;
            cartItemsList.appendChild(li);
        }
    });

    if (!hasItems) {
        cartItemsList.innerHTML = '<li class="empty-cart">Your cart is currently empty.</li>';
    }

    totalPriceEl.innerText = total.toFixed(2);
}
// Checkout Button Action
function checkout() {
    const total = document.getElementById('total-price').innerText;
    if (total == 0) {
        alert("Please add some delicious items to your cart first!");
    } else {
        alert(`Thank you for your order!\nYour total is ₹${total}.\nYour South Indian feast will be ready soon!`);
        cart = {};
        renderMenu();
        renderBilling();
    }
}

// Initialize Page
window.onload = () => {
    renderMenu();
    renderBilling();
};