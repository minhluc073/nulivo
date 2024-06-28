import Pagination from "@/components/elements/Pagination";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { dataRanking2 } from "@/data/data-ranking";
export default function Ranking() {
  return (
    <>
      <Layout>
        <PageTitle
          title="Ranking"
          subtitle="Ranking of Nulivo Market Top Authors"
        />
        <div className="flat-breadcrumb">
            <div className="container">
                <div className="breadcrumb">
					<Link className="item" href="/category">Category</Link>
                    <Link className="item" href="#">Free-Templates</Link>
                    <Link className="item" href="#">Free-Powerpoint-Templates</Link>
			    </div>
            </div>
        </div>
        <div className="flat-spacing-1 flat-ranking">
            <div className="container">
                <div className="wrap-ranking">
                    <div className="table-responsive">
                        <table className="table-default">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Author</th>
                                    <th>Items</th>
                                    <th>Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataRanking2.map((item) =>(
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
                <div className="pagination-wrap d-flex justify-content-center">
                    <Pagination/>
                </div>
            </div>
                
        </div>
      </Layout>
    </>
  );
}
