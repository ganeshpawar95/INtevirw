import {useState} from 'react';
import {GlobalEx} from '../index';

export default function useLoginHook() {
  const navigation = GlobalEx.useNavigation();
  const route = GlobalEx.useRoute();
  const [show_alert, setShowAlert] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = GlobalEx.useForm({});

  const onSubmitLogin = data => {
    // setShowAlert(!show_alert);
    navigation.navigate('dashboard');
  };

  const onSubmitForgotPassword = data => {
    console.log('data', data);
    // navigation.navigate('enter-otp-password');
  };

  const onSubmitVerifyOtp = data => {
    // navigation.navigate('reset-password');
  };

  const onSubmitResetPassword = data => {
    // navigation.navigate('login');
  };

  return {
    navigation,
    route,
    useState,
    control,
    handleSubmit,
    errors,
    onSubmitLogin,
    show_alert,
    secureTextEntry,
    setSecureTextEntry,
    onSubmitForgotPassword,
    onSubmitVerifyOtp,
    onSubmitResetPassword,
  };
}
