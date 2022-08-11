export enum WasteType {
  Waste = 'waste',
  Textile = 'textile',
  Special = 'special',
  Paper = 'paper',
  Organic = 'organic',
  Metal = 'metal',
  Etram = 'etram',
  CargoTram = 'cargotram',
  Cardboard = 'cardboard',
  BulkyGoods = 'bulky_goods',
  ChippingService = 'chipping_service',
  Incombustibles = 'incombustibles',
}

export interface DisposalScheduleResponse {
  date: string;
  zip: number;
  area: string;
  region: string;
  type: WasteType;
}

export interface ApiResponse {
  _metadata: {
    total_Count: number;
  };
  result: DisposalScheduleResponse[];
}

export interface DisposalSchedule {
  date: Date;
  type: WasteType;
}

export class DisposalScheduleEntity implements DisposalSchedule {
  date: Date;
  type: WasteType;

  constructor(disp: DisposalSchedule) {
    this.date = disp.date;
    this.type = disp.type;
  }

  static fromResponse(response: DisposalScheduleResponse) {
    return new DisposalScheduleEntity({
      date: new Date(response.date),
      type: response.type,
    });
  }
}
