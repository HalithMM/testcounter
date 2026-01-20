import type { AxiosResponse } from "axios"
import ApiClient from "./appclient"

export const GetComments = ():Promise<AxiosResponse<any[]>> =>{
   return  ApiClient.get('/comments')
}

export const Todo = ():Promise<AxiosResponse<any[]>> => {
    return ApiClient.get('/todos')
}