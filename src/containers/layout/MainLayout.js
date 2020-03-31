import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function MainLayout({ title, children }) {
  return (
    <Box display="flex" flexDirection="column" pt={3} height="100vh">
      {title && (
        <Box ml={2}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </Box>
      )}
      {children}
    </Box>
  );
}

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default MainLayout;
