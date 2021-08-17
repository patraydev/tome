const mongoose = require("mongoose");
const db = require("../db/connection");
const Cocktail = require("../models/Cocktail");
const Program = require("../models/Program");
const User = require("../models/User");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  console.log(`Seeding ${mongoose.connection.name}`);

  const programs = [
    {
      name: "The Betty",
      location: "Chicago",
      sharing_enabled: false,
    },
    {
      name: "Publican Anker",
      location: "Wicker Park, Chicago",
      sharing_enabled: false,
    },
    {
      name: "The Violet Hour",
      location: "Chicago",
      sharing_enabled: false,
    },
    {
      name: "Guest",
      location: "Undisclosed",
      sharing_enabled: true,
    },
  ];
  await Program.deleteMany({});
  await Program.insertMany(programs);
  console.log(`Created ${programs.length} programs!`);

  const betty = await Program.findOne({ name: "The Betty" });
  const anker = await Program.findOne({ name: "Publican Anker" });
  const vh = await Program.findOne({ name: "The Violet Hour" });
  // console.log(vh);
  // console.log("Programs defined", betty, vh, anker);
  // const guest = await Program.findOne({ name: "Guest" })._id;

  const users = [
    {
      username: "Vestinos",
      email: "vestinos@betty.com",
      password: "xxx666",
      is_admin: true,
      program: [betty._id],
    },
    {
      username: "Jess",
      email: "jess@betty.com",
      password: "xxx666",
      is_admin: false,
      program: [betty._id],
    },
    {
      username: "Brian",
      email: "brian@betty.com",
      password: "xxx666",
      is_admin: false,
      program: [betty._id],
    },
    {
      username: "Justin",
      email: "justin@anker.com",
      password: "xxx666",
      is_admin: true,
      program: [anker._id],
    },
    {
      username: "Meredith",
      email: "meredith@anker.com",
      password: "xxx666",
      is_admin: false,
      program: [anker._id],
    },
    {
      username: "Angela",
      email: "1ngela@anker.com",
      password: "xxx666",
      is_admin: false,
      program: [anker._id],
    },
    {
      username: "Patrick",
      email: "patrick@anker.com",
      password: "xxx666",
      is_admin: true,
      program: [vh._id],
    },
    {
      username: "Evie",
      email: "evangeline@anker.com",
      password: "xxx666",
      is_admin: false,
      program: [vh._id],
    },
    {
      username: "Zac",
      email: "zac@anker.com",
      password: "xxx666",
      is_admin: false,
      program: [vh._id],
    },
  ];
  await User.deleteMany({});
  await User.create(users);
  console.log(`Created ${users.length} users!`);

  const bettyPeeps = await (await User.find({ program: [betty._id] }).exec()).map(user=>user._id);
  const ankerPeeps = await (await User.find({ program: [anker._id] }).exec()).map(user => user._id);
  const vhPeeps = await (await User.find({ program: [vh._id] }).exec()).map(user=>user._id);

  betty.users = bettyPeeps;
  anker.users = ankerPeeps;
  vh.users = vhPeeps;

  await betty.save();
  await anker.save();
  await vh.save();
