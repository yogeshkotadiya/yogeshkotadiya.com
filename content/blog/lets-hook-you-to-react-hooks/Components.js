import React from "react";

// export default class AppClass extends React.Component {
//   contructor(props) {
//     super(props);
//     state = {
//       name : "Yogesh";
//     }
//     this.handleNameChange = this.handleNameChange.bind(this);
//     // ✅ We have to bind 'this' for method to work.
//   }
//   handleNameChange(event) {
//     this.setState({ name: event.target.value });
//   }

//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />
//       </>
//     );
//   }
// }

export default function AppFunction() {
  const [name, setName] = React.useState("Yogesh");
  // Here we declare the state and pass a initial value.

  function handleNameChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>{name}</p>
    </div> //You can also write method inline using arrow function
  );
}
