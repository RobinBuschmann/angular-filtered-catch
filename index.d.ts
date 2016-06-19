declare namespace angular {

  interface Type extends Function {
  }

  interface IPromise<T> {

    /**
     * Shorthand for promise.then(null, errorCallback) with possibility to filter by error type
     */
    catch<TResult>(errorType: Type, onRejected: (reason: any) => IPromise<TResult>|TResult): IPromise<TResult>;

  }
}
