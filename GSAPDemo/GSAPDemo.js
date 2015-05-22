'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} = React;


var TweenableImage = React.createClass({

  getInitialState: function() {
    return {
      top: 150,
      left: 20,
      opacity: 0,
      rotation: 0
    };
  },

  getTween: function(property, finalValue,  duration, options) {
    if (!options) {
      options = {};
    }
    var finalState = {};
    finalState[property] = finalValue;
    return TweenMax.to(this, duration, Object.assign({}, { state: finalState }, options));
  },

  render: function() {
    var animatableStyles = {
      top: this.state.top,
      left: this.state.left,
      opacity: this.state.opacity,
      transform: [{
        rotate: `${this.state.rotation}deg`
      }]
    };

    return (
      <View style={[{width: 200, height: 200, position: 'absolute'}, animatableStyles]}>
        <Image {...this.props} style={{ width: 200, height: 200 }}/>
      </View>
    );
  }
});

var GSAPDemo = React.createClass({

  componentDidMount: function() {
    setTimeout(() => {
      this.startAnimation();
    }, 500);
  },

  startAnimation: function() {

    var timeline = new TimelineMax({
      repeat: -1
    });

    timeline.add(this.refs.image1.getTween('opacity', 1, 3));

    timeline.add(this.refs.image1.getTween('top', '+=100', 2.5, { easing: Power4.easeIn }));

    timeline.add(this.refs.image1.getTween('opacity', .5, 1));

    timeline.add(this.refs.image1.getTween('left', '+=75', .5, { easing: Expo.easeInOut }));

    timeline.add(this.refs.image1.getTween('rotation', 360, 1, { easing: Power2.easeInOut }));

    timeline.add(this.refs.image1.getTween('left', '+=75', .5, { easing: Expo.easeInOut }));

    timeline.add(this.refs.image1.getTween('top', '-=100', 2.5, { easing: Expo.easeInOut }));

    timeline.add([
      this.refs.image1.getTween('left', '-=150', 1.5, { easing: Expo.easeInOut }),
      this.refs.image1.getTween('opacity', 0, 1.5, { easing: Expo.easeInOut })
    ], '+=0', 'start');
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TweenableImage ref="image1" source={require('image!react')} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

module.exports = GSAPDemo;
