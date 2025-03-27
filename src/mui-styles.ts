import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


// 1. using styled

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  margin: theme.spacing(1),
  color: theme.palette.success.main,
}));

const HomePage = () => (<StyledTitle variant="h1">Hello</StyledTitle>);

// 2. using props

const HomePage = () => (
  <Typography variant="h1" color="success.main" fontWeight="bold" margin={1}>
    Hello
  </Typography>
);

// 3. using sx property

const HomePage = () => (
  <Typography
    variant="h1"
    sx={{
      fontWeight: 'bold',
      margin: 1,
      color: 'success.main',
    }}
  >
    Hello
  </Typography>
);
