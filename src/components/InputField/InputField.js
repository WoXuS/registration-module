import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useController } from "react-hook-form";
import { sx_field } from "../../Theme/Theme";

const InputField = ({ control, name, label }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
          sx={sx_field}
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
          sx={sx_field}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </>
  );
};

export default InputField;
