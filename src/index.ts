import {
  EventEmitter,
  NativeModulesProxy,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to CustomAlarmSounds.web.ts
// and on native platforms to CustomAlarmSounds.ts
import { ChangeEventPayload } from "./CustomAlarmSounds.types";
import CustomAlarmSoundsModule from "./CustomAlarmSoundsModule";

// Get the native constant value.
export const PI = CustomAlarmSoundsModule.PI;

export function test(): string {
  return CustomAlarmSoundsModule.test();
}

export async function setValueAsync(value: string) {
  return await CustomAlarmSoundsModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  CustomAlarmSoundsModule ?? NativeModulesProxy.CustomAlarmSounds
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ChangeEventPayload };
