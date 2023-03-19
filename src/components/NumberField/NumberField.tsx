import { TextField } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { useController } from "react-hook-form";

import { FieldProps } from "../../pages/Registration/Registration";

export const NumberField = ({ name, control, label, readOnly }: FieldProps) => {
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
      sx={{ marginTop: 3 }}
      inputProps={{ readOnly: readOnly }}
    />
  );
};
