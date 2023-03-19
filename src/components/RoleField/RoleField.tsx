import { TextField, Autocomplete } from "@mui/material";
import { useController } from "react-hook-form";

import { FieldProps } from "../../pages/Registration/Registration";

export const RoleField = ({ control, name, label, readOnly }: FieldProps) => {
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
      sx={{ marginTop: 3 }}
      filterSelectedOptions
      onChange={(event, value) => field.onChange(value)}
      options={roles}
      readOnly={readOnly}
      disabled={readOnly}
      renderInput={(params) => (
        <TextField
          error={invalid}
          helperText={invalid ? error?.message : null}
          name={field.name}
          label={label}
          inputRef={ref}
          variant="standard"
          margin="dense"
          required
          color="primary"
          autoComplete="off"
          {...params}
        />
      )}
    />
  );
};
