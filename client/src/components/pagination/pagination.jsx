import React from "react";

export const Pagination  = ({page,setPage,max}) =>{

    const nextPage = ()=>{
        setPage(page + 1)
    }
    const prevPage=()=>{
        setPage(page - 1)
    }


    return(
        <div>
            <button onClick={prevPage} disabled={page === 1}>
                prev
            </button>
            {}
            <button onClick={nextPage} disabled={ page === max}>
                next  
            </button>
        </div>
    )
}