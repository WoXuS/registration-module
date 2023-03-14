import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ThemeProvider, Typography } from "@mui/material";
import InputField from "../../components/InputField/InputField";
import RoleField from "../../components/RoleField/RoleField";
import { theme } from "../../theme/Theme";
import NumberField from "../../components/NumberField/NumberField";
import NextButton from "../../components/NextButton/NextButton";
import { schema } from "./RegistrationSchema";
import { motion } from "framer-motion";

export default function Registration() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitted },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      nip: "",
      role: null
    },
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    if (readOnly === true) {
      setLoading(true);
      setTimeout(() => {
        setApiError(true);
        console.log("Problem łączenia z bazą. Zapisane dane rejestracji:");
        console.log(data);
      }, 2000);
    } else {
      setAnimation(true);
      //Adding a delay so nothing changes during the animation
      setTimeout(() => {
        setReadOnly(true);
      }, 500);
    }
  };

  const handleBack = () => {
    setAnimation(false);
    setTimeout(() => {
      setReadOnly(false);
      setApiError(false);
      setLoading(false);
    }, 500);
  };

  const variants = {
    editable: { x: ["0vh", "-60vh", "0vh"] },
    notEditable: { x: ["0vh", "-60vh", "0vh"] },
  };

  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", margin: "unset" }}>
      <Typography variant="h2" color="#006293" fontWeight="bold">
        Rejestracja
      </Typography>
      <motion.div
        animate={animation ? "notEditable" : "editable"}
        variants={variants}
      >
        <Typography variant="h5" sx={{ marginY: 2 }}>
          {readOnly ? <>Sprawdź poprawność danych</> : <>Wprowadź dane</>}
        </Typography>
        <ThemeProvider theme={theme}>
          <form noValidate onSubmit={handleSubmit(submitForm)}>
            <InputField
              control={control}
              name={"email"}
              label={"Adres Email"}
              readOnly={readOnly}
            />
            <InputField
              control={control}
              name={"password"}
              label={"Hasło"}
              readOnly={readOnly}
              handleShowPassword={handleShowPassword}
              showPassword={showPassword}
            />
            <InputField
              control={control}
              name={"confirmPassword"}
              label={"Potwierdź Hasło"}
              readOnly={readOnly}
              showPassword={showPassword}
              handleShowPassword={handleShowPassword}
            />
            <NumberField
              control={control}
              name={"nip"}
              label={"NIP"}
              readOnly={readOnly}
            />
            <NumberField
              control={control}
              name={"phone"}
              label={"Numer Telefonu"}
              readOnly={readOnly}
            />
            <RoleField
              control={control}
              name={"role"}
              label={"Rola Użytkownika"}
              readOnly={readOnly}
            />
            <NextButton
              loading={loading}
              readOnly={readOnly}
              disabled={!isValid && isSubmitted}
              apiError={apiError}
              handleBack={handleBack}
            />
          </form>
        </ThemeProvider>
      </motion.div>
    </Container>
  );
}
