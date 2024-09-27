export const boltu = ()=>{
    console.log(`hello world`);
    setTimeout(()=>{
        console.log(`world is about to ready`)
    }, 1000)
    console.log(`new world is different`)
    setTimeout(() => {
        console.log(`the world is perishing`)
    }, 2000)
    console.log(`end of the world`)
}