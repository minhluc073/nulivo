"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


export default function Cart() {

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

  return (
    <>
      <Layout>
        <div className="flat-breadcrumb">
          <div className="container">
            <div className="breadcrumb">
              <Link className="item" href="/">
                Home
              </Link>
              <Link className="item" href="/cart">
                Item
              </Link>
            </div>
          </div>
        </div>
        <div className="flat-spacing-1">
          <div className="container">
            <div className="table-responsive">
              <table className="table-cart">
                <thead>
                  <tr>
                    <th>Product details</th>
                    <th>License</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                    <tr className="item file-delete">
                        <td>
                            <div className="item-product">
                                <Link href="/item-single" className="box-img">
                                <Image
                                    src="/images/templates/item-59.jpg"
                                    alt="product"
                                    width={80}
                                    height={50}
                                />
                                </Link>
                                <Link href="/item-single" className="name">
                                Product management tools PowerPoint <br /> template
                                </Link>
                            </div>
                        </td>
                        <td>
                            <span className="text_primary">Regular License</span>
                        </td>
                        <td>
                            <span className="price">$12</span>
                        </td>
                        <td>
                            <span className="icon-close remove-file"></span>
                        </td>
                    </tr>
                    <tr className="item file-delete">
                        <td>
                            <div className="item-product">
                                <Link href="/item-single" className="box-img">
                                <Image
                                    src="/images/templates/item-60.jpg"
                                    alt="product"
                                    width={80}
                                    height={50}
                                />
                                </Link>
                                <Link href="/item-single" className="name">
                                Product management tools PowerPoint <br /> template
                                </Link>
                            </div>
                        </td>
                        <td>
                            <span className="text_primary">Regular License</span>
                        </td>
                        <td>
                        <span className="price">$12</span>
                        </td>
                        <td>
                            <span className="icon-close remove-file"></span>
                        </td>
                    </tr>
                    <tr className="item file-delete">
                        <td>
                            <div className="item-product">
                                <Link href="/item-single" className="box-img">
                                <Image
                                    src="/images/templates/item-29.jpg"
                                    alt="product"
                                    width={80}
                                    height={50}
                                />
                                </Link>
                                <Link href="/item-single" className="name">
                                Product management tools PowerPoint <br /> template
                                </Link>
                            </div>
                        </td>
                        <td>
                            <span className="text_primary">Regular License</span>
                        </td>
                        <td>
                            <span className="price">$12</span>
                        </td>
                        <td>
                            <span className="icon-close remove-file"></span>
                        </td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <form className="box-cart-coupon">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit" className="tf-btn">
                    Apply coupon
                  </button>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="box-cart-total">
                  <div className="h9 title text_black-1">Cart Totals</div>
                  <div className="item d-flex justify-content-between">
                    <span className="title-font fw-medium">Subtotal</span>
                    <span className="price">$30</span>
                  </div>
                  <div className="item d-flex justify-content-between">
                    <span className="title-font fw-medium">Total</span>
                    <span className="total fw-medium">30</span>
                  </div>
                  <div className="box-btn">
                    <Link className="tf-btn" href="/payment-success">
                      Proceed to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
