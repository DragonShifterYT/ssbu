import { StageDimensions, isStageDimensions } from './stage-dimensions.model';
import { StageDimensionsRange, isStageDimensionsRange } from './stage-dimensions-range.model';

/**
 * Represent's an array of Stages' summary dimension data
 *
 * @export
 * @interface StageDimensionsSet
 */
export interface StageDimensionsSet {
  dimensions: StageDimensions[];
  ranges: {
    blastzoneWidth: StageDimensionsRange;
    stageLength: StageDimensionsRange;
    offStageDistance: StageDimensionsRange;
    ceilingHeight: StageDimensionsRange;
  }
}

export function isStageDimensionsSet(set): set is StageDimensionsSet {
  /**/
  // console.log('StageDimensionsSetModel::isStageDimensionsSet()');
  if (!Array.isArray(set.dimensions)) {
      /**/
      // console.log(`  * set.dimensions is not array`);
      return false;
    }

  for (const stageDimensions of set.dimensions) {
    if (!isStageDimensions(stageDimensions)) { return false; }
  }

  if (( !isStageDimensionsRange(set.ranges.blastzoneWidth) )
    || ( !isStageDimensionsRange(set.ranges.stageLength) )
    || ( !isStageDimensionsRange(set.ranges.offStageDistance) )
    || ( !isStageDimensionsRange(set.ranges.ceilingHeight) )
    ) { return false; }

  return true;
}
