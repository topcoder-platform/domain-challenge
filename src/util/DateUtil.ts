import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import timezone from "dayjs/plugin/timezone";
import advanced from "dayjs/plugin/advancedFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);

export const IFX_TIMEZONE = "America/New_York";
export const IFX_DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

class DateUtil {
  public formatDateForIfx(date: string, format: string = IFX_DATE_FORMAT): string | undefined {
    const parsedDate = dayjs(date);
    return parsedDate.isValid() ? parsedDate.tz(IFX_TIMEZONE).format(format) : undefined;
  }

  public isValidDate(date: string) {
    return dayjs(date).isValid();
  }
}

export default new DateUtil();
