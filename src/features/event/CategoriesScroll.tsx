import React from 'react';
import Grid from '@material-ui/core/Grid';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { theme as Theme } from '../../theme';
import { getCategories } from '../../service';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
    },
    scrollRoot: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(2.5),
    },
    categoryWrapper: {
      marginTop: theme.spacing(4)
    },
    headingRow: {},
    accountHeading: {},
    logoImage: {
      marginRight: theme.spacing(2.5),
    },
  });

interface IProps extends WithStyles<typeof styles> {}

interface IState {
  value: number;
  categories: { name: string; image: string }[];
}

class CategoriesScroll extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: 0,
      categories: getCategories(),
    };
  }

  setValue = (val: number) => {
    this.setState({ value: val });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <Grid container direction="column">
          <Grid
            item
            xs={12}
            className={`${classes.categoryWrapper} startJustifiedFlex`}
          >
            <Typography variant="h6" display="inline">
              Categories
            </Typography>
          </Grid>
          <div className={classes.scrollRoot}>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.value}
                onChange={(evt, newValue) => this.setValue(newValue)}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {this.state.categories.map((category) => (
                  <Tab
                    label={category.name}
                    key={category.name}
                    icon={<img src={category.image} />}
                  />
                ))}
              </Tabs>
            </AppBar>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CategoriesScroll);
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
