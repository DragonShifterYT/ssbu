import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DatasetNotFoundError } from '../../errors/dataset-not-found-error.model';
import { NotFoundError } from '../../errors/not-found-error.model';

import { BinnedStageDimensions } from '../models/binned-stage-dimensions.model';
import { BinnedStageDimensionsSet } from '../models/binned-stage-dimensions-set.model';
import { Stage, isStage } from '../models/stage.model';
import { StageDimensions } from '../models/stage-dimensions.model';
import { StageDimensionsBinParams } from '../models/stage-dimensions-bin-params.model';
import { StageDimensionsSet } from '../models/stage-dimensions-set.model';
import { StageDimensionsRange } from '../models/stage-dimensions-range.model';
import { StageMiscInfo, isStageMiscInfoArray } from '../models/stage-misc-info.model';
import { StagePiece } from '../models/stage-piece.model';
import { StagePieceMap, isStagePieceMap } from '../models/stage-piece-map.model';

/**
 * Represents the parameters used to bin an individual dimension
 */
interface BinningParams {
  values: number[];
  range: number;
  bounds: number[];
};

/**
 * Represents the full set of parameters used to bin StageDimensions
 */
interface BinningParamsSet {
  numBins: number;
  blastzoneWidth: BinningParams;
  stageLength: BinningParams;
  offStageDistance: BinningParams;
  ceilingHeight: BinningParams;
}

/**
 * Service class providing summary dimensions stage data
 *
 * @export
 * @class StageDimensionsService
 */
@Injectable({
  providedIn: 'root'
})
export class StageDimensionsService {

  _dimensionsSetFull: StageDimensionsSet = {
    dimensions: [],
    ranges: {
      blastzoneWidth: null,
      stageLength: null,
      offStageDistance: null,
      ceilingHeight: null
    }
  };

  /**
   * Creates an instance of StageDimensionsService.
   *
   * @memberof StageDimensionsService
   */
  constructor() {
  }

