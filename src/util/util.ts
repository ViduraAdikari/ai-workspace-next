import moment from "moment";

/**
 * return error message by given http status code.
 * @param statusCode
 */
export const getErrorMessageByCode = (statusCode: number): string => {
  switch (statusCode) {
    case 400: return "Bad Request. Invalid syntax, missing required argument or invalid request."
    case 401: return "Unauthorized. Authorization failed."
    case 404: return "Resource not found. The url is invalid."
    case 429: return "Too Many Requests."
    case 500: return "Internal Server Error."
    case 503: return "Service Unavailable. Try again later."
    default: return "Error!"
  }
}

/**
 * format Date to given date time format string
 * customize format using the table in url: https://momentjs.com/docs/#/displaying/
 * @param date
 * @param formatPattern
 */
export const getFormattedDate = (date: Date, formatPattern: string = 'MMM DD, YYYY') => {
  return moment(date).format(formatPattern);
}
