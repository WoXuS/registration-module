import "./App.css";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Button, ThemeProvider } from "@mui/material";
import InputField from "./components/InputField/InputField";
import RoleField from "./components/RoleField/RoleField";
import { theme } from "./Theme/Theme";
import NumberField from "./components/NumberField/NumberField";
import NextButton from "./components/NextButton/NextButton";

export default function Registration() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  //schema validation from Yup
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: yup
      .string()
      .min(8, "Hasło musi składać się z conajmniej 8 znaków")
      .matches(/[0-9]/, "Hasło musi zawierać conajmniej jedną cyfrę")
      .matches(/[a-z]/, "Hasło musi zawierać conajmniej jedną małą literę")
      .matches(/[A-Z]/, "Hasło musi zawierać conajmniej jedną wielką literę")
      .matches(/[^\w]/, "Hasło musi zawierać conajmniej jeden znak specjalny")
      .required(),
    nip: yup
      .string()
      .matches(/^\d{3}-\d{3}-\d{2}-\d{2}$/, "Please input a correct NIP")
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Potwierdź hasło"),
    phone: yup
      .string()
      .matches(
        /^\+48\s\d{3}-\d{3}-\d{3}$/,
        "Please input a correct phone number"
      ),
    role: yup
      .string()
      .oneOf(
        [
          "Administrator",
          "Dyrektor",
          "Inspektor",
          "Kierownik",
          "Księgowy",
          "Pełnomocnik",
        ],
        "Wybierz rolę użytkownika"
      )
      .required(),
  });

  const {
    handleSubmit,
    control,
    // formState,
    formState: { isValid, isSubmitted },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      nip: "",
      confirmPassword: "",
      role: "Wybierz...",
    },
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    if (step === 2) {
      setLoading(true);
      console.log(JSON.stringify(data));
      setTimeout(function () {
        setLoading(false);
      }, 2000);
    } else {
      console.log("Podsumowanie", data);
      setStep(2);
    }
  };

  //   const handleBack = () => {};
  // console.log(isValid, isDirty)
  // console.log(formState)
  return (
    <Container maxWidth="xs" sx={{ justifyContent: "center" }}>
      <ThemeProvider theme={theme}>
        <form noValidate onSubmit={handleSubmit(submitForm)}>
          <InputField control={control} name={"email"} label={"Adres Email"} />
          <InputField control={control} name={"password"} label={"Hasło"} />
          <InputField
            control={control}
            name={"confirmPassword"}
            label={"Potwierdź Hasło"}
          />
          <NumberField control={control} name={"nip"} label={"NIP"} />
          <NumberField
            control={control}
            name={"phone"}
            label={"Numer Telefonu"}
          />
          <RoleField
            control={control}
            name={"role"}
            label={"Rola Użytkownika"}
          />
          <NextButton
            loading={loading}
            step={step}
            disabled={!isValid && isSubmitted}
          />
        </form>
      </ThemeProvider>
    </Container>
  );
}
