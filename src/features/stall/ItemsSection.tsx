import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ItemCard from './ItemCard';
import { IItemDetail } from '../../types';

interface IProps {
  itemsArray: IItemDetail[];
}

export const ItemsSection = (props: IProps) => {
  console.log(props);
  return (
    <Grid container xs={12} lg={12} justify="space-between" direction="row">
      {props.itemsArray.map((item) => (
        <ItemCard itemDetails={item} key={item._id} />
      ))}
    </Grid>
  );
};