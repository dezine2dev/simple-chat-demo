import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import ChatPage from './pages/chat/chat';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Box>
  );
}

export default App;
