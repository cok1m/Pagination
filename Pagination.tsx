//core
import React from 'react';
import ReactPagination from 'react-js-pagination';
import { Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import PrevIcon from '@static/icons/prev.svg';
import NextIcon from '@static/icons/next.svg';

const useStyles = makeStyles(({ palette }: Theme) => ({
  list: {
    display: 'flex',
    textAlign: 'center',
    padding: '0',
    margin: '0',
  },
  item: {
    backgroundColor: palette.background.default,
    marginRight: '4px',
    listStyle: 'none',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
    border: `1px solid ${palette.divider}`,
    borderRadius: '4px',
    textDecoration: 'none',
    color: palette.text.primary,

    '&:hover': {
      backgroundColor: palette.background.paper,
    },
  },
  active: {
    pointerEvents: 'none',
    color: palette.grey[400],

    '& path': {
      fill: palette.grey[400],
    },
  },
  none: {
    display: 'none',
  },
}));

type PaginationPropsType = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onChange: (page: number) => void;
};
export const Pagination: React.FC<PaginationPropsType> = ({ currentPage, totalItems, itemsPerPage, onChange }) => {
  const classes = useStyles();
  return (
    <Grid justifyContent="center" alignItems="center" container>
      <ReactPagination
        totalItemsCount={totalItems}
        itemsCountPerPage={itemsPerPage}
        onChange={onChange}
        activePage={currentPage}
        pageRangeDisplayed={5}
        innerClass={classes.list}
        itemClass={classes.item}
        linkClass={classes.link}
        activeLinkClass={classes.active}
        activeClass={classes.active}
        prevPageText={<PrevIcon />}
        nextPageText={<NextIcon />}
        disabledClass={classes.active}
        itemClassFirst={classes.none}
        itemClassLast={classes.none}
      />
    </Grid>
  );
};
