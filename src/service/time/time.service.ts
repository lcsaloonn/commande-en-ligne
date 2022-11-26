export class TimeService {
  private constructor() {}
  /**
   *
   * @param firstPickUpHour number first pick up hour
   * @param lastPickUpHour  number last pick up hour
   * @param interval interval between hours
   * @returns pickup List ex ([14,14.15,14.30,14.45,15])
   */
  static createPickUpList(
    firstPickUpHour: number,
    lastPickUpHour: number,
    interval: number
  ) {
    const pickUpList: number[] = [];
    for (
      let i = firstPickUpHour;
      i <= lastPickUpHour;
      i = this.addHours(interval, i)
    ) {
      pickUpList.push(i);
    }
    return pickUpList;
  }

  /**
   * Add Hours/minutes to a current Hour
   * @param interval only minutes going from 0 to 60
   * @param  current time in number (ex 1.5 1hour 50 minutes)
   */
  static addHours(interval: number, current: number) {
    let { hours, minutes } = this.splitHoursMinutes(current);

    if (minutes + interval >= 60) {
      let i = minutes + interval - 60;
      let y = Number(hours) + 1;
      return this.createHour(y, i);
    } else {
      return this.createHour(hours, minutes + interval);
    }
  }

  /**
   * Split Hours and minutes
   * @param {number} time between 1 and 24
   */
  static splitHoursMinutes(time: number) {
    let [hours, minutes] = time.toString().split(".");
    if (minutes && minutes.length < 2) {
      return { hours: Number(hours), minutes: Number(minutes) * 10 };
    }
    return { hours: Number(hours), minutes: minutes ? Number(minutes) : 0 };
  }

  /**
   * Create Hour
   * @param hours number of hour between 1 and 23
   * @param minutes number of minutes between 1 and 59
   * @returns a hour in number
   */
  static createHour(hours: number, minutes: number) {
    return hours + minutes / 100;
  }
}
