import {Icons} from '../index';

const loginFields = [
  {
    label: 'Phone',
    name: 'phone',
    placeholder: 'Enter your phone number',
    icons: null,
    left_icon: <Icons.Feather name={'phone'} size={18} color="#808080" />,
    rules: {
      required: 'Phone number is required',
      minLength: {
        value: 10,
        message: 'Phone number should be minimum 10 characters',
      },
    },
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: 'Password',
    right_icons: (
      <Icons.MaterialIcons name={'visibility-off'} size={20} color="#808080" />
    ),

    left_icon: <Icons.Feather name={'lock'} size={20} color="#808080" />,

    rules: {
      required: 'Password is required',
      minLength: {
        value: 5,
        message: 'Password should be minimum 5 characters long',
      },
    },
    secureTextEntry: true,
  },
];

const registerFields = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name',
    icons: null,
    left_icon: (
      <Icons.Ionicons name={'person-outline'} size={20} color="#808080" />
    ),
    rules: {
      required: 'Name is required',
      minLength: {
        value: 5,
        message: 'Name should be minimum 5 characters long',
      },
    },
  },

  {
    label: 'Phone',
    name: 'phone',
    placeholder: 'Enter your phone number',
    icons: null,
    left_icon: <Icons.Feather name={'phone'} size={18} color="#808080" />,
    rules: {
      required: 'Phone number is required',
      minLength: {
        value: 10,
        message: 'Phone number should be minimum 10 characters',
      },
    },
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: 'Password',
    right_icons: (
      <Icons.MaterialIcons name={'visibility-off'} size={20} color="#808080" />
    ),

    left_icon: <Icons.Feather name={'lock'} size={20} color="#808080" />,

    rules: {
      required: 'Password is required',
      minLength: {
        value: 5,
        message: 'Password should be minimum 5 characters long',
      },
    },
    secureTextEntry: true,
  },
  {
    label: null,
    name: 'terms_conditions ',
    placeholder: 'Agree with',
    sub_placeholder: 'Terms & Conditions',
    form_input_type: 'checkbox',
    rules: {
      required: 'Terms & Conditions  is required',
    },
  },
];

export default {loginFields, registerFields};
