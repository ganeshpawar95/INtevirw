import {GlobalEx, Icons} from '../../utils';
import {HeadingCp, ButtonCp} from '../../components';
import {useLoginHook} from '../../utils/hooks';
export default function HomeScreen() {
  const {user, navigation} = useLoginHook();
  return (
    <GlobalEx.SafeAreaView className="flex-1 m-1">
      <GlobalEx.ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
        }}>
        <GlobalEx.View className="mx-5 ">
          <GlobalEx.View className="justify-center items-center">
            <Icons.Logo width={270} height={200} />
          </GlobalEx.View>

          <GlobalEx.View className="mt-6">
            <HeadingCp
              title={`Welcome  ${user.name} `}
              heading_class="font-bold text-[#000000]"
              main_class={'mx-0 justify-center items-center mt-5'}
            />

            <ButtonCp
              title="Logout"
              main_class={'mt-20'}
              OnPress={() => navigation.navigate('login')}
            />
          </GlobalEx.View>
        </GlobalEx.View>
      </GlobalEx.ScrollView>
    </GlobalEx.SafeAreaView>
  );
}
