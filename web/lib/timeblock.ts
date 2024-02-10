import { DateTime } from "luxon"
import _ from "lodash";

/** perform necessary repair operations to initialise timeblock data after coming from api. MUTATES
 *  timeblock */
export function repairTimeBlock(timeblock:TimeBlockData):TimeBlockData
{
    timeblock.timerows=_.map(timeblock.timerows,repairTimeRow);

    return timeblock;
}

/** fix a time row's missing fields such as the date fields, which are empty after
 *  coming from the api. MUTATES the input time row */
export function repairTimeRow(timerow:TimeRowData):TimeRowData
{
    timerow.startTime=DateTime.fromISO(timerow.startTimeRaw);

    if (timerow.endTimeRaw)
    {
        timerow.endTime=DateTime.fromISO(timerow.endTimeRaw);
    }

    return timerow;
}