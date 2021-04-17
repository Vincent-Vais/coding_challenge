# To run and user test

### 1. docker-compose up --build

### 2. http://localhost:3000/cars -> {"data":[{"_id":"607a4e1e31898200159fc744","make":"Ford","model":"F10","package":"Base","color":"Silver","year":2010,"category":"Truck","mileage":120123,"price":1999900,"id":"JHk290Xj","__v":0},{"_id":"607a4e1e31898200159fc745","make":"Toyota","model":"Camry","package":"SE","color":"White","year":2019,"category":"Sedan","mileage":3999,"price":28999000,"id":"fWI37Ia","__v":0},{"_id":"607a4e1e31898200159fc747","make":"Ford","model":"Bronco","package":"Badlands","color":"Burnt Orange","year":2022,"category":"SUV","mileage":1,"price":4499000,"id":"dku43920s","__v":0},{"_id":"607a4e1e31898200159fc746","make":"Toyota","model":"Rav4","package":"XSE","color":"Red","year":2018,"category":"SUV","mileage":24001,"price":2275000,"id":"1i3xjRIIc","__v":0}]}

### 3. http://localhost:3000/cars/1i3xjRIIc -> {"data":{"\_id":"607a4e1e31898200159fc746","make":"Toyota","model":"Rav4","package":"XSE","color":"Red","year":2018,"category":"SUV","mileage":24001,"price":2275000,"id":"1i3xjRIIc","\_\_v":0}}

## For unit testing: bash test.sh

## In api folder you can find the code that allows client to interact with the service.

## In service folder you can find the code that is responsible for receiving request from an api and responding with data when appopriate.
