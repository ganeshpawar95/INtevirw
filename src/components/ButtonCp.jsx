import {GlobalEx} from '../utils';
export default function ButtonCp({
  title = '',
  main_class = '',
  heading_class = '',
  OnPress = () => {},
}) {
  return (
    <GlobalEx.TouchableOpacity
      className={`bg-btn_color mx-3 p-2 rounded-full ${main_class}`}
      onPress={OnPress}>
      <GlobalEx.Heading
        className={`text-center text-btn_text_color  leading-9 text-poppins  font-bold  ${heading_class}`}>
        {title}
      </GlobalEx.Heading>
      {/* <GlobalEx.View
      className=' '
      >

      </GlobalEx.View> */}
    </GlobalEx.TouchableOpacity>
  );
}
