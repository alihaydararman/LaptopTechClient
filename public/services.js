const products = [
  {
    name: "Jaeger-LeCoultre",
    img: "https://i.ibb.co/L81hgZD/71hp-O60-PAJL-AC-UL1470-removebg-preview.png",
    describiton:
      "Established in 1833 in the Swiss Jura Mountains, Jaeger-LeCoultre is known for its clever designs. One of its most notable—and coveted—styles, the Reverso, features a face that flips over to protect itself within the watch casing.",
    rating: 4,
    price : 50
  },
  {
    name: "Patek Philippe",
    img: "https://i.ibb.co/W2fwQ42/118-1-3.png",
    describiton:
      "Patek Philippe   Co. is consistently mentioned as one of the best watch brands in the world. While a Rolex is a status symbol to the masses, a Patek Philippe is a status symbol to those in the know. The Swiss brand was founded in 1839 and is the last family-owned independent watch manufacturer in Geneva today",
    rating: 5,
    price : 55
  },

  {
    name: "Vacheron Constantin",
    img: "https://i.ibb.co/bH1fwVV/GSTB400-MV-5-A-hd.png",
    describiton:
      "Vacheron Constantin is among the oldest luxury watch manufacturers in the world, having been founded in Geneva by Jean-Marc Vacheron in 1755. The watches, which are known for their extensive complications, have been worn on the wrists of famous figures like Napoleon Bonaparte and Harry Truman.",
    rating: 3,
    price : 70
  },
  {
    name: "Rolex",
    img: "https://i.ibb.co/mvXMtd9/img-1.png",
    describiton:
      "Rolex, arguably the most well-known watch name, has many firsts under its belt. The long list begins but does not end with its creation of the first waterproof watch, appropriately called the Oyster, in 1926. The newest rendition shown here, comes in an array of colored faces, including an icy pink. ",
    rating: 4.5,
    price : 53
  },

  {
    name: "Tudor",
    img: "https://i.ibb.co/dr0RYW7/img-2-removebg-preview.png",
    describiton:
      " If you think Tudor watches look like Rolexes, you're not seeing things; Tudor is a subsidiary of the luxury watch giant. Its timepieces are perfect for people who want the look and feel of a Rolex without the high price tag ",
    rating: 3.9,
    price : 100
  },
  {
    name: "Zenith",
    img: "https://i.ibb.co/1Tvy1Cy/img-3-removebg-preview.png",
    describiton:"If you think Tudor watches look like Rolexes, you're not seeing things; Tudor is a subsidiary of the luxury watch giant. Its timepieces are perfect for people who want the look and feel of a Rolex without the high price tag.",
    rating: 5,
    price : 120
  },
  {
    name: "Longines",
    img: "https://i.ibb.co/BsLRcw9/img-7-removebg-preview-1.png",
    describiton:
      " Now part of the Swatch Group, Longines was originally founded in 1832 by Auguste Agassiz and two partners in Switzerland. It's been based at Saint-Imier in Switzerland since its founding, and its winged hourglass logo is the oldest logo of its kind still being used in its original form. If it works, it works. ",
    rating: 4.4,
    price : 80
  },
  {
    name: "Blancpain",
    img: "https://i.ibb.co/TPCkbrY/img-7-removebg-preview-2.png",
    describiton:
      " Now part of the Swatch Group, Longines was originally founded in 1832 by Auguste Agassiz and two partners in Switzerland. It's been based at Saint-Imier in Switzerland since its founding, and its winged hourglass logo is the oldest logo of its kind still being used in its original form. If it works, it works  ",
    rating: 3,
    price : 89
  },

  {
    name: "Harry Winston",
    img: "https://i.ibb.co/BsLRcw9/img-7-removebg-preview-1.png",
    describiton:
      "Jeweler Harry Winston is relatively new to the watch game compared to other longer established brands out of Europe. Nevertheless, Winston offered clients timepieces truly rooted in the world of fine jewelry when he was at the helm. The newest pieces from the Kaleidoscope collection offer designs and colors truly only found within the lens of a kaleidoscope and fall back on Winston's original philosophy of letting the gems speak for themselves. ",
    rating: 5,
    price : 55
  },
  {
    name: "Cartier",
    img: "https://i.ibb.co/mFdK3gg/img-9-removebg-preview-1.png",
    describiton:
      " Louis-François Cartier founded the jewelry brand in Paris in 1847. Seventy years later, his grandson Louis Cartier invented the famous Tank Watch, which was modeled after a military tank. Several iconic watch models have followed since, including this Baignoire Allongée. ",
    rating: 4.5,
    price : 79
  },
  {
    name: "Piaget",
    img: "https://i.ibb.co/BcW7msX/img-9-removebg-preview.png",
    describiton:
      "Georges-Édouard Piaget set up his first workshop on his family farm in the village of La Côte-aux-Fées in the Swiss mountains in 1874, launching the brand that is now famous for offering the thinnest automatic watch in the world.",
    rating: 5,
    price : 90
  },
  {
    name: "frederique constant",
    img: "https://i.ibb.co/LNzSDRm/img-11.png",
    describiton:
      "Founded in 1988 by Dutch married couple Peter Stas and Aletta Stas-Bax, Frédérique Constant's mission statement is to craft fine luxury watches using Swiss techniques but sold at a relatively accessible price point.",
    rating: 4.9,
    price : 81
  },
  {
    name: "Audemars Piguet",
    img: "https://i.ibb.co/RSKr3pS/img-13-removebg-preview.png",
    describiton:
      "Founded by childhood friends Jules-Louis Audemars and Edward-Auguste Piguet in 1875, Audemars Piguet is perhaps most famous for its Royal Oak collection, which, since its debut in 1972, has become an obligatory status symbol for every A-lister from hip hop legends to elite athletes. Now it has some competition: In 2019, the brand released a new collection, Code 11.5",
    rating: 4.8,
    price : 52
  },

  {
    name: "Van Cleef & Arpels",
    img: "https://i.ibb.co/tsK7JmX/img-17.png",
    describiton:
      "Techniques d'Avant Garde is what the TAG in TAG Heuer has stood for since Edouard Heuer launched the Swiss brand in 1860. In 1962, John Glenn wore a Heuer stopwatch on the Mercury-Atlas 6 flight, giving the Swiss watchmaker the distinction of being the first in space. Now well-known for their sporty silhouettes TAG Heuer offers an array of interesting shapes outside the standards we all know and love.",
    rating: 4.9,
    price : 59
  },
  {
    name: "Tag Heuer",
    img: "https://i.ibb.co/xfjSTDs/img-22-removebg-preview-1.png",
    describiton:
      "Techniques d'Avant Garde is what the TAG in TAG Heuer has stood for since Edouard Heuer launched the Swiss brand in 1860. In 1962, John Glenn wore a Heuer stopwatch on the Mercury-Atlas 6 flight, giving the Swiss watchmaker the distinction of being the first in space. Now well-known for their sporty silhouettes TAG Heuer offers an array of interesting shapes outside the standards we all know and love.",
    rating: 5,
    price : 54
  },
  {
    name: "Tag Heuer",
    img: "https://i.ibb.co/bzxXDHG/img-22-removebg-preview.png",
    describiton:
      "Techniques d'Avant Garde is what the TAG in TAG Heuer has stood for since Edouard Heuer launched the Swiss brand in 1860. In 1962, John Glenn wore a Heuer stopwatch on the Mercury-Atlas 6 flight, giving the Swiss watchmaker the distinction of being the first in space. Now well-known for their sporty silhouettes TAG Heuer offers an array of interesting shapes outside the standards we all know and love.",
    rating: 5,
    price : 54
  },
];



