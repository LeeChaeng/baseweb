/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {useStyletron} from '../styles/index.js';
import PinHead from './pin-head.js';
import {
  StyledFloatingMarkerRoot,
  StyledFloatingMarkerAnchorContainer,
  StyledFloatingMarkerPinHeadContainer,
} from './styled-components.js';
import type {FloatingMarkerPropsT} from './types.js';
import {
  FLOATING_MARKER_ANCHOR_POSITIONS,
  PINHEAD_SIZES,
  PINHEAD_TYPES,
  FLOATING_MARKER_ANCHOR_TYPES,
  anchorSize,
} from './constants.js';
const FloatingMarker = ({
  color,
  background,
  label,
  size = PINHEAD_SIZES.medium,
  anchor = FLOATING_MARKER_ANCHOR_POSITIONS.bottomLeft,
  endEnhancer,
  startEnhancer,
  anchorType = FLOATING_MARKER_ANCHOR_TYPES.round,
}: FloatingMarkerPropsT) => {
  const [, theme] = useStyletron();
  const {
    colors: {backgroundPrimary, backgroundInversePrimary, primaryA, primaryB},
  } = theme;
  color = color || primaryA;
  background = background || backgroundPrimary;

  const anchorPinHeadSize =
    anchorType === FLOATING_MARKER_ANCHOR_TYPES.round
      ? PINHEAD_SIZES.xSmallCircle
      : PINHEAD_SIZES.xSmallSquare;
  return (
    <StyledFloatingMarkerRoot data-baseweb="map-marker">
      <StyledFloatingMarkerPinHeadContainer
        $anchor={anchor}
        $anchorSize={anchorSize}
      >
        <PinHead
          size={size}
          color={color}
          background={background}
          type={PINHEAD_TYPES.floating}
          label={label}
          startEnhancer={startEnhancer}
          endEnhancer={endEnhancer}
        />
      </StyledFloatingMarkerPinHeadContainer>
      {anchor !== FLOATING_MARKER_ANCHOR_POSITIONS.none && (
        <StyledFloatingMarkerAnchorContainer>
          <PinHead
            size={anchorPinHeadSize}
            color={primaryB}
            background={backgroundInversePrimary}
            type={PINHEAD_TYPES.fixed}
          />
        </StyledFloatingMarkerAnchorContainer>
      )}
    </StyledFloatingMarkerRoot>
  );
};

export default FloatingMarker;
