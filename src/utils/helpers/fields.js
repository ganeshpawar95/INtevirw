import {Icons} from '../index';

const loginFields = [
  {
    label: 'Email',
    name: 'email_phone',
    placeholder: 'Enter your email',
    icons: null,
    left_icon: (
      <Icons.MaterialIcons name={'mail-outline'} size={20} color="#808080" />
    ),
    rules: {
      required: 'Email is required',
      minLength: {
        value: 5,
        message: 'Email should be minimum 5 characters long',
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

export default {loginFields};
