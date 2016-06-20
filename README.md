# angular-filtered-catch

This project is an extension for angulars promise implementation, which adds the possibility to filter catches by a specified error type.

## Usage

Add _angular-filtered-catch_ as dependency in your project.

````
angular.module('your-ng-app', ['angular-filtered-catch']);

````

````

  // your specific error implementation
  class FooError extends Error {}
 

  // somewhere in your code
  $q
  .when()
  .then(() => {
  
    // ...
  
    throw new FooError();
  })
  .then(() => {
    // never executed
  })
  .catch(FooError, err => {
  
    // handle FooError
  })
  .catch(err => {
  
    // handle all other errors
  })

````

## TypeScript support

This project also contains of a typescript declaration file, which extends angulars IPromise interface.