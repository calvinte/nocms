var NoCMS = NoCMS || {};
NoCMS.Resource = Class.extend({
  /**
   * Function initiates the NoCMS.Resource Class.
   * @param reference as HTMLElement with tagName of 'SCRIPT' or 'LINK'.
   * @param callback as Function.
   */
  init: function(reference, callback) {
    if (typeof reference === 'string') {
      reference = $('[src="' + reference + '"]').get()[0];
    }
    this.src = reference.src || reference.href;
    this.load(callback);
  },
  /**
   * Function loads external resource via `reference`, should be a quick
   * request, as in most cases the server will respond with
   * `304, Not Modified`.
   * @param callback as Function.
   */
  load: function(callback) {
    var Resource = this;
    $.get(this.src, {}, function(data) {
      Resource.data = data;
      if (callback) callback.call(Resource);
    });
  },
});

