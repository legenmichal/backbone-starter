var BackBone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var AppView = BackBone.View.extend({
    el: '#app',
    appTpl: _.template( $('#app-template').html() ),
    render: function(){
        this.$el.html( this.appTpl( this.model.toJSON() ) );
        return this;
    }
});

module.exports = AppView;