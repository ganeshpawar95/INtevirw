import {GlobalEx, Icons} from '../../utils';
import {HeadingCp, ButtonCp, HaveAccountCP} from '../../components';
export default function StartScreen() {
  const nav = GlobalEx.useNavigation();
  return (
    <GlobalEx.SafeAreaView className="flex-1">
      <GlobalEx.ImageBackground
        source={Icons.Start_bg}
        resizeMode="stretch"
        className="flex-1"
        style={{
          marginTop: -13,
        }}>
        <GlobalEx.ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}>
          <GlobalEx.View className="flex-1 justify-end mt-10">
            <GlobalEx.View className="justify-center items-center">
              <Icons.Logo />
            </GlobalEx.View>
            <HeadingCp
              title="Sparkle & Shine  Transform Your Drive with Every Wash!"
              main_class={'my-3'}
            />
          </GlobalEx.View>
          <GlobalEx.View className="flex-1 justify-end  mb-5">
            <ButtonCp
              title="Let’s Start"
              main_class={'my-1'}
              OnPress={() => nav.navigate('login')}
            />
            <HaveAccountCP
              title="Already  have an account?"
              sub_title="Sign in"
              main_class="bottom-0"
              onPress={() => nav.navigate('login')}
            />
          </GlobalEx.View>
        </GlobalEx.ScrollView>
      </GlobalEx.ImageBackground>
    </GlobalEx.SafeAreaView>
  );
}
