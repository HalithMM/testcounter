export type stringState = string
export type numberState = number 
export type objects = {name:string,age:number,adult:boolean}
export type storeObject = {name:string,age:number,adult:boolean}[]
export type counterprops = {
    getData:(value:stringState)=>void
    fetch:(value:objects)=>void
}