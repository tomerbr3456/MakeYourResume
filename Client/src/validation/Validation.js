import * as yup from 'yup';
export const yupSchema = yup.object().shape({
  firstName: yup.string()
    .required('First Name is required'),
  lastName: yup.string()
    .required('Last Name is required'),
  jobTitle: yup.string()
    .required('jobTitle is required'),
  aboutMe: yup.string()
    .min(80, 'About me must be at least 6 characters')
    .required('About me is required'),
  siteName: yup.string()
    .required('siteName is required'),
  description: yup.string()
    .min(30, 'description  must be at least 6 characters')
    .required('description is required'),
  resumeLink: yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    )
    .required('resumeLink is required'),
  gitLink: yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    )
    .required('gitLink is required'),
  linkedin: yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    )
    .required('linkedin is required'),
})