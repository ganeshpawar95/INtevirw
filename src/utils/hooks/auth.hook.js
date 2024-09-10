import {useState} from 'react';
import {GlobalEx} from '../index';

import {loginAuth, RegisterAuth} from '../../store/slices/auth';

export default function useLoginHook() {
  const navigation = GlobalEx.useNavigation();
  const dispatch = GlobalEx.useDispatch();
  const route = GlobalEx.useRoute();
  const [show_alert, setShowAlert] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const {loading, user} = GlobalEx.useSelector(state => state.auth);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = GlobalEx.useForm({phone: '', password: '', name: ''});

  const onSubmitLogin = data => {
    dispatch(loginAuth(data))
      .unwrap()
      .then(resp => {
        console.log('ers', resp);
        if (resp.status == false) {
          GlobalEx.Toast.show({
            type: 'error',
            text1: resp.message,
          });
          return false;
        } else {
          reset();
          GlobalEx.Toast.show({
            type: 'success',
            text1: resp.message,
          });
          navigation.navigate('home');
        }
      })
      .catch(e => {
        GlobalEx.Toast.show({
          type: 'error',
          text1: e.message,
        });
      });
  };

  const onSubmitRegistration = data => {
    dispatch(RegisterAuth(data))
      .unwrap()
      .then(resp => {
        if (resp.status == true) {
          reset();
          GlobalEx.Toast.show({
            type: 'success',
            text1: resp.message,
          });
          navigation.navigate('login');
        }
      })
      .catch(e => {
        GlobalEx.Toast.show({
          type: 'error',
          text1: e.message,
        });
      });
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
    onSubmitRegistration,
    loading,
    user,
    reset,
  };
}
