import React from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useController } from "react-hook-form";
import { sx_field } from "../../theme/Theme";

const RoleField = ({ control, name, label, readOnly }) => {
  const roles = [
    "Administrator",
    "Dyrektor",
    "Inspektor",
    "Kierownik",
    "Księgowy",
    "Pełnomocnik",
  ];

  const {
    field: { ref, ...field },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  return (
    <Autocomplete
      {...field}
      clearOnEscape
      disablePortal
      sx={sx_field}
      filterSelectedOptions
      name={"autocomplete-" + field.name}
      onChange={(event, value) => field.onChange(value)}
      options={roles}
      readOnly={readOnly}
      disabled={readOnly}
      renderInput={(params) => (
        <TextField
          error={invalid}
          helperText={invalid ? error.message : null}
          name={field.name}
          label={label}
          inputRef={ref}
          variant="standard"
          margin="dense"
          fullWidth
          required
          color="primary"
          autoComplete="off"
          {...params}
        />
      )}
    />
  );
};

export default RoleField;
