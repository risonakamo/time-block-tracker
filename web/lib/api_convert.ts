// functions for converting api types

import _ from "lodash";
import { DateTime } from "luxon";

/** convert an api timeblocks dict to regular timeblock dict */
export function apiTimeblockConvert(apiTimeblock:TimeblockDict_api):TimeBlocks
{
    return _.mapValues(apiTimeblock,(block:Timeblock_api):TimeBlockData=>{
        return {
            id:block.id,
            title:block.title,
            timerows:_.map(block.timerows,apiTimerowConvert),

            totalTime:block.totaltime,
            running:block.ongoing
        };
    });
}

/** convert api timerow to regular timerow */
function apiTimerowConvert(apiRow:Timerow_api):TimeRowData
{
    var endTime:DateTime|undefined=undefined;
    var duration:number|undefined=undefined;

    // set endtime and duration only if it is NOT ongoing
    if (!apiRow.ongoing)
    {
        endTime=DateTime.fromISO(apiRow.end);
        duration=apiRow.duration;
    }

    return {
        id:apiRow.id,

        startTime:DateTime.fromISO(apiRow.start),
        endTime,

        duration
    };
}