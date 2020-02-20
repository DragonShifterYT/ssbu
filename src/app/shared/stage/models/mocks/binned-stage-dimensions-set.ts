export const VALID = {
  dimensions: [
    {
      name: 'uBuoz7LP22',
      gameName: 'ewqO2QdwNP',
      blastzoneWidth: {
        value: -93.120,
        bin: 4,
        min: false,
        max: false
      },
      stageLength: {
        value: -96.237,
        bin: 10,
        min: true,
        max: true
      },
      offStageDistance: {
        value: 31.914,
        bin: 3,
        min: false,
        max: false
      },
      ceilingHeight: {
        value: 24.824,
        bin: 8,
        min: true,
        max: true
      }
    },
    {
      name: 'bqjIlf5MJw',
      gameName: 'ycLN1ZWGth',
      blastzoneWidth: {
        value: -85.524,
        bin: 0,
        min: true,
        max: false
      },
      stageLength: {
        value: 92.158,
        bin: 1,
        min: false,
        max: false
      },
      offStageDistance: {
        value: 16.115,
        bin: 8,
        min: false,
        max: false
      },
      ceilingHeight: {
        value: 28.292,
        bin: 7,
        min: true,
        max: true
      }
    },
    {
      name: 'cXsI8KTLwh',
      gameName: 'SsDrlr0kP1',
      blastzoneWidth: {
        value: 21.900,
        bin: 10,
        min: false,
        max: false
      },
      stageLength: {
        value: -77.961,
        bin: 9,
        min: true,
        max: false
      },
      offStageDistance: {
        value: 84.039,
        bin: 1,
        min: true,
        max: true
      },
      ceilingHeight: {
        value: -14.228,
        bin: 10,
        min: false,
        max: true
      }
    }
  ],
  ranges: {
    blastzoneWidth: {
      min: -29.899,
      max: 21.956,
      range: 96.197
    },
    stageLength: {
      min: -25.338,
      max: 17.037,
      range: 67.008
    },
    offStageDistance: {
      min: -16.155,
      max: 16.490,
      range: 2.172
    },
    ceilingHeight: {
      min: -16.695,
      max: 26.111,
      range: 6.403
    }
  }
};

