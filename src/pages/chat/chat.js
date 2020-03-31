import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import AppActions from '../../redux/AppRedux';
import { Button } from '../../components/common';
import MainLayout from '../../containers/layout/MainLayout';
import MsgBox from './msgBox';

const useStyles = makeStyles(theme => ({
  textarea: {
    width: '100%',
    minHeight: theme.spacing(4),
    fontSize: theme.spacing(3)
  }
}));

function ChatPage({ msgs, sendMsg }) {
  const [msg, setMsg] = useState();
  const classes = useStyles();

  const handleMsgClick = () => {
    if (msg) sendMsg(msg);
    setMsg('');
  };

  return (
    <MainLayout title="Chat Page">
      <Box
        border={1}
        borderColor="grey.300"
        bgcolor="white"
        flex={1}
        overflow="auto"
      >
        {msgs &&
          Boolean(msgs.length) &&
          msgs.map(message => <MsgBox key={message.id} value={message.msg} />)}
      </Box>
      <Box
        position="fixed"
        width={1}
        bottom={0}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
        bgcolor="grey.100"
        borderTop={1}
        borderColor="grey.400"
      >
        <Box component="span" flexGrow={1} my={1}>
          <TextareaAutosize
            rowsMax={3}
            width={1}
            value={msg}
            onChange={e => setMsg(e.target.value)}
            className={classes.textarea}
          />
        </Box>
        <Button ml={3} my={1} onClick={handleMsgClick}>
          Send
        </Button>
      </Box>
    </MainLayout>
  );
}

ChatPage.propTypes = {
  sendMsg: PropTypes.func,
  msgs: PropTypes.array
};

const mapStateToProps = ({ app: { msgs } }) => ({
  msgs
});

const mapDispatchToProps = dispatch => ({
  sendMsg: msg => dispatch(AppActions.setMsgs(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
