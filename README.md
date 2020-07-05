# Learning the clean architecture on node.js
## Create the mongo locally

1. Create a container with mongo
    > ```
    > docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4
    > ```

2. Go to a specific folder in the root project called ***databaseScript*** and run the script inside the folder, this script will create the database for the code
    > ```
    > node script
    > ```


## Run the server
1. To run the code just use the 
    > ```
    > npm run dev
    > ```
2. Then the only option developed yet is the 
    > POST 
    > ``` 
    > {
    >   "name": "Pikachu",
    >   "cost": 1000,
    >   "quantity": 500,
    >   "description": "Is a pokemon type thunder"
    >}
    > ```
    >
