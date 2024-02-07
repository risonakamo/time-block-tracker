export async function getTimeblocks():Promise<TimeBlocks>
{
    return (await fetch("http://localhost:4201/get-timeblocks",{
        method:"GET"
    })).json();
}