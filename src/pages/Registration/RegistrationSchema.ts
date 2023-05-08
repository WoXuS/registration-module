import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Wprowadź poprawny email")
    .required("Podaj adres email"),
  password: yup
    .string()
    .min(8, "Hasło musi składać się z conajmniej 8 znaków")
    .matches(/[0-9]/, "Hasło musi zawierać conajmniej jedną cyfrę")
    .matches(/[a-z]/, "Hasło musi zawierać conajmniej jedną małą literę")
    .matches(/[A-Z]/, "Hasło musi zawierać conajmniej jedną wielką literę")
    .matches(/[^\w]/, "Hasło musi zawierać conajmniej jeden znak specjalny")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Hasła muszą się zgadzać")
    .required("Potwierdź hasło"),
  nip: yup
    .string()
    .matches(/^\d{3}-\d{3}-\d{2}-\d{2}$/, "Wprowadź poprawny numer NIP")
    .required(),
  phone: yup
    .string()
    .notRequired()
    .test("phone", "Wprowadź poprawny numer telefonu", (value) => {
      if (!value) {
        return true;
      }
      return /^\+48\s\d{3}-\d{3}-\d{3}$/.test(value);
    }),
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
    .required("Wybierz rolę użytkownika"),
});

export default schema;
