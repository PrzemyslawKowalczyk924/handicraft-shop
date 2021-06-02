## About project

### `front-end`

Project is about selfmade products. You can find Homepage witch display all avalible items in database. You can click on item and quick view his summary. You can also add product from main page, but either from quick view. Inside ProductSummary you can chose quantity of products. Inside the Cart component, you can do it same. But there you have more options, like delete or add comment. Payment section is about to send almoust compleate order. Just past your name, email etc and its done. Sadly the project have many ffunctionalities under construction. But after egzam I will going to finish it.

### `back-end`

testData.js is component witch store all avalible products. db.js & server.js creates testData locally inside of your computer. Backend functionalities serve some CRUD operations, like .get all products, .get by id and .post the order. THUNK operation handle gathering the data from local database to your project.   

## Available Scripts

In the project directory, you can run:
### `npx nodemon backend/server.js`

Runs the server. It will also create a local data base in mongoDB called:<br /> "handicraftShop". 
<br />
Fethermore server is running on [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Moust of test are not compleate.

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
