import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function MsgBox({ value }) {
  return (
    <Box
      margin={1}
      padding={2}
      bgcolor="secondary.main"
      border={1}
      borderColor="grey.400"
      borderRadius={5}
    >
      {value.split('\n').map((line, i) => {
        return (
          <Box key={`line-${i}`}>
            {line}
            <br />
          </Box>
        );
      })}
    </Box>
  );
}

MsgBox.propTypes = {
  value: PropTypes.string
};

export default MsgBox;
