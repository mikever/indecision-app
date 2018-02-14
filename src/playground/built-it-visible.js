const app = {
  title: 'Visibility Toggle',
  details: 'Here are some details that should now appear',
  hidden: true
};

const toggleVisibility = () => {
  app.hidden = !app.hidden;

  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {app.hidden ? 'Show details' : 'Hide details'}
      </button>
      <p hidden={app.hidden}>{app.details}</p>
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
}

render();