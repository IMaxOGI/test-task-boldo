import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').max(150, 'max is 150').required('field is required'),
});
