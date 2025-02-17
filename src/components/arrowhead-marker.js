// @flow

import * as React from 'react';
import { DEFAULT_EDGE_ARROW_SIZE } from '../constants';

type IArrowheadMarkerProps = {
  edgeArrowSize?: number,
  filtered?: boolean,
};

function ArrowheadMarker({
  edgeArrowSize = DEFAULT_EDGE_ARROW_SIZE,
  filtered = false,
}: IArrowheadMarkerProps) {
  if (edgeArrowSize === 0) {
    return null;
  }

  let id = 'end-arrow';
  let className = 'arrow';

  if (filtered) {
    id += '-filtered';
    className += '-filtered';
  }

  return (
    <marker
      id={id}
      key={id}
      viewBox={`0 -${edgeArrowSize / 2} ${edgeArrowSize} ${edgeArrowSize}`}
      refX={`${edgeArrowSize / 2}`}
      markerWidth={`${edgeArrowSize}`}
      markerHeight={`${edgeArrowSize}`}
      orient="auto"
    >
      <path
        className={className}
        d={`M0,-${edgeArrowSize / 2}L${edgeArrowSize},0L0,${edgeArrowSize / 2}`}
        width={`${edgeArrowSize}`}
        height={`${edgeArrowSize}`}
      />
    </marker>
  );
}

export default ArrowheadMarker;
