type DateTime=import("luxon").DateTime

type TimeBlocks=Record<string,TimeBlockData>

/** data representing a time block */
interface TimeBlockData
{
    id:string
    title:string
    timerows:TimeRowData[]

    totalTime:number // minutes
    running:boolean
}

/** data that goes into time row */
interface TimeRowData
{
    id:string

    startTime:DateTime
    endTime?:DateTime

    duration?:number // minutes
}