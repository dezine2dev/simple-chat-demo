import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

function MsgBox({ value }) {
  return (
    <Box mx={1} my={2}>
      <Card variant="outlined">
        <Box px={2} py={1}>
          {value.split('\n').map((line, i) => {
            return (
              <Box key={`line-${i}`}>
                {line}
                <br />
              </Box>
            );
          })}
        </Box>
      </Card>
    </Box>
  );
}

MsgBox.propTypes = {
  value: PropTypes.string
};

export default MsgBox;