/* https://i.ibb.co/L81hgZD/71hp-O60-PAJL-AC-UL1470-removebg-preview.png
https://i.ibb.co/W2fwQ42/118-1-3.png
https://i.ibb.co/bH1fwVV/GSTB400-MV-5-A-hd.png
https://i.ibb.co/mvXMtd9/img-1.png
https://i.ibb.co/dr0RYW7/img-2-removebg-preview.png
https://i.ibb.co/1Tvy1Cy/img-3-removebg-preview.png
https://i.ibb.co/BsLRcw9/img-7-removebg-preview-1.png
https://i.ibb.co/TPCkbrY/img-7-removebg-preview-2.png
https://i.ibb.co/BsLRcw9/img-7-removebg-preview-1.png
https://i.ibb.co/mFdK3gg/img-9-removebg-preview-1.png
https://i.ibb.co/BcW7msX/img-9-removebg-preview.png
https://i.ibb.co/LNzSDRm/img-11.png
https://i.ibb.co/RSKr3pS/img-13-removebg-preview.png
https://i.ibb.co/tsK7JmX/img-17.png
https://i.ibb.co/xfjSTDs/img-22-removebg-preview-1.png
https://i.ibb.co/bzxXDHG/img-22-removebg-preview.png
https://i.ibb.co/rFswQZn/imgg.png
https://i.ibb.co/1J9G1sZ/mens-hugo-boss-watch-500x500-removebg-preview.png */

