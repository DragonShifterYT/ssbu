/* gameNames:
size: 41
"battlefield_l_",
"battlefield_",
"xvillage",
"village2_",
"umbra_f",
"bossstage_final1_",
"battle_common",
"end_l_common",
"64jungle_",
"dk_waterfall_",
"duckhunt_",
"colloseum_",
"xemblem",
"xstarfox_",
"xfzero_",
"xice_",
"jack_mementoes_",
"kirby_fountain_",
"pupupuland64_f",
"mario_castledx_",
"xmansion_",
"mario_rainbow_",
"mariou_",
"pictchat_",
"kalos_",
"poke_stadium_",
"xstadium_",
"plasma_",
"poke_tengam_",
"wily_",
"windyhill_",
"xmadein_",
"gamer_",
"tomodachi_",
"wrecking_",
"xcrayon_",
"yoshi_cartboard_",
"yoshi_story_",
"hyrule64_f",
"skyward",
"zelda_tower",
*/

import { BinnedStageDimensionsSet } from '../binned-stage-dimensions-set.model';

export const GETSTATS_CALLBINNED: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "battlefield_l_",
    "hyrule64_f",
  ],
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Big Battlefield",
        gameName: "battlefield_l_",
        blastzoneWidth: {
          value: 290.332306,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 122.183903,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 168.148403,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 215.6688772,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Hyrule Castle",
        gameName: "hyrule64_f",
        blastzoneWidth: {
          value: 325.055213,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 151.129,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 173.926213,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 276.6675146,
          bin: 5,
          min: false,
          max: true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 290.332306,
        max: 325.055213,
        range: 34.722907
      },
      stageLength: {
        min: 122.183903,
        max: 151.129,
        range: 28.945097
      },
      offStageDistance: {
        min: 168.148403,
        max: 173.926213,
        range: 5.77781
      },
      ceilingHeight: {
        min: 215.6688772,
        max: 276.6675146,
        range: 60.99863744
      }
    }
  }
}

export const GETSTATS_NUMBER: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "kirby_fountain_",
    "xemblem",
    "end_l_common",
  ],
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Fountain of Dreams",
        gameName: "kirby_fountain_",
        blastzoneWidth: {
          value: 240.0000075,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 76.59685235,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 163.4031551,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 191.1096737,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Castle Siege",
        gameName: "xemblem",
        blastzoneWidth: {
          value: 210,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 65.49999,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 144.50001,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 175,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Final Destination (Large)",
        gameName: "end_l_common",
        blastzoneWidth: {
          value: 280,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 119.9919775,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 160.0080225,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 179.995085,
          bin: 2,
          min: false,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 210,
        max: 280,
        range: 70
      },
      stageLength: {
        min: 65.49999,
        max: 119.9919775,
        range: 54.4919875
      },
      offStageDistance: {
        min: 144.50001,
        max: 163.4031551,
        range: 18.90314515
      },
      ceilingHeight: {
        min: 175,
        max: 191.1096737,
        range: 16.1096737
      }
    }
  }
};

export const GETSTATS_TEXT: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "village2_",
    "mariou_",
    "64jungle_",
    "xmadein_",
  ], expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Town & City",
        gameName: "village2_",
        blastzoneWidth: {
          value: 230,
          bin: 4,
          min: false,
          max: false
        },
        stageLength: {
          value: 82.5,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 147.5,
          bin: 3,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 195,
          bin: 3,
          min: false,
          max: false
        }
      },
      {
        name: "Mushroom Kingdom U",
        gameName: "mariou_",
        blastzoneWidth: {
          value: 250,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 81,
          bin: 5,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 169,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 192.000015,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Kongo Jungle",
        gameName: "64jungle_",
        blastzoneWidth: {
          value: 230,
          bin: 4,
          min: false,
          max: false
        },
        stageLength: {
          value: 71,
          bin: 3,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 159,
          bin: 4,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 189.9999995,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "WarioWare",
        gameName: "xmadein_",
        blastzoneWidth: {
          value: 180,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 58.231985,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 121.768015,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 198.4180636,
          bin: 5,
          min: false,
          max: true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 180,
        max: 250,
        range: 70
      },
      stageLength: {
        min: 58.231985,
        max: 82.5,
        range: 24.268015
      },
      offStageDistance: {
        min: 121.768015,
        max: 169,
        range: 47.231985
      },
      ceilingHeight: {
        min: 189.9999995,
        max: 198.4180636,
        range: 8.418064027
      }
    }
  }
};

