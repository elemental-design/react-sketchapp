import { default as _render } from './render';
import { default as _renderToJSON } from './renderToJSON';
import { makeSymbol as _makeSymbol, SymbolMasterProps } from './symbol';
import {
  SketchLayer,
  WrappedSketchLayer,
  PlatformBridge,
  SketchDocumentData,
  WrappedSketchDocument,
  SketchDocument,
} from './types';
import { FileFormat1 as FileFormat } from '@sketch-hq/sketch-file-format-ts';
import { default as _TextStyles } from './sharedStyles/TextStyles';

function getDefaultPlatformBridge() {
  return require('./platformBridges/NodeMacOSBridge');
}

export async function render(
  element: React.ReactElement,
  container?: SketchLayer | WrappedSketchLayer,
  platformBridge: PlatformBridge = getDefaultPlatformBridge(),
): Promise<SketchLayer | Array<SketchLayer>> {
  return _render(element, container, platformBridge);
}

export async function renderToJSON(
  element: React.ReactElement,
  platformBridge: PlatformBridge = getDefaultPlatformBridge(),
): Promise<FileFormat.AnyLayer> {
  return _renderToJSON(element, platformBridge);
}

export async function makeSymbol(
  Component: React.ComponentType<any>,
  symbolProps?: string | SymbolMasterProps,
  document?: SketchDocumentData | SketchDocument | WrappedSketchDocument,
  bridge: PlatformBridge = getDefaultPlatformBridge(),
) {
  return _makeSymbol(Component, symbolProps, document, bridge);
}

export const TextStyles = _TextStyles(getDefaultPlatformBridge);

export * from './index.common';
