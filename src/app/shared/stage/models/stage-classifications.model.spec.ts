import { isStageClassifications } from './stage-classifications.model';
import * as STAGE_CLASSES from './mocks/stage-classifications';

fdescribe('StageClassificationsModel', () => {

  function _testBadData(problem) {
    /**/
    // console.log(`=== SPEC - CHECK STAGE DIMENSIONS RANGE DATA TYPE (${problem}) ===`);
    // console.log(`BAD_DATA[${problem}]: ${JSON.stringify(STAGE_DIMENSIONS_RANGE.BAD_DATA[problem])}`);
    expect(isStageClassifications(STAGE_CLASSES.BAD_DATA[problem])).toBe(false);
  }
  describe('isStageClassifications()', () => {
    it('should treat a valid stage classifications object as StageClassifications', () => {
      let validClasses = STAGE_CLASSES.VALID;
      expect(isStageClassifications(validClasses)).toBe(true);
    });
    
    describe('data validation', () => {

      it('should reject a classifications object with a non-string gameName', () => {
        _testBadData('gameNameNotString');
      });

      it('should reject a classifications object with a non-string series', () => {
        _testBadData('seriesNotString');
      });

      it('should reject a classifications object with a non-numerical tourneyPresence', () => {
        _testBadData('tourneyPresenceNotNumber');
      });

    });
  });
});