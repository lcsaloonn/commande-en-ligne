import { TimeService } from "./time.service";

describe("TimeService", () => {
  it("should create a correcte table", () => {
    const table = TimeService.createPickUpList(12, 13, 15);
    expect(table).toStrictEqual([12, 12.15, 12.3, 12.45, 13]);
  });

  it("should create hours", () => {
    const hour = TimeService.createHour(1, 15);
    expect(hour).toBe(1.15);
  });

  it("should split hours and Minutes", () => {
    const hoursMinutes = TimeService.splitHoursMinutes(1.15);
    expect(hoursMinutes).toStrictEqual({ hours: 1, minutes: 15 });
  });

  it("should split hours and Minutes with 1 decimal", () => {
    const hoursMinutes = TimeService.splitHoursMinutes(1.1);
    expect(hoursMinutes).toStrictEqual({ hours: 1, minutes: 10 });
  });

  it("should split hours and Minutes with no minutes", () => {
    const hoursMinutes = TimeService.splitHoursMinutes(1);
    expect(hoursMinutes).toStrictEqual({ hours: 1, minutes: 0 });
  });

  it("should add minutes", () => {
    const hoursMinutes = TimeService.addHours(15, 14.15);
    expect(hoursMinutes).toStrictEqual(14.3);
  });

  it("should add Hours", () => {
    const hoursMinutes = TimeService.addHours(15, 14.45);
    expect(hoursMinutes).toStrictEqual(15);
  });

  it("should add Hours and minutes", () => {
    const hoursMinutes = TimeService.addHours(15, 14.55);
    expect(hoursMinutes).toStrictEqual(15.1);
  });
});
