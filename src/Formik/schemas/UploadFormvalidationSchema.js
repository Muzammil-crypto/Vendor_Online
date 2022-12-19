import * as yup from "yup";

const UploadFormValidationScheme = yup.object().shape({
  company: yup
    .string()
    .matches(/(\w).+/, "Enter a valid Company Name")
    .required("Company Name is Required"),
  shopTitle: yup
    .string()
    .matches(/(\w).+/, "Enter a valid Shop Title")
    .required("Shop Title is Required"),
  description: yup
    .string()
    .min(100)
    .matches(/(\w).+/, "Enter a valid description")
    .required("Description is Required"),
  budget: yup.number().positive().required("Budget is Required"),
});
export default UploadFormValidationScheme;
