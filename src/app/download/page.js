"use client";
import Layout from "@/components/layout/Layout";
import LayoutAdmin from "@/components/layout/LayoutAdmin";
import Link from "next/link";
import { dataDownload } from "@/data/data-dashboard";
import Image from "next/image";
import Pagination from "@/components/elements/Pagination";

export default function Download() {
  return (
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
          <div className="h7 title">Download</div>
          <div className="table-responsive">
            <table className="table-public-file table-download">
              <thead>
                <tr>
                  <th>Product details</th>
                  <th>Additional Info</th>
                  <th>Price</th>
                  <th>Invoice</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataDownload.map((item) => (
                  <tr key={item?.id} className="item">
                    <td>
                      <div className="item-product d-flex gap-20">
                        <div className="banner-img">
                          <Image
                            src={item?.img}
                            alt="img-template"
                            width={80}
                            height={50}
                          />
                        </div>
                        <p className="title-template">{item?.name}</p>
                      </div>
                    </td>
                    <td className="list-info">
                      <div className="item">
                        <span className="text-6">date</span>
                        <span className="d-block mt-2">{item?.date}</span>
                      </div>
                      <div className="item mt-12">
                        <span className="text-6">Licence</span>
                        <span className="d-block mt-2 text_primary">
                          {item?.licence}
                        </span>
                      </div>
                      <div className="item mt-12">
                        <span className="text-6">Author</span>
                        <span className="d-block mt-2 text_primary">
                          {item?.author}
                        </span>
                      </div>
                    </td>
                    <td>{item?.price}</td>
                    <td>
                      <span className="box-icon w_50 invoice">
                        <i className="icon icon-invoice"></i>
                      </span>
                    </td>
                    <td className="list-action">
                      <Link
                        href="#"
                        className="mb-10 tf-btn width-1 btn-icon style-2"
                      >
                        <span className="text">Download</span>
                        <i className="icon icon-download-2"></i>
                      </Link>
                      <Link
                        href="#"
                        className="mb-10 tf-btn width-1 btn-line-primary"
                      >
                        Refund
                      </Link>
                      <div className="d-flex gap-8 align-items-center">
                        <span className="text-title-1">Rating:</span>
                        <div className="list-star">
                          <span className="icon icon-star-2"></span>
                          <span className="icon icon-star-2"></span>
                          <span className="icon icon-star-2"></span>
                          <span className="icon icon-star-2"></span>
                          <span className="icon icon-star-2"></span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
        </LayoutAdmin>
      </Layout>
    </>
  );
}
