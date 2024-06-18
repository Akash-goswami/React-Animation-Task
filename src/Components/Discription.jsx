import React from "react";

export default function Discription() {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="font-bold text-[20px]">
          Task 1: Fade-In Animation for a Specific Component{" "}
        </h1>
        <h2 className="font-bold text-red-200">Brief Description</h2>
        <strong>Fade-In Animation for a Component</strong>
        <p>
          This component utilizes <span className="font-bold">react-spring </span>to implement a smooth fade-in
          animation. When the component enters the screen, it gradually
          transitions its opacity from 0 to 1, creating a visually appealing
          effect.
        </p>
        <ul>
          <li>
            <span className="font-bold">React Spring:</span> The useSpring hook from react-spring is employed to
            create the fade-in animation. By transitioning the opacity from 0 to
            1, the component appears smoothly on the screen.
          </li>
          <li>
            <span className="font-bold">State Management:</span> The component uses a flip state to control the
            direction and reset behavior of the animation, ensuring it runs
            correctly each time it is triggered.
          </li>
          <li>
            <span className="font-bold"> Component Structure: </span>The component is structured into two main
            sections. The left side contains an encouragement message for
            students to join a MERN Stack course, while the right side includes
            an enrollment form with fields for name, email, phone, course
            selection, and a text area for additional information.
          </li>
          <li>
            <span className="font-bold">Animation:</span> The entire section is wrapped in an animated.div
            component, which applies the fade-in animation to the content
            inside.
          </li>
        </ul>
      </div>
      <div className="text-center my-10">
      <h1 className="font-bold text-[20px]">
          Task 2: slide-In Animation for a Specific Component{" "}
        </h1>
        <h2 className="font-bold text-red-200">Brief Description</h2>
        <strong>Slide-In Animation for a List of Items
        </strong>
        <p>
        This component implements a slide-in animation for a list of courses using React. When the list of items loads, each item slides in from right to left with a slight delay between each item, creating a smooth and engaging animation effect.
        </p>
        <ul>
            <li>
            <span className="font-bold">Courses List:</span> The component displays a list of courses, each represented by an item that will animate into view when the component is rendered.
            </li>
            <li>
            <span className="font-bold">State Management:</span> The isVisible state controls whether the items are visible or not. Initially set to false, it changes to true after a short delay to trigger the animation
            </li>
            <li>
            <span className="font-bold">Effect Hook:</span> The useEffect hook is used to set a timer that updates the isVisible state to true after 100 milliseconds. This triggers the slide-in animation for all list items.
            </li>
            <li>
            <span className="font-bold">Animation:</span> Each list item (li) is assigned classes for the initial and final states of the animation. If isVisible is true, items will have translate-x-0 and opacity-100, making them fully visible and in their final position. If isVisible is false, items will have translate-x-full and opacity-0, positioning them off-screen and making them invisible.
            </li>
            <li>
            <span className="font-bold">Transition Delay:</span> The style attribute with transitionDelay applies a slight delay to each item based on its index, creating a staggered slide-in effect.
            </li>
        </ul>
      </div>
      <div className="text-center my-10">
      <h1 className="font-bold text-[20px]">
          Task 3: Rotation Animation for a Button {" "}
        </h1>
        <h2 className="font-bold text-red-200">Brief Description</h2>
        <strong>Rotation Animation for a Button
        </strong>
        <p>
        This component implements a rotation animation for a button using React and Tailwind CSS. When the button is clicked, the icon inside it rotates 360 degrees clockwise and returns to its original position.
        </p>
        <ul>
            <li>
            <span className="font-bold">Button Component:</span> The component renders a button with a circular background and a rotating icon from the <span className="font-bold">react-icons library </span>(FaSyncAlt in this case).
            </li>
            <li>
            <span className="font-bold">State Management:</span> The <span className="font-bold">isRotating</span> state manages whether the rotation animation should be active or not. It toggles to true when the button is clicked, triggering the rotation.
            </li>
            <li>
            <span className="font-bold">Click Handler:</span> The handleClick function sets isRotating to true when the button is clicked. It then uses setTimeout to reset isRotating back to false after 1000 milliseconds (1 second), which controls the duration of the animation.
            </li>
            <li>
            <span className="font-bold">Animation:</span> The rotation animation is achieved using inline styles and Tailwind CSS classes. The transform style property rotates the icon from 0deg to 360deg clockwise when isRotating is true, and returns it to 0deg when isRotating is false. The transition property ensures the animation is smooth over a duration of 1 second (1s).
            </li>
            <li>
            <span>User Interaction:</span> This interactive animation enhances user engagement by providing visual feedback when the button is clicked, making the interface more dynamic and intuitive.
            </li>
        </ul>
      </div>
    </div>
  );
}
