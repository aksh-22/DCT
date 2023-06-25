interface family_jodiItemType {
  12: Array<number>;
  17: Array<number>;
  21: Array<number>;
  26: Array<number>;
  62: Array<number>;
  67: Array<number>;
  71: Array<number>;
  76: Array<number>;
}

interface red_family_jodiItemType {
  50: Array<string>;
  55: Array<string>;
}

interface cycle_pannaItemType {
  10: Array<number>;
}

interface sp_family_pannaItemType {
  123: Array<number>;
  128: Array<number>;
  137: Array<number>;
  178: Array<number>;
  236: Array<number>;
  268: Array<number>;
  367: Array<number>;
  687: Array<number>;
}

interface dp_family_pannaItemType {
  112: Array<number>;
  117: Array<number>;
  126: Array<number>;
  167: Array<number>;
  266: Array<number>;
  667: Array<number>;
}

interface tp_family_pannaItemType {
  111: Array<number>;
  116: Array<number>;
  166: Array<number>;
  666: Array<number>;
}

interface sp_panel_single_ankItemType {
  1: Array<number>;
}

interface dp_panel_single_ankItemType {
  1: Array<number>;
}

export interface numbersType {
  family_jodi: Array<family_jodiItemType>;
  red_family_jodi: Array<red_family_jodiItemType>;
  cycle_panna: Array<cycle_pannaItemType>;
  sp_family_panna: Array<sp_family_pannaItemType>;
  dp_family_panna: Array<dp_family_pannaItemType>;
  tp_family_panna: Array<tp_family_pannaItemType>;
  sp_panel_single_ank: Array<sp_panel_single_ankItemType>;
  dp_panel_single_ank: Array<dp_panel_single_ankItemType>;
}

export interface numberDataType {
  numbers: numbersType;
  new_numbers: number;
}
