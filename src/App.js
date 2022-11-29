import { useState } from "react";
import "./styles.css";

const travelNE = {
  kachchh: [
    {
      name: "The kachchh desert",
      rating: "4.7/5",
      desc:
        " The run kutch of (alter)It comprises of around 30,000 sq. km of land which includes The Great Rann of Kachchh, The Little Rann of Kachchh and Banni grassland. The Rann of Kachchh is famous for its white salty desert sand and is reputed to be the largest salt desert in the world. it is located in gujarat(primarily the kuchcch district) india"
    },
    {
      name: "Mata no madh Tample",
      rating: "4.5/5",
      desc:
        "Mata no Madh is a village in Lakhpat Taluka of Kachchh district, Gujarat, India. The village lies surrounded by hills on both banks of a small stream and has a temple dedicated to Ashapura Mata, the household deity of former Jadeja rulers of Kachchh State. She is also considered patron deity of Kachchh."
    },
    {
      name: "Narayan Lake",
      rating: "4.5/5",
      desc:
        "About the location: A sprawling lake on the western most edge of India, Narayan Sarovar has great spiritual significance. This is one of the 5 holy lakes of Hinduism, along with Mansarovar in Tibet, Pampa in Karnataka, Bhuvaneshwar in Orissa and Pushkar in Rajasthan, and is considered a coveted place for a holy dip."
    }
  ],

  Gandhinagar: [
    {
      name: "Akshardham",
      rating: "4.5/5",
      desc:
        "Akshardham is a majestic, intricately carved stone structure that stands amid sprawling gardens set in a 23-acre plot at Gandhinagar (Gandhinagar district). It is built in 6000 tonnes of pink sandstone and not a bit of steel has been used. The temple is 108 ft in height, 240 ft in length and 131 ft in width."
    },
    {
      name: "Adalaj Stepwell",
      rating: "4.2/5",
      desc:
        "dalaj stepwell is five stories deep, built-in sandstone in the Solanki architectural style. A stepwell is built on an intricately carved large number of pillars with an octagonal plan at the top. Each floor is so spacious that the people can hold gatherings. The light and air can enter the octagonal well as it has an opening in the ceilings above the landing. It is dug so deep that one can access groundwater at that level, accounting for seasonal fluctuations in water level due to rainfall over the years."
    },
    {
      name: "Indroda Natural Park",
      rating: "4.3/5",
      desc:
        "Indroda Dinosaur and Fossil Park is a precious treasure spread over an area of about 400 hectares on either bank of Sabarmati river in Gandhinagar, the capital of Gujarat. Indroda Park is regarded as India's Jurrasic Park, it is run by the Gujarat Ecological Education and Research Foundation (GEER), and is one of the only two dinosaur museums in the country. The park consists of a zoo, massive skeletons of sea mammals like the blue whale, as well as a vast botanical garden, amphitheater, interpretation center, and camping facilities. It also has a Wilderness Park which is home to innumerable species of birds, reptiles, hundreds of nilgais, langurs and peafowls in its vast forest."
    }
  ],

  Ahemdabad: [
    {
      name: "Kankaria Lake",
      rating: "4.6/5",
      desc:
        "Kankaria Lake is a multisided lake that was built by Sultan Qutab-ud-Din in the year 1451 A.D. It is basically an artificial lake with thirty four sides. Lying on the south eastern side of the Ahmedabad city, the lake also has a fascinating island summer palace."
    },
    {
      name: "Gandhi Ahram",
      rating: "5/5",
      desc:
        "Gandhiji selected a place on the bank of the river Sabarmati very close to the Saint Dadheechi’s temple as well as from Jail and a crematorium. Gandhi used to remark, This is the right place for our activities to carry on the search for Truth and develop Fearlessness for on one side are the iron bolts of the foreigners and on the other, thunderbolts of mother nature After building a few essential structures, activities of the Ashram commenced in 1917"
    },
    {
      name: "Manek chowk",
      rating: "4.6/5",
      desc:
        "Manek Chowk is a notable city square in Old Ahmedabad, India. It is surrounded by historical structures. It is a vegetable market in the morning, a bullion market in the noon and the street food market at night. Manek Chowk. Street food stalls at night."
    }
  ],

  // Vadodara: [
  //   { name: "Vadodara Museum", rating: "4/5" },
  //   { name: "Sur Sagar Lake", rating: "4.5/5" },
  //   { name: "Laxmi vilas place", rating: "5/5" }
  // ],

  Saurashtra: [
    {
      name: "Gir National Park",
      rating: "4.4/5",
      desc:
        "Gir National Park and Wildlife Sanctuary, also known as Sasan Gir, is a forest, national park, and wildlife sanctuary near Talala Gir in Gujarat, India. It is located 43 km (27 mi) north-east of Somnath, 65 km (40 mi) south-east of Junagadh and 60 km (37 mi) south-west of Amreli."
    },
    {
      name: "Somnath tample",
      rating: "4.5/5",
      desc:
        "Somnath is a magnificent temple situated in Sagar Kant of Saurashtra in Gujarat state. One of the 12 holy Jyotirlingas of Lord Shiva is in Jyotirlinga here in Somnath. Somnath is also mentioned in Rigveda.The Somnath temple, also called Somanātha temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites for Hindus and is believed to be first among the twelve jyotirlinga shrines of Shiva."
    },
    {
      name: "Devbhumi Dwarka",
      rating: "4.4/5",
      desc:
        "Dwarka (pronunciation (help·info)) is a city and a municipality of Devbhumi Dwarka district in the state of Gujarat in Western India. It is located on the western shore of the Okhamandal Peninsula on the right bank of the Gomti river at the mouth of the Gulf of Kutch facing the Arabian Sea. Often identified with the Dwarka Kingdom, described in the Bhagavata Purana as the ancient kingdom of Krishna and is believed to have been the first capital of Gujarat."
    }
  ],

  Vadnagar: [
    {
      name: "Kirti Toran",
      rating: "4.5/5",
      desc:
        "The town is famous for its torans, a pair of 12th century columns supporting an arch, about 40 feet tall built in red and yellow sandstone, just north of the walled town. They stand majestically on the bank of Sharmistha Talav, on a road going down from Arjun Bari"
    },
    {
      name: "Sharmistha Lake",
      rating: "4.8/5",
      desc:
        "t is an ancient lake created by the waters of the river Kapila flowing from the hills of Aravalli. More than 4500 years ago, early settlements appeared on its northeastern shore. Later a stepped embankment was created all around it to retain the water."
    },
    {
      name: "Hatkeswar tample",
      rating: "5/5",
      desc:
        "This profusely carved 17th century temple just outside town enshrines Hatkeshwar Mahadev, the family deity of Nagar Brahmins, who were once a prominent community in Vadnagar. The temple's inner sanctum houses a Shiva linga said to have self-emerged (swayambhu)."
    }
  ]

  // SabarKantha: [
  //   { name: "Dault Mahal", rating: "4.8/5" },
  //   { name: "Polo forest", rating: "4/5",desc:"Polo forest, also known as Vijaynagar forest, is a dry mixed deciduous forest near Abhapur village in Vijaynagar Taluka, Sabarkantha district, Gujarat, India. It is located at the foothills of the Aravalli range and on the banks of perennial Harnav river, spread over the area of 400 square kilometres (99,000 acres)."},
  //   { name: "Tirupati Rushivan", rating: "4.4/5" }
  // ]
};

const allPlace = Object.keys(travelNE);

export default function App() {
  const [destination, setDestination] = useState([]);

  function clickHandler(state) {
    var userInput = travelNE[state];
    setDestination(userInput);
  }

  return (
    <div className="App">
      <h1 className="heading">
        {" "}
        <span role="img" aria-label="earth">
          🌏
        </span>{" "}
        💖I Love Gujarat💖
      </h1>
      <p className="description">
        Checkout most beautiful travel destinations in Gujarat India
      </p>
      <div className="button-wrapper">
        {allPlace.map((state) => {
          return (
            <button
              className="btn"
              key={state}
              onClick={() => clickHandler(state)}
            >
              {state}
            </button>
          );
        })}
      </div>
      <div>
        {destination.map((item) => {
          return (
            <div className="box">
              <p className="name">
                <b>place : </b> {item.name}
              </p>
              <p className="desc">
                <b>description : </b>
                {item.desc}
              </p>
              <p className="rating">
                <b>Rating : </b>
                {item.rating}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
