<ScrollAnimation delay={4000}
  animateIn='tada'
  initiallyVisible={true}>
  <h1>
    delay
  </h1>
</ScrollAnimation>
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
<ScrollAnimation animateIn="fadeIn">
  Some Text
</ScrollAnimation>
Properties:
offset - default 150

The "viewport" is by default 150 pixels from the top and bottom of the screen. When part of an element is within the "viewport", animateIn is triggered. When no part of the element is in the "viewport", animateOut is triggered. This size of the "viewport" can be overridden by setting the offset property.

animateIn

Any css animation defined against a class, be it from animate.css or an animation that you have created yourself. The Animation triggers when the element enters the "viewport" (see offset property for more details on this).

animateOut

Any css animation defined against a class, be it from animate.css or an animation that you have created yourself. The Animation triggers when the element is leaving the "viewport" (see offset property for more details on this).

duration - default 1

Animation duration in seconds.

initiallyVisible - default false

Whether the element should be visible to begin with or not.

delay - default 0

How long to delay the animation for (in milliseconds) once it enters or leaves the view.

animateOnce - default false

Whether the element should only animate once or not.

style - default {}

A style object can be assigned to any ScrollAnimation component and will be passed to the rendered dom element. Its probably best to avoid manually setting animationDuration or opacity as the component will modify those attributes.

scrollableParentSelector

By default the code checks to see if the element is visible within the window. This can be changed to any other parent element of the ScrollAnimation by adding a css selector pointing to the parent that you wish to use.

afterAnimatedIn

Callback function to run once the animateIn animation has completed. Receives the visibility of the element at time of execution. Example:

function(visible) {
  if (visible.inViewport) {
    // Part of the element is in the viewport (the area defined by the offset property)
  } else if (visible.onScreen) {
    // Part of the element is visible on the screen
  } else {
    // Element is no longer visible
  }
}