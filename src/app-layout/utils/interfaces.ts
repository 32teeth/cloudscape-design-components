// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

export interface SizeControlProps {
  position: 'side' | 'bottom';
  panelRef?: React.RefObject<HTMLDivElement>;
  handleRef?: React.RefObject<HTMLDivElement>;
  setSidePanelWidth: (width: number) => void;
  setBottomPanelHeight: (height: number) => void;
  hasTransitions?: boolean;
}