  /**
   * Fetches basic dimension data from provided raw stage data
   *
   * @param {Stage[]} stages the raw stage dimension data
   * @param {StagePieceMap[]} pieceMaps the map of which StagePiece from each Stage to retrieve data from
   * @returns {Observable<StageDimensionsSet>}
   * @memberof StageDimensionsService
   */
  getDimensionsFull(stages: Stage[], pieceMaps?: StagePieceMap[]): Observable<StageDimensionsSet> {
    /**/
    // console.log('StageDimensionsService::getDimensionsFull()');
    // console.log(`  * number of stages: ${stages.length}`);
    // console.log(`  * pieceMaps: ${JSON.stringify(pieceMaps)}`);
    if (!Array.isArray(stages)) {
      throw new TypeError('The stages argument was not an array');
    }
    stages.forEach(stage => {
      if (!isStage(stage)) {
        throw new TypeError('The stages argument was not a Stage array');
      }
    });

    if (pieceMaps !== undefined) {
      if (!Array.isArray(pieceMaps)) {
        throw new TypeError('The pieceMaps argument was not an array');
      }
      pieceMaps.forEach(pieceMap => {
        if (!isStagePieceMap(pieceMap)) {
          throw new TypeError('The pieceMaps argument was not a StagePieceMap array');
        }
      });
    }
    
    let fullDimensionsSet$: Observable<StageDimensionsSet> = new Observable<StageDimensionsSet>(observer => {
      let stageDimensions: StageDimensions[] = stages.map((stage) => {
        let name = stage.name;
        let gameName = stage.gameName;
        // most stages have hazardless lvd's ending in "00", but many also don't (e.g. battlefield_common),
        // so we use index 0 instead
        let phase = stage.details[0];

        let blastzones = phase.blast_zones;
        let blastzoneWidth = (blastzones[1] - blastzones[0]);
        let piece: StagePiece = null;
        let pieceMap: StagePieceMap = null;

        if (pieceMaps) {
          pieceMap = pieceMaps.find((map) => map.lvd == phase.lvd);
          /**/
          // console.log(`  * pieceMap: ${JSON.stringify(pieceMap)}`);
          // console.log(`  * phaseLvd: ${phase.lvd}`);
          if (pieceMap) {
            piece = phase.collisions.find((piece) => piece.name == pieceMap.pieceName);
          }
        }

        if (!piece) {
          piece = phase.collisions[0];
        }

        /**/
        // console.log(`  * stage: ${name}`);
        // console.log(`  * gameName: ${gameName}`);
        // console.log(`  * piece: ${piece.name}`);
        // console.log(`---`);
        let leftIndex = piece.materials.findIndex((material) => material.leftLedge === true);
        let rightIndex = piece.materials.findIndex((material) => material.rightLedge === true) + 1;
        let leftLedgePosition = piece.vertex[leftIndex];
        let rightLedgePosition = piece.vertex[rightIndex];

        let stageLength = (rightLedgePosition[0] - leftLedgePosition[0]);
        let offStageDistance = (blastzoneWidth - stageLength) / 2;
        let ceilingHeight = blastzones[2] - ((rightLedgePosition[1] + leftLedgePosition[1]) / 2);
        /**/
        /*console.log(
          `name: ${name}\n\n`
          + `gameName: ${gameName}\n\n`
          + `phase: ${phase.lvd}\n\n`
          + `blastzones: ${blastzones}\n\n`
          + `blastzoneWidth: ${blastzoneWidth}\n\n`
          + `materials: ${JSON.stringify(piece.materials)}\n\n`
          + `vertices: ${JSON.stringify(piece.vertex)}\n\n`
          
          + `leftIndex: ${leftIndex}\n\n`
          + `leftLedge: ${JSON.stringify(piece.materials[leftIndex])}\n\n`
          + `leftVertex: ${JSON.stringify(piece.vertex[leftIndex])}\n\n`
          + `leftLedgeX: ${leftLedgePosition[0]}\n\n`
  
          + `rightIndex: ${rightIndex}\n\n`
          + `rightLedge: ${JSON.stringify(piece.materials[rightIndex])}\n\n`
          + `rightVertex: ${JSON.stringify(piece.vertex[rightIndex])}\n\n`
          + `rightLedgeX: ${rightLedgePosition[0]}\n\n`
          
          + `stageLength: ${stageLength}\n\n`
          + `offStageDistance: ${offStageDistance}\n\n`
          + `ceilingHeight: ${ceilingHeight}\n\n`
        );*/
        return {
          name: name,
          gameName: gameName,
          blastzoneWidth: blastzoneWidth,
          stageLength: stageLength,
          offStageDistance: offStageDistance,
          ceilingHeight: ceilingHeight
        };
      });
      const stageDimensionsRanges = this._getRanges(stageDimensions);
    /**/
    // console.log(`  * ranges: ${stageDimensionsRanges}`);
      this._dimensionsSetFull = { dimensions: stageDimensions, ranges: stageDimensionsRanges };
      observer.next(this._dimensionsSetFull);
      observer.complete();
    });

    return fullDimensionsSet$;
  }

