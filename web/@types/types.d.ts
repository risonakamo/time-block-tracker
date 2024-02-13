type DateTime=import("luxon").DateTime

/** timeblocks dict
    key: timeblock id
    val: the timeblock */
type TimeBlocks=Record<string,TimeBlockData>

/** data representing a time block
 *  server: TimeBlock2 struct */
interface TimeBlockData
{
    id:string
    title:string
    timerows:TimeRowData[]

    totalTime:number // minutes
    running:boolean
}

/** data that goes into time row
 *  server: TimeRow struct */
interface TimeRowData
{
    id:string

    startTime:DateTime
    endTime?:DateTime

    duration?:number // minutes
}