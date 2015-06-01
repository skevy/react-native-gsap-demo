GSAP on React Native!
=====================

This is a demo showing basic usage of GSAP's TweenMax and TimelineMax in React Native by simply tweening state using HZDG's awesome [gsap-react-plugin](https://github.com/hzdg/gsap-react-plugin).

![animation](https://raw.githubusercontent.com/skevy/react-native-gsap-demo/master/gif/react-native-gsap.gif)

A few notes:

- This uses my fork of GreenSock-JS (https://github.com/skevy/GreenSock-JS/tree/node-compat), in order to play nice with the fact that React Native doesn't have "document" defined.
- `gsap-react-plugin` handles tweening the state, while React Native itself has already polyfilled `requestAnimationFrame` (which uses React Native's optimized RCTTimer)

### Future Work

This is not the end-all-be-all of React Native animation, and has not been extensively tested more than just a few proof's of concept and with simple animations.

Looking to the future of using GSAP with React Native, a plugin could be written to directly tween using React Native's `setNativeProps`, which would avoid a full render pass, as @sahrens recommends [here](https://github.com/facebook/react-native/issues/46#issuecomment-73266078).
