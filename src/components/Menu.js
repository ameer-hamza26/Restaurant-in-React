

const menuData = {
    breakfast: [
      { id: 1, name: "Pancakes", img: "https://th.bing.com/th/id/R.df66de8e41d16b7ae8873b3323f02fb7?rik=ucFTdRmzGAFtYQ&pid=ImgRaw&r=0", desc: "Fluffy pancakes with syrup.", price: "$5" },
      { id: 2, name: "Omelettes", img: "https://th.bing.com/th/id/R.cfb85c6403971f1b047e6a4bd49845cc?rik=rG8dcO4LHwp9gQ&pid=ImgRaw&r=0", desc: "Cheese omelette with herbs.", price: "$7" },
      { id: 3, name: "Smoothies", img: "https://th.bing.com/th/id/OIP.q2tLERpxkMoUEG55CNNqvAAAAA?rs=1&pid=ImgDetMain", desc: "Fresh fruit smoothies.", price: "$4" },
      { id: 4, name: "French Toast", img: "https://th.bing.com/th/id/R.0f142348123735aebb409c39b5128106?rik=yQ9PSJ%2f7bF8HcA&pid=ImgRaw&r=0", desc: "Golden brown French toast.", price: "$6" },
      { id: 5, name: "Avocado Toast", img: "https://bing.com/th?id=OSK.4a3d8c458520c3229dbea1f69e05f249", desc: "Smashed avocado on toast.", price: "$8" },
      { id: 6, name: "Breakfast Burrito", img: "https://bing.com/th?id=OSK.4d7c3296080cada503ec36da4303128e", desc: "Eggs, cheese, and salsa wrapped in a tortilla.", price: "$9" },
      { id: 7, name: "Bagels", img: "https://bing.com/th?id=OSK.d922b4a89968edc7c3def0aac5c209a3", desc: "Bagels with cream cheese.", price: "$3" },
      { id: 8, name: "Fruit Salad", img: "https://bing.com/th?id=OSK.778e3fc23bb900132b1df463593c5a15", desc: "Freshly cut fruit salad.", price: "$5" },
      { id: 9, name: "Yogurt Parfait", img: "https://bing.com/th?id=OSK.5994359ef15ac29ee7237d84bfe745d7", desc: "Layers of yogurt, granola, and fruits.", price: "$6" },
      { id: 10, name: "Scrambled Eggs", img: "https://bing.com/th?id=OSK.7bdc0d5440102aca8a836000444d3550", desc: "Fluffy scrambled eggs.", price: "$4" },
    ],
    lunch: [
      { id: 1, name: "Caesar Salad", img: "https://bing.com/th?id=OSK.5773c1a49df8f8e641f5a11e18cf5c59", desc: "Crisp romaine with Caesar dressing.", price: "$10" },
      { id: 2, name: "Grilled Chicken Sandwich", img: "https://bing.com/th?id=OSK.38a5fe404a2f6eca6605438fd973b6ad", desc: "Grilled chicken with lettuce and tomato.", price: "$12" },
      { id: 3, name: "Vegetable Stir Fry", img: "https://bing.com/th?id=OSK.afe0b0732f41eaf93c37a27c224c434d", desc: "Mixed vegetables stir-fried in soy sauce.", price: "$11" },
      { id: 4, name: "Cheeseburger", img: "https://th.bing.com/th/id/OIP.JGigDSijh-lKRw6YaZQGVwHaDs?rs=1&pid=ImgDetMain", desc: "Classic cheeseburger with fries.", price: "$13" },
      { id: 5, name: "BLT Sandwich", img: "https://th.bing.com/th/id/OIP.bEuETOjheqAtolcKPmR68QHaLH?rs=1&pid=ImgDetMain", desc: "Bacon, lettuce, and tomato sandwich.", price: "$9" },
      { id: 6, name: "Chicken Caesar Wrap", img: "https://th.bing.com/th/id/R.c0274388079633a17d752032e112c277?rik=t2TclnF0vLA3jw&pid=ImgRaw&r=0", desc: "Grilled chicken Caesar wrap.", price: "$10" },
      { id: 7, name: "Sushi Rolls", img: "https://th.bing.com/th/id/OIP.SAOx_ZfsIavXQaw8WHVkeQHaFL?rs=1&pid=ImgDetMain", desc: "Assorted sushi rolls.", price: "$15" },
      { id: 8, name: "Tacos", img: "https://th.bing.com/th/id/R.d50b293e5d2de51d349691db78f71f8c?rik=FfttXcgxjuqR%2fQ&pid=ImgRaw&r=0", desc: "Soft shell tacos with beef and veggies.", price: "$10" },
      { id: 9, name: "Quesadilla", img: "https://th.bing.com/th/id/R.ba71ae06b5fdc3415e18b660da24bcc4?rik=UH54cW7bZjmYgg&pid=ImgRaw&r=0", desc: "Cheesy quesadilla with salsa.", price: "$8" },
      { id: 10, name: "Spaghetti Bolognese", img: "https://th.bing.com/th/id/OIP.YixleAz2dzjXRd3FGfaIlwAAAA?rs=1&pid=ImgDetMain", desc: "Classic spaghetti with meat sauce.", price: "$14" },
    ],
    dinner: [
      { id: 1, name: "Steak", img: "https://th.bing.com/th/id/OIP.fq3pRW5J46S6U-VqUaHWdgHaLH?rs=1&pid=ImgDetMain", desc: "Grilled steak with mashed potatoes.", price: "$20" },
      { id: 2, name: "Salmon", img: "https://th.bing.com/th/id/OIP.HAzlM3ij12ONAiPaXSVshwHaHa?rs=1&pid=ImgDetMain", desc: "Pan-seared salmon with veggies.", price: "$18" },
      { id: 3, name: "Pasta Primavera", img: "https://th.bing.com/th/id/R.c98f298613749dda243bf52b7e1b097b?rik=2x%2fzG0PnH%2becfg&pid=ImgRaw&r=0", desc: "Pasta with fresh vegetables.", price: "$15" },
      { id: 4, name: "Lamb Chops", img: "https://th.bing.com/th/id/R.b586bfe9441c8a93269ed4b1d73fb3cf?rik=qXOTRpsJ%2fWK4uQ&pid=ImgRaw&r=0", desc: "Grilled lamb chops with mint sauce.", price: "$22" },
      { id: 5, name: "Seafood Paella", img: "https://th.bing.com/th/id/OIP.rcAFewQlTmHJzGDbuy9cwQHaHa?rs=1&pid=ImgDetMain", desc: "Traditional Spanish seafood paella.", price: "$25" },
      { id: 6, name: "Roast Chicken", img: "https://th.bing.com/th/id/R.7e66667e7a725cea6afc8af8a1f9d651?rik=Aq0K9PYEaaD8nA&riu=http%3a%2f%2fimages.media-allrecipes.com%2fuserphotos%2f960x960%2f3756023.jpg&ehk=pDq87q0aaAi%2bEhkMowSjQ0yRoIFweCF6EQVJNzJIEwU%3d&risl=&pid=ImgRaw&r=0", desc: "Herb-roasted chicken with gravy.", price: "$17" },
      { id: 7, name: "Beef Tacos", img: "https://th.bing.com/th/id/OIP.VgF0UP0YYhUcSu4Oo4l5ugHaJQ?rs=1&pid=ImgDetMain", desc: "Tacos with seasoned beef and salsa.", price: "$14" },
      { id: 8, name: "BBQ Ribs", img: "https://th.bing.com/th/id/R.ef1a689ffce1462f7b97f4ee766aa4b9?rik=8segD36DnoGpyA&pid=ImgRaw&r=0", desc: "Slow-cooked ribs with BBQ sauce.", price: "$21" },
      { id: 9, name: "Shrimp Scampi", img: "https://th.bing.com/th/id/OIP.fZd3RIhJSCDnmGMdgvZIHgHaLH?rs=1&pid=ImgDetMain", desc: "Shrimp in garlic butter sauce.", price: "$19" },
      { id: 10, name: "Grilled Vegetables", img: "https://th.bing.com/th/id/OIP.afQEXphnNXciWWrQHMhMSgHaLH?rs=1&pid=ImgDetMain", desc: "Mixed grilled vegetables.", price: "$12" },
    ],
  };
  
  export default menuData;
  
   