import Layout from "@/components/layout/Layout"
import Image from "next/image"
import Link from "next/link"

export default function Checkout (){
    return (
        <>
            <Layout>
                <div className="flat-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb">
                        <Link className="item" href="/">
                            Home
                        </Link>
                        <Link className="item" href="/checkout">
                            Item
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="flat-spacing-1">
                    <div className="container">
                        <div className="banner-checkout">
                            <div className="box-img">
                                <Image
                                    src="/images/banner/banner-checkout.png"
                                    width={136}
                                    height={137}
                                    alt="img-checkout"
                                />
                            </div>
                            <div className="content">
                                <div className="h7">Payment security</div>
                                <p>Your information is always secure. At Nulivo, we prioritize transaction security and building customer trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flat-spacing-1 pt-0">
                    <div className="container">
                        <div className="flat-title-v3">
                            <h5 className="text_black-3">Checkout</h5>
                            <p className="fw-medium text_black-1">Have a coupon? <span className="text_primary-sub">Enter your code</span></p>
                        </div>
                        <div className="tf-row-layout-v2">
                            <div className="tf-layout-content">
                                <div className="flat-wrap-checkout">
                                    <div className="h7 title">Billing details</div>
                                    <div className="group-ip group-2-ip">
                                        <fieldset>
                                            <label>First name *</label>
                                            <input type="text" placeholder="First name"/>
                                        </fieldset>
                                        <fieldset>
                                            <label>Last name *</label>
                                            <input type="text" placeholder="Last name"/>
                                        </fieldset>
                                    </div>
                                    <fieldset className="group-ip">
                                        <label>Company name (optional)</label>
                                        <input type="text" placeholder="Your Company"/>
                                    </fieldset> 
                                    <fieldset className="group-ip">
                                        <label>Email address *</label>
                                        <input type="text" placeholder="Your email"/>
                                    </fieldset>
                                    <fieldset className="group-ip">
                                        <label>Country *</label>
                                        <input type="text" placeholder="Your Country"/>
                                    </fieldset>
                                    <fieldset className="group-ip">
                                        <label>Address Line 1</label>
                                        <input type="text" placeholder="Address Line 1"/>
                                    </fieldset>
                                    <div className="group-ip group-2-ip">
                                        <fieldset>
                                            <label>City / State</label>
                                            <input type="text" placeholder="City / State"/>
                                        </fieldset>
                                        <fieldset>
                                            <label>Zip / Postal Code *</label>
                                            <input type="text" placeholder="Zip / Postal Code"/>
                                        </fieldset>
                                    </div>
                                    <fieldset className="group-ip">
                                        <label>Order Notes</label>
                                        <textarea placeholder="Your message" className="textarea-2"></textarea>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="tf-layout-sidebar">
                                <div className="sidebar-checkout fixed-sidebar">
                                    <div className="h7 title">Your order</div>
                                    <form className="box-card-checkout">
                                        <div className="box box-card-product">
                                            <div className="h9 fw-medium">Product</div>
                                            <ul className="list-card-product">
                                                <li>
                                                    <Link href="/item-single" className="item">
                                                        <div className="box-img">
                                                            <Image src="/images/templates/item-59.jpg" alt="product" width={80} height={50}/>
                                                        </div>
                                                        <div className="content">
                                                            <div className="fw-medium title-font name">Product management tools PowerPoint template</div>
                                                            <span className="price text_primary fw-medium title-font">$12</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/item-single" className="item">
                                                        <div className="box-img">
                                                            <Image src="/images/templates/item-60.jpg" alt="product" width={80} height={50}/>
                                                        </div>
                                                        <div className="content">
                                                            <div className="fw-medium title-font name">Product management tools PowerPoint template</div>
                                                            <span className="price text_primary fw-medium title-font">$12</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/item-single" className="item">
                                                        <div className="box-img">
                                                            <Image src="/images/templates/item-29.jpg" alt="product" width={80} height={50}/>
                                                        </div>
                                                        <div className="content">
                                                            <div className="fw-medium title-font name">Product management tools PowerPoint template</div>
                                                            <span className="price text_primary fw-medium title-font">$12</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="box d-flex justify-content-between box-total">
                                            <div className="h10">Total</div>
                                            <span className="h10 text_primary total fw-bold">$1,759.00</span>
                                        </div>
                                        <div className="box list-checkout-credit-card">
                                            <div className="item">
                                                <div className="box-check">
                                                    <input type="radio" className="tf-check-2" name="check-card" id="check-1" defaultChecked/>
                                                    <label htmlFor="check-1">Credit card</label>
                                                </div>
                                                <div className="box-right">
                                                    <Image src="/images/card/card-5.png" alt="card" width={60} height={20}/>
                                                    <Image src="/images/card/card-6.png" alt="card" width={46} height={28}/>
                                                    <Image src="/images/card/card-7.png" alt="card" width={64} height={23}/> 
                                                </div>
                                                
                                            </div>
                                            <div className="item">
                                                <div className="box-check">
                                                    <input type="radio" className="tf-check-2" name="check-card" id="check-2"/>
                                                    <label htmlFor="check-2">Paypal</label>
                                                </div>
                                                <Image src="/images/card/card-8.png" alt="card" width={28} height={28}/> 
                                            </div>
                                            <div className="item">
                                                <div className="box-check">
                                                    <input type="radio" className="tf-check-2" name="check-card" id="check-3"/>
                                                    <label htmlFor="check-3">Nulivo wallet</label>
                                                </div>
                                                <span className="total fw-semibold title-font">Balance: $0</span>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <button className="w-100">Confirm order</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}