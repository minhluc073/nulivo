import Image from "next/image";
import Link from "next/link";


export default function SidebarProfile(){
    return(
        <aside className="sidebar-profile-wrap fixed-sidebar">
            <div className="box">
                <div className="box-title">
                    <div className="h8 text_black-3">SlideScan</div>
                    <span className="text-7">2.384 folower</span>
                </div>
                <Link href="#" className="tf-btn btn-line w-100">Follow</Link>
                <ul className="list-count">
                    <li className="item">
                        <div className="h9 count mb-6">172</div>
                        <span className="text-7">Total Items</span>
                    </li>
                    <li className="item">
                        <div className="h9 count mb-6">13.7K</div>
                        <span className="text-7">Total Sales</span>
                    </li>
                    <li className="item">
                        <div className="h9 count mb-6">4.8/5</div>
                        <span className="text-7">Avg Rating</span>
                    </li>
                </ul>
                <div>
                    <div className="text-title-1 mb-10">Bio</div>
                    <p>Easy to use: Our templates are designed to be simple, easy to edit, and suitable for all levels of PowerPoint experience.</p>
                </div>
            </div>
            <div className="box">
                <div className="text-title-1 mb-10">Badges</div>
                <ul className="list-badge">
                    <li>
                        <Link href="#" className="badge-item">
                            <Image src="/images/card/flag-1.png" alt="img" width={40} height={40}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="badge-item style-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4358_391)">
                            <path d="M12.6667 2.66667H11.9333C11.7786 1.91428 11.3692 1.23823 10.7742 0.752479C10.1791 0.266727 9.4348 0.000969683 8.66667 0L7.33333 0C6.5652 0.000969683 5.82088 0.266727 5.22583 0.752479C4.63079 1.23823 4.2214 1.91428 4.06667 2.66667H3.33333C2.4496 2.66773 1.60237 3.01925 0.97748 3.64415C0.352588 4.26904 0.00105857 5.11627 0 6L0 8H16V6C15.9989 5.11627 15.6474 4.26904 15.0225 3.64415C14.3976 3.01925 13.5504 2.66773 12.6667 2.66667ZM5.456 2.66667C5.59339 2.27806 5.84749 1.94139 6.18353 1.70273C6.51958 1.46406 6.92116 1.33504 7.33333 1.33333H8.66667C9.07884 1.33504 9.48042 1.46406 9.81647 1.70273C10.1525 1.94139 10.4066 2.27806 10.544 2.66667H5.456Z" fill="white"/>
                            <path d="M8.66667 10.0002C8.66667 10.177 8.59643 10.3465 8.47141 10.4716C8.34638 10.5966 8.17681 10.6668 8 10.6668C7.82319 10.6668 7.65362 10.5966 7.5286 10.4716C7.40357 10.3465 7.33333 10.177 7.33333 10.0002V9.3335H0V12.6668C0.00105857 13.5505 0.352588 14.3978 0.97748 15.0227C1.60237 15.6476 2.4496 15.9991 3.33333 16.0001H12.6667C13.5504 15.9991 14.3976 15.6476 15.0225 15.0227C15.6474 14.3978 15.9989 13.5505 16 12.6668V9.3335H8.66667V10.0002Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4358_391">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <span className="badge">2</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="badge-item style-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4358_398)">
                            <path d="M9.84117 7.7247C9.47674 7.93217 9.07942 8.07558 8.6665 8.1487V15.916C9.01786 15.8476 9.35565 15.7222 9.6665 15.5447L13.6845 13.2254C14.1906 12.9319 14.6108 12.5109 14.9033 12.0042C15.1958 11.4976 15.3502 10.923 15.3512 10.338V5.69803C15.349 5.34191 15.2894 4.98846 15.1745 4.65137L9.84117 7.7247Z" fill="white"/>
                            <path d="M6.82805 6.57143C7.18511 6.7768 7.58981 6.88488 8.00171 6.88488C8.41362 6.88488 8.81832 6.7768 9.17538 6.57143L14.5087 3.49809C14.2725 3.22668 13.9938 2.99545 13.6834 2.81343L9.66672 0.491427C9.15966 0.199842 8.58497 0.0463867 8.00005 0.0463867C7.41513 0.0463867 6.84044 0.199842 6.33338 0.491427L2.31538 2.81143C2.01608 2.98669 1.74613 3.20782 1.51538 3.46676L6.82805 6.57143Z" fill="white"/>
                            <path d="M7.33335 8.14857C6.92017 8.07561 6.52261 7.93219 6.15802 7.72457L0.838015 4.61523C0.714899 4.96302 0.650903 5.32897 0.648682 5.6979V10.3379C0.649657 10.9229 0.804083 11.4974 1.09654 12.0041C1.389 12.5107 1.80926 12.9318 2.31535 13.2252L6.33335 15.5446C6.6442 15.7221 6.98199 15.8475 7.33335 15.9159V8.14857Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4358_398">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <span className="badge">2</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="badge-item style-3">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4358_406)">
                            <path d="M15.4127 0.581194C15.2043 0.37332 14.9525 0.214254 14.6752 0.115458C14.398 0.0166625 14.1023 -0.0194029 13.8094 0.00986068C11.9474 0.189861 5.68539 0.965194 3.26673 3.38119C2.11057 4.5405 1.42499 6.08708 1.34238 7.72227C1.25976 9.35746 1.78597 10.9653 2.81939 12.2352L10.1927 4.86186C10.3185 4.74042 10.4869 4.67323 10.6617 4.67475C10.8364 4.67626 11.0037 4.74638 11.1273 4.86998C11.2509 4.99359 11.321 5.1608 11.3225 5.33559C11.324 5.51039 11.2568 5.67879 11.1354 5.80453L3.76473 13.1779C5.03421 14.2119 6.64189 14.7388 8.27715 14.6566C9.91242 14.5745 11.4592 13.8892 12.6187 12.7332C15.0694 10.2819 15.8187 4.03919 15.9914 2.18453C16.0196 1.89111 15.9823 1.59508 15.8823 1.31781C15.7822 1.04055 15.6218 0.788954 15.4127 0.581194ZM3.26673 12.7332C3.42584 12.8919 3.59095 13.041 3.76206 13.1805L1.1354 15.8072C1.00933 15.9283 0.84072 15.9951 0.6659 15.9931C0.491081 15.9911 0.32404 15.9205 0.200766 15.7965C0.0774923 15.6726 0.00785131 15.5051 0.00684695 15.3303C0.00584259 15.1555 0.0735552 14.9872 0.195397 14.8619L2.82206 12.2352C2.96162 12.4059 3.10984 12.5719 3.26673 12.7332Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4358_406">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <span className="badge">2</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="badge-item style-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4358_412)">
                            <path d="M6.22666 7.19509C5.59234 6.39422 5.27825 5.3862 5.3454 4.36675C5.41254 3.34731 5.85611 2.38919 6.59 1.67843L7.012 1.25576C7.72281 0.522162 8.68084 0.0788262 9.70013 0.0118101C10.7194 -0.055206 11.7272 0.258878 12.528 0.893098C12.9563 1.24826 13.3051 1.68962 13.5516 2.18846C13.798 2.6873 13.9368 3.23244 13.9587 3.78843C13.9821 4.34202 13.8905 4.89445 13.6895 5.41082C13.4886 5.92719 13.1828 6.39627 12.7913 6.78842L12.1247 7.45509C11.3733 8.20483 10.3554 8.62626 9.294 8.62709C9.23666 8.62709 9.17933 8.62576 9.122 8.62309C8.56625 8.60135 8.02129 8.46298 7.52248 8.21696C7.02368 7.97095 6.58219 7.62279 6.22666 7.19509ZM12.5047 10.6664C12.0456 10.6653 11.5908 10.7552 11.1666 10.9309C10.7424 11.1065 10.3573 11.3644 10.0333 11.6898C9.09203 12.6365 7.97227 13.387 6.73889 13.898C5.50551 14.4089 4.18302 14.6701 2.848 14.6664H2.08133C1.9334 14.6666 1.78873 14.6229 1.66565 14.5409C1.54257 14.4588 1.44661 14.3421 1.38992 14.2054C1.33324 14.0688 1.31838 13.9184 1.34724 13.7733C1.37609 13.6282 1.44735 13.495 1.552 13.3904L2.01866 12.9238C3.17617 12.8461 4.26602 12.3504 5.08533 11.5291L7.12133 9.49309C6.38192 9.16459 5.72695 8.67216 5.206 8.05309C4.91484 7.704 4.6722 7.31717 4.48466 6.90309L2.46666 8.91909C1.64507 9.73822 1.14938 10.8282 1.072 11.9858L0.60533 12.4524C0.315629 12.7439 0.118747 13.1147 0.0395182 13.518C-0.0397104 13.9212 0.00226361 14.3389 0.160146 14.7184C0.318027 15.0978 0.584745 15.422 0.926655 15.6501C1.26856 15.8781 1.67035 15.9998 2.08133 15.9997H2.848C4.35811 16.0039 5.85404 15.7084 7.2492 15.1305C8.64437 14.5526 9.91108 13.7038 10.976 12.6331C11.2783 12.3308 11.6635 12.1249 12.0828 12.0415C12.5021 11.9581 12.9367 12.0008 13.3317 12.1644C13.7267 12.3279 14.0643 12.6049 14.302 12.9603C14.5396 13.3157 14.6665 13.7336 14.6667 14.1611V15.3331C14.6667 15.5099 14.7369 15.6795 14.8619 15.8045C14.9869 15.9295 15.1565 15.9997 15.3333 15.9997C15.5101 15.9997 15.6797 15.9295 15.8047 15.8045C15.9298 15.6795 16 15.5099 16 15.3331V14.1611C15.9988 13.2345 15.6301 12.3462 14.9748 11.6911C14.3196 11.036 13.4312 10.6675 12.5047 10.6664Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4358_412">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <span className="badge">2</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="box">
                <div className="text-title-1 mb-10">Ready for a job</div>
                <Link href="#" className="tf-btn w-100">Hire me now</Link>
            </div>
            <div className="box">
                <div className="text-title-1 mb-10">Social</div>
                <ul className="list-social">
                    <li>
                        <Link href="#" className="icon link"><i className="icon-pinstes"></i></Link>
                    </li>
                    <li>
                        <Link href="#" className="icon link"><i className="icon-fb"></i></Link>
                    </li>
                    <li>
                        <Link href="#" className="icon link"><i className="icon-youtube"></i></Link>
                    </li>
                    <li>
                        <Link href="#" className="icon link"><i className="icon-tw"></i></Link>
                    </li>
                    <li>
                        <Link href="#" className="icon link"><i className="icon-instagram"></i></Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}