# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# DatabaseCleaner.clean_with(:truncation)

#make some programs
@betty = Program.create!(name: 'The Betty', location: 'Chicago', sharing_enabled: false)
@anker = Program.create!(name: 'Publican Anker', location: 'Wicker Park, Chicago', sharing_enabled: false)
@vh = Program.create!(name: 'The Violet Hour', location: 'Chicago', sharing_enabled: false)
@guest = Program.create!(name: 'Guest', location: 'Undisclosed', sharing_enabled: true)

puts "#{Program.count} bar programs created"

#make some users
@pv = User.create!(program: @betty, password: 'xxx666', email: 'vestinos@betty.com', is_admin: true)
@br = User.create!(program: @betty, password: 'xxx666', email: 'brian@betty.com')
@jess = User.create!(program: @betty, password: 'xxx666', email: 'jess@betty.com')

@jc = User.create!(program: @anker, password: 'xxx666', email: 'justin@anker.com', is_admin: true)
@ma = User.create!(program: @anker, password: 'xxx666', email: 'meredith@anker.com')
@ang = User.create!(program: @anker, password: 'xxx666', email: 'angela@anker.com')

@ps = User.create!(program: @vh, password: 'xxx666', email: 'patsmith@tvh.com', is_admin: true)
@ev = User.create!(program: @vh, password: 'xxx666', email: 'evie@tvh.com')
@zs = User.create!(program: @vh, password: 'xxx666', email: 'zac@tvh.com')

puts "#{User.count} users created"

#make some cocktails like this
# @xxx = Cocktail.create!(
#   name: '',
#   creator: '',
#   ingredients: [],
#   bottom: '',
#   top: '',
#   rinse: '',
#   glass: '',
#   ice: '',
#   garnish: '',
#   method: '',
#   description: ''
# )

@tb1 = Cocktail.create!(
  name: 'La Grande Dame',
  creator: 'Vestinos',
  program: @betty,
  ingredients: ['1 oz Pierre Ferrand 1840','1 oz Gin','4 to 6 Mint Leaves','¾ Lemon','¾ Simple','2  Good dashes  Grapefruit Bitters','4 to 6 Mint Leaves'],
  glass: 'Collins',
  ice: 'Crushed',
  garnish: 'Mint, Dash Creole Bitters',
  method: 'Shake Hard with Ice, Double Strain into a Collins
  Add Crushed Ice, Stir, Add More Ice to make a mount',
  description: 'Refreshing, Bright, The cognac add nice stone fruit, honey, spice and “warming” brandy notes while the gin punches up it up with herbal and citrus flavors.'
)

@tb2 = Cocktail.create!(
  name: 'Alfonso',
  creator: 'Vestinos',
  program: @betty,
  ingredients: ['1 Sugar Cube', 'Angostua Bitters','.75 oz  Herbal Liqueur Miz', '4 – 5  oz  Sparkling Wine'],
  bottom: 'Sparkling Wine',
  glass: 'Coupe',
  ice: 'None',
  method: 'In the style of a Champagne cocktail, bitters are added to the sugar cube in the glass and then dubonette and champagne are added.',
  description: 'History: This cocktail was created in Paris in 1931 especially for the deposed Spanish King Alfonso XIII who was exiled in France.

  Herbal Liqueur: A blend of 2 parts Avez Gentian Liqueur, 2 Parts Cinzano Sweet Vermouth, 1 Part Gin',
  garnish: 'Lemon Peel'
)

@tb3 = Cocktail.create!(
  name: 'Coffee and Cigarettes',
  creator: 'Vestinos',
  program: @betty,
  ingredients: ['2 oz Rittenhouse Rye','.75 oz Punt e Mes','.25 oz Giffard Madagascar Vanille','1 drop Orange Flower Water'],
  glass: 'Rocks',
  ice: 'One large Cube',
  method: 'Stir and Strain',
  description: '“A thinker” the vanilla notes intermingle with the herbaceous of the rye to provide a rich depth, the punt e mes provides bitterness and structure, the orange flower water adds top citrus note. For three ingredients, there is a lot of depth to this drink.',
  garnish: 'None'
)

@tb4 = Cocktail.create!(
  name: 'Age of Enlightenment',
  creator: 'Vestinos',
  program: @betty,
  ingredients: ['1.5 oz Mistral Pisco','.5 oz Scotch','.75 oz Lime','.75 Spiced Syrup','Egg White','1 oz Red Wine'],
  float: 'Red Wine',
  glass: 'Footed Rocks',
  ice: 'None',
  method: 'Dry Shake, Wet Shake, Double Strain',
  description: 'Based off of the Greenwich sour, which is a whiskey sour with red wine floated over it.',
  garnish: 'Dehydrated lime wheel and cinnamon dust'
)

