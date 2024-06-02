import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoIap.web.ts
// and on native platforms to ExpoIap.ts
import ExpoIapModule from './ExpoIapModule';
import ExpoIapView from './ExpoIapView';
import { ChangeEventPayload, ExpoIapViewProps } from './ExpoIap.types';

// Get the native constant value.
export const PI = ExpoIapModule.PI;

export function hello(): string {
  return ExpoIapModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoIapModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoIapModule ?? NativeModulesProxy.ExpoIap);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoIapView, ExpoIapViewProps, ChangeEventPayload };