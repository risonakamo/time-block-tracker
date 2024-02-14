import axios from "axios";

const ax=axios.create({
    baseURL:"http://localhost:4201"
});

/** get timeblocks */
export async function getTimeblocks(abortSignal:AbortSignal):Promise<TimeblockDict_api>
{
    return (await ax.get("/get-timeblocks",{
        signal:abortSignal
    })).data;
}

/** change a timeblock title */
export async function setTimeblockTitle(blockId:string,newTitle:string):Promise<string>
{
    const data:TitleChangeRequest_api={
        blockId,
        newTitle,
    };

    return (await ax.post("/set-title",data,{
        responseType:"text"
    })).data;
}

/** create new timeblock */
export async function newTimeblock():Promise<string>
{
    return (await ax.post("/new-timeblock",null,{
        responseType:"text"
    })).data;
}

/** toggle timeblock's state */
export async function toggleTimeblock(blockId:string):Promise<string>
{
    return (await ax.post(`/toggle-timeblock/${blockId}`,null,{
        responseType:"text",
    })).data;
}