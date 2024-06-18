## How to Run
1. Unzip the Akash_React folder.
2. Open Terminal and run : npm run dev

Task Descriptions for README File

Task 1: Fade-In Animation for a Specific Component
Description:
Implement a fade-in animation for a specific component that smoothly appears when it enters the screen.

Requirements:
The component should smoothly transition its opacity from 0 to 1 when it is rendered, creating a visually appealing effect.

Implementation Details:

Utilizes react-spring for animation.
Uses the useSpring hook to manage the animation state.
Includes an encouragement message on the left side and an enrollment form on the right side.
Applies the fade-in animation to the entire section using animated.div from react-spring.
Task 2: Slide-In Animation for a List of Items
Description:
Implement a slide-in animation for a list of items where each item slides in from left to right with a slight delay between each item.

Requirements:
When the list of items loads, each item should animate into view with a sliding motion from left to right. There should be a gradual delay between the appearance of each item to create a staggered effect.

Implementation Details:

Defines an array of course names.
Manages animation with state using useState and useEffect.
Applies CSS classes (transition-all, transform, duration-500, ease-in-out) from Tailwind CSS to achieve the sliding animation.
Uses inline styles for transitionDelay to create the staggered effect based on the item index.
Task 3: Rotation Animation for a Button
Description:
Implement a rotation animation for a button where the icon inside the button rotates 360 degrees clockwise and returns to its original position upon clicking.

Requirements:
When the button is clicked, the icon inside it should rotate 360 degrees clockwise and smoothly return to its original position without interruption.

Implementation Details:

Uses useState to manage the rotation state (isRotating).
Implements the rotation animation using inline styles (transform) and Tailwind CSS classes (transition-transform, duration-1000) for smooth animation.
Integrates FaSyncAlt icon from react-icons for visual representation of the rotation.
Provides visual feedback to users by animating the button's icon upon click interaction.



Live link to View my project: https://akash-react-task.netlify.app/


