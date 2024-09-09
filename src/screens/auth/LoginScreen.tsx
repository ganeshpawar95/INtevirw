import {GlobalEx, Icons} from '../../utils';
import {
  HeadingCp,
  ButtonCp,
  HaveAccountCP,
  FormController,
} from '../../components';
import {useLoginHook} from '../../utils/hooks';
import fields from '../../utils/helpers/fields';
export default function LoginScreen() {
  const {
    navigation,
    useState,
    control,
    onSubmitLogin,
    handleSubmit,
    errors,
    show_alert,
  } = useLoginHook();

  return (
    <GlobalEx.SafeAreaView className="flex-1">
      <GlobalEx.ImageBackground
        source={Icons.Login_bg}
        resizeMode="stretch"
        className="flex-1"
        style={{
          marginBottom: -10,
        }}>
        <GlobalEx.ScrollView>
          <GlobalEx.View className="mx-5 ">
            <GlobalEx.View className="justify-center items-center">
              <Icons.Logo width={270} height={200} />
            </GlobalEx.View>
            <HeadingCp
              title="Sign In"
              heading_class="font-bold text-[#000000]"
              main_class={'mx-0'}
            />
            <HeadingCp
              title="Hi ! Welcome back, you"
              sub_title="have been missed"
              is_sub={true}
              heading_class={'my-0 font-medium text-base '}
              main_class={'my-3 mx-0'}
            />
            {fields.loginFields.map(field => (
              <FormController
                placeholder={field.placeholder}
                control={control}
                label={field.label}
                name={field.name}
                Icons={field.icons}
                rules={field.rules}
                left_icon={field?.left_icon}
                right_icon={field?.right_icons}
              />
            ))}
            <HeadingCp
              title="Forgot password ?"
              // sub_title="have been missed"
              is_sub={false}
              heading_class={
                'my-0 font-medium text-base text-right text-[#000000] underline'
              }
              main_class={'my-1 mx-0'}
            />
          </GlobalEx.View>
          <GlobalEx.View className="mb-5">
            <ButtonCp
              title="Sign In"
              main_class={'my-4'}
              OnPress={handleSubmit(onSubmitLogin)}
            />
            <GlobalEx.View className=" flex-row justify-center">
              <GlobalEx.Text className="text-[#A3CFFF] text-center">
                __________________
              </GlobalEx.Text>
              <GlobalEx.Text className="text-center self-center content-center">
                or
              </GlobalEx.Text>
              <GlobalEx.Text className="text-[#A3CFFF] text-center">
                __________________
              </GlobalEx.Text>
            </GlobalEx.View>

            <HaveAccountCP
              title="Don’t have an account?"
              sub_title="Sign Up"
              main_class="bottom-0"
            />
            <HeadingCp
              title="By login or sign up, you agree to our terms of use and privacy policy"
              sub_title="have been missed"
              is_sub={false}
              heading_class={'my-0 font-medium text-base text-center'}
              main_class={'my-0 mx-0'}
            />
            <GlobalEx.View className=" h-1/5" />
          </GlobalEx.View>
        </GlobalEx.ScrollView>
      </GlobalEx.ImageBackground>
    </GlobalEx.SafeAreaView>
  );
}
