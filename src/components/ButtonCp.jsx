import {GlobalEx} from '../utils';
export default function ButtonCp({
  title = '',
  main_class = '',
  heading_class = '',
  OnPress = () => {},
  loading = false,
}) {
  return (
    <GlobalEx.TouchableOpacity
      className={`bg-btn_color mx-3 p-1 rounded-full ${main_class}`}
      disabled={loading ? true : false}
      onPress={OnPress}>
      {!loading ? (
        <GlobalEx.Heading
          className={`text-center text-btn_text_color  leading-9 p-1 text-lg	 text-poppins  font-bold  ${heading_class}`}>
          {title}
        </GlobalEx.Heading>
      ) : (
        <GlobalEx.View>
          <GlobalEx.Spinner size={'lg'} />
        </GlobalEx.View>
      )}
    </GlobalEx.TouchableOpacity>
  );
}
