import {GlobalEx} from '../utils';
export default function IconButtonCp({
  title = '',
  Icons = null,
  mainClass = '',
  onPress = () => {},
}) {
  return (
    <GlobalEx.TouchableOpacity className={` ${mainClass}`} onPress={onPress}>
      {Icons}
    </GlobalEx.TouchableOpacity>
  );
}
