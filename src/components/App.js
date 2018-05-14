import React from 'react';

class App extends React.Component {
  state = {
    component: null
  };

  importComponent = () => {
    import('./Modal').then(component => {
      console.log(component);
      this.setState({
        component: component.default
      });
    });
  };

  getComponent = () => {
    const Component = this.state.component;
    return <Component />;
  };

  render() {
    return (
      <div>
        <button onClick={this.importComponent}>Click me</button>
        <button onClick={this.importComponent}>Click me too</button>
        {this.state.component && this.getComponent()}
      </div>
    );
  }
}

export default App;
