# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

DatabaseCleaner.clean_with(:truncation)


@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

@salty = Flavor.create!(name: 'salty')
@sweet = Flavor.create!(name: 'sweet')
@sour = Flavor.create!(name: 'sour')
@bitter = Flavor.create!(name: 'bitter')
@umami = Flavor.create!(name: 'umami')

puts "#{Flavor.count} flavors created"

Food.create!(name: 'pizza', user: @admin, flavors: [@salty, @sweet, @umami])
@ice_cream = Food.create!(name: 'ice cream', user: @admin)

@ice_cream.flavors.push(@sweet, @salty)

@tacos = Food.create!(name: 'tacos', user: @admin)

@salty.foods << @tacos
@sour.foods << @tacos
@umami.foods << @tacos

puts "#{Food.count} foods created"