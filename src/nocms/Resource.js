define(
  [
    'lib/Class/Class',
    'lib/jQuery/jquery-2.0.3',
  ],
  function(Class) {
    return Class.extend({
      /**
       * Function initiates the NoCMS.Resource Class.
       * @param reference as HTMLElement with tagName of 'SCRIPT' or 'LINK'.
       * @param callback as Function.
       */
      init: function(reference, callback) {
        this.reference = reference
        this.load(callback);
        this._resources.push(this);
      },
      /**
       * Function loads external resource via `reference`, should be a quick
       * request, as in most cases the server will respond with
       * `304, Not Modified`.
       * @param callback as Function.
       */
      load: function(callback) {
        var Resource = this;
        $.get(this.reference, {}, function(data) {
          Resource.data = data;
          if (callback) callback.call(Resource);
        });
      },
      _resources: [],
    });
  }
);

