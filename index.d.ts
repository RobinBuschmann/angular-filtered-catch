declare namespace angular {

  interface IPromise<T> {

    /**
     * Shorthand for promise.then(null, errorCallback) with possibility to filter by error type
     */
    catch<TResult, TError extends Error|Error>(errorType: {new (...arg): TError}, onRejected: (reason: TError) => IPromise<TResult>|TResult): IPromise<TResult>;

  }
}
