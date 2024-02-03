type DateTime=import("luxon").DateTime

/** data representing a time block */
interface TimeBlockData
{
    title:string
    timerows:TimeRowData[]

    totalTime:number // minutes
    running:boolean
}

/** data that goes into time row */
interface TimeRowData
{
    startTime:DateTime
    endTime?:DateTime
    duration?:number // minutes
}