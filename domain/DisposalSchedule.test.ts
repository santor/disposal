import { describe, it, expect, beforeEach } from 'vitest';
import {
  DisposalSchedule,
  DisposalScheduleEntity,
  DisposalScheduleResponse,
  WasteType,
} from './DisposalSchedule';

const response: DisposalScheduleResponse = {
  area: '8004',
  date: '2022-08-31',
  region: 'zurich',
  type: WasteType.Cardboard,
  zip: 8004,
};

describe('disposal schedule', async () => {
  let disposal: DisposalSchedule;

  beforeEach(() => {
    disposal = DisposalScheduleEntity.fromResponse(response);
  });

  it('creates disposal from response', () => {
    expect(disposal).not.toBeNull();
  });

  it('disposal has correct date', () => {
    const control = new Date(2022, 7, 31);
    expect(disposal.date.getFullYear()).toEqual(control.getFullYear());
    expect(disposal.date.getMonth()).toEqual(control.getMonth());
    expect(disposal.date.getDate()).toEqual(control.getDate());
  });

  it('disposal has correct properties', () => {
    expect(disposal.area).toEqual('8004');
    expect(disposal.region).toEqual('zurich');
    expect(disposal.type).toEqual(WasteType.Cardboard);
    expect(disposal.zip).toEqual(8004);
  });
});
