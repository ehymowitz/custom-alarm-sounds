import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to CustomAlarmSounds.web.ts
// and on native platforms to CustomAlarmSounds.ts
import CustomAlarmSoundsModule from './CustomAlarmSoundsModule';
import CustomAlarmSoundsView from './CustomAlarmSoundsView';
import { ChangeEventPayload, CustomAlarmSoundsViewProps } from './CustomAlarmSounds.types';

// Get the native constant value.
export const PI = CustomAlarmSoundsModule.PI;

export function hello(): string {
  return CustomAlarmSoundsModule.hello();
}

export async function setValueAsync(value: string) {
  return await CustomAlarmSoundsModule.setValueAsync(value);
}

const emitter = new EventEmitter(CustomAlarmSoundsModule ?? NativeModulesProxy.CustomAlarmSounds);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { CustomAlarmSoundsView, CustomAlarmSoundsViewProps, ChangeEventPayload };
