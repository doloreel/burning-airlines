var app = app || {};

app.AirplaneInputView = Backbone.View.extend({
  el: "#airplaneForm",

  events: {
    'click button' : 'createAirplane',
  },

  createSecret: function () {

    console.log('secretInputView created');

    // var secret = new app.Secret();

    // var userContent = this.$el.find("textarea").val();
    // secret.set({
    //   content: userContent
    // });
    // secret.save();
    // app.secrets.add( secret );
    // this.$el.find("textarea").val('').focus();

    // Create a new instance of app.Secret
    // Set the content to be the value that the textarea has
    // save the new instance
    // Add that into the collection
  },

  render: function () {
    console.log( "AirplaneInputView should just have been rendered", this );
    var airplaneInputViewTemplate = $("#airplaneInputViewTemplate").html();
    this.$el.html( airplaneInputViewTemplate );

  }
});