/* const products = [
  {
    name: "Jaeger-LeCoultre",
    img: "https://i.ibb.co/RgRZHX6/img-16.jpg",
    describiton:
      "Established in 1833 in the Swiss Jura Mountains, Jaeger-LeCoultre is known for its clever designs. One of its most notable—and coveted—styles, the Reverso, features a face that flips over to protect itself within the watch casing.",
    rating: 4,
    price : 50
  },
  {
    name: "Patek Philippe",
    img: "https://i.ibb.co/68gvGNn/img-1.jpg",
    describiton:
      "Patek Philippe   Co. is consistently mentioned as one of the best watch brands in the world. While a Rolex is a status symbol to the masses, a Patek Philippe is a status symbol to those in the know. The Swiss brand was founded in 1839 and is the last family-owned independent watch manufacturer in Geneva today",
    rating: 5,
    price : 55
  },

  {
    name: "Vacheron Constantin",
    img: "https://i.ibb.co/GsBhJcC/img-2.jpg",
    describiton:
      "Vacheron Constantin is among the oldest luxury watch manufacturers in the world, having been founded in Geneva by Jean-Marc Vacheron in 1755. The watches, which are known for their extensive complications, have been worn on the wrists of famous figures like Napoleon Bonaparte and Harry Truman.",
    rating: 3,
    price : 70
  },
  {
    name: "Rolex",
    img: "https://i.ibb.co/RzF23JV/img-3.jpg",
    describiton:
      "Rolex, arguably the most well-known watch name, has many firsts under its belt. The long list begins but does not end with its creation of the first waterproof watch, appropriately called the Oyster, in 1926. The newest rendition shown here, comes in an array of colored faces, including an icy pink. ",
    rating: 4.5,
    price : 53
  },

  {
    name: "Tudor",
    img: "https://i.ibb.co/qsWJd4j/img-5.jpg",
    describiton:
      " If you think Tudor watches look like Rolexes, you're not seeing things; Tudor is a subsidiary of the luxury watch giant. Its timepieces are perfect for people who want the look and feel of a Rolex without the high price tag ",
    rating: 3.9,
    price : 100
  },
  {
    name: "Zenith",
    img: "https://i.ibb.co/jDpHd70/img-6.jpg",
    describiton:"If you think Tudor watches look like Rolexes, you're not seeing things; Tudor is a subsidiary of the luxury watch giant. Its timepieces are perfect for people who want the look and feel of a Rolex without the high price tag.",
    rating: 5,
    price : 120
  },
  {
    name: "Longines",
    img: "https://i.ibb.co/Y2xfDN6/img-7.jpg",
    describiton:
      " Now part of the Swatch Group, Longines was originally founded in 1832 by Auguste Agassiz and two partners in Switzerland. It's been based at Saint-Imier in Switzerland since its founding, and its winged hourglass logo is the oldest logo of its kind still being used in its original form. If it works, it works. ",
    rating: 4.4,
    price : 80
  },
  {
    name: "Blancpain",
    img: "https://i.ibb.co/f15wDdN/img-8.jpg",
    describiton:
      " Now part of the Swatch Group, Longines was originally founded in 1832 by Auguste Agassiz and two partners in Switzerland. It's been based at Saint-Imier in Switzerland since its founding, and its winged hourglass logo is the oldest logo of its kind still being used in its original form. If it works, it works  ",
    rating: 3,
    price : 89
  },

  {
    name: "Harry Winston",
    img: "https://i.ibb.co/cYtsQcz/img-9.jpg",
    describiton:
      "Jeweler Harry Winston is relatively new to the watch game compared to other longer established brands out of Europe. Nevertheless, Winston offered clients timepieces truly rooted in the world of fine jewelry when he was at the helm. The newest pieces from the Kaleidoscope collection offer designs and colors truly only found within the lens of a kaleidoscope and fall back on Winston's original philosophy of letting the gems speak for themselves. ",
    rating: 5,
    price : 55
  },
  {
    name: "Cartier",
    img: "https://i.ibb.co/wrnxH97/img-10.jpg",
    describiton:
      " Louis-François Cartier founded the jewelry brand in Paris in 1847. Seventy years later, his grandson Louis Cartier invented the famous Tank Watch, which was modeled after a military tank. Several iconic watch models have followed since, including this Baignoire Allongée. ",
    rating: 4.5,
    price : 79
  },
  {
    name: "Piaget",
    img: "https://i.ibb.co/V9BYGWB/img-11.jpg",
    describiton:
      "Georges-Édouard Piaget set up his first workshop on his family farm in the village of La Côte-aux-Fées in the Swiss mountains in 1874, launching the brand that is now famous for offering the thinnest automatic watch in the world.",
    rating: 5,
    price : 90
  },
  {
    name: "frederique constant",
    img: "https://i.ibb.co/hdZYzJv/img-12.jpg",
    describiton:
      "Founded in 1988 by Dutch married couple Peter Stas and Aletta Stas-Bax, Frédérique Constant's mission statement is to craft fine luxury watches using Swiss techniques but sold at a relatively accessible price point.",
    rating: 4.9,
    price : 81
  },
  {
    name: "Audemars Piguet",
    img: "https://i.ibb.co/pyWPBSY/img-13.jpg",
    describiton:
      "Founded by childhood friends Jules-Louis Audemars and Edward-Auguste Piguet in 1875, Audemars Piguet is perhaps most famous for its Royal Oak collection, which, since its debut in 1972, has become an obligatory status symbol for every A-lister from hip hop legends to elite athletes. Now it has some competition: In 2019, the brand released a new collection, Code 11.5",
    rating: 4.8,
    price : 52
  },

  {
    name: "Van Cleef & Arpels",
    img: "https://i.ibb.co/k1F7FGh/img-14.jpg",
    describiton:
      "Techniques d'Avant Garde is what the TAG in TAG Heuer has stood for since Edouard Heuer launched the Swiss brand in 1860. In 1962, John Glenn wore a Heuer stopwatch on the Mercury-Atlas 6 flight, giving the Swiss watchmaker the distinction of being the first in space. Now well-known for their sporty silhouettes TAG Heuer offers an array of interesting shapes outside the standards we all know and love.",
    rating: 4.9,
    price : 59
  },
  {
    name: "Tag Heuer",
    img: "https://i.ibb.co/mD1CFdK/img-15.png",
    describiton:
      "Techniques d'Avant Garde is what the TAG in TAG Heuer has stood for since Edouard Heuer launched the Swiss brand in 1860. In 1962, John Glenn wore a Heuer stopwatch on the Mercury-Atlas 6 flight, giving the Swiss watchmaker the distinction of being the first in space. Now well-known for their sporty silhouettes TAG Heuer offers an array of interesting shapes outside the standards we all know and love.",
    rating: 5,
    price : 54
  },
];
 */