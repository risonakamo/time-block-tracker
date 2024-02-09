/** get all time blocks */
async function getTimeblocks():Promise<TimeBlocks>
{
    return (await fetch("time-blocks",{
        method:"GET"
    })).json();
}

/** request to create new timeblock */
async function newTimeblock():Promise<void>
{
    fetch("new-time-block",{
        method:"POST"
    });
}