console.log('Added users to their rightful programs!');

  const cocktails = [
    {
      name: "La Grande Dame",
      creator: "Vestinos",
      program: [betty._id],
      ingredients: [
        "1 oz Pierre Ferrand 1840",
        "1 oz Gin",
        "4 to 6 Mint Leaves",
        "¾ Lemon",
        "¾ Simple",
        "2  Good dashes  Grapefruit Bitters",
        "4 to 6 Mint Leaves",
      ],
      glass: "Collins",
      ice: "Crushed",
      garnish: "Mint, Dash Creole Bitters",
      method:
        "Shake Hard with Ice, Double Strain into a Collins, Add Crushed Ice, Stir, Add More Ice to make a mount",
      description:
        "Refreshing, Bright, The cognac add nice stone fruit, honey, spice and “warming” brandy notes while the gin punches up it up with herbal and citrus flavors.",
    },
    {
      name: "Alfonso",
      creator: "Vestinos",
      program: [betty._id],
      ingredients: [
        "1 Sugar Cube",
        "Angostua Bitters",
        ".75 oz  Herbal Liqueur Miz",
        "4 – 5  oz  Sparkling Wine",
      ],
      bottom: "Sparkling Wine",
      glass: "Coupe",
      ice: "None",
      method:
        "In the style of a Champagne cocktail, bitters are added to the sugar cube in the glass and then dubonette and champagne are added.",
      description:
        "History: This cocktail was created in Paris in 1931 especially for the deposed Spanish King Alfonso XIII who was exiled in France. \nHerbal Liqueur: A blend of 2 parts Avez Gentian Liqueur, 2 Parts Cinzano Sweet Vermouth, 1 Part Gin",
      garnish: "Lemon Peel",
    },
    {
      name: "Coffee and Cigarettes",
      creator: "Vestinos",
      program: [betty._id],
      ingredients: [
        "2 oz Rittenhouse Rye",
        ".75 oz Punt e Mes",
        ".25 oz Giffard Madagascar Vanille",
        "1 drop Orange Flower Water",
      ],
      glass: "Rocks",
      ice: "One large Cube",
      method: "Stir and Strain",
      description:
        "“A thinker” the vanilla notes intermingle with the herbaceous of the rye to provide a rich depth, the punt e mes provides bitterness and structure, the orange flower water adds top citrus note. For three ingredients, there is a lot of depth to this drink.",
      garnish: "None",
    },
    {
      name: "Age of Enlightenment",
      creator: "Vestinos",
      program: [betty._id],
      ingredients: [
        "1.5 oz Mistral Pisco",
        ".5 oz Scotch",
        ".75 oz Lime",
        ".75 Spiced Syrup",
        "Egg White",
        "1 oz Red Wine",
      ],
      float: "Red Wine",
      glass: "Footed Rocks",
      ice: "None",
      method: "Dry Shake, Wet Shake, Double Strain",
      description:
        "Based off of the Greenwich sour, which is a whiskey sour with red wine floated over it.",
      garnish: "Dehydrated lime wheel and cinnamon dust",
    },
    {
      name: "Vanderbilt",
      creator: "Vestinos",
      program: [betty._id],
      ingredients: [
        "1.5 oz Death’s Door Vodka",
        "1.5 oz Aquavite",
        ".5 oz Oloroso Sherry",
        ".5 oz Dry Vermouth",
        "1 d orange bitter",
      ],
      glass: "Coupe",
      ice: "None",
      method:
        "Stir with ice and Strain into a coupe. Add olive and drops of oil",
      description:
        "Dry, Herbal and Savory with “umami” notes. The Vodka adds a creaminess  and diffuses the pungent caraway notes of the aquavit, the sherry adds a nutty salinity and the dry vermouth imparts a soft herbal, floral quality.",
      garnish: "Orange-Chili Oil and cured olive",
    },
    {
      name: "Maxamillion",
      creator: "Vestinos",
      program: [betty._id],
      ingredients: [
        "1.5 oz  Corazon Tequila",
        ".75 oz Lemon Juice",
        ".75 oz Hibiscus Syrup",
        ".5 oz Ancho Reyes",
        "1d Bitter Truth Chololate Mole Bitters",
      ],
      top: "2 oz Sparkling",
      glass: "Flute",
      ice: "None",
      method: "Shake and Strain into a cocktail flute \nAdd 2 oz Sparkling",
      description:
        "Rich, fresh gave flavor, smoke and spice from the ancho liqueur, finishes dry and citrusy from the sparkling",
      garnish: "None",
    },
    {
      name: "Drugstore Cowboy",
      creator: "Justin",
      program: [anker._id],
      ingredients: [
        "1 oz Fernet Branca",
        "1 oz Carpano Antica",
        ".5 oz dem",
        ".5 oz lemon",
        "3 mint leaves",
        "pinch salt",
      ],
      glass: "Fancy Rocks",
      ice: "KD",
      garnish: "Mint",
      method: "Short shake, double strain",
      description:
        "Have fun cleaning the mint out of your drain after you make these all night, yummy though",
    },
    {
      name: "Industry Handshake",
      creator: "Eden",
      program: [anker._id],
      ingredients: [
        "1.5 oz Aperol",
        "1.5 oz Dolin Blanc",
        "1 oz Besk",
        "2 dash Orange Bitters",
      ],
      glass: "Shot(s)",
      ice: "None",
      garnish: "Orange E/D",
      method: "Stir, Strain",
      description: "Like fancy malort kinda",
    },
    {
      name: "Vespone",
      creator: "Justin",
      program: [anker._id],
      ingredients: [
        "1 oz Beefeater",
        "1 oz Vodka",
        "1.5 oz Dolin Blanc",
        "1 dash Orange Bitters",
      ],
      glass: "Coupe",
      ice: "None",
      garnish: "Lemon E/D",
      method: "Stir, Strain",
      description: "Vesper-esque",
    },
    {
      name: "Colt Cabana",
      creator: "Justin",
      program: [anker._id],
      ingredients: [
        "2 oz Vida Mezcal",
        "1.5 oz Kumquat Agave Syrup",
        ".5 oz Lime",
        "1 dash Lime Bitters",
      ],
      glass: "Fancy Rocks",
      ice: "KD",
      garnish: "Kumquat Slice",
      method: "ala Margarita",
      description:
        "Kumquat Agave: \nCombine 2.5 liters kumquats and 4 liters hot water, 2.5 bottles of agave(23.5oz bottles). Whisk continuously to keep the agave from settling on the bottom of the pan and burning. Boil, muddling kumquats as mixture heats. Lower heat and simmer for 20 minutes. Strain",
    },
    {
      name: "West of Manhattan",
      creator: "Justin",
      program: [anker._id],
      ingredients: [
        "2 oz Old Overholt",
        ".75 oz Carpano Antica",
        ".25 oz Luxardo Maraschino",
        "1 dash Angostura",
      ],
      rinse: "Herbsaint",
      glass: "Fancy Rocks",
      ice: "None",
      garnish: "Lemon E/I",
      method: "Stir, Strain ala Sazerac",
      description: "Manhattan as Sazerac, Nice!",
    },
    {
      name: "Never Come Morning",
      creator: "Justin",
      program: [anker._id],
      ingredients: [
        "1.5 oz Amaro Montenegro",
        ".5 oz Carpano Antica",
        ".25 oz Oloroso Sherry",
        ".75 oz Lemon",
        "Egg White",
      ],
      glass: "Coupe",
      ice: "None",
      garnish: "Lemon E/D",
      method: "Mime shake, Shake, Strain",
      description: "Like a lemon pillow - NO SLEEPING AT THE BAR",
    },
    {
      name: "Veneto Sour",
      creator: "Andrew",
      program: [vh._id],
      ingredients: [
        "1.5 oz Old Forester Bourbon",
        ".5 oz Pierre Ferrand Dry Curacao",
        ".25 oz Amaro Abano",
        ".5 oz Lemon Juice",
        ".25+ oz Demerara Syrup",
      ],
      glass: "Coupe",
      ice: "None",
      garnish: "Orange Peel E/D",
      method: "Shake and Strain",
      description: "Amaro Abano is from the Veneto region of Italy.",
    },
    {
      name: "Sedentary Lifestyle",
      creator: "Zac",
      program: [vh._id],
      ingredients: [
        "1.0 oz Brugal Anejo",
        ".25 oz Cocchi di Torino",
        ".50 oz Campari",
        ".75 oz Lime",
        ".50 oz Honey Syrup",
        "2.0 oz House Summertime Ale",
      ],
      bottom: "Beer",
      glass: "Mug",
      ice: "Hoshizaki",
      garnish: "Lemon Wheel",
      method: "Add 2oz of beer to mug.  Shake and roll",
      description:
        "IIRC the beer was a Brooklyn Summertime Ale clone - as long as you stay away from too hoppy you should be fine",
    },
    {
      name: "Tex-Anne",
      creator: "Jim",
      program: [vh._id],
      ingredients: [
        "1 oz La Penca Mezcal",
        "1 oz Siete Leguas Blanco",
        ".25 oz Yellow Chartreuse",
        ".75 oz Lime",
        ".5 oz Orgeat",
        "1 dash Grapefruit Bitters",
        "5 drops Green Tabasco",
      ],
      glass: "Rocks",
      ice: "Chunk",
      garnish: "Grapefruit Peel",
      method: "Shake and Strain",
      description:
        "We also brought this back for a later menu with different agaves and a soda bottom on a shard; both delicious",
    },
    {
      name: "I am a Cat",
      creator: "Pat Ray",
      program: [vh._id],
      ingredients: [
        "1 oz Haymans Old Tom",
        "1 oz Letherbee Gin",
        "0.5 oz Noily Prat Dry",
        ".25 oz Carpano Antica",
        ".25 oz Luxardo Maraschino",
      ],
      glass: "Coupe",
      ice: "None",
      garnish: "Lemon Pigtail",
      method: "Stir, Strain",
      description: "Hands down my favorite cocktail name I ever came up with",
    },
    {
      name: "Merit Badge",
      creator: "Aneka",
      program: [vh._id],
      ingredients: [
        "1.5 oz Fernet Branca",
        "0.5 oz Arette Reposado",
        "1 oz Cocchi di Torino",
        ".5 oz Tempus Fugit Cacao",
        "2 dsh Black & White Bitters",
      ],
      glass: "Rocks",
      ice: "Chunk",
      garnish: "Mint Sprig",
      method: "Stir, Strain",
      description: "Boozy thin mint vibes",
    },
    {
      name: "Golden Boy",
      creator: "Patrick",
      program: [vh._id],
      ingredients: [
        "1 oz Barbancourt 8yr Rum",
        "1 oz Plantation Pineapple",
        "0.75 oz Lemon",
        "0.75- oz TVH+",
        "2 dsh Cherry Bitters",
        "1 Egg Yolk",
      ],
      float: ".5+ oz	Cherry Liqueur (Preferably Leopold Tart Cherry)",
      glass: "Collins",
      ice: "Crushed",
      garnish: "Grated Nutmeg",
      method: "Mime Shake, Shake. Strain. Top with crushed ice",
      description: 'From TVH house classic "Golden Age"',
    },
  ];

  await Cocktail.deleteMany({});
  await Cocktail.insertMany(cocktails);
  console.log(`Created ${cocktails.length} cocktails!`);
  
  const bettyCocktails = await (await Cocktail.find({ program: [betty._id] }).exec()).map(cocktail => cocktail._id);
  const vestinos = await User.findOne({ username: 'Vestinos' });
  vestinos.library = bettyCocktails;
  await vestinos.save();
  console.log('Added all Betty cocktails to Vestinos\' library');
};

const run = async () => {
  await main();
  db.close();
};

run();
