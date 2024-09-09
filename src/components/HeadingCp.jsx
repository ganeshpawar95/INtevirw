import {GlobalEx} from '../utils';
export default function HeadingCp({
  title = '',
  sub_title = '',
  main_class = '',
  heading_class = '',
  sub_heading_class = '',
  is_sub = false,
}) {
  return (
    <GlobalEx.Box className={`mx-6 px-2 ${main_class}`}>
      <GlobalEx.Heading
        className={`text-gray-100  leading-9 text-poppins  font-semibold ${heading_class} `}>
        {title}
      </GlobalEx.Heading>
      {is_sub && (
        <GlobalEx.Heading
          className={`text-gray-100  leading-9 text-poppins  font-semibold ${heading_class} `}>
          {sub_title}
        </GlobalEx.Heading>
      )}
    </GlobalEx.Box>
  );
}