@tb5 = Cocktail.create!(
  name: 'Vanderbilt',
  creator: 'Vestinos',
  program: @betty,
  ingredients: ['1.5 oz Death’s Door Vodka','1.5 oz Aquavite','.5 oz Oloroso Sherry','.5 oz Dry Vermouth','1 d orange bitter'],
  glass: 'Coupe',
  ice: 'None',
  method: 'Stir with ice and Strain into a coupe. Add olive and drops of oil',
  description: 'Dry, Herbal and Savory with “umami” notes. The Vodka adds a creaminess  and diffuses the pungent caraway notes of the aquavit, the sherry adds a nutty salinity and the dry vermouth imparts a soft herbal, floral quality.',
  garnish: 'Orange-Chili Oil and cured olive'
)

@tb6 = Cocktail.create!(
  name: 'Maxamillion',
  creator: 'Vestinos',
  program: @betty,
  ingredients: ['1.5 oz  Corazon Tequila','.75 oz Lemon Juice','.75 oz Hibiscus Syrup','.5 oz Ancho Reyes','1d Bitter Truth Chololate Mole Bitters'],
  top: '2 oz Sparkling',
  glass: 'Flute',
  ice: 'None',
  method: 'Shake and Strain into a cocktail flute
  Add 2 oz Sparkling',
  description: 'Rich, fresh gave flavor, smoke and spice from the ancho liqueur, finishes dry and citrusy from the sparkling',
  garnish: 'None'
)

@pa1 = Cocktail.create!(
  name: 'Drugstore Cowboy',
  creator: 'Justin',
  program: @anker,
  ingredients: ['1 oz Fernet Branca','1 oz Carpano Antica','.5 oz dem','.5 oz lemon', '3 mint leaves','pinch salt'],
  glass: 'Fancy Rocks',
  ice: 'KD',
  garnish: 'Mint',
  method: 'Short shake, double strain',
  description: 'Have fun cleaning the mint out of your drain after you make these all night, yummy though'
)

@pa2 = Cocktail.create!(
  name: 'Industry Handshake',
  creator: 'Eden',
  program: @anker,
  ingredients: ['1.5 oz Aperol','1.5 oz Dolin Blanc','1 oz Besk','2 dash Orange Bitters'],
  glass: 'Shot(s)',
  ice: 'None',
  garnish: 'Orange E/D',
  method: 'Stir, Strain',
  description: 'Like fancy malort kinda'
)

@pa3 = Cocktail.create!(
  name: 'Vespone',
  creator: 'Justin',
  program: @anker,
  ingredients: ['1 oz Beefeater','1 oz Vodka','1.5 oz Dolin Blanc','1 dash Orange Bitters'],
  glass: 'Coupe',
  ice: 'None',
  garnish: 'Lemon E/D',
  method: 'Stir, Strain',
  description: 'Vesper-esque'
)

@pa4 = Cocktail.create!(
  name: 'Colt Cabana',
  creator: 'Justin',
  program: @anker,
  ingredients: ['2 oz Vida Mezcal','1.5 oz Kumquat Agave Syrup', '.5 oz Lime', '1 dash Lime Bitters'],
  glass: 'Fancy Rocks',
  ice: 'KD',
  garnish: 'Kumquat Slice',
  method: 'ala Margarita',
  description: 'Kumquat Agave: 
  Combine 2.5 liters kumquats and 4 liters hot water, 2.5 bottles of agave(23.5oz bottles). Whisk continuously to keep the agave from settling on the bottom of the pan and burning. Boil, muddling kumquats as mixture heats. Lower heat and simmer for 20 minutes. Strain'
)

@pa5 = Cocktail.create!(
  name: 'West of Manhattan',
  creator: 'Justin',
  program: @anker,
  ingredients: ['2 oz Old Overholt','.75 oz Carpano Antica','.25 oz Luxardo Maraschino', '1 dash Angostura'],
  rinse: 'Herbsaint',
  glass: 'Fancy Rocks',
  ice: 'None',
  garnish: 'Lemon E/I',
  method: 'Stir, Strain ala Sazerac',
  description: 'Manhattan as Sazerac, Nice!'
)

@pa6 = Cocktail.create!(
  name: 'Never Come Morning',
  creator: 'Justin',
  program: @anker,
  ingredients: ['1.5 oz Amaro Montenegro','.5 oz Carpano Antica','.25 oz Oloroso Sherry','.75 oz Lemon','Egg White'],
  glass: 'Coupe',
  ice: 'None',
  garnish: 'Lemon E/D',
  method: 'Mime shake, Shake, Strain',
  description: 'Like a lemon pillow - NO SLEEPING AT THE BAR'
)

