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
      name: "void",
      location: "Chicago",
      sharing_enabled: true,
    },
  ];
  await Program.deleteMany({});
  await Program.insertMany(programs);
  console.log(`Created ${programs.length} program(s)!`);

  const voidChi = await Program.findOne({ name: "void" });
  console.log(voidChi);
  // console.log("Programs defined", betty, vh, anker);
  // const guest = await Program.findOne({ name: "Guest" })._id;

  const users = [
    {
      username: "Pat Ray",
      email: "patray@voidchi.com",
      password: "xxx666",
      is_admin: true,
      program: [voidChi._id],
    },
    {
      username: "Tyler",
      email: "tyler@voidchi.com",
      password: "xxx666",
      is_admin: false,
      program: [voidChi._id],
    },
  ];
  console.log(users);
  await User.deleteMany({});
  console.log("deleted users");
  await User.create(users);
  //   console.log(await User.exists({ name: /tyler/i }));
  // async run = () => {
  //     try {
  //       let response = await User.create(users);
  //     } catch(error) {
  //       alert(error);
  //     }
  // }
  console.log(`Created ${users.length} users!`);

  const voidStaff = await (
    await User.find({ program: [voidChi._id] }).exec()
  ).map((user) => user._id);

  voidChi.users = voidStaff;

  await voidChi.save();

  console.log("Saved users & program(s)!");

  const cocktails = [
    {
      name: "Lemon Sour",
      creator: "Pat Ray",
      program: [voidChi._id],
      ingredients: [
        "2 oz Lemon Infused Vodka/Shochu",
        ".5 oz Lemon Yuzu Cordial",
      ],
      bottom: "soda",
      glass: "Frosted Mug",
      ice: "Hoshizaki",
      garnish: "Lemon E/I",
      method: "Whip shake, strain into soda-bottomed mug",
      description: "Classy trashy izakaya staple",
    },
    {
      name: "Cynar Julep",
      creator: "Pat Ray",
      program: [voidChi._id],
      ingredients: [
        "1.5 oz Cynar",
        ".5 oz Plantation OD",
        ".5 oz  Lemon",
        ".5 oz  Simple",
        "4 – 6  Mint Leaves",
      ],
      top: "Grapefruit Soda",
      glass: "Rocks",
      ice: "Crushed",
      method: "Build in glass on mint, top with crushed",
      description: "Buenos Aires mojito",
      garnish: "Mint",
    },
    {
      name: "The Antidote",
      creator: "Pat Ray",
      program: [voidChi._id],
      ingredients: [
        "1.5 oz Blanco Tequila",
        ".5 oz Lazzaroni Amaro",
        ".75 oz Lime",
        ".5 oz Ginger",
        ".25 oz Honey",
        "2 Strawberry Halves",
      ],
      glass: "Rocks",
      ice: "Hoshizaki",
      method: "Muddle strawberry, shake & double strain",
      description: "Cure for what ails 'ya",
    },
    {
      name: "Kyro G&T",
      creator: "Pat Ray",
      program: [voidChi._id],
      ingredients: ["2 oz Kyro Gin", ".125 oz Lime", "5 Frozen Cranberries"],
      bottom: "Tonic",
      glass: "Collins",
      ice: "Hoshizaki",
      method: "Build in Glass",
      description: "Official national G&T of Finland",
    },
  ];

  await Cocktail.deleteMany({});
  await Cocktail.insertMany(cocktails);
  console.log(`Created ${cocktails.length} cocktails!`);

  const voidCocktails = await (
    await Cocktail.find({ program: [voidChi._id] }).exec()
  ).map((cocktail) => cocktail._id);
  const patray = await User.findOne({ username: "Pat Ray" });
  patray.library = voidCocktails;
  await patray.save();
  console.log("Added all void cocktails to Pat Ray's library");
};

const run = async () => {
  await main();
  db.close();
};

run();
