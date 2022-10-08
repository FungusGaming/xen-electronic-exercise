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

### Unit test for backend and frontend
- Unit test going to be explore

## Document criteria for assessment
### Application
- [x] Design and implementation of REST API for web application feature
- [x] View the list of the products based on the product categories
- [x] Add the products to the shopping cart
- [x] View the products listed on the shopping cart
- [x] Remove the products listed on the shopping cart
- [ ] Checkout shopping cart and continue their transaction to payment page
- [x] Responsive web application with UI built using React
- [ ] Unit test for backend of the application
- [x] Readme content about how to build and start the application
#### Criteria
- [ ] A pull request against `master` branch of your repository with a clear description of the change
and purpose and merge it
- [ ] Unit test with at least `80%` code coverage across lines, statements, and branches
- [X] Combine code repository for both API and UI application and include a shortcut command on how
to start both application (Used concurrently lib to run both site at same time)
- [ ] [BONUS] Add Unit test for the front end application
- [ ] [BONUS] Add Typescript support

### Implement Tooling
- [X] eslint - for linting (installed but require format)
- [X] nyc - for code coverage (script require to explore, installed but require write script)
- [ ] pre-push - for git pre push hook running tests (installed but removed - having problem with npm-cli script)
#### Criteria
- [ ] Create a pull request against `master` branch of your repository with the new tooling and merge it
- [ ] eslint should have an opinionated format
- [ ] nyc should aim for test coverage of `80%` across lines, statements, and branches
- [ ] pre-push should run the tests before allowing pushing using `git`
- [ ] Ensure that tooling is connected to `npm test`
- [ ] [BONUS] Add hot reloading feature for local environment development

### Security
- [ ] Ensure the system is not vulnerable to SQL injection [link](https://www.owasp.org/index.php/SQL_Injection)
- [ ] [BONUS] Implement an additional web application security improvement of your choice

### Deployment
- [ ] Front-end
- [ ] Back-end

## TODO
- signin post cors problem
- "opinionated" eslint format (ongoing on FE)
- unit test (ongoing on FE)
- login credential for express
- upon checkout add cart data to backend
- express-session
- deployment
- pre-push
- nyc script
- sql injection for mongo
- pagination on product list (BE and FE)
