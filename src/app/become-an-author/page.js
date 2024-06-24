import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import Benefits from "@/components/sections/Benefit";
import Image from "next/image";


export default function BecomeAuthor() {
  return (
    <>
        <Layout>
            <PageTitle
            title="Verify account"
            subtitle="Join Nulivo Market designers community. Share your creative designs, increase your sales and get good revenue."
            btn
            img
            />
            <div className="flat-breadcrumb">
                <div className="container">
                    <div className="breadcrumb">
                        <Link className="item" href="/">Home</Link>
                        <Link className="item" href="/category">Categories</Link>
                        <Link className="item" href="#">Google Slides Templates</Link>
                    </div>
                </div>
            </div>
            <Benefits title="Benefits to becoming an author on Nulivo market" center/>
            <div className="flat-spacing-1 pt-0">
                <div className="container">
                    <h4 className="flat-title text-center">How we work?</h4>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 box">
                            <div className="step-benefit-item">
                                <div className="box-img">
                                    <Image
                                        src="/images/box-icon/item-benefit-7.png"
                                        width={140}
                                        height={140}
                                        className="img"
                                        alt="img-step"
                                    />
                                </div>
                                <div className="content">
                                    <div className="h9 title">Step 1</div>
                                    <span>Create a new account</span>
                                </div>
                                <span className="arrow">
                                    <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4294_440)">
                                    <path d="M13.5677 58.0079C14.8717 57.2389 16.218 56.5122 17.5504 55.8276L16.6328 54.0416C15.2443 54.7541 13.884 55.4948 12.5519 56.2918L13.5678 58.036L13.5677 58.0079ZM21.646 53.8443C23.0347 53.216 24.4376 52.6299 25.8546 52.086L25.1052 50.2161C23.6602 50.7881 22.2293 51.3741 20.8125 52.0023L21.6319 53.8302L21.646 53.8443ZM30.1339 50.5385C31.5792 50.0508 33.0246 49.6193 34.4981 49.216L33.9452 47.2905C32.4577 47.7078 30.9702 48.1532 29.4968 48.6409L30.1339 50.5385ZM38.919 48.0902C40.4068 47.7572 41.8947 47.4522 43.3967 47.1893L43.0403 45.2082C41.5102 45.4709 39.9942 45.7758 38.4644 46.1228L38.919 48.0902ZM47.9031 46.5132C49.4193 46.3206 50.9217 46.1702 52.4522 46.0479L52.2783 44.0531C50.7197 44.1754 49.1893 44.3258 47.645 44.5183L47.9031 46.5132ZM57.0018 45.8072C58.5185 45.7551 60.0493 45.7452 61.5661 45.7773L61.5748 43.769C60.0158 43.7508 58.471 43.7467 56.9122 43.8127L56.9878 45.8213L57.0018 45.8072ZM66.1309 45.944C67.6479 46.0323 69.1651 46.1768 70.6823 46.3494L70.9017 44.3557C69.3564 44.1831 67.7971 44.0525 66.252 43.9641L66.131 45.9721L66.1309 45.944ZM75.2062 46.9514C76.7095 47.1941 78.213 47.465 79.7025 47.7779L80.0905 45.8128C78.5729 45.4998 77.0273 45.2148 75.4958 44.9719L75.1922 46.9654L75.2062 46.9514ZM84.1573 48.8151C85.633 49.1982 87.0947 49.6235 88.5565 50.0768L89.1413 48.1683C87.6654 47.7009 86.1475 47.2755 84.6577 46.8783L84.1573 48.8151ZM92.8861 51.549C94.3059 52.0724 95.7399 52.638 97.1459 53.2316L97.9275 51.3799C96.4933 50.7581 95.0453 50.2065 93.5972 49.6549L92.9141 51.549L92.8861 51.549ZM101.294 55.1387C102.658 55.8024 104.008 56.5082 105.344 57.2561L106.309 55.5032C104.945 54.7552 103.566 54.0212 102.16 53.3433L101.294 55.1387Z" fill="#A5A5A5"/>
                                    <path d="M96.0866 60.574L95.5618 58.6485L105.091 56.0758L101.794 46.7276L103.688 46.0726L107.707 57.4592L96.0866 60.574Z" fill="#A5A5A5"/>
                                    <circle cx="9.19531" cy="59.1212" r="3.91825" transform="rotate(-135 9.19531 59.1212)" stroke="#A5A5A5" strokeWidth="2"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4294_440">
                                    <rect width="76.2328" height="83.6102" fill="white" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 113.527 53.9048)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </span>

                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 box">
                            <div className="step-benefit-item">
                                <div className="box-img">
                                    <Image
                                        src="/images/box-icon/item-benefit-8.png"
                                        width={140}
                                        height={140}
                                        className="img"
                                        alt="img-step"
                                    />
                                </div>
                                <div className="content">
                                    <div className="h9 title">Step 2</div>
                                    <span>Upload your items</span>
                                </div>
                                <span className="arrow">
                                    <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4294_440)">
                                    <path d="M13.5677 58.0079C14.8717 57.2389 16.218 56.5122 17.5504 55.8276L16.6328 54.0416C15.2443 54.7541 13.884 55.4948 12.5519 56.2918L13.5678 58.036L13.5677 58.0079ZM21.646 53.8443C23.0347 53.216 24.4376 52.6299 25.8546 52.086L25.1052 50.2161C23.6602 50.7881 22.2293 51.3741 20.8125 52.0023L21.6319 53.8302L21.646 53.8443ZM30.1339 50.5385C31.5792 50.0508 33.0246 49.6193 34.4981 49.216L33.9452 47.2905C32.4577 47.7078 30.9702 48.1532 29.4968 48.6409L30.1339 50.5385ZM38.919 48.0902C40.4068 47.7572 41.8947 47.4522 43.3967 47.1893L43.0403 45.2082C41.5102 45.4709 39.9942 45.7758 38.4644 46.1228L38.919 48.0902ZM47.9031 46.5132C49.4193 46.3206 50.9217 46.1702 52.4522 46.0479L52.2783 44.0531C50.7197 44.1754 49.1893 44.3258 47.645 44.5183L47.9031 46.5132ZM57.0018 45.8072C58.5185 45.7551 60.0493 45.7452 61.5661 45.7773L61.5748 43.769C60.0158 43.7508 58.471 43.7467 56.9122 43.8127L56.9878 45.8213L57.0018 45.8072ZM66.1309 45.944C67.6479 46.0323 69.1651 46.1768 70.6823 46.3494L70.9017 44.3557C69.3564 44.1831 67.7971 44.0525 66.252 43.9641L66.131 45.9721L66.1309 45.944ZM75.2062 46.9514C76.7095 47.1941 78.213 47.465 79.7025 47.7779L80.0905 45.8128C78.5729 45.4998 77.0273 45.2148 75.4958 44.9719L75.1922 46.9654L75.2062 46.9514ZM84.1573 48.8151C85.633 49.1982 87.0947 49.6235 88.5565 50.0768L89.1413 48.1683C87.6654 47.7009 86.1475 47.2755 84.6577 46.8783L84.1573 48.8151ZM92.8861 51.549C94.3059 52.0724 95.7399 52.638 97.1459 53.2316L97.9275 51.3799C96.4933 50.7581 95.0453 50.2065 93.5972 49.6549L92.9141 51.549L92.8861 51.549ZM101.294 55.1387C102.658 55.8024 104.008 56.5082 105.344 57.2561L106.309 55.5032C104.945 54.7552 103.566 54.0212 102.16 53.3433L101.294 55.1387Z" fill="#A5A5A5"/>
                                    <path d="M96.0866 60.574L95.5618 58.6485L105.091 56.0758L101.794 46.7276L103.688 46.0726L107.707 57.4592L96.0866 60.574Z" fill="#A5A5A5"/>
                                    <circle cx="9.19531" cy="59.1212" r="3.91825" transform="rotate(-135 9.19531 59.1212)" stroke="#A5A5A5" strokeWidth="2"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4294_440">
                                    <rect width="76.2328" height="83.6102" fill="white" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 113.527 53.9048)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 box">
                            <div className="step-benefit-item">
                                <div className="box-img">
                                    <Image
                                        src="/images/box-icon/item-benefit-9.png"
                                        width={140}
                                        height={140}
                                        className="img"
                                        alt="img-step"
                                    />
                                </div>
                                <div className="content">
                                    <div className="h9 title">Step 3</div>
                                    <span>We review it</span>
                                </div>
                                <span className="arrow">
                                    <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4294_440)">
                                    <path d="M13.5677 58.0079C14.8717 57.2389 16.218 56.5122 17.5504 55.8276L16.6328 54.0416C15.2443 54.7541 13.884 55.4948 12.5519 56.2918L13.5678 58.036L13.5677 58.0079ZM21.646 53.8443C23.0347 53.216 24.4376 52.6299 25.8546 52.086L25.1052 50.2161C23.6602 50.7881 22.2293 51.3741 20.8125 52.0023L21.6319 53.8302L21.646 53.8443ZM30.1339 50.5385C31.5792 50.0508 33.0246 49.6193 34.4981 49.216L33.9452 47.2905C32.4577 47.7078 30.9702 48.1532 29.4968 48.6409L30.1339 50.5385ZM38.919 48.0902C40.4068 47.7572 41.8947 47.4522 43.3967 47.1893L43.0403 45.2082C41.5102 45.4709 39.9942 45.7758 38.4644 46.1228L38.919 48.0902ZM47.9031 46.5132C49.4193 46.3206 50.9217 46.1702 52.4522 46.0479L52.2783 44.0531C50.7197 44.1754 49.1893 44.3258 47.645 44.5183L47.9031 46.5132ZM57.0018 45.8072C58.5185 45.7551 60.0493 45.7452 61.5661 45.7773L61.5748 43.769C60.0158 43.7508 58.471 43.7467 56.9122 43.8127L56.9878 45.8213L57.0018 45.8072ZM66.1309 45.944C67.6479 46.0323 69.1651 46.1768 70.6823 46.3494L70.9017 44.3557C69.3564 44.1831 67.7971 44.0525 66.252 43.9641L66.131 45.9721L66.1309 45.944ZM75.2062 46.9514C76.7095 47.1941 78.213 47.465 79.7025 47.7779L80.0905 45.8128C78.5729 45.4998 77.0273 45.2148 75.4958 44.9719L75.1922 46.9654L75.2062 46.9514ZM84.1573 48.8151C85.633 49.1982 87.0947 49.6235 88.5565 50.0768L89.1413 48.1683C87.6654 47.7009 86.1475 47.2755 84.6577 46.8783L84.1573 48.8151ZM92.8861 51.549C94.3059 52.0724 95.7399 52.638 97.1459 53.2316L97.9275 51.3799C96.4933 50.7581 95.0453 50.2065 93.5972 49.6549L92.9141 51.549L92.8861 51.549ZM101.294 55.1387C102.658 55.8024 104.008 56.5082 105.344 57.2561L106.309 55.5032C104.945 54.7552 103.566 54.0212 102.16 53.3433L101.294 55.1387Z" fill="#A5A5A5"/>
                                    <path d="M96.0866 60.574L95.5618 58.6485L105.091 56.0758L101.794 46.7276L103.688 46.0726L107.707 57.4592L96.0866 60.574Z" fill="#A5A5A5"/>
                                    <circle cx="9.19531" cy="59.1212" r="3.91825" transform="rotate(-135 9.19531 59.1212)" stroke="#A5A5A5" strokeWidth="2"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4294_440">
                                    <rect width="76.2328" height="83.6102" fill="white" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 113.527 53.9048)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 box">
                            <div className="step-benefit-item">
                                <div className="box-img">
                                    <Image
                                        src="/images/box-icon/item-benefit-10.png"
                                        width={140}
                                        height={140}
                                        className="img"
                                        alt="img-step"
                                    />
                                </div>
                                <div className="content">
                                    <div className="h9 title">Step 4</div>
                                    <span>Start making money</span>
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
