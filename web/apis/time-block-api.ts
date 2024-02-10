/** get all time blocks */
export async function getTimeblocks():Promise<TimeBlocks>
{
    const res:Response=await fetch("http://localhost:4201/time-blocks",{
        method:"GET"
    });

    if (res.status!=200)
    {
        throw "failed";
    }

    return res.json();
}

/** request to create new timeblock */
export async function newTimeblock():Promise<void>
{
    const res:Response=await fetch("http://localhost:4201/new-time-block",{
        method:"POST"
    });

    if (res.status!=200)
    {
        throw "failed";
    }
}

/** toggle a time block */
export async function toggleTimeblock(id:string):Promise<void>
{
    const res:Response=await fetch(
        `http://localhost:4201/toggle-time-block/${id}`,
        {
            method:"POST"
        }
    );

    if (res.status!=200)
    {
        throw "failed";
    }
}