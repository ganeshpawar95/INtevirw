import {GlobalEx, Icons as Icon} from '../../utils';

export default function TextInputBox({
  name = '',
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
  error = null,
}) {
  const [is_secure_text, set_is_secure_text] = GlobalEx.useState(true);
  return (
    <GlobalEx.Input
      placeholder={placeholder}
      borderColor={'#808080'}
      focusable={false}
      isFocused={false}
      color={'#808080'}
      keyboardType={name == 'phone' ? 'numeric' : keyboardTypes}
      secureTextEntry={name == 'password' ? is_secure_text : false}
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
          <GlobalEx.TouchableOpacity
            onPress={() => set_is_secure_text(!is_secure_text)}>
            {name == 'password' ? (
              <GlobalEx.Icon
                as={
                  <Icon.MaterialIcons
                    name={is_secure_text ? 'visibility' : 'visibility-off'}
                    size={20}
                    color="#808080"
                  />
                }
                size={6}
                mr="2"
                color="muted.400"
              />
            ) : (
              <GlobalEx.Icon
                as={right_icon}
                size={6}
                mr="2"
                color="muted.400"
              />
            )}
          </GlobalEx.TouchableOpacity>
        ) : (
          []
        )
      }
      variant={'outline'} // Use unstyled to avoid default focus styles
      focusOutlineColor={error == undefined ? '#808080' : 'red'} // Ensures no outline color on focus
    />
  );
}
