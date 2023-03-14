import React from "react";
import { TextField } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { useController } from "react-hook-form";
import { sx_field } from "../../theme/Theme";

const NumberField = ({ name, control, label, readOnly }) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  let nip;
  if (name === "nip") nip = true;

  return (
    <PatternFormat
      value={field.value}
      onValueChange={(values) => {
        field.onChange(values.formattedValue);
      }}
      format={nip ? "###-###-##-##" : "+48 ###-###-###"}
      mask="_"
      customInput={TextField}
      name={field.name}
      inputRef={field.ref}
      label={label}
      variant="standard"
      margin="dense"
      color="primary"
      required={nip}
      error={invalid}
      helperText={invalid ? error?.message : null}
      fullWidth
      disabled={readOnly}
      sx={sx_field}
      inputProps={{ readOnly: readOnly }}
    />
  );
};

export default NumberField;