  /**
   * Calculates dimension data with 5-binned statistics about the provided list of stages.
   * getDimensionsFull() must be called before using this method.
   *
   * @param {StageMiscInfo[]} stages the provided stages to calculate stats for
   * @param {boolean} round whether to round values to the nearest integer. Setting round
   * to "true" also classifies stage values as the minimum or maximum in the list based on
   * the integer value, not the original value.
   * @returns {Observable<BinnedStageDimensionsSet>}
   * @memberof StageDimensionsService
   */
  getDimensionsBinned(stages: StageMiscInfo[], round: boolean = false): Observable<BinnedStageDimensionsSet> {
    ///
    // console.group('StageDimensionsService::getDimensionsBinned()');

    // data validation
    if (!this._dimensionsSetFull.dimensions.length) {
      ///
      // console.groupEnd();
      throw new DatasetNotFoundError();
    }

    if (typeof round !== 'boolean') {
      throw new TypeError('round is not of type boolean');
    }

    if (!isStageMiscInfoArray(stages)) {
      throw new TypeError('gameNames is not of type StageMiscInfo[]');
    }

    if (stages.length === 0) {
      ///
      // console.groupEnd();
      throw new NotFoundError();
    }

    const binnedDimensionsSet$: Observable<BinnedStageDimensionsSet> = new Observable<BinnedStageDimensionsSet>(observer => {
      ///
      // console.log('stageDimensionsService::getDimensionsBinned().binnedDimensionsSet$');
      // console.log(`_dimensionsSetFull: ${JSON.stringify(this._dimensionsSetFull)}`);
      // console.log(`gameNames: ${JSON.stringify(gameNames)}`);
      const numBins: number = 5;
      const gameNames: string[] = stages.map(stage => stage.gameName);
      let refStages: StageDimensions[] = this._dimensionsSetFull.dimensions.filter(refStage => {
        return gameNames.includes(refStage.gameName);
      });
      if (round) {
        refStages = refStages.map(stage => {
          return {
            name: stage.name,
            gameName: stage.gameName,
            blastzoneWidth: Math.round(stage.blastzoneWidth),
            stageLength: Math.round(stage.stageLength),
            offStageDistance: Math.round(stage.offStageDistance),
            ceilingHeight: Math.round(stage.ceilingHeight)
          };
        })
      }
      ///
      // console.log(`stages: ${JSON.stringify(stages.map(stage => stage.gameName))}`);
      let binParamsSet: BinningParamsSet = {
        numBins: numBins,
        blastzoneWidth: this._getBinningParams(refStages, 'blastzoneWidth', numBins),
        stageLength: this._getBinningParams(refStages, 'stageLength', numBins),
        offStageDistance: this._getBinningParams(refStages, 'offStageDistance', numBins),
        ceilingHeight: this._getBinningParams(refStages, 'ceilingHeight', numBins)
      }
      let binnedDimensions: BinnedStageDimensions[] = [];
      let binnedDimensionsSet: BinnedStageDimensionsSet;
      const refGameNames: string[] = refStages.map(stage => stage.gameName);

      stages = stages.filter(stage => { return refGameNames.includes(stage.gameName); });
      ///
      // console.log(`filtered gameNames: ${JSON.stringify(gameNames)}`);
      if(stages.length === 0) {
        ///
        // console.groupEnd();
        observer.error(new NotFoundError());
      }
      for (const stage of stages) {
        ///
        // console.log(`gameName: ${gameName}`);
        let binnedStage: BinnedStageDimensions;
        const refStage: StageDimensions = refStages.find(   rStage => { return (rStage.gameName === stage.gameName); }   );
        const name: string = stage.hasOwnProperty('name') && typeof stage['name'] === 'string' ? stage.name : refStage.name;
        ///
        // console.log(`stage: ${JSON.stringify(stage)}`);
        ///
        // console.group('StageDimensionsService::_getBin()');
        const blastzoneWidthParams: StageDimensionsBinParams = this._getBinParams(refStage.blastzoneWidth, binParamsSet.blastzoneWidth, numBins);
        const stageLengthParams: StageDimensionsBinParams = this._getBinParams(refStage.stageLength, binParamsSet.stageLength, numBins);
        const offStageDistanceParams: StageDimensionsBinParams = this._getBinParams(refStage.offStageDistance, binParamsSet.offStageDistance, numBins);
        const ceilingHeightParams: StageDimensionsBinParams = this._getBinParams(refStage.ceilingHeight, binParamsSet.ceilingHeight, numBins);
        // console.groupEnd();

        binnedStage = {
          ...stage,
          name: name,
          blastzoneWidth: blastzoneWidthParams,
          stageLength: stageLengthParams,
          offStageDistance: offStageDistanceParams,
          ceilingHeight: ceilingHeightParams
        };
        binnedDimensions.push(binnedStage);
        ///
        // console.groupEnd();
      }
      binnedDimensionsSet = {
        bins: 5,
        dimensions: binnedDimensions,
        ranges: {
          blastzoneWidth: {
            min: binParamsSet.blastzoneWidth.bounds[0],
            max: binParamsSet.blastzoneWidth.bounds[numBins],
            range: binParamsSet.blastzoneWidth.range
          },
          stageLength: {
            min: binParamsSet.stageLength.bounds[0],
            max: binParamsSet.stageLength.bounds[numBins],
            range: binParamsSet.stageLength.range
          },
          offStageDistance: {
            min: binParamsSet.offStageDistance.bounds[0],
            max: binParamsSet.offStageDistance.bounds[numBins],
            range: binParamsSet.offStageDistance.range
          },
          ceilingHeight: {
            min: binParamsSet.ceilingHeight.bounds[0],
            max: binParamsSet.ceilingHeight.bounds[numBins],
            range: binParamsSet.ceilingHeight.range
          }
        }
      };
      ///
      // console.groupEnd();
      observer.next(binnedDimensionsSet);
      observer.complete;
    });
    ///
    // console.groupEnd();
    return binnedDimensionsSet$;
  }

