const React = require('react');
const ReactDOM = require('react-dom');

/* Import Components */
const HelloWorld = require('./components/HelloWorld');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basestr: "10",
      basedex: "10",
      basecon: "10",
      baseint: "10",
      basewis: "10",
      basecha: "10",
    };
  }

  render() {
    return (
      <div> I wrap </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('main'));
