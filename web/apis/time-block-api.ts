import axios from "axios";

const ax=axios.create({
    baseURL:"http://localhost:4201"
});

/** get timeblocks */
export async function getTimeblocks():Promise<TimeblockDict_api>
{
    return (await ax.get("/get-timeblocks")).data;
}

/** change a timeblock title */
export async function setTimeblockTitle(blockId:string,newTitle:string):Promise<void>
{
    const data:TitleChangeRequest_api={
        blockId,
        newTitle,
    };

    return (await ax.post("/set-title",data,{
        responseType:"text"
    })).data;
}

export async function newTimeblock():Promise<void>
{
    return (await ax.post("/new-timeblock",null,{
        responseType:"text"
    })).data;
}

export async function toggleTimeblock(blockId:string):Promise<void>
{
    return (await ax.post(`/toggle-timeblock/${blockId}`,null,{
        responseType:"text",
    })).data;
}