  _getBinningParams(stages: StageDimensions[], dimension: string, numBins: number = 5): BinningParams {
    /**/
    // console.group('StageDimensionsService::_getBinParams()');
    let values: number[] = stages.map(stage => stage[dimension]);
    /**/
    // console.log(`values: ${JSON.stringify(values)}`);
    const min: number = Math.min(...values);
    const max: number = Math.max(...values);
    const range: number = max - min;
    const interval: number = range / numBins;

    let binBounds: number[] = [min];

    for (let i = 1; i < numBins; i++) {
      binBounds.push(min + (interval * i));
    }
    binBounds.push(max);
    /**/
    // console.groupEnd();
    return {
      values: values,
      range: range,
      bounds: binBounds
    };
  }

  _getBinParams(value: number, params: BinningParams, numBins: number = 5): StageDimensionsBinParams {
    // console.log(`value: ${value}`);
    // console.log(`bounds: ${JSON.stringify(params.bounds)}`);
    let binParams: StageDimensionsBinParams = {
      value: value,
      bin: -1,
      min: false,
      max: false
    };
    if (numBins === 5) {
      // console.log('comparing values');
      if (value < params.bounds[1]) { binParams.bin = 1; }
      else if (value < params.bounds[2]) { binParams.bin = 2; }
      else if (value > params.bounds[4]) { binParams.bin = 5; }
      else if (value > params.bounds[3]) { binParams.bin = 4; }
      else if ((value === params.bounds[1]) && (value === params.bounds[5])) { binParams.bin = 0; }
      else if ((value <= params.bounds[3])
        && (value >= params.bounds[2])
      ) { binParams.bin = 3; }
    }
    binParams.min = (value === params.bounds[0]);
    binParams.max = (value === params.bounds[params.bounds.length - 1]);
    return binParams;
  }

  _getRange(values: number[]): StageDimensionsRange {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min;
    return {
      min: min,
      max: max,
      range: range
    };
  }

  _getRanges(dimensionsArr: StageDimensions[]) {
    /**/
    // console.log('StageDimensionsService::_getRanges()');
    const blastzoneWidths = dimensionsArr.map((dimensionsArr) => dimensionsArr.blastzoneWidth);
    const stageLengths = dimensionsArr.map((dimensionsArr) => dimensionsArr.stageLength);
    const offStageDistances = dimensionsArr.map((dimensionsArr) => dimensionsArr.offStageDistance);
    const ceilingHeights = dimensionsArr.map((dimensionsArr) => dimensionsArr.ceilingHeight);

    return {
      blastzoneWidth: this._getRange(blastzoneWidths),
      stageLength: this._getRange(stageLengths),
      offStageDistance: this._getRange(offStageDistances),
      ceilingHeight: this._getRange(ceilingHeights)
    };
  }
}
