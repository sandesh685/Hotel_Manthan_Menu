// export const menuData = [
//   {
//     id: 1,
//     name: 'Masala Dosa',
//     price: 120,
//     //description: 'Crispy dosa with spiced potato filling, served with chutney & sambar.',
//     category: 'South Indian',
//     imgUrl:
//       'https://images.unsplash.com/photo-1668236543096-8c298c2d0d2f?auto=format&fit=crop&w=1200&q=70',
//   },
//   {
//     id: 2,
//     name: 'Idli Sambar',
//     price: 80,
//    // description: 'Steamed idlis with hot sambar and coconut chutney.',
//     category: 'South Indian',
//     imgUrl:
//       'https://images.unsplash.com/photo-1683655073354-6f57c9714cbd?auto=format&fit=crop&w=1200&q=70',
//   },
//   {
//     id: 3,
//     name: 'Paneer Butter Masala',
//     price: 220,
//     //description: 'Creamy tomato gravy with soft paneer cubes, mildly sweet & rich.',
//     category: 'Main Course',
//     imgUrl:
//       'https://images.unsplash.com/photo-1701579231420-3b7e4f88e969?auto=format&fit=crop&w=1200&q=70',
//   },
//   {
//     id: 4,
//     name: 'Butter Naan',
//     price: 45,
//     //description: 'Soft, fluffy naan brushed with butter.',
//     category: 'Breads',
//     imgUrl:
//       'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&w=1200&q=70',
//   },
//   {
//     id: 5,
//     name: 'Veg Biryani',
//     price: 180,
//    // description: 'Aromatic basmati rice cooked with vegetables and biryani spices.',
//     category: 'Rice',
//     imgUrl:
//       'https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?auto=format&fit=crop&w=1200&q=70',
//   },
//   {
//     id: 6,
//     name: 'Hakka Noodles',
//     price: 160,
//    // description: 'Wok-tossed noodles with veggies, soy, and a hint of chilli.',
//     category: 'Chinese',
//     imgUrl:
//       'https://images.unsplash.com/photo-1604908176997-125f25cc500f?auto=format&fit=crop&w=1200&q=70',
//   }
// ]
export const menuData = [
  // ================= ROTI =================
  { id: 1, name: "Roti", price: 15, category: "Roti", imgUrl: "/images/menu/Roti.jpg" },
  { id: 2, name: "Butter Roti", price: 20, category: "Roti", imgUrl: "/images/menu/buttor Roti.jpg" },
  { id: 3, name: "Chapati", price: 20, category: "Roti", imgUrl: "/images/menu/Chapati.jpg" },
  { id: 4, name: "Butter Chapati", price: 25, category: "Roti", imgUrl: "/images/menu/Butter Chapati.jpg" },
  { id: 5, name: "Naan", price: 30, category: "Roti", imgUrl: "/images/menu/Naan.jpg" },
  { id: 6, name: "Butter Naan", price: 40, category: "Roti", imgUrl: "/images/menu/Butter Naan.jpg" },
  { id: 7, name: "Garlic Naan", price: 40, category: "Roti", imgUrl: "/images/menu/Garlic Naan.jpg" },
  { id: 8, name: "Garlic Butter Naan", price: 50, category: "Roti", imgUrl: "/images/menu/Garlic Butter Naan.jpg" },
  //{ id: 9, name: "Tandoori Roti", price: 20, category: "Roti", imgUrl: "" },
  //{ id: 10, name: "Butter Tandoori Roti", price: 25, category: "Roti", imgUrl: "" },
  { id: 9, name: "Lachha Paratha", price: 40, category: "Roti", imgUrl: "/images/menu/Lachha Paratha.jpg" },
  { id: 10, name: "Bhakri (Bajri)", price: 25, category: "Roti", imgUrl: "/images/menu/Bhakri (Bajri).jpg" },
  { id: 11, name: "Veg Paratha", price: 80, category: "Roti", imgUrl: "/images/menu/Veg Paratha.jpg" },
  { id: 12, name: "Paneer Paratha", price: 100, category: "Roti", imgUrl: "/images/menu/Paneer Paratha.jpg" },

  // ================= RICE =================
  { id: 13, name: "Steam Rice Half", price: 60, category: "Rice", imgUrl: "/images/menu/Steam Rice Half.jpg" },
  { id: 14, name: "Steam Rice Full", price: 110, category: "Rice", imgUrl: "/images/menu/Steam Rice Full.jpg" },
  { id: 15, name: "Indrayani Rice Half", price: 60, category: "Rice", imgUrl: "/images/menu/Indrayani Rice Half.jpg" },
  { id: 16, name: "Indrayani Rice Full", price: 110, category: "Rice", imgUrl: "/images/menu/Indrayani Rice Full.jpg" },
  { id: 17, name: "Jeera Rice Half", price: 70, category: "Rice", imgUrl: "/images/menu/Jeera Rice Half.jpg" },
  { id: 18, name: "Jeera Rice Full", price: 120, category: "Rice", imgUrl: "/images/menu/Jeera Rice Full.jpg" },
  { id: 19, name: "Dal Rice", price: 180, category: "Rice", imgUrl: "/images/menu/Dal Rice.jpg" },
  { id: 20, name: "Veg Pulao", price: 160, category: "Rice", imgUrl: "/images/menu/Veg Pulao.jpg" },
  { id: 21, name: "Paneer Pulao", price: 200, category: "Rice", imgUrl: "/images/menu/Paneer Pulao.jpg" },

  // ================= VEG MAIN =================
  { id: 22, name: "Mix Veg", price: 140, category: "Veg", imgUrl: "/images/menu/Mix Veg.jpg" },
  { id: 23, name: "Akkha Masoor", price: 120, category: "Veg", imgUrl: "/images/menu/Akkha Masoor.jpg" },
  { id: 24, name: "Veg Kolhapuri", price: 160, category: "Veg", imgUrl: "/images/menu/Veg Kolhapuri.jpg" },
  { id: 25, name: "Paneer Masala", price: 160, category: "Veg", imgUrl: "/images/menu/Paneer Masala.jpg" },
  { id: 26, name: "Kaju Masala", price: 180, category: "Veg", imgUrl: "/images/menu/Kaju Masala.jpg" },
  { id: 27, name: "Palak Paneer", price: 170, category: "Veg", imgUrl: "/images/menu/Palak Paneer.jpg" },
  { id: 28, name: "Lasooni Palak", price: 150, category: "Veg", imgUrl: "/images/menu/Lasooni Palak.jpg" },
  { id: 29, name: "Soyabean Masala", price: 140, category: "Veg", imgUrl: "/images/menu/Soyabean Masala.jpg" },
  { id: 30, name: "Shev Bhaji", price: 120, category: "Veg", imgUrl: "/images/menu/Sev Bhaji.jpg" },
  { id: 31, name: "Chana Masala", price: 120, category: "Veg", imgUrl: "/images/menu/Chana Masala.jpg" },
  { id: 32, name: "Shev Tamatar", price: 140, category: "Veg", imgUrl: "/images/menu/Sev Tamatar.jpg" },
  { id: 33, name: "Green Peas Masala", price: 140, category: "Veg", imgUrl: "/images/menu/Green Peas Masala.jpg" },
  { id: 34, name: "Besan", price: 130, category: "Veg", imgUrl: "/images/menu/Besan.jpg" },
  { id: 35, name: "Dal Fry", price: 100, category: "Veg", imgUrl: "/images/menu/Dal Fry.jpg" },
  { id: 36, name: "Dal Tadka", price: 120, category: "Veg", imgUrl: "/images/menu/Dal Tadka.jpg" },
  { id: 37, name: "Dal Kolhapuri", price: 140, category: "Veg", imgUrl: "/images/menu/Dal Kolhapuri.jpg" },

  // ================= PANEER SPECIAL =================
  { id: 38, name: "Paneer Pasanda", price: 200, category: "Paneer", imgUrl: "/images/menu/Paneer Pasanda.jpg" },
  { id: 39, name: "Veg Maratha", price: 180, category: "Veg", imgUrl: "/images/menu/Veg Maratha.jpg" },
  { id: 40, name: "Paneer Patiala", price: 220, category: "Paneer", imgUrl: "/images/menu/Paneer Patiala.jpg" },
  { id: 41, name: "Veg Manthan Special", price: 250, category: "Veg", imgUrl: "/images/menu/Veg Manthan Special.jpg" },
  { id: 42, name: "Veg Chilli Milli", price: 200, category: "Veg", imgUrl: "/images/menu/Veg Chilli Milli.jpg" },
  { id: 43, name: "Paneer Tikka Masala", price: 180, category: "Paneer", imgUrl: "/images/menu/Paneer Tikka Masala.jpg" },
  { id: 44, name: "Butter Paneer", price: 170, category: "Paneer", imgUrl: "/images/menu/Butter Paneer.jpg" },
  { id: 45, name: "Veg Kadhai", price: 180, category: "Veg", imgUrl: "/images/menu/Veg Kadhai.jpg" },

  // ================= STARTERS =================
  { id: 46, name: "Fry Papad", price: 25, category: "Veg Starter", imgUrl: "/images/menu/Fry Papad.jpg" },
  { id: 47, name: "Roast Papad", price: 20, category: "Veg Starter", imgUrl: "/images/menu/Roast Papad.jpg" },
  { id: 48, name: "Masala Papad", price: 40, category: "Veg Starter", imgUrl: "/images/menu/Masala Papad.jpg" },
  { id: 49, name: "Nachni Papad", price: 50, category: "Veg Starter", imgUrl: "/images/menu/Nachni Papad.jpg" },
  { id: 50, name: "Veg Manchurian", price: 200, category: "Veg Starter", imgUrl: "/images/menu/Veg Manchurian.jpg" },
  { id: 51, name: "Paneer Chilli", price: 220, category: "Veg Starter", imgUrl: "/images/menu/Paneer Chilli.jpg" },
  { id: 52, name: "Veg Crispy", price: 280, category: "Veg Starter", imgUrl: "/images/menu/Veg Crispy.jpg" },
  { id: 53, name: "Paneer Tikka Dry", price: 300, category: "Veg Starter", imgUrl: "/images/menu/Paneer Tikka Dry.jpg" },

    // ================= NON VEG STARTER =================
  { id: 54, name: "Chicken Manchow Soup", price: 160, category: "Non-Veg Starter", imgUrl: "/images/menu/Chicken Manchow Soup.jpg" },
  { id: 55, name: "Chicken Aalni Soup", price: 150, category: "Non-Veg Starter", imgUrl: "/images/menu/Chicken Aani Soup.jpg" },
  { id: 56, name: "Chicken Chilli (Full)", price: 280, category: "Non-Veg Starter", imgUrl: "/images/menu/Chicken Chilli (Full).jpg" },
  { id: 57, name: "Chicken Lollipop (Full)", price: 260, category: "Non-Veg Starter", imgUrl: "/images/menu/Chicken Lollipop (Full).jpg" },
  { id: 58, name: "Chicken 65", price: 280, category: "Non-Veg Starter", imgUrl: "/images/menu/Chicken 65.jpg" },
  { id: 59, name: "Chicken Crispy", price: 280, category: "Non-Veg Starter", imgUrl: "/images/menu/Chicken Crispy.jpg" },
  { id: 60, name: "Chicken Kolhapuri", price: 260, category: "Non-Veg Starter", imgUrl: "/images/menu/Chicken Kolhapuri.jpg" },
  { id: 61, name: "Mutton Ukhar", price: 250, category: "Non-Veg Starter", imgUrl: "/images/menu/Mutton Ukhar.jpg" },
  { id: 62, name: "Mutton Kharda Fry", price: 260, category: "Non-Veg Starter", imgUrl: "/images/menu/Mutton Fry.jpg" },
  { id: 63, name: "Fish Fry", price: 160, category: "Non-Veg Starter", imgUrl: "/images/menu/Fish Fry.jpg" },
  { id: 64, name: "Fish Tawa Fry", price: 200, category: "Non-Veg Starter", imgUrl: "/images/menu/Fish Tawa Fry.jpg" },
  { id: 65, name: "Soup Vati", price: 40, category: "Non-Veg Starter", imgUrl: "/images/menu/Soup Vati.jpg" },

  // ================= BIRYANI SPECIAL =================
  { id: 66, name: "Chicken Tandoor (Half)", price: 280, category: "Chicken", imgUrl: "/images/menu/Chicken Tandoor (Half).jpg" },
  { id: 67, name: "Chicken Tandoor (Full)", price: 450, category: "Chicken", imgUrl: "/images/menu/Chicken Tandoor (Full).jpg" },
  { id: 68, name: "Chicken Biryani Half", price: 150, category: "Biryani", imgUrl: "/images/menu/Chicken Biryani Half.jpg" },
  { id: 68, name: "Chicken Biryani Half", price: 150, category: "Biryani", imgUrl: "/images/menu/Chicken Biryani Half.jpg" },
  { id: 69, name: "Chicken Biryani Full", price: 240, category: "Biryani", imgUrl: "/images/menu/Chicken Biryani Full.jpg" },
  { id: 70, name: "Mutton Biryani Half", price: 200, category: "Biryani", imgUrl: "/images/menu/Mutton Biryani Half.jpg" },
  { id: 71, name: "Mutton Biryani Full", price: 350, category: "Biryani", imgUrl: "/images/menu/Mutton Biryani Full.jpg" },
  { id: 72, name: "Egg Biryani", price: 190, category: "Biryani", imgUrl: "/images/menu/Egg Biryani.jpg" },
  { id: 73, name: "Kaju Biryani", price: 200, category: "Biryani", imgUrl: "/images/menu/Kaju Biryani.jpg" },
  { id: 74, name: "Paneer Biryani", price: 230, category: "Biryani", imgUrl: "/images/menu/Paneer Biryani.jpg" },
  { id: 75, name: "Paneer Tikka Dum Biryani", price: 250, category: "Biryani", imgUrl: "/images/menu/Paneer Tikka Dum Biryani.jpg" },
  // Eggs
  { id: 76, name: "Boiled Egg", price: 30, category: "Egg", imgUrl: "/images/menu/Boiled Egg.jpg" },
  { id: 77, name: "Egg Fry", price: 50, category: "Egg", imgUrl: "/images/menu/Egg Fry.jpg" },
  { id: 78, name: "Egg Omelette", price: 90, category: "Egg", imgUrl: "/images/menu/Egg Omelette.jpg" },
  { id: 79, name: "Egg Bhurji", price: 90, category: "Egg", imgUrl: "/images/menu/Egg Bhurji.jpg" },
  { id: 80, name: "Egg Curry", price: 120, category: "Egg", imgUrl: "/images/menu/Egg Curry.jpg" },
  { id: 81, name: "Egg Masala", price: 150, category: "Egg", imgUrl: "/images/menu/Egg Masala.jpg" },

    // ================= KHEKDA SPECIAL =================
  { id: 82, name: "Khekda Special Thali", price: 430, category: "Seafood", imgUrl: "/images/menu/Khekda Special Thali.jpg" },
  { id: 83, name: "Fish Masala", price: 0, category: "Seafood", imgUrl: "/images/menu/Fish Masala.jpg" },
  { id: 84, name: "Sukat Fry Plate", price: 90, category: "Seafood", imgUrl: "/images/menu/Sukat Fry Plate.jpg" },
  { id: 85, name: "Khekda Fry", price: 250, category: "Seafood", imgUrl: "/images/menu/Khekda Fry.jpg" },
  { id: 86, name: "Khekda Masala", price: 300, category: "Seafood", imgUrl: "/images/menu/Khekda Masala.jpg" },

  // ================= CHICKEN =================
{ id: 87, name: "Chicken Curry", price: 170, category: "Chicken", imgUrl: "/images/menu/Chicken Curry.jpg" },
{ id: 88, name: "Chicken Fry", price: 180, category: "Chicken", imgUrl: "/images/menu/Chicken Fry.jpg" },
{ id: 89, name: "Chicken Kharda Fry", price: 200, category: "Chicken", imgUrl: "/images/menu/Chicken Kharda Fry.jpg" },
{ id: 90, name: "Chicken Masala", price: 200, category: "Chicken", imgUrl: "/images/menu/Chicken Masala.jpg" },
{ id: 91, name: "Chicken Handi Half", price: 320, category: "Chicken", imgUrl: "/images/menu/Chicken Handi.jpg" },
{ id: 92, name: "Chicken Handi Full", price: 580, category: "Chicken", imgUrl: "/images/menu/Chicken Handi.jpg" },
{ id: 93, name: "Chicken Malvani Handi Half", price: 340, category: "Chicken", imgUrl: "/images/menu/Chicken Malvani Handi.jpg" },
{ id: 94, name: "Chicken Malvani Handi Full", price: 650, category: "Chicken", imgUrl: "/images/menu/Chicken Malvani Handi.jpg" },
{ id: 95, name: "Murg Mussallam Half", price: 360, category: "Chicken", imgUrl: "/images/menu/Murg Mussallam.jpg" },
{ id: 96, name: "Murg Mussallam Full", price: 700, category: "Chicken", imgUrl: "/images/menu/Murg Mussallam.jpg" },
{ id: 97, name: "butter chicken Masala", price: 250, category: "Chicken", imgUrl: "/images/menu/butter chicken Masala.jpg" },
{ id: 98, name: "butter chicken Handi Half", price: 360, category: "Chicken", imgUrl: "/images/menu/butter chicken Handi.jpg" },
{ id: 99, name: "butter chicken Handi Full", price: 700, category: "Chicken", imgUrl: "/images/menu/butter chicken Handi.jpg" },

// ================= MUTTON =================
{ id: 100, name: "Mutton Curry", price: 250, category: "Mutton", imgUrl: "/images/menu/Mutton Curry.jpg" },
{ id: 101, name: "Mutton Fry", price: 250, category: "Mutton", imgUrl: "/images/menu/Mutton Fry.jpg" },
{ id: 102, name: "Mutton Kharda Fry", price: 280, category: "Mutton", imgUrl: "/images/menu/Mutton Kharda Fry.jpg" },
{ id: 103, name: "Mutton Masala", price: 250, category: "Mutton", imgUrl: "/images/menu/Mutton Masala.jpg" },
{ id: 104, name: "Mutton Handi Half", price: 500, category: "Mutton", imgUrl: "/images/menu/Mutton Handi.jpg" },
{ id: 105, name: "Mutton Handi Full", price: 950, category: "Mutton", imgUrl: "/images/menu/Mutton Handi.jpg" },
{ id: 106, name: "Mutton Malvani Handi Half", price: 500, category: "Mutton", imgUrl: "/images/menu/Mutton Malvani Handi.jpg" },
{ id: 107, name: "Mutton Malvani Handi Full", price: 950, category: "Mutton", imgUrl: "/images/menu/Mutton Malvani Handi.jpg" },

// ================= THALI =================
{ id: 108, name: "Chicken Thali", price: 200, category: "Thali", imgUrl: "/images/menu/Chicken Thali.jpg" },
{ id: 109, name: "Chicken Fry Thali", price: 320, category: "Thali", imgUrl: "/images/menu/Chicken Fry Thali.jpg" },
{ id: 110, name: "Manthan Spl Chicken Thali", price: 400, category: "Thali", imgUrl: "/images/menu/Manthan Spl Chicken Thali.jpg" },
{ id: 111, name: "Mutton Thali", price: 300, category: "Thali", imgUrl: "/images/menu/Mutton Thali.jpg" },
{ id: 112, name: "Mutton Fry Thali", price: 420, category: "Thali", imgUrl: "/images/menu/Mutton Fry Thali.jpg" },
{ id: 113, name: "Manthan Spl Mutton Thali", price: 480, category: "Thali", imgUrl: "/images/menu/Spl Mutton Thali.jpg" },
{ id: 114, name: "Pithal Bhakari Thali", price: 220, category: "Thali", imgUrl: "/images/menu/Pithal Bhakari Thali.jpg" },
{ id: 115, name: "Special Chilapi Thali", price: 280, category: "Thali", imgUrl: "/images/menu/Special Chilapi Thali.jpg" },
{ id: 116, name: "Egg Thali", price: 200, category: "Thali", imgUrl: "/images/menu/Egg Thali.jpg" },
{ id: 117, name: "Khekda Special Thali", price: 430, category: "Thali", imgUrl: "/images/menu/Khekda Special Thali.jpg" },
{ id: 118, name: "Special Veg Thali", price: 250, category: "Thali", imgUrl: "/images/menu/Special Veg Thali.jpg" },

// ================= UNLIMITED =================
{ id: 119, name: "Fish Thali Unlimited", price: 399, category: "Unlimited", imgUrl: "/images/menu/Fish Thali Unlimited.jpg" },
{ id: 120, name: "Chicken Thali Unlimited", price: 399, category: "Unlimited", imgUrl: "/images/menu/Chicken Thali Unlimited.jpg" },
{ id: 121, name: "Manthan Spl Chicken Jambo Thali", price: 1199, category: "Thali", imgUrl: "/images/menu/Manthan Spl Chicken Jambo Thali.jpg" }

];