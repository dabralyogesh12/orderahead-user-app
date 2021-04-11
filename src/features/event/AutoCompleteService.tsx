import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import InputBase from '@material-ui/core/InputBase';
import get from 'lodash/get';
import IconButton from '@material-ui/core/IconButton';
import { isDesktop, initDetailsMap, getAddressObject } from '../../utils';
import { setLocation } from './EventSlice';
import { ILocation } from '../../types';

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  iconButton: {
    padding: 10,
  },
  optionContainer: {
    background: '#FFFFFF',
  },
  optionRow: {
    height: '80px',
  },
  textInput: {
    height: 'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  InputContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
}));

export interface IProps {}

const GoogleMaps = (props: IProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);

  const selectLocation = (item: ILocation) => {
    dispatch(setLocation({ location: item }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loadData = async (placeId: string) => {
    const result = await initDetailsMap(placeId);
    const lng = result.geometry?.location.lng();
    const lat = result.geometry?.location.lat();
    selectLocation({ lat, lng });
  };

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        if (get(autocompleteService, 'current.getPlacePredictions')) {
          // @ts-ignore
          autocompleteService.current.getPlacePredictions(request, callback);
        }
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;
    // @ts-ignore
    if (!autocompleteService.current && window.google) {
      // @ts-ignore
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      // @ts-ignore
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch(
      { input: inputValue },
      // @ts-ignore
      (results: google.maps.places.AutocompletePrediction[]) => {
        if (active) {
          // @ts-ignore
          let newOptions: google.maps.places.AutocompletePrediction[] = [];

          if (value) {
            // @ts-ignore
            newOptions = [value];
          }

          if (results) {
            newOptions = [...newOptions, ...results];
          }
          // @ts-ignore
          setOptions(newOptions);
          console.log('newOptions', newOptions);
        }
      }
    );

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Autocomplete
          fullWidth
          // @ts-ignore
          getOptionLabel={(option) =>
            // @ts-ignore
            typeof option === 'string' ? option : option.description
          }
          // @ts-ignore
          onChange={(event, newValue) => {
            // @ts-ignore
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
          }}
          // @ts-ignore
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          value={value}
          style={{ width: '100%' }}
          options={options}
          includeInputInList
          filterSelectedOptions
          // @ts-ignore
          renderInput={(params) => (
            <Grid container>
              <Grid
                container
                direction="row"
                className={classes.InputContainer}
                ref={params.InputProps.ref}
              >
                <IconButton className={classes.iconButton} aria-label="menu">
                  <img src="/img/search_adorn_start.png" />
                </IconButton>
                <InputBase
                  className={classes.textInput}
                  placeholder="Times Square, Manhattan, NY..."
                  {...params.inputProps}
                  // @ts-ignore
                />
                {!isDesktop() && (
                  <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                  >
                    <img src="/img/input_adorn_end.png" />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          )}
          // @ts-ignore
          renderOption={(option) => {
            const matches =
              // @ts-ignore
              option.structured_formatting.main_text_matched_substrings;
            const parts = parse(
              // @ts-ignore
              option.structured_formatting.main_text,
              // @ts-ignore
              matches.map((match) => [
                match.offset,
                match.offset + match.length,
              ])
            );
            return (
              <Grid
                onClick={() => {
                  // @ts-ignore
                  loadData(option.place_id);
                }}
                container
                item
                xs={12}
                alignItems="center"
                className={classes.optionRow}
              >
                <Grid item>
                  <LocationOnIcon className={classes.icon} />
                </Grid>
                <Grid item xs>
                  {/* @ts-ignore */}
                  {parts.map((part, index) => (
                    <span
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      style={{ fontWeight: part.highlight ? 700 : 400 }}
                    >
                      {part.text}
                    </span>
                  ))}

                  <Typography variant="body2" color="textSecondary">
                    {/* @ts-ignore */}
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            );
          }}
        />
      </Grid>
    </Grid>
  );
};

export default GoogleMaps;
