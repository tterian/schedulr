# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([{ name: 'Johnny Walker', sex: 'Male', priority: 'false' }, { name: 'Bruce Almighty', sex: 'Female', priority: 'true' }])

users = User.all

users.each do |user|
	user.orders.create!(title: 'book request', body: 'Please ship me my fav book', status: 'On hold')
end
