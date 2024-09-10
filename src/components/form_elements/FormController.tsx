import {GlobalEx, Icons as Icon} from '../../utils/index';
import TextInputBox from './TextInputBox';

import CheckBoxCp from './CheckBox';

export default function FormController({
  label = null,
  name = '',
  placeholder = '',
  sub_placeholder = null,
  secureTextEntry = false,
  keyboardTypes = 'default',
  control,
  rules = {},
  form_input_type = 'text',
  formClass = '',
  left_icon = null,
  right_icon = null,
}) {
  return (
    <GlobalEx.Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <GlobalEx.FormControl
          isInvalid={error == undefined ? false : true}
          className={
            formClass.length != 0 ? `border-1 mb-3 ${formClass}` : ' mt-2'
          }>
          {label && (
            <GlobalEx.FormControl.Label className="font-poppins font-normal text-[#000000] mb-2">
              {label}
            </GlobalEx.FormControl.Label>
          )}
          {form_input_type == 'text' && (
            <TextInputBox
              value={value}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              keyboardTypes={keyboardTypes}
              left_icon={left_icon}
              right_icon={right_icon}
              error={error}
            />
          )}
          {form_input_type == 'checkbox' && (
            <CheckBoxCp
              label={placeholder}
              sub_label={sub_placeholder}
              value={value}
              onChange={onChange}
            />
          )}
          {error && (
            <GlobalEx.FormControl.ErrorMessage
              leftIcon={<GlobalEx.WarningOutlineIcon size="xs" />}>
              {error.message}
            </GlobalEx.FormControl.ErrorMessage>
          )}
        </GlobalEx.FormControl>
      )}
    />
  );
}
