import * as React from 'react';

import { CustomAlarmSoundsViewProps } from './CustomAlarmSounds.types';

export default function CustomAlarmSoundsView(props: CustomAlarmSoundsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
