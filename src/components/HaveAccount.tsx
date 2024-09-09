import {GlobalEx} from '../utils';
export default function HaveAccountCP({
  title = '',
  sub_title = '',
  main_class = '',
  heading_class = '',
}) {
  return (
    <GlobalEx.Box className={`flex-row justify-center my-5 ${main_class}`}>
      <GlobalEx.Heading className="text-gray-100  text-poppins font-medium text-lg">
        {title}
      </GlobalEx.Heading>
      <GlobalEx.TouchableOpacity className="mx-4">
        <GlobalEx.Heading
          className={`text-black text-[#000000]  text-lg font-bold  ${heading_class}`}>
          {sub_title}
        </GlobalEx.Heading>
      </GlobalEx.TouchableOpacity>
    </GlobalEx.Box>
  );
}
