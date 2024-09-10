import {GlobalEx} from '../../utils';

export default function CheckBoxCp({
  label = '',
  sub_label = '',
  sub_label_class = '',
  main_label_class = '',
  value = '',
  onChange = () => {},
}) {
  return (
    <GlobalEx.Checkbox value={value} className="mt-2" onChange={onChange}>
      <GlobalEx.View className=" flex-row mt-2">
        <GlobalEx.Text
          className={`text-[#000000] text-poppins_bold font-black ${main_label_class}`}>
          {' '}
          {label}
        </GlobalEx.Text>
        {sub_label && (
          <GlobalEx.Text
            className={`ml-2 text-gray-100 text-poppins_bold font-black ${sub_label_class} `}>
            {sub_label}
          </GlobalEx.Text>
        )}
      </GlobalEx.View>
    </GlobalEx.Checkbox>
  );
}
