import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  background: red;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <StyledDiv />
        lets go
      </div>
    );
  }
}

export default App;
