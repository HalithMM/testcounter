import React, { useEffect, useMemo, useState, type JSX } from "react";
import { GetComments, Todo } from "../api/getapi"
import { type commentObject, type stringState } from "../types/Usestate.type";

export const Fetch = (): JSX.Element => {
    const [getComments, setComments] = useState<commentObject>([])
    const [searchInput, setSearchInput] = useState<stringState>()
    const [debounceText , setDebounceText] = useState<stringState>()
    const loadCommants = async (): Promise<void> => {
        try {
            const getData = await GetComments()
            const getToDO = await Todo()
            console.log("Datas", getData.data);
            setComments(getData.data)
            console.log("Todo", getToDO.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadCommants();
    }, [])

    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    const filterPostID = useMemo(() => {
        if (!debounceText) {
            return getComments
        }
        return getComments.filter((i) => i.postId === Number(debounceText))
    }, [debounceText, getComments])

   useEffect(()=>{
    const debounce = setTimeout(()=>{
        setDebounceText(searchInput)
    },2000)
    return()=>{clearInterval(debounce)};
   },[searchInput])

    return (
        <div>
            <input type="text" value={searchInput} onChange={changeHandle} />
            {filterPostID.map((data, id) => {
                return (
                    <div key={id} className="flex !text-sm">
                        <h1>{data.postId}</h1>
                        <h1>{data.name}</h1>
                        <h1>{data.email}</h1>
                        <h1>{data.body}</h1>
                    </div>
                )
            })}
        </div>
    )
}