@vh1 = Cocktail.create!(
  name: 'Veneto Sour',
  creator: 'Andrew',
  program: @vh,
  ingredients: ['1.5 oz Old Forester Bourbon','.5 oz Pierre Ferrand Dry Curacao','.25 oz Amaro Abano','.5 oz Lemon Juice','.25+ oz Demerara Syrup'],
  glass: 'Coupe',
  ice: 'None',
  garnish: 'Orange Peel E/D',
  method: 'Shake and Strain',
  description: 'Amaro Abano is from the Veneto region of Italy.'
)

@vh2 = Cocktail.create!(
  name: 'Sedentary Lifestyle',
  creator: 'Zac',
  program: @vh,
  ingredients: ['1.0 oz Brugal Anejo', '.25 oz Cocchi di Torino','.50 oz Campari', '.75 oz Lime','.50 oz Honey Syrup', '2.0 oz House Summertime Ale'],
  bottom: 'Beer',
  glass: 'Mug',
  ice: 'Hoshizaki',
  garnish: 'Lemon Wheel',
  method: 'Add 2oz of beer to mug.  Shake and roll',
  description: 'IIRC the beer was a Brooklyn Summertime Ale clone - as long as you stay away from too hoppy you should be fine'
)

@vh3 = Cocktail.create!(
  name: 'Tex-Anne',
  creator: 'Jim',
  program: @vh,
  ingredients: ['1 oz La Penca Mezcal', '1 oz Siete Leguas Blanco', '.25 oz Yellow Chartreuse', '.75 oz Lime', '.5 oz Orgeat', '1 dash Grapefruit Bitters', '5 drops Green Tabasco'],
  glass: 'Rocks',
  ice: 'Chunk',
  garnish: 'Grapefruit Peel',
  method: 'Shake and Strain',
  description: 'We also brought this back for a later menu with different agaves and a soda bottom on a shard; both delicious'
)

@vh4 = Cocktail.create!(
  name: 'I am a Cat',
  creator: 'Pat Ray',
  program: @vh,
  ingredients: ['1 oz Haymans Old Tom', '1 oz Letherbee Gin', '0.5 oz Noily Prat Dry', '.25 oz Carpano Antica', '.25 oz Luxardo Maraschino'],
  glass: 'Coupe',
  ice: 'None',
  garnish: 'Lemon Pigtail',
  method: 'Stir, Strain',
  description: 'Hands down my favorite cocktail name I ever came up with'
)

@vh5 = Cocktail.create!(
  name: 'Merit Badge',
  creator: 'Aneka',
  program: @vh,
  ingredients: ['1.5 oz Fernet Branca','0.5 oz Arette Reposado','1 oz Cocchi di Torino','.5 oz Tempus Fugit Cacao','2 dsh Black & White Bitters'],
  glass: 'Rocks',
  ice: 'Chunk',
  garnish: 'Mint Sprig',
  method: 'Stir, Strain',
  description: 'Boozy thin mint vibes'
)

@vh6 = Cocktail.create!(
  name: 'Golden Boy',
  creator: 'Patrick',
  program: @vh,
  ingredients: ['1 oz Barbancourt 8yr Rum','1 oz Plantation Pineapple','0.75 oz Lemon','0.75- oz TVH+','2 dsh Cherry Bitters','1 Egg Yolk'],
  float: '.5+ oz	Cherry Liqueur (Preferably Leopold Tart Cherry)',
  glass: 'Collins',
  ice: 'Crushed',
  garnish: 'Grated Nutmeg',
  method: 'Mime Shake, Shake. Strain. Top with crushed ice',
  description: 'From TVH house classic "Golden Age"'
)

puts "#{Cocktail.count} cocktails created"



# @salty = Flavor.create!(name: 'salty')
# @sweet = Flavor.create!(name: 'sweet')
# @sour = Flavor.create!(name: 'sour')
# @bitter = Flavor.create!(name: 'bitter')
# @umami = Flavor.create!(name: 'umami')


# Food.create!(name: 'pizza', user: @admin, flavors: [@salty, @sweet, @umami])
# @ice_cream = Food.create!(name: 'ice cream', user: @admin)

# @ice_cream.flavors.push(@sweet, @salty)

# @tacos = Food.create!(name: 'tacos', user: @admin)

# @salty.foods << @tacos
# @sour.foods << @tacos
# @umami.foods << @tacos

# puts "#{Food.count} foods created"