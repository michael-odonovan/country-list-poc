import { object, string } from 'yup';

export const validationSchema = object().shape({
  firstName: string()
    .required("First Name is a required field.")
    .min(2, "Please enter your full first name.")
    .matches(
      /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u,
      "This field must only contain letters."
    ),
  secondName: string()
    .required("Second Name is a required field.")
    .min(2, "Please enter your full second name.")
    .matches(
      /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u,
      "This field must only contain letters."
    ),
  email: string()
    .required("Email is a required field.")
    .email("Email must be valid.")
    .max(64, "Email can be no longer than 64 characters"),
  addressLine1: string()
    .required("Address Line 1 is a required field.")
    .min(2, "Please enter your full second name.")
    .matches(
      /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u,
      "This field must only contain letters."
    ),
});


