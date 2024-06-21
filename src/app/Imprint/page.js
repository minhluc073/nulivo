/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import SidebarPage from "@/components/elements/SidebarPage";


export default function Imprint() {
  return (
    <>
        <Layout>
            <PageTitle title="Imprint" />
            <div className="flat-breadcrumb">
                <div className="container">
                    <div className="breadcrumb">
                        <Link className="item" href="/">Category</Link>
                        <Link className="item" href="/category-free">Free-Templates</Link>
                        <Link className="item" href="#">Free-Powerpoint-Templates</Link>
                    </div>
                </div>
            </div>
            <div className="flat-spacing-1">
                <div className="container">
                    <div className="tf-row-layout">
                        <div className="tf-layout-content">
                            <h5 className="title">Imprint</h5>
                            <div className="box-p">
                                <div className="h9">1. Limitation of liability:</div>
                                <p>The content of this website has been created with the greatest possible care. However, the provider assumes no liability for the accuracy, comprehensiveness, and currentness of the content provided. The use of the contents of the website is at the user's own risk. Contributions marked by name reflect the opinion of the respective author and not always the opinion of the provider. The mere use of the provider's website does not constitute a contractual relationship between the user and the provider.</p>
                            </div>
                            <div className="box-p">
                                <div className="h9">2. Copyright:</div>
                                <p>The content published on this website is subject to copyright and intellectual property rights. Any use not permitted by the copyright and intellectual property law requires the prior consent of the provider or the respective copyright holder. This applies in particular to duplication, editing, translation, storage, processing or republishing it on other websites. If necessary, we will legally prosecute the unauthorized use of portions of the content on our site.
                                If you find any content on this site that violates copyright law, please contact us.</p>
                            </div>
                            <div className="box-p">
                                <div className="h9">3. Online Dispute Resolution</div>
                                <p>The European Commission is providing an online dispute resolution platform at <Link href="#" className="text_primary">https://ec.europa.eu/consumers/odr/</Link>, which consumers can use to settle a dispute and where further information on dispute resolution can be found.</p>
                            </div>
                            <div className="box-p">
                                <div className="h9">4. Data protection and privacy: </div>
                                <Link href="#" className="text_primary">https://www.nulivo.com/page/privacy-policy</Link>
                            </div>
                            <div className="box-bottom">
                                <div className="left d-flex gap-8 align-items-center">
                                    <span className="text">Tags:</span>
                                    <ul className="d-flex gap-8">
                                        <li><Link href="#" className="tag">Imprint</Link></li>
                                        <li><Link href="#" className="tag">Nulivo</Link></li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <span className="text">Share this post:</span>
                                    <ul className="list-social">
                                        <li>
                                            <Link href="#" className="social-item icon link">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_4276_12299)">
                                                    <path d="M10.3936 18V9.78996H13.1482L13.5615 6.58941H10.3936V4.54632C10.3936 3.61998 10.6498 2.98869 11.9796 2.98869L13.673 2.98799V0.125307C13.3802 0.0872508 12.3749 0 11.2049 0C8.76181 0 7.08919 1.49127 7.08919 4.22934V6.58941H4.32617V9.78996H7.08919V18H10.3936Z" fill="#8E8E93"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_4276_12299">
                                                    <rect width="18" height="18" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="social-item icon link">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_4276_12303)">
                                                    <path d="M18 3.41887C17.3306 3.7125 16.6174 3.90712 15.8737 4.00162C16.6388 3.54487 17.2226 2.82712 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95237 8.85938 6.22012C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63637 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1332C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64862 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16587 18 3.41887Z" fill="#8E8E93"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_4276_12303">
                                                    <rect width="18" height="18" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="social-item icon link">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.2005 16.2V10.926C16.2005 8.334 15.6425 6.354 12.6185 6.354C11.1605 6.354 10.1885 7.146 9.79253 7.902H9.75653V6.588H6.89453V16.2H9.88253V11.43C9.88253 10.17 10.1165 8.964 11.6645 8.964C13.1945 8.964 13.2125 10.386 13.2125 11.502V16.182H16.2005V16.2Z" fill="#8E8E93"/>
                                                <path d="M2.0332 6.58789H5.0212V16.1999H2.0332V6.58789Z" fill="#8E8E93"/>
                                                <path d="M3.52878 1.80005C2.57478 1.80005 1.80078 2.57405 1.80078 3.52805C1.80078 4.48205 2.57478 5.27405 3.52878 5.27405C4.48278 5.27405 5.25678 4.48205 5.25678 3.52805C5.25678 2.57405 4.48278 1.80005 3.52878 1.80005Z" fill="#8E8E93"/>
                                                </svg>

                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="social-item icon link">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_4276_12313)">
                                                <path d="M17.982 5.29205C17.9399 4.33564 17.7852 3.67812 17.5636 3.10836C17.3351 2.50359 16.9834 1.96213 16.5228 1.51201C16.0726 1.05489 15.5276 0.699691 14.9298 0.474702C14.3568 0.253147 13.7027 0.0984842 12.7463 0.0563159C11.7827 0.0105764 11.4768 0 9.03301 0C6.58917 0 6.28328 0.0105764 5.3233 0.0527447C4.36689 0.0949129 3.70937 0.249713 3.13975 0.471131C2.53484 0.699691 1.99338 1.05132 1.54326 1.51201C1.08614 1.96213 0.731078 2.50716 0.505952 3.10493C0.284397 3.67812 0.129734 4.33207 0.0875659 5.28848C0.0418264 6.25203 0.03125 6.55792 0.03125 9.00176C0.03125 11.4456 0.0418264 11.7515 0.0839947 12.7115C0.126163 13.6679 0.280963 14.3254 0.502518 14.8952C0.731078 15.4999 1.08614 16.0414 1.54326 16.4915C1.99338 16.9486 2.53841 17.3038 3.13618 17.5288C3.70937 17.7504 4.36332 17.905 5.31987 17.9472C6.27971 17.9895 6.58574 17.9999 9.02957 17.9999C11.4734 17.9999 11.7793 17.9895 12.7393 17.9472C13.6957 17.905 14.3532 17.7504 14.9228 17.5288C16.1325 17.0611 17.0889 16.1047 17.5566 14.8952C17.778 14.322 17.9328 13.6679 17.975 12.7115C18.0172 11.7515 18.0278 11.4456 18.0278 9.00176C18.0278 6.55792 18.0242 6.25203 17.982 5.29205ZM16.3611 12.6411C16.3224 13.5202 16.1747 13.9949 16.0516 14.3114C15.7492 15.0956 15.1268 15.7179 14.3426 16.0204C14.0262 16.1434 13.548 16.2911 12.6724 16.3297C11.723 16.372 11.4382 16.3824 9.03658 16.3824C6.63491 16.3824 6.3466 16.372 5.40063 16.3297C4.52155 16.2911 4.04685 16.1434 3.73038 16.0204C3.34015 15.8761 2.98495 15.6476 2.69664 15.3487C2.39776 15.0568 2.1692 14.7052 2.02497 14.315C1.9019 13.9985 1.75424 13.5202 1.71565 12.6447C1.67334 11.6953 1.6629 11.4104 1.6629 9.00876C1.6629 6.60709 1.67334 6.31878 1.71565 5.37295C1.75424 4.49387 1.9019 4.01917 2.02497 3.7027C2.1692 3.31234 2.39776 2.95727 2.70021 2.66883C2.99196 2.36994 3.34359 2.14138 3.73395 1.99729C4.05042 1.87422 4.5287 1.72656 5.4042 1.68783C6.35361 1.64566 6.63848 1.63508 9.04001 1.63508C11.4453 1.63508 11.73 1.64566 12.676 1.68783C13.555 1.72656 14.0297 1.87422 14.3462 1.99729C14.7364 2.14138 15.0916 2.36994 15.38 2.66883C15.6788 2.96071 15.9074 3.31234 16.0516 3.7027C16.1747 4.01917 16.3224 4.49731 16.3611 5.37295C16.4033 6.32236 16.4138 6.60709 16.4138 9.00876C16.4138 11.4104 16.4033 11.6917 16.3611 12.6411Z" fill="#8E8E93"/>
                                                <path d="M9.03313 4.37793C6.48037 4.37793 4.40918 6.44898 4.40918 9.00188C4.40918 11.5548 6.48037 13.6258 9.03313 13.6258C11.586 13.6258 13.6571 11.5548 13.6571 9.00188C13.6571 6.44898 11.586 4.37793 9.03313 4.37793ZM9.03313 12.0013C7.37703 12.0013 6.03369 10.6581 6.03369 9.00188C6.03369 7.34564 7.37703 6.00244 9.03313 6.00244C10.6894 6.00244 12.0326 7.34564 12.0326 9.00188C12.0326 10.6581 10.6894 12.0013 9.03313 12.0013Z" fill="#8E8E93"/>
                                                <path d="M14.9198 4.19496C14.9198 4.79108 14.4365 5.27444 13.8402 5.27444C13.2441 5.27444 12.7607 4.79108 12.7607 4.19496C12.7607 3.5987 13.2441 3.11548 13.8402 3.11548C14.4365 3.11548 14.9198 3.5987 14.9198 4.19496Z" fill="#8E8E93"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_4276_12313">
                                                <rect width="18" height="18" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tf-layout-sidebar">
                            <SidebarPage/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  );
}
