import React from 'react';
import IconButton from '../../../common/components/Buttons/IconButton/IconButton';
import {FilmCameraIcon} from '../../../common/components/Icons/FilmCamera/FilmCamera';
import {FilmCameraOffIcon} from '../../../common/components/Icons/FilmCameraOff/FilmCameraOff';

type VideoToggleButton = {
  onPress: () => void;
  active: boolean;
};

const VideoToggleButton: React.FC<VideoToggleButton> = ({onPress, active}) => (
  <IconButton
    Icon={active ? FilmCameraIcon : FilmCameraOffIcon}
    active={active}
    onPress={onPress}
  />
);

export default VideoToggleButton;
