/** get all time blocks */
export async function getTimeblocks():Promise<TimeBlocks>
{
    return (await fetch("http://localhost:4201/time-blocks",{
        method:"GET"
    })).json();
}

/** request to create new timeblock */
export async function newTimeblock():Promise<void>
{
    fetch("http://localhost:4201/new-time-block",{
        method:"POST"
    });
}