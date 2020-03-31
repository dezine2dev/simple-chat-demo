import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      fullWidth: true,
      variant: 'outlined',
      margin: 'dense'
    },
    MuiInputLabel: {
      shrink: true
    }
  },
  palette: {
    primary: {
      main: '#3e8ef7'
    }
  }
});

export default theme;
