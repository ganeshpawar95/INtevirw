import {GlobalEx, Icons} from '../../utils';
import {
  HeadingCp,
  ButtonCp,
  HaveAccountCP,
  FormController,
  IconButtonCp,
} from '../../components';
import {useLoginHook} from '../../utils/hooks';
import fields from '../../utils/helpers/fields';
export default function RegisterScreen() {
  const {
    navigation,
    useState,
    control,
    onSubmitRegistration,
    handleSubmit,
    loading,
    reset,
  } = useLoginHook();

  return (
    <GlobalEx.SafeAreaView className="flex-1">
      <GlobalEx.ImageBackground
        source={Icons.Register_bg}
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
              title="Sign Up"
              heading_class="font-bold text-[#000000]"
              main_class={'mx-0'}
            />
            <HeadingCp
              title="Fill in the below form and add life to"
              sub_title="your car!"
              is_sub={true}
              heading_class={'my-0 font-medium text-base '}
              main_class={'my-3 mx-0'}
            />
            {fields.registerFields.map(field => (
              <FormController
                placeholder={field.placeholder}
                control={control}
                label={field.label}
                name={field.name}
                Icons={field.icons}
                rules={field.rules}
                left_icon={field?.left_icon}
                right_icon={field?.right_icons}
                form_input_type={field.form_input_type}
                sub_placeholder={field.sub_placeholder}
              />
            ))}
          </GlobalEx.View>
          <GlobalEx.View className="mb-5 mt-3">
            <ButtonCp
              title="Sign Up"
              main_class={'my-4'}
              loading={loading}
              OnPress={handleSubmit(onSubmitRegistration)}
            />

            <HaveAccountCP
              title="Already have an account?"
              sub_title="Sign In"
              main_class="bottom-0"
              heading_class="underline"
              onPress={() => {
                navigation.navigate('login');
                reset();
              }}
            />
            <HeadingCp
              title="By login or sign up, you agree to our terms of use and privacy policy"
              sub_title="have been missed"
              is_sub={false}
              heading_class={'my-0 font-medium text-base text-center'}
              main_class={'my-0 mx-0'}
            />
            <GlobalEx.View className=" h-2/6" />
          </GlobalEx.View>
        </GlobalEx.ScrollView>
      </GlobalEx.ImageBackground>
    </GlobalEx.SafeAreaView>
  );
}
