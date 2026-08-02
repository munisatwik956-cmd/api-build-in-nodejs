const data = [
  {
    name: "Eiffel Tower",
    location: "Paris",
    country: "France",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "The tower can grow about 15 cm taller in summer due to heat expansion."
      },
      {
        description: "An iconic iron lattice tower built for the 1889 World's Fair."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440001"
  },
  {
    name: "Cueva de los Cristales",
    location: "Chihuahua",
    country: "Mexico",
    continent: "North America",
    is_open_to_public: false,
    details: [
      {
        fun_fact: "Home to giant gypsum crystals, some over 10 meters long.",
      },
      {
        description:
        "An astonishing cavern filled with massive, glimmering selenite crystals hidden deep beneath the Earth’s surface.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440016",
  },
  {
    name: "Mount Mihara Volcano Jail",
    location: "Izu Oshima Island",
    country: "Japan",
    continent: "Asia",
    is_open_to_public: false,
    details: [
      {
        fun_fact:
        "A former volcanic prison, it is no longer operational but remains restricted.",
      },
      {
        description:
        "A historical penal facility once perched on an active volcano, now off-limits and shrouded in intrigue.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440019",
  },
  {
    name: "Great Wall",
    location: "Beijing",
    country: "China",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It stretches over 21,000 kilometers."
    },
    {
        description: "A series of fortifications built across northern China."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440002"
  },
  {
    name: "Magnetic Hill",
    location: "Ladakh",
    country: "India",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        fun_fact: "Vehicles appear to roll uphill due to an optical illusion.",
      },
      {
        description:
        "A perplexing stretch of road in the Himalayas where gravity seemingly takes a puzzling turn.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440015",
  },
  {
    name: "Moeraki Boulders",
    location: "Koekohe Beach",
    country: "New Zealand",
    continent: "Oceania",
    is_open_to_public: true,
    details: [
      {
        fun_fact:
        "These spherical boulders were formed from calcite over millions of years.",
      },
      {
        description:
        "Mysterious, perfectly round boulders scattered along a picturesque coastline, steeped in Māori legend.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440014",
  },
  {
    name: "Statue of Liberty",
    location: "New York",
    country: "United States",
    continent: "North America",
    is_open_to_public: true,
    details: [
      {
        funfact: "It was a gift from France to the United States."
    },
    {
        description: "A colossal neoclassical sculpture on Liberty Island."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440003",
  },
  {
    name: "Machu Picchu",
    location: "Cusco Region",
    country: "Peru",
    continent: "South America",
    is_open_to_public: true,
    details: [
      {
        funfact: "It remained unknown to much of the outside world until 1911."
    },
    {
        description: "A 15th-century Inca citadel located in the Andes Mountains."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440004"
  },
  {
    name: "Sydney Opera House",
    location: "Sydney",
    country: "Australia",
    continent: "Australia",
    is_open_to_public: true,
    details: [
      {
        funfact: "Its roof resembles a series of white sails."
    },
    {
        description: "A world-famous performing arts center."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440005"
  },
  {
    name: "Taj Mahal",
    location: "Agra",
    country: "India",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It changes color slightly throughout the day."
    },
    {
        description: "A white marble mausoleum commissioned by Shah Jahan."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440006"
  },
  {
    name: "Colosseum",
    location: "Rome",
    country: "Italy",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "It could hold up to 80,000 spectators."
    },
    {
        description: "An ancient Roman amphitheater."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440007"
  },
  {
    name: "Christ the Redeemer",
    location: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    is_open_to_public: true,
    details: [
      {
        funfact: "The statue stands 30 meters tall."
    },
    {
        description: "A famous Art Deco statue of Jesus Christ."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440008"
  },
  {
    name: "Mount Fuji",
    location: "Honshu",
    country: "Japan",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It is Japan's highest mountain."
    },
    {
        description: "An active stratovolcano and cultural symbol."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440009"
  },
  {
    name: "Stonehenge",
    location: "Wiltshire",
    country: "United Kingdom",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "Some stones were transported over 200 kilometers."
    },
    {
        description: "A prehistoric stone circle monument."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440010"
  },
  {
    name: "Pyramids of Giza",
    location: "Giza",
    country: "Egypt",
    continent: "Africa",
    is_open_to_public: true,
    details: [
      {
        funfact: "The Great Pyramid was the tallest human-made structure for thousands of years."
    },
    {
        description: "Ancient pyramids built as royal tombs."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440011"
  },
  {
    name: "Niagara Falls",
    location: "Ontario",
    country: "Canada",
    continent: "North America",
    is_open_to_public: true,
    details: [
      {
        funfact: "Over 3,000 tons of water flow every second."
    },
    {
        description: "A group of massive waterfalls."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440012"
  },
  {
    name: "Cano Cristales",
    location: "Meta",
    country: "Colombia",
    continent: "South America",
    is_open_to_public: true,
    details: [
      {
        fun_fact:
        "Known as the 'Liquid Rainbow,' it glows in five colors during certain seasons.",
      },
      {
        description:
        "A mesmerizing river whose aquatic plants and algae create a kaleidoscope of vibrant hues.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440010",
  },
  {
    name: "Petra",
    location: "Ma'an",
    country: "Jordan",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It is often called the Rose City."
    },
    {
        description: "An archaeological city carved into sandstone cliffs."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440013"
  },
  {
    name: "Angkor Wat",
    location: "Siem Reap",
    country: "Cambodia",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It is the largest religious monument in the world."
    },
    {
        description: "A vast temple complex originally built as a Hindu temple."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440014"
  },
  {
    name: "Grand Canyon",
    location: "Arizona",
    country: "United States",
    continent: "North America",
    is_open_to_public: true,
    details: [
      {
        funfact: "The canyon is over 440 kilometers long."
    },
    {
        description: "A steep-sided canyon carved by the Colorado River."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440015"
  },
  {
    name: "Burj Khalifa",
    location: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It is the tallest building in the world."
    },
    {
        description: "A skyscraper standing over 828 meters tall."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440016"
  },
  {
    name: "Pamukkale",
    location: "Denizli",
    country: "Turkey",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        fun_fact:
        "The white terraces are made of travertine, a mineral deposited by thermal springs.",
      },
      {
        description:
        "A famed natural site boasting tiered, cotton-white terraces and warm mineral-rich waters for bathing.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440009"
  },
  {
    name: "Red Beach",
    location: "Santorini",
    country: "Greece",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        fun_fact:
        "The beach gets its vibrant red color from the plant Suaeda salsa.",
      },
      {
        description:
        "A striking coastal wetland carpeted by red seaweed, popular for its unique color and birdlife.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440011",
  },
  {
    name: "Mount Kilimanjaro",
    location: "Kilimanjaro Region",
    country: "Tanzania",
    continent: "Africa",
    is_open_to_public: true,
    details: [
      {
        funfact: "It is Africa's highest mountain."
    },
    {
        description: "A dormant volcanic mountain."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440017"
  },
  {
    name: "Golden Gate Bridge",
    location: "San Francisco",
    country: "United States",
    continent: "North America",
    is_open_to_public: true,
    details: [
      {
        funfact: "Its color is officially called International Orange."
    },
    {
        description: "A suspension bridge spanning the Golden Gate Strait."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440018"
  },
  {
    name: "Mendenhall Ice Caves",
    location: "Juneau",
    country: "USA",
    continent: "North America",
    is_open_to_public: false,
    details: [
      {
        fun_fact:
        "The caves are formed under a glacier, creating glowing blue tunnels.",
      },
      {
        description:
        "A hidden world of otherworldly, icy blue chambers inside the Mendenhall Glacier, accessible only by adventurous treks.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440013",
  },
  {
    name: "Acropolis",
    location: "Athens",
    country: "Greece",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "The Parthenon is its most famous structure."
    },
    {
        description: "An ancient citadel overlooking Athens."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440019"
  },
  {
    name: "Sagrada Familia",
    location: "Barcelona",
    country: "Spain",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "Construction began in 1882 and continues today."
    },
    {
        description: "A monumental basilica designed by Antoni Gaudí."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440020"
  },
  {
    name: "Mount Everest",
    location: "Solukhumbu",
    country: "Nepal",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It is Earth's highest mountain above sea level."
    },
    {
        description: "Part of the Himalayan mountain range."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440021"
  },
  {
    name: "Louvre Museum",
    location: "Paris",
    country: "France",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "It houses the Mona Lisa."
    },
    {
        description: "The world's most visited art museum."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440022",
  },
  {
    name: "Banff National Park",
    location: "Alberta",
    country: "Canada",
    continent: "North America",
    is_open_to_public: true,
    details: [
      {
        funfact: "It was Canada's first national park."
    },
    {
        description: "Known for mountains, lakes, and wildlife."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440023"
  },
  {
    name: "Table Mountain",
    location: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    is_open_to_public: true,
    details: [
      {
        funfact: "Its flat top stretches about 3 kilometers."
    },
    {
        description: "A famous mountain overlooking Cape Town."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440024"
  },
  {
    name: "Chichen Itza",
    location: "Yucatán",
    country: "Mexico",
    continent: "North America",
    is_open_to_public: true,
    details: [
      {
        funfact: "It was a major Maya city."
    },
    {
        description: "A renowned archaeological site."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440025"
  },
  {
    name: "Blue Mosque",
    location: "Istanbul",
    country: "Turkey",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It contains over 20,000 handmade ceramic tiles."
    },
    {
        description: "A historic mosque known for its blue interior."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440026"
  },
  {
    name: "Forbidden City",
    location: "Beijing",
    country: "China",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It served as the imperial palace for nearly 500 years."
    },
    {
        description: "A vast palace complex in central Beijing."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440027"
  },
  {
    name: "Neuschwanstein Castle",
    location: "Bavaria",
    country: "Germany",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "It inspired Disney's fairy-tale castle."
    },
    {
        description: "A 19th-century Romanesque Revival palace."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440028"
  },
  {
    name: "Uluru",
    location: "Northern Territory",
    country: "Australia",
    continent: "Australia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It changes color dramatically at sunrise and sunset."
    },
    {
        description: "A massive sandstone monolith."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440029"
  },
  {
    name: "Moai Statues",
    location: "Easter Island",
    country: "Chile",
    continent: "South America",
    is_open_to_public: true,
    details: [
      {
        funfact: "Most statues have bodies buried underground."
    },
    {
        description: "Monolithic human figures carved by the Rapa Nui people."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440030"
  },
  {
    name: "Buckingham Palace",
    location: "London",
    country: "United Kingdom",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "It contains more than 700 rooms."
    },
    {
        description: "The official residence of the British monarch."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440031"
  },
  {
    name: "Versailles Palace",
    location: "Versailles",
    country: "France",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "The Hall of Mirrors has 357 mirrors."
    },
    {
        description: "A lavish royal palace near Paris."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440032"
  },
  {
    name: "Mount Elbrus",
    location: "Kabardino-Balkaria",
    country: "Russia",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "It is Europe's highest peak."
    },
    {
        description: "A dormant volcano in the Caucasus Mountains."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440033"
  },
  {
    name: "Dead Sea",
    location: "Jordan Rift Valley",
    country: "Jordan",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "People float easily because of its high salinity."
    },
    {
        description: "A salt lake bordered by Jordan and Israel."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440034"
  },
  {
    name: "CN Tower",
    location: "Toronto",
    country: "Canada",
    continent: "North America",
    is_open_to_public: true,
    details: [
      {
        funfact: "It was once the world's tallest free-standing structure."
    },
    {
        description: "A communications and observation tower."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440035"
  },
  {
    name: "Marina Bay Sands",
    location: "Singapore",
    country: "Singapore",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It features a rooftop infinity pool."
    },
    {
        description: "A luxury resort and architectural landmark."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440036"
  },
  {
    name: "Alhambra",
    location: "Granada",
    country: "Spain",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "Its name means 'The Red One'."
    },
    {
        description: "A palace and fortress complex."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440037"
  },
  {
    name: "Yellowstone National Park",
    location: "Wyoming",
    country: "United States",
    continent: "North America",
    is_open_to_public: true,
    details: [
      {
        funfact: "It contains more than half of the world's geysers."
    },
    {
        description: "The first national park in the world."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440038"
  },
  {
    name: "Mount Cook",
    location: "South Island",
    country: "New Zealand",
    continent: "Australia",
    is_open_to_public: true,
    details: [
      {
        funfact: "It is New Zealand's highest mountain."
    },
    {
        description: "A major destination for climbers and hikers."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440039"
  },
  {
    name: "Prague Castle",
    location: "Prague",
    country: "Czech Republic",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        funfact: "It is one of the largest ancient castle complexes in the world."
    },
    {
        description: "A historic castle serving as the Czech president's office."
      }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440040"
  },
  {
    name: "Area 51",
    location: "Nevada",
    country: "United States",
    continent: "North America",
    is_open_to_public: false,
    details: [
      { funfact: "The base has fueled decades of UFO conspiracy theories." },
      { description: "A highly classified military installation used for aircraft testing." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440041"
  },
  {
    name: "Fort Knox Bullion Depository",
    location: "Kentucky",
    country: "United States",
    continent: "North America",
    is_open_to_public: false,
    details: [
      { funfact: "It stores a large portion of U.S. gold reserves." },
      { description: "A heavily secured gold storage facility." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440042"
  },
  {
    name: "The Door to Hell",
    location: "Darvaza",
    country: "Turkmenistan",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        fun_fact:
        "This fiery crater has been burning since 1971 after a drilling accident.",
      },
      {
        description:
        "A continuously burning gas crater in the Karakum Desert, captivating adventurous travelers with its otherworldly glow.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440002"
  },
  {
    name: "Underwater Waterfall",
    location: "Mauritius",
    country: "Mauritius",
    continent: "Africa",
    is_open_to_public: true,
    details: [
      {
        fun_fact:
        "This optical illusion is caused by sand and silt deposits under the water.",
      },
      {
        description:
        "An incredible illusion off the island’s coast, appearing as if water cascades into a vast underwater abyss.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440003"
  },
  {
    name: "North Sentinel Island",
    location: "Andaman Islands",
    country: "India",
    continent: "Asia",
    is_open_to_public: false,
    details: [
      { funfact: "The Sentinelese people have lived in isolation for thousands of years." },
      { description: "Entry is prohibited to protect the indigenous population." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440043"
  },
  {
    name: "Svalbard Global Seed Vault",
    location: "Spitsbergen",
    country: "Norway",
    continent: "Europe",
    is_open_to_public: false,
    details: [
      { funfact: "It stores backup seeds from around the world." },
      { description: "A secure seed bank designed to preserve crop diversity." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440044"
  },
  {
    name: "Socotra Island",
    location: "Socotra",
    country: "Yemen",
    continent: "Asia",
    is_open_to_public: true,
    details: [
      {
        fun_fact: "Home to alien-looking dragon blood trees.",
      },
      {
        description:
        "A remote and biologically diverse island, known for its unique flora and striking desert landscapes.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440008"
  },
  {
    name: "Bohemian Grove",
    location: "California",
    country: "United States",
    continent: "North America",
    is_open_to_public: false,
    details: [
      { funfact: "It hosts an annual gathering of influential figures." },
      { description: "A private campground and club." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440045"
  },
  {
    name: "Lascaux Cave",
    location: "Montignac",
    country: "France",
    continent: "Europe",
    is_open_to_public: false,
    details: [
      { funfact: "Its prehistoric paintings are over 17,000 years old." },
      { description: "The original cave is closed to preserve the artwork." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440046"
  },
  {
    name: "Vatican Secret Archives",
    location: "Vatican City",
    country: "Vatican City",
    continent: "Europe",
    is_open_to_public: false,
    details: [
      { funfact: "The archive contains centuries of historical documents." },
      { description: "Access is restricted to qualified scholars." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440047"
  },
  {
    name: "Snake Island",
    location: "São Paulo",
    country: "Brazil",
    continent: "South America",
    is_open_to_public: false,
    details: [
      { funfact: "It is home to one of the world's most venomous snakes." },
      { description: "Public access is restricted for safety reasons." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440048"
  },
  {
    name: "The Wave",
    location: "Arizona",
    country: "USA",
    continent: "North America",
    is_open_to_public: true,
    details: [
      {
        fun_fact: "The sandstone formations look like waves frozen in time.",
      },
      {
        description:
        "A sought-after hiking spot in the Coyote Buttes area, prized for its surreal, undulating sandstone formations.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440007"
  },
  {
    name: "Cheyenne Mountain Complex",
    location: "Colorado",
    country: "United States",
    continent: "North America",
    is_open_to_public: false,
    details: [
      { funfact: "The facility is built inside a mountain." },
      { description: "A military command and control center." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440049"
  },
  {
    name: "Pine Gap",
    location: "Northern Territory",
    country: "Australia",
    continent: "Australia",
    is_open_to_public: false,
    details: [
      { funfact: "It is one of Australia's most secretive facilities." },
      { description: "A joint intelligence and satellite tracking station." }
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440050"
  },
  {
    name: "Waitomo Glowworm Caves",
    location: "Waitomo",
    country: "New Zealand",
    continent: "Oceania",
    is_open_to_public: true,
    details: [
      {
        fun_fact:
          "The glowworms create a star-like effect on the cave ceiling using bioluminescence.",
      },
      {
        description:
          "A subterranean network of limestone caverns famous for its magical boat rides under twinkling glowworm-lit ceilings.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440001",
  },
  {
    name: "Giant's Causeway",
    location: "County Antrim",
    country: "Northern Ireland",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        fun_fact:
        "The hexagonal columns are formed by ancient volcanic activity.",
      },
      {
        description:
        "A UNESCO World Heritage Site featuring striking hexagonal basalt columns along the scenic Northern Irish coastline.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440004"
  },
  {
    name: "Devil's Pool",
    location: "Victoria Falls",
    country: "Zambia",
    continent: "Africa",
    is_open_to_public: true,
    details: [
      {
        fun_fact: "A natural infinity pool at the edge of a waterfall.",
      },
      {
        description:
        "A thrilling dip right on the brink of Victoria Falls, offering daredevils a breathtaking view of the drop.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440012",
  },
  {
    name: "Fly Geyser",
    location: "Nevada",
    country: "USA",
    continent: "North America",
    is_open_to_public: false,
    uuid: "550e8400-e29b-41d4-a716-446655440005",
    details: [
      {
        fun_fact:
          "The geyser was accidentally created by well drilling in 1964.",
      },
      {
        description:
          "A colorful, continuously spouting geothermal formation with vibrant mineral deposits on a private Nevada ranch.",
      },
    ],
  },
  {
    name: "Kjeragbolten",
    location: "Rogaland",
    country: "Norway",
    continent: "Europe",
    is_open_to_public: true,
    details: [
      {
        fun_fact:
        "A giant boulder wedged in a mountain crevice with a 984-meter drop beneath it.",
      },
      {
        description:
        "A legendary hiking destination where brave visitors can stand on a rock suspended between two cliffs.",
      },
    ],
    uuid: "550e8400-e29b-41d4-a716-446655440006"
  }
]
export default data