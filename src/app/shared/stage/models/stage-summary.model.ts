/**
 * Represents summary data describing a Stage
 *
 * @interface StageSummary
 */
export interface StageSummary {
  name: string;
  gameName: string;
  Type: number;
}

/**
 * Type guard for the StageSummary interface
 *
 * @param {*} stage the variable to validate
 * @returns {this is StageSummary}
 */
export function isStageSummary(stage): stage is StageSummary {
  /**/
  // console.log('  isStageSummary()');
  /**/
  // console.log(`    * stage: ${JSON.stringify(stage)}`);
  if (typeof stage.name !== 'string') {
    return false;
  } else if (typeof stage.gameName !== 'string') {
    return false;
  } else if (typeof stage.Type !== 'number') {
    return false;
  }
  /**/
  // console.log('    * returning true');
  return true;
}