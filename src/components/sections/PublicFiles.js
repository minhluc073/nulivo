import Image from "next/image";
import Link from "next/link";


export default function PublicFiles({ title, data}){
    return (
        <>
            <div className="h7 title">{title}</div>
            <div className="table-responsive">
                <table className="table-public-file">
                    <thead>
                        <tr>
                            <th>Product details</th>
                            <th>Downloads</th>
                            <th>Price</th>
                            <th>Like</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) =>(
                                <tr key={item?.id} className="item">
                                    <td>
                                        <div className="item-product d-flex gap-20">
                                            <Link href={item?.link} className="banner-img">
                                                <Image src={item?.img} alt="img-template" width={80} height={50}/>
                                            </Link>
                                            <Link href={item?.link} className="title-template">{item?.title}</Link>
                                        </div>
                                    </td>
                                    <td>{item?.download}</td>
                                    <td>{item?.price}</td>
                                    <td>{item?.like}</td>
                                    <td>{item?.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Link className="tf-btn btn-icon style-2 width-1" href="/manage-items">
                <span className="text">View all file</span>
                <i className="icon icon-arr-right-4"></i>
            </Link>
        </>
    )
}