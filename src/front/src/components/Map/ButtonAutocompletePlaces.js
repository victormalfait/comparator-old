import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { TextField } from "@material-ui/core";

const ButtonAutocompletePlaces = () => (
  <div>
    <GooglePlacesAutocomplete
      onSelect={console.log}
      renderInput={props => (
        <div className="custom-wrapper">
          <TextField
            variant="outlined"
            id="address"
            label="Address"
            name="address"
            fullWidth
          />
        </div>
      )}
      renderSuggestions={(active, suggestions, onSelectSuggestion) => (
        <div className="suggestions-container">
          {suggestions.map(suggestion => (
            <div className="suggestion">{suggestion.description}</div>
          ))}
        </div>
      )}
    />
  </div>
);

export default ButtonAutocompletePlaces;
