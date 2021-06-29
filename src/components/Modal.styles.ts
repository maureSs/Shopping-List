import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #FFFFFF',
      boxShadow: theme.shadows[10],
      padding: theme.spacing(5, 7, 7),
    },
    addItemTag: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Nanum Gothic',
      fontSize: 20,
    },
    inputStyle: {
      height: 40,
      width: 300,
      marginRight: 10,
      marginBottom: 30,
      fontSize: 20,
    },
    buttonX: {
      float: 'left',
      backgroundColor: '#FFFF',
      border: '2px solid #000',
      '&:hover': {
        background: '#FFFF',
      },
    },
    buttonV: {
      float: 'right',
      marginRight: 10,
      backgroundColor: '#FFFF',
      border: '2px solid #000',
      '&:hover': {
        background: '#FFFF',
      },
    },
  })
);

export default useStyles;
