# Service recieves a request from API and responds with data when appopriate.

## Data is stored in MongoDB. I decided to use non-relational database, mainly beacuse this is a take-home exercise and I was not sure about the time frame that it should be completed in and because it seemed like the data in a spreadsheet was modeled as documents. Using relational database seems to be more beneficial in a long term, because we might want to decide to give a user more features, such as searching for specific car model, type and etc. A big benefit of non-relational databases is that it is easier to add additional fields about the car in the further down the road (such as fuel type, safety rating), but I would not think that information that describes a car will drastically change in future.