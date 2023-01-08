import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { CustomAlarmSoundsViewProps } from './CustomAlarmSounds.types';

const NativeView: React.ComponentType<CustomAlarmSoundsViewProps> =
  requireNativeViewManager('CustomAlarmSounds');

export default function CustomAlarmSoundsView(props: CustomAlarmSoundsViewProps) {
  return <NativeView {...props} />;
}
