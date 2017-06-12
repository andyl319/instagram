# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(username: 'guest', password: 'abc123')
lh = User.create(username: 'LewisHamilton', password: 'password')
pw = User.create(username: 'PabloWalker', password: 'password')

one = Photo.create(
  user_id: 1,
  url: "https://res.cloudinary.com/dfkydaeys/image/upload/v1497250083/instagram/vjns3sizrejxhkrbooyi.jpg",
  caption: "what moves you? #porsche #930 #explore",
  location: "New York, NY"
)

two = Photo.create(
  user_id: 1,
  url: "https://res.cloudinary.com/dfkydaeys/image/upload/v1497266268/instagram/chjckfqpor3m4rdf0zqr.jpg",
  caption: "The Man, The Myth, The Legend. #MagnusWalker #Porsche #901",
  location: "Los Angelos, Ca"
)

three = Photo.create(
  user_id: 2,
  url: "https://res.cloudinary.com/dfkydaeys/image/upload/v1497267747/instagram/rveqwxnbludviv73zpym.jpg",
  caption: "1 of 5!!! Thanks Pagani #TeamAMG #TeamPagani",
  location: "Rome, Italy"
)

four = Photo.create(
  user_id: 2,
  url: "https://res.cloudinary.com/dfkydaeys/image/upload/v1497268237/instagram/usydhbwt5ey9zf8emdc6.jpg",
  caption: "I live for this moment #TeamAMG #TeamPagani ",
  location: "Yas Island Marina Circuit, Abu Dhabi",
)

five = Photo.create(
  user_id: 3,
  url: "https://res.cloudinary.com/dfkydaeys/image/upload/v1497268696/instagram/axyg8eh3iegqt9aftcpm.jpg",
  caption:
   "Sometimes the hurdles aren't really hurdles at all. They're welcome challenges, tests.",
  location: "Needville, Tx"
)

six = Photo.create(
  user_id: 3,
  url: "https://res.cloudinary.com/dfkydaeys/image/upload/v1497269088/instagram/pdum8vb1g7vryxvmjyv6.jpg",
  caption: "“If one day the speed kills me, don't cry. Because I was smiling.”",
  location: "Las Vegas, Nevada"
)
