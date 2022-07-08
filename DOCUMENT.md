## Documentation of project

### Main objective
A web application where customers can purchase their products online

### Frontend
React framework
Axios library for backend api call
Font-awesome icon library

### Backend
MongoDB Atlas cloud

### Cart system
React redux to storing the cart data temporary.
#### Why?
#### If saving in backend
- how to determine whose cart
- require to remove after checkout
- 

### Unit test for backend and frontend
- 

## Document criteria for assessment
### Application
1. [x] Design and implementation of REST API for web application feature
- [x] View the list of the products based on the product categories
- [x] Add the products to the shopping cart
- [x] View the products listed on the shopping cart
- [x] Remove the products listed on the shopping cart
- [] Checkout shopping cart and continue their transaction to payment page
2. [x] Responsive web application with UI built using React
3. [] Unit test for backend of the application
4. [x] Readme content about how to build and start the application
#### Criteria
1. [] A pull request against `master` branch of your repository with a clear description of the change
and purpose and merge it
2. [] Unit test with at least `80%` code coverage across lines, statements, and branches
3. [X] Combine code repository for both API and UI application and include a shortcut command on how
to start both application (Used concurrently lib to run both site at same time)
4. [] [BONUS] Add Unit test for the front end application
5. [] [BONUS] Add Typescript support

### Implement Tooling
1. [X] eslint - for linting (installed but require format)
2. [X] nyc - for code coverage (script require to explore, installed but require write script)
3. [] pre-push - for git pre push hook running tests (installed but removed - having problem with npm-cli script)
#### Criteria
1. [] Create a pull request against `master` branch of your repository with the new tooling and merge it
2. [] eslint should have an opinionated format
3. [] nyc should aim for test coverage of `80%` across lines, statements, and branches
4. [] pre-push should run the tests before allowing pushing using `git`
5. [] Ensure that tooling is connected to `npm test`
6. [] [BONUS] Add hot reloading feature for local environment development

### Security
1. [] Ensure the system is not vulnerable to SQL injection [link](https://www.owasp.org/index.php/SQL_Injection)
2. [] [BONUS] Implement an additional web application security improvement of your choice

### Deployment
1. [] Front-end
2. [] Back-end


## TODO
- upon checkout add cart data to backend
- eslint
- nyc
- pre-push
- unit test
- sql injection for mongo
- login credential for express
- express-session
- deployment
