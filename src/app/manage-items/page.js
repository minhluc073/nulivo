"use client";
import Layout from "@/components/layout/Layout"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Link from "next/link";
import { dataManage } from "@/data/data-dashboard";
import Image from "next/image";
import Pagination from "@/components/elements/Pagination";
import { useEffect } from "react";

export default function ManageItems(){

    useEffect(() => {
		const handleClick = (e) => {
			e.preventDefault()
			if (e.target.classList.contains('remove-file')) {
				const fileDelete = e.target.closest('.file-delete')
				if (fileDelete) {
					fileDelete.remove()
				}
			}
		}
		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [])

    return(
        <>
            <Layout loggedIn>
                <div className="flat-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link className="item" href="/">
                                Home
                            </Link>
                            <Link className="item" href="#">
                                Item
                            </Link>
                        </div>
                    </div>
                </div>
                <LayoutAdmin>
                    <div className="h7 title">Manage Items</div>
                    <div className="table-responsive">
                        <table className="table-public-file table-statements">
                            <thead>
                                <tr>
                                    <th>Product details</th>
                                    <th>ID</th>
                                    <th>Price</th>
                                    <th>Featured</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataManage.map((item)=>(
                                        <tr key={item?.id} className="item file-delete">
                                            <td>
                                                <div className="item-product d-flex gap-20">
                                                    <div className="banner-img">
                                                        <Image src={item?.img} alt="img-template" width={80} height={50}/>
                                                    </div>
                                                    <p className="title-template">{item?.name}</p>
                                                </div>
                                            </td>
                                            <td>{item?.manageId}</td>
                                            <td>{item?.price}</td>
                                            <td className="text_primary">{item?.featured}</td>
                                            <td><span className={`status-2 ${item?.status}`}>{item?.status}</span></td>
                                            <td>
                                                <ul className="list-action">
                                                    <li>
                                                        <Link href={item?.edit} className="item">
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.2413 3.4915L12.366 2.36616C12.6005 2.13171 12.9184 2 13.25 2C13.5816 2 13.8995 2.13171 14.134 2.36616C14.3685 2.60062 14.5002 2.9186 14.5002 3.25016C14.5002 3.58173 14.3685 3.89971 14.134 4.13416L4.55467 13.7135C4.20222 14.0657 3.76758 14.3246 3.29 14.4668L1.5 15.0002L2.03333 13.2102C2.17552 12.7326 2.43442 12.2979 2.78667 11.9455L11.242 3.4915H11.2413ZM11.2413 3.4915L13 5.25016" stroke="#303538" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        Edit
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <div className="remove-file item">
                                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.82667 6.49986L9.596 12.4999M6.404 12.4999L6.17333 6.49986M12.8187 4.35986C13.0467 4.39453 13.2733 4.43119 13.5 4.47053M12.8187 4.35986L12.1067 13.6152C12.0776 13.992 11.9074 14.344 11.63 14.6007C11.3527 14.8574 10.9886 15 10.6107 14.9999H5.38933C5.0114 15 4.64735 14.8574 4.36999 14.6007C4.09262 14.344 3.92239 13.992 3.89333 13.6152L3.18133 4.35986M12.8187 4.35986C12.0492 4.24354 11.2758 4.15526 10.5 4.09519M3.18133 4.35986C2.95333 4.39386 2.72667 4.43053 2.5 4.46986M3.18133 4.35986C3.95076 4.24354 4.72416 4.15526 5.5 4.09519M10.5 4.09519V3.48453C10.5 2.69786 9.89333 2.04186 9.10667 2.01719C8.36908 1.99362 7.63092 1.99362 6.89333 2.01719C6.10667 2.04186 5.5 2.69853 5.5 3.48453V4.09519M10.5 4.09519C8.83581 3.96658 7.16419 3.96658 5.5 4.09519" stroke="#303538" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                            Delete
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <Pagination />
                </LayoutAdmin>
            </Layout>
        </>
    )

}