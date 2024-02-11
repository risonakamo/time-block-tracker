// types from timeblock api v2

/** timeblock dict from api.
 *  key: timeblock id
 *  val: the timeblock */
type TimeblockDict_api=Record<string,Timeblock_api>

/** timeblock from api */
interface Timeblock_api
{
    id:string
    title:string

    timerows:Timerow_api[]

    totaltime:number
    ongoing:boolean
}

/** timerow from api */
interface Timerow_api
{
    id:string

    start:string
    end:string

    ongoing:boolean
    duration:number
}

/** request to change title of a block */
interface TitleChangeRequest_api
{
    blockId:string
    newTitle:string
}