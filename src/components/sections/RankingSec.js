import Image from "next/image";
import Link from "next/link";
import { dataRanking } from "@/data/data-ranking";
import Pagination from "../elements/Pagination";
export default function RankingSection(){
    return(

        <div className="flat-spacing-1">
            <div className="container">
                <div className="flat-title d-flex align-items-center justify-content-between gap-15 flex-wrap">
                    <div className="box-left">
                        <h4 className="title">Ranking</h4>
                        <p className="text_black-1 sub-title">Ranking of Nulivo Market Top Authors</p>
                    </div>
                    <Link href="/ranking" className="view-all">
                        View All
                        <i className="icon icon-arr-right"></i>
                    </Link>
                </div>
                <div className="wrap-ranking">
                    <div className="table-responsive">
                        <table className="table-ranking">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Author</th>
                                    <th>Items</th>
                                    <th>Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataRanking.map((item) =>(
                                    <tr key={item?.id}>
                                        <td>{item?.id}</td>
                                        <td>
                                            <div className="author-box">
                                                <Image src={item?.avt} width={26} height={26} alt="avt"/>
                                                <span>{item?.author}</span>
                                            </div>
                                        </td>
                                        <td>{item?.items}</td>
                                        <td>{item?.sale}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}