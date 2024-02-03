import {DateTime,Duration} from "luxon";

/** custom parse of the short time format used in the example data */
export function customTimeParse(timestr:string):DateTime
{
    return DateTime.fromFormat(timestr,"MM/dd HH:mm");
}

/** custom time format for time row */
export function formatTime(time:DateTime):string
{
  return time.toFormat("MM/dd HH:mm");
}

/** custom time format for time row duration */
export function formatDuration(minutes:number):string
{
  return Duration.fromObject({minutes}).toFormat("hh:mm");
}