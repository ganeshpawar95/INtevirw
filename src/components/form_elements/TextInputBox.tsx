import {GlobalEx, Icons as Icon} from '../../utils';

export default function TextInputBox({
  Icons = null,
  placeholder = '',
  secureTextEntry = false,
  onClickIcons = () => {},
  keyboardTypes = 'default',
  InputClass = '',
  onChange = () => {},
  onBlur = () => {},
  value = '',
  left_icon = null,
  right_icon = null,
}) {
  return (
    <GlobalEx.Input
      placeholder={placeholder}
      // borderWidth="0"
      borderColor={'#808080'}
      focusable={false}
      isFocused={false}
      // className={`bg-gray-50 border-0 font-poppins font-normal leading-tight py-4 px-5 ${InputClass}`}
      color={'#808080'}
      keyboardType={keyboardTypes}
      secureTextEntry={secureTextEntry}
      fontSize={'sm'}
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
      outlineColor={'#808080'}
      InputLeftElement={
        <GlobalEx.Icon as={left_icon} size={6} ml="2" color="muted.400" />
      }
      InputRightElement={
        right_icon != null ? (
          <GlobalEx.TouchableOpacity>
            <GlobalEx.Icon as={right_icon} size={6} mr="2" color="muted.400" />
          </GlobalEx.TouchableOpacity>
        ) : (
          []
        )
      }
      variant={'outline'} // Use unstyled to avoid default focus styles
      focusOutlineColor="transparent" // Ensures no outline color on focus
    />
  );
}