export const GETSTATS_GRAPH: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "zelda_tower",
    "tomodachi_",
    "wrecking_",
    "poke_stadium_",
    "pupupuland64_f",
  ],
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Great Plateau Tower",
        gameName: "zelda_tower",
        blastzoneWidth: {
          value: 266.8463185,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 90.702955,
          bin: 4,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 176.1433635,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 191.9790375,
          bin: 1,
          min: false,
          max: false
        }
      },
      {
        name: "Tomodachi Life",
        gameName: "tomodachi_",
        blastzoneWidth: {
          value: 225,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 70,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 155,
          bin: 1,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 200.999985,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Wrecking Crew",
        gameName: "wrecking_",
        blastzoneWidth: {
          value: 252,
          bin: 4,
          min: false,
          max: false
        },
        stageLength: {
          value: 97.2,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 154.8,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 243.8,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Pokemon Stadium",
        gameName: "poke_stadium_",
        blastzoneWidth: {
          value: 250.0000075,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 88.14794765,
          bin: 4,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 161.8520599,
          bin: 2,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 179.947372,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Dream Land (64)",
        gameName: "pupupuland64_f",
        blastzoneWidth: {
          value: 250,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 77.2737,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 172.7263,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 192.1027776,
          bin: 1,
          min: false,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 225,
        max: 266.8463185,
        range: 41.8463185
      },
      stageLength: {
        min: 70,
        max: 97.2,
        range: 27.2
      },
      offStageDistance: {
        min: 154.8,
        max: 176.1433635,
        range: 21.3433635
      },
      ceilingHeight: {
        min: 179.947372,
        max: 243.8,
        range: 63.852628
      }
    }
  }
};

export const GETSTATS_EMPTY: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "colloseum_",
    "end_l_common",
    "kirby_fountain_",
    "mario_castledx_",
    "windyhill_",
  ],
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Arena Ferox",
        gameName: "colloseum_",
        blastzoneWidth: {
          value: 252.982597,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 92.8398674,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160.1427296,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 189.991974,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Final Destination (Large)",
        gameName: "end_l_common",
        blastzoneWidth: {
          value: 280,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 119.9919775,
          bin: 5,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160.0080225,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 179.995085,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Fountain of Dreams",
        gameName: "kirby_fountain_",
        blastzoneWidth: {
          value: 240.0000075,
          bin: 2,
          min: false,
          max: false
        },
        stageLength: {
          value: 76.59685235,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 163.4031551,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 191.1096737,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Princess Peach's Castle",
        gameName: "mario_castledx_",
        blastzoneWidth: {
          value: 275,
          bin: 5,
          min: false,
          max: false
        },
        stageLength: {
          value: 121.0748405,
          bin: null,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 153.9251595,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 208.70288,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Windy Hill Zone",
        gameName: "windyhill_",
        blastzoneWidth: {
          value: 221.5,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 114.9439715,
          bin: 5,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 106.5560285,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 193.4291113,
          bin: 3,
          min: false,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 221.5,
        max: 280,
        range: 58.5
      },
      stageLength: {
        min: 76.59685235,
        max: 121.0748405,
        range: 44.47798815
      },
      offStageDistance: {
        min: 106.5560285,
        max: 163.4031551,
        range: 56.84712665
      },
      ceilingHeight: {
        min: 179.995085,
        max: 208.70288,
        range: 28.70779502
      }
    }
  }
};

export const GETSTATS_SETNOTFOUND: {inputGameNames: string[], binnedData: BinnedStageDimensionsSet} = {
  inputGameNames: [
    "battle_common",
    "xcrayon_",
    "hyrule64_f",
  ],
  binnedData: {
    bins: 5,
    dimensions: [
      {
        name: "BattleField (Common)",
        gameName: "battle_common",
        blastzoneWidth: {
          value: 240,
          bin: 1,
          min: false,
          max: false
        },
        stageLength: {
          value: 79.98745,
          bin: 1,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160.01255,
          bin: 3,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 191.9998325,
          bin: 1,
          min: false,
          max: false
        }
      },
      {
        name: "Yoshi Island",
        gameName: "xcrayon_",
        blastzoneWidth: {
          value: 220,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 69.94353795,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 150.0564621,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 185.1518941,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Hyrule Castle",
        gameName: "hyrule64_f",
        blastzoneWidth: {
          value: 325.055213,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 151.129,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 173.926213,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 276.6675146,
          bin: 5,
          min: false,
          max: true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 220,
        max: 325.055213,
        range: 105.055213
      },
      stageLength: {
        min: 69.94353795,
        max: 151.129,
        range: 81.18546205
      },
      offStageDistance: {
        min: 150.0564621,
        max: 173.926213,
        range: 23.86975095
      },
      ceilingHeight: {
        min: 185.1518941,
        max: 276.6675146,
        range: 91.51562051
      }
    }
  }
};

export const GETSTATS_DATANOTFOUND_VIEW: { inputGameNames: string[], unknownGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "gamer_",
    "village2_",
    "battlefield_"
  ],
  unknownGameNames: [
    "FiOeHeBqNt",
    "B0UUDasI7q",
    "TecZZgYDFi",
    "MLgpYaVKu1"
  ],
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Gamer",
        gameName: "gamer_",
        blastzoneWidth: {
          value: 229.9999925,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 91,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 138.9999925,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 192,
          bin: 1,
          min: false,
          max: false
        }
      },
      {
        name: "Town & City",
        gameName: "village2_",
        blastzoneWidth: {
          value: 230,
          bin: 1,
          min: false,
          max: false
        },
        stageLength: {
          value: 82.5,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 147.5,
          bin: 3,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 195,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Battlefield",
        gameName: "battlefield_",
        blastzoneWidth: {
          value: 240,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 79.98745,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 160.01255,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 191.9998325,
          bin: 1,
          min: true,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 229.9999925,
        max: 240,
        range: 10.0000075
      },
      stageLength: {
        min: 79.98745,
        max: 91,
        range: 11.01255
      },
      offStageDistance: {
        min: 138.9999925,
        max: 160.01255,
        range: 21.0125575
      },
      ceilingHeight: {
        min: 191.9998325,
        max: 195,
        range: 3.000167508
      }
    }
  }
};

export const GETSTATS_DATANOTFOUND_NOTICE: string[] = [
  "Di7bHFOpJz",
  "2ogrcdvG6s",
  "h3eyj9YQIs"
];

export const GETSTATS_UPDATESUCCESS_INIT: { inputGameNames: string[], binnedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "XGjYqIBxEW",
    "ZKmTfXZZXC",
    "hltgBEWFsd"
  ],
  binnedData: {
    bins: 5,
    dimensions: [
      {
        name: "CscRlGkXpN",
        gameName: "XGjYqIBxEW",
        blastzoneWidth: {
          value: 64,
          bin:   45,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 89,
          bin:   84,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 12,
          bin:   94,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 27,
          bin:   99,
          min:   false,
          max:   false
        }
      },
      {
        name: "WtvrdyhYXn",
        gameName: "ZKmTfXZZXC",
        blastzoneWidth: {
          value: 15,
          bin:   6,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 37,
          bin:   93,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 13,
          bin:   61,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 64,
          bin:   86,
          min:   false,
          max:   false
        }
      },
      {
        name: "YDzhwFpOkz",
        gameName: "hltgBEWFsd",
        blastzoneWidth: {
          value: 15,
          bin:   50,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 54,
          bin:   21,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 2,
          bin:   95,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 90,
          bin:   89,
          min:   false,
          max:   false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   93,
        max:   80,
        range: 25
      },
      stageLength: {
        min:   9,
        max:   35,
        range: 94
      },
      offStageDistance: {
        min:   46,
        max:   14,
        range: 64
      },
      ceilingHeight: {
        min:   3,
        max:   2,
        range: 82
      }
    }
  }
};

export const GETSTATS_UPDATESUCCESS_NOTICE: { inputGameNames: string[], binnedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "ItXrDiaUMT",
    "SMnTeoEPFJ",
    "LzDxxVNKgf"
  ],
  binnedData: {
    bins: 5,
    dimensions: [
      {
        name: "bstNUyoGbp",
        gameName: "ItXrDiaUMT",
        blastzoneWidth: {
          value: 82,
          bin:   84,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 10,
          bin:   44,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 16,
          bin:   94,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 34,
          bin:   47,
          min:   false,
          max:   false
        }
      },
      {
        name: "nYlVaqgROf",
        gameName: "SMnTeoEPFJ",
        blastzoneWidth: {
          value: 44,
          bin:   17,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 91,
          bin:   50,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 7,
          bin:   60,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 43,
          bin:   30,
          min:   false,
          max:   false
        }
      },
      {
        name: "gfUUhOqIMA",
        gameName: "LzDxxVNKgf",
        blastzoneWidth: {
          value: 49,
          bin:   15,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 1,
          bin:   79,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 87,
          bin:   49,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 6,
          bin:   41,
          min:   false,
          max:   false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   7,
        max:   18,
        range: 1
      },
      stageLength: {
        min:   53,
        max:   92,
        range: 30
      },
      offStageDistance: {
        min:   77,
        max:   47,
        range: 94
      },
      ceilingHeight: {
        min:   68,
        max:   18,
        range: 83
      }
    }
  }
};

/*
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "",
        gameName: "",
        blastzoneWidth: {
          value: null,
          bin: null,
          min: false,
          max: false
        },
        stageLength: {
          value: null,
          bin: null,
          min: false,
          max: false
        },
        offStageDistance: {
          value: null,
          bin: null,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: null,
          bin: null,
          min: false,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: null,
        max: null,
        range: null
      },
      stageLength: {
        min: null,
        max: null,
        range: null
      },
      offStageDistance: {
        min: null,
        max: null,
        range: null
      },
      ceilingHeight: {
        min: null,
        max: null,
        range: null
      }
    }
  }
*/
