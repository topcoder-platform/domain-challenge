import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const IFX_TIMEZONE = "America/New_York";
export const dateFormatIfx = "YYYY-MM-DD HH:mm:ss";

class DateUtil {
  public formatDateForIfx(date: string): string | undefined {
    const parsedDate = dayjs(date);
    return parsedDate.isValid()
      ? parsedDate.tz(IFX_TIMEZONE).format(dateFormatIfx)
      : undefined;
  }

  public isValidDate(date: string) {
    return dayjs(date).isValid();
  }
}

export default new DateUtil();
