import React,{useState} from "react";
import "./pagination.scss"


export const Pagination  = ({page,setPage,max}) =>{

    const [currentPage, setCurrentPage] = useState(1)

    const nextPage = ()=>{
        setCurrentPage(currentPage + 1)
        setPage(page + 1)
        window.scrollTo(0, 200)
    }
    const prevPage=()=>{
        setCurrentPage(currentPage - 1)
        setPage(page - 1)
        window.scrollTo(0, 200)
    }

    const onKeyDown = e =>{
        let val = parseInt(e.target.value)
        if(e.keyCode === 13){
            setCurrentPage(parseInt(e.target.value))
            if(isNaN(val) || val < 1 || val > max){
                setCurrentPage(1)
                setPage(1)
            }else{
                setPage(val)
                window.scrollTo(0, 200)
            }
        }
    }

    return(
        <div className="pagination">
            <button className="previous" onClick={prevPage} disabled={page === 1}>
                prev
            </button>
            <input className="page" value={currentPage} autoComplete="off" onKeyDown={e=>onKeyDown(e)} onChange={e=>setCurrentPage(e.target.value)}/>
             <p>{`of   ${max}`}</p>
            <button className="next" onClick={nextPage} disabled={ page === max}>
                next  
            </button>
        </div>
    )
}