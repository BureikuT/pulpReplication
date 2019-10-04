const earlyMeals = [
  {
    id: 1,
    name: "Porridge",
    picture:
      "https://images.media-allrecipes.com/userphotos/560x315/353558.jpg",
    price: 6,
    description:
      "steel cut oats, quinoa, amaranth, milk*, berries, house-made granola, hemp hearts, chia seeds, pure maple syrup *2%, skim, almond, or soy",
    nutritionalInfo: [
      "45 Calories (w/ Maple Syrup add 80 cal)",
      "66g Carbs",
      "16g Protein",
      "15g Fat",
      "40mg Sodium",
      "Gluten Free, Vegan"
    ]
  },
  {
    id: 2,
    name: "Skinny Jeans",
    picture:
      "https://bmexdi064h-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Hummus-Veggie-Wrap-foodiecrush.com-16.jpg",
    price: 7,
    description:
      "egg whites, goat cheese crumbles, avocado, spinach, hummus, scallions, roasted sweet potato, whole wheat wrap, fresh salsa",
    nutritionalInfo: [
      "480 Calories",
      "61g Carbs",
      "22g Protein",
      "17g Fat",
      "900mg Sodium"
    ]
  },
  {
    id: 3,
    name: "Pan-a-cea",
    picture:
      "https://static.wixstatic.com/media/0f290e_8a9764dee6434d8eaa591d3277003ff0~mv2_d_2000_2500_s_2.jpg/v1/fill/w_1280,h_1600,al_c,q_90/file.jpg",
    price: 8,
    description:
      "coconut quinoa pancakes, greek yogurt, blueberry compote, lavender honey, lemon zest",
    nutritionalInfo: [
      "470 Calories",
      "52g Carbs",
      "17g Protein",
      "22g Fat",
      "200mg Sodium",
      "Gluten Free"
    ]
  },
  {
    id: 4,
    name: "Sammie Soho",
    picture:
      "https://static.wixstatic.com/media/0f290e_f68835ceb05d4ae490780c77c8e5fb45~mv2_d_2640_3300_s_4_2.jpg/v1/fill/w_1280,h_1600,al_c,q_90/file.jpg",
    price: 7,
    description:
      "cage-free egg, sprouted wheat bagel, turkey sausage, irish cheddar, smashed avocado(Eggs cooked in Coconut oil)",
    nutritionalInfo: [
      "540 Calories",
      "58g Carbs",
      "31g Protein",
      "23g Fat",
      "600mg Sodium"
    ]
  },
  {
    id: 5,
      name:'Soccer Mom',
      picture:'https://static.wixstatic.com/media/0f290e_fc274bc3347f42ef923fa4c4f892e99c~mv2_d_2000_2500_s_2.jpg/v1/fill/w_1280,h_1600,al_c,q_90/file.jpg',
  price: 6,
  description:'greek yogurt, chia pudding, berries, house-made granola, hemp hearts, lavender honey',
  nutritionalInfo:[
    '490 Calories',
	'48g Carbs',
	'22g Protein',
	'24g Fat',
	'130mg Sodium',
	'Gluten Free, Vegan'
  ],
},
  {
    id: 6,
    name:'Man Crush',
    picture:'https://media-cdn.tripadvisor.com/media/photo-s/15/bf/81/76/the-man-crush.jpg',
price: 8,
description:'cage-free eggs, zucchini, spinach, mushrooms, scallions, kale,  choice of brown rice, quinoa or pulp hash  (Eggs cooked in Coconut oil) (Pulp Hash cooked in coconut oil)',
noBase: true,
nutritionalInfo:[
	'320 Calories',
	'10g Carbs',
	'17g Protein',
	'24g Fat',
	'220mg Sodium',
	'Vegan',
],
  },
 { id: 7,
      name:'Crowding The Plate',
      picture:'https://s3-media3.fl.yelpcdn.com/bphoto/Uqj5rdnwAbRJOp_Ypf2Pjg/o.jpg',
  price: 9,
  description: 'cage-free eggs, smashed avocado toast, turkey sausage, tomato slices, pulp hash(Eggs cooked in Coconut oil) (Pulp Hash cooked in coconut oil)',
  nutritionalInfo:[
    '660 Calories',
	'72g Carbs',
	'38g Protein',
	'26g Fat',
	'530mg Sodium',
	'Paleo',
  ]
},
{
  id: 8,
      name:'Açai Bowls',
      picture:'https://www.femalefoodie.com/wp-content/uploads/2016/05/DSC06872.jpg',
  price:7,
  description:'mixed berries, fat-free greek yogurt, bananas, strawberries, chia seeds, hemp hearts, house-made granola ',
  nutritionalInfo:[
    '450 Calories',
	'71g Carbs',
	'14g Protein',
	'14g Fat',
	'75mg Sodium',
	'Gluten Free',
  ]
  },{
    id: 9,
    name:'Smashed Avocado',
    picture:'https://static.wixstatic.com/media/0f290e_d1b706c987c146bc90da5e4c7faf2f36~mv2_d_2528_3160_s_4_2.jpg/v1/fill/w_1280,h_1600,al_c,q_90/file.jpg',
    price:6,
    description:' two slices of sprouted wheatberry toast, smashed avocado',
    nutritionalInfo:[
      '480 Calories',
	'79g Carbs',
	'15g Protein',
	'13g Fat',
	'580mg Sodium',
	'Vegan',
    ]
  } 
];

module.exports = {
  showEarlyFood: (req, res) => {
    res.status(200).send(earlyMeals);
  }
};
