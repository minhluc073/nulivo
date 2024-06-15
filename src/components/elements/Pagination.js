import Link from "next/link"

export default function Pagination(){
    return (
        <ul className="pagination-box">
            <li>
                <Link href="#" className="nav-link arrow"><span className="icon icon-arr-left"></span></Link>    
            </li>
            <li>
                <Link href="#" className="nav-link"><span>1</span></Link>    
            </li>
            <li>
                <Link href="#" className="nav-link active"><span>2</span></Link>    
            </li>
            <li>
                <Link href="#" className="nav-link"><span>3</span></Link>    
            </li>
            <li>
                <Link href="#" className="nav-link"><span>4</span></Link>    
            </li>
            <li>
                <Link href="#" className="nav-link"><span>5</span></Link>    
            </li>
            <li>
                <Link href="#" className="nav-link"><span>...</span></Link>    
            </li>
            <li>
                <Link href="#" className="nav-link"><span>20</span></Link>    
            </li>
            <li>
                <Link href="#" className="nav-link arrow"><span className="icon icon-arr-right"></span></Link>    
            </li>
        </ul>
    )
}