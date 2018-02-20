class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    };
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey, these are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById(`app`));

// const app = {
//   title: 'Visibility Toggle',
//   details: 'Here are some details that should now appear',
//   hidden: true
// };

// const toggleVisibility = () => {
//   app.hidden = !app.hidden;

//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleVisibility}>
//         {app.hidden ? 'Show details' : 'Hide details'}
//       </button>
//       <p hidden={app.hidden}>{app.details}</p>
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// }

// render();