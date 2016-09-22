angular.module('angular-filtered-catch', [])
  .config(['$provide', function ($provide) {
    $provide.decorator('$q', ['$delegate', function ($delegate) {
      var deferred = $delegate.defer();

      // since the Promise implementation of angular
      // is not available from the outside, we have to
      // retrieve the constructors prototype through
      // deferred.promise constructor property
      deferred.promise.constructor.prototype.catch = function () {

        var onRejected;
        var errorType;

        if (arguments.length === 2) {
          errorType = arguments[0];
          onRejected = arguments[1];

          return this.then(null, function (err) {

            // only if of the error matches the given type
            // the callback will be called
            if (err instanceof errorType) {
              return onRejected(err);
            }

            // otherwise the error will be passed
            return $delegate.reject(err);
          });
        }

        onRejected = arguments[0];

        return this.then(null, onRejected);
      };

      return $delegate;
    }]);
  }]);
