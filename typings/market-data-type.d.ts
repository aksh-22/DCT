export interface marketsItemType {
  id: string;
  name: string;
  open_time: string;
  close_time: string;
  result_string: {
    result: string;
  };
  status: string;
}

export interface marketDataType {
  markets: Array<marketsItemType>;
  custom_text: string;
  share_link: string;
  version: string;
  new_numbers: number;
  whatsapp: string;
  mobile: string;
  user: any;
}