export const BAD_DATA = {
  dimensionsNotArray: {
    dimensions: {
      name: 'TDu8bSZWst',
      gameName: '5k2fQY9oFv',
      blastzoneWidth: {
        value: 3.711,
        bin: 4,
        min: false,
        max: false
      },
      stageLength: {
        value: 78.396,
        bin: 10,
        min: true,
        max: false
      },
      offStageDistance: {
        value: 91.935,
        bin: 3,
        min: false,
        max: false
      },
      ceilingHeight: {
        value: 56.473,
        bin: 2,
        min: true,
        max: true
      }
    },
    ranges: {
      blastzoneWidth: {
        min: -1.587,
        max: 14.657,
        range: 57.835
      },
      stageLength: {
        min: -48.575,
        max: 8.707,
        range: 14.381
      },
      offStageDistance: {
        min: -5.365,
        max: 11.407,
        range: 6.218
      },
      ceilingHeight: {
        min: -1.627,
        max: 4.136,
        range: 97.819
      }
    }
  },

  dimensionsNotBinnedStageDimensions: {
    dimensions: [true,true,false,true],
    ranges: {
      blastzoneWidth: {
        min: -45.352,
        max: 25.442,
        range: 15.869
      },
      stageLength: {
        min: -42.030,
        max: 3.832,
        range: 88.401
      },
      offStageDistance: {
        min: -11.137,
        max: 25.421,
        range: 38.809
      },
      ceilingHeight: {
        min: -10.617,
        max: 28.002,
        range: 77.421
      }
    }
  },

  blastzoneWidthNotRange: {
    dimensions: [
      {
        name: 'b7wBqMMAwN',
        gameName: 'ZZO8BYu5W4',
        blastzoneWidth: {
          value: -97.669,
          bin: 0,
          min: false,
          max: true
        },
        stageLength: {
          value: 51.096,
          bin: 1,
          min: true,
          max: true
        },
        offStageDistance: {
          value: -49.890,
          bin: 9,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: -12.004,
          bin: 8,
          min: false,
          max: false
        }
      },
      {
        name: 'aD0Hc3r5KV',
        gameName: 'v7biH6CLZR',
        blastzoneWidth: {
          value: -17.562,
          bin: 5,
          min: true,
          max: false
        },
        stageLength: {
          value: -31.034,
          bin: 6,
          min: true,
          max: false
        },
        offStageDistance: {
          value: -7.662,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: -40.112,
          bin: 0,
          min: false,
          max: true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: -2.212,
        max: 7.380,
        range: false
      },
      stageLength: {
        min: -46.713,
        max: 28.070,
        range: 61.797
      },
      offStageDistance: {
        min: -21.668,
        max: 26.284,
        range: 40.647
      },
      ceilingHeight: {
        min: -19.630,
        max: 28.315,
        range: 69.533
      }
    }
  },

  stageLengthNotRange: {
    dimensions: [
      {
        name: 'lRqTleRCSj',
        gameName: 'Ce8poeTQrQ',
        blastzoneWidth: {
          value: 41.855,
          bin: 0,
          min: true,
          max: false
        },
        stageLength: {
          value: 57.585,
          bin: 8,
          min: true,
          max: true
        },
        offStageDistance: {
          value: -54.151,
          bin: 4,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 78.586,
          bin: 3,
          min: false,
          max: false
        }
      },
      {
        name: '3kQCtwNwuF',
        gameName: 'uOvr1SseVQ',
        blastzoneWidth: {
          value: 89.005,
          bin: 0,
          min: false,
          max: false
        },
        stageLength: {
          value: 31.758,
          bin: 6,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 57.349,
          bin: 6,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 79.994,
          bin: 7,
          min: true,
          max: true
        }
      },
      {
        name: 'vwk9oLIilF',
        gameName: 'xsGTLpJoAC',
        blastzoneWidth: {
          value: 77.554,
          bin: 7,
          min: true,
          max: false
        },
        stageLength: {
          value: -24.724,
          bin: 7,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 10.346,
          bin: 5,
          min: true,
          max: true
        },
        ceilingHeight: {
          value: -100.228,
          bin: 8,
          min: true,
          max: true
        }
      },
      {
        name: 'Wh5iLzP9D9',
        gameName: 'ZZGKIpH2Xs',
        blastzoneWidth: {
          value: 21.596,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 78.601,
          bin: 2,
          min: true,
          max: true
        },
        offStageDistance: {
          value: -53.588,
          bin: 4,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 51.817,
          bin: 2,
          min: true,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: -30.517,
        max: 45.043,
        range: 68.535
      },
      stageLength: [3, 5, 9],
      offStageDistance: {
        min: -1.818,
        max: 45.149,
        range: 66.371
      },
      ceilingHeight: {
        min: -44.656,
        max: 22.831,
        range: 27.406
      }
    }
  },

  offStageDistanceNotRange: {
    dimensions: [
      {
        name: 'eagM7HSakn',
        gameName: 'xZZqJnkReG',
        blastzoneWidth: {
          value: -86.368,
          bin: 0,
          min: false,
          max: false
        },
        stageLength: {
          value: -30.951,
          bin: 4,
          min: false,
          max: true
        },
        offStageDistance: {
          value: -25.822,
          bin: 3,
          min: true,
          max: true
        },
        ceilingHeight: {
          value: -35.740,
          bin: 9,
          min: true,
          max: true
        }
      },
      {
        name: 'F8jDdpO7Nh',
        gameName: 'l6mduTmeZb',
        blastzoneWidth: {
          value: -89.617,
          bin: 1,
          min: false,
          max: true
        },
        stageLength: {
          value: -64.847,
          bin: 10,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 3.893,
          bin: 7,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 65.867,
          bin: 6,
          min: true,
          max: true
        }
      },
      {
        name: 'BHJzETqEnx',
        gameName: 'ZPtGyFPBgQ',
        blastzoneWidth: {
          value: 53.966,
          bin: 8,
          min: false,
          max: false
        },
        stageLength: {
          value: 6.014,
          bin: 10,
          min: false,
          max: true
        },
        offStageDistance: {
          value: -31.303,
          bin: 7,
          min: true,
          max: true
        },
        ceilingHeight: {
          value: 61.383,
          bin: 6,
          min: false,
          max: false
        }
      },
      {
        name: 'Aph34RSIKx',
        gameName: 'pwGWNLfJFB',
        blastzoneWidth: {
          value: 50.273,
          bin: 9,
          min: true,
          max: true
        },
        stageLength: {
          value: 33.991,
          bin: 10,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 47.014,
          bin: 3,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 88.757,
          bin: 6,
          min: false,
          max: true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: -48.127,
        max: 2.239,
        range: 62.762
      },
      stageLength: {
        min: -38.158,
        max: 26.081,
        range: 56.048
      },
      offStageDistance: 'riun0XWirv',
      ceilingHeight: {
        min: -8.715,
        max: 43.165,
        range: 76.705
      }
    }
  },

  ceilingHeighthNotRange: {
    dimensions: [
      {
        name: 'huP4NuwKYy',
        gameName: 'TR54eRqlDX',
        blastzoneWidth: {
          value: 27.147,
          bin: 8,
          min: false,
          max: false
        },
        stageLength: {
          value: 7.915,
          bin: 5,
          min: false,
          max: false
        },
        offStageDistance: {
          value: -26.171,
          bin: 9,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: -68.150,
          bin: 10,
          min: false,
          max: true
        }
      },
      {
        name: '6Pk6jAWmmr',
        gameName: 'g7QS3a74Ww',
        blastzoneWidth: {
          value: -50.676,
          bin: 0,
          min: false,
          max: true
        },
        stageLength: {
          value: -5.765,
          bin: 1,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 57.197,
          bin: 7,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: -17.628,
          bin: 9,
          min: true,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: -44.618,
        max: 27.578,
        range: 93.735
      },
      stageLength: {
        min: -21.435,
        max: 31.352,
        range: 35.932
      },
      offStageDistance: {
        min: -34.427,
        max: 7.426,
        range: 54.230
      },
      ceilingHeight: {
        value: -7.443
      }
    }
  },
};

