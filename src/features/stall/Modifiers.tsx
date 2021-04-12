import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from '@material-ui/core';
import Typography from '../../Typography';
import ModifierList from './ModifierList';
import { IModifier } from '../../types';

interface IProps {
  name: string;
  options: IModifier[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },

    accordianstyle: {
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'inherit',
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    listItems: {
      padding: '0px 0px',
    },
    summary: {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  })
);

export default function Modifiers(props: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordianstyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.summary}
        >
          <Typography variant="h4">{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.listItems}>
          <ModifierList options={props.options} />
        </AccordionDetails>
      </Accordion>
      <Divider light className={classes.divider} />
    </div>
  );
}
