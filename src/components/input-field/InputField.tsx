import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useController } from "react-hook-form";

import { FieldProps } from "../../pages/Registration/Registration";

interface InputFieldProps extends FieldProps {
  showPassword: boolean | undefined;
  handleShowPassword: (() => void) | undefined;
}

const InputField = ({
  control,
  name,
  label,
  readOnly,
  showPassword,
  handleShowPassword,
}: InputFieldProps) => {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  return (
    <>
      {field.name === "email" && (
        <TextField
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          inputRef={field.ref}
          type={field.name}
          label={label}
          variant="standard"
          margin="dense"
          fullWidth
          required
          autoComplete={name}
          autoFocus
          color="primary"
          error={invalid}
          helperText={invalid ? error?.message : null}
          sx={{ marginTop: 3 }}
          disabled={readOnly}
          InputProps={{
            readOnly: readOnly,
          }}
        />
      )}
      {/* Adding the posibility to uncover password */}
      {(field.name === "password" || field.name === "confirmPassword") && (
        <TextField
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          inputRef={field.ref}
          label={label}
          variant="standard"
          margin="dense"
          fullWidth
          required
          autoComplete={name}
          autoFocus
          color="primary"
          error={invalid}
          helperText={invalid ? error?.message : null}
          type={showPassword ? "text" : "password"}
          sx={{ marginTop: 3 }}
          disabled={readOnly}
          InputProps={{
            endAdornment: field.name === "password" && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            readOnly: readOnly,
          }}
        />
      )}
    </>
  );
};

export default InputField;
