# romanNumeral

**My Approach**
I wanted to get the application working first and then add some test cases. I started with a sample express application. I used the following (https://expressjs.com/en/starter/generator.html). Inside the application I went to the routes folder and created a new route called roman (roman.js) I added the conversion logic in the roman.js file. I first added some error checking to make sure the input that was passed in is valid or not. In this case a valid parameter would be a positive number between 1 and 3999. If an invalid input was inserted, the application will throw an error. I created an object called romanNumbers which maps integers to their corresponding roman numeral. This is objects contains the mappings for the following numbers: 1,4,5,9,10,40,50,90,100,400,500,900,10000. I then iterate through the romanNumerals object and subtract the largest possible roman numeral value from the number that was inputted until the number is zero. Througout this process the corresponding roman numeral is appended to the a string called result. I then pass the string into my JSON object to follow the requirements of this assignment `{
              “input” : “1”,
              “output” : “I”
           }`
Finally I send the JSON object as a JSON response.

I created some test cases for the route using mocha, chai, and supertest. I put some test cases to check the if the correct roman numerals were outputted from a given integer. I also created a Dockerfile so I can containerize the application and run it as a container on my computer. 

**Running the project**

1) clone the repository
2) run `npm install` to install the dependencies 
3) run `npm start` (server should run on localhost:8080)
4) start querying! example query (http://localhost:8080/romannumeral?number=12)

**Running unit tests. This assumes you're in the root directory**

1) run `npx mocha routes/roman.test.js`

**Building the Docker image and running it**

1) Go to the root directory and build the image  `docker build -t int-to-roman .` Note: you can name the Docker image however you like.
2) Run the image `docker run -p 8080:8080 int-to-roman`
3) start querying! example query (http://localhost:8080/romannumeral?number=12). Your ports may differ if you exposed different ports in the previous step

**Requirements and Dependencies** 
1) When building and running this application, I was using Node version v16.3.0
2) Mocha was used as the testing framework and Chai was used as the assertion library. Supertest was used to make HTTP requests to my application.
3) For building and running my Docker image, I was using Docker version: 20.10.17

   






