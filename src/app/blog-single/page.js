"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import SidebarBlog from "@/components/elements/SidebarBlog";
import Image from "next/image";

export default function SingleBlog() {
  return (
    <>
      <Layout>
        <div className="flat-breadcrumb">
          <div className="container">
            <div className="breadcrumb">
              <Link className="item" href="/">
                Home
              </Link>
              <Link className="item" href="/single-item">
                Item
              </Link>
            </div>
          </div>
        </div>
        <div className="flat-spacing-1">
          <div className="container">
            <div className="row flat-single-wrapper">
              <div className="col-lg-8">
                <div className="flat-single-blog">
                    <div className="box">
                        <div className="sub-box">
                        <h5 className="mb-16">
                            Purple color meaning, symbolism, and <br />
                            psychological effect
                        </h5>
                        <ul className="meta">
                            <li>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M10.4993 4C10.4993 4.66304 10.2359 5.29893 9.7671 5.76777C9.29826 6.23661 8.66237 6.5 7.99933 6.5C7.33629 6.5 6.70041 6.23661 6.23157 5.76777C5.76273 5.29893 5.49933 4.66304 5.49933 4C5.49933 3.33696 5.76273 2.70107 6.23157 2.23223C6.70041 1.76339 7.33629 1.5 7.99933 1.5C8.66237 1.5 9.29826 1.76339 9.7671 2.23223C10.2359 2.70107 10.4993 3.33696 10.4993 4ZM3 13.412C3.02142 12.1002 3.55756 10.8494 4.49278 9.92936C5.42801 9.00929 6.68739 8.49365 7.99933 8.49365C9.31127 8.49365 10.5707 9.00929 11.5059 9.92936C12.4411 10.8494 12.9772 12.1002 12.9987 13.412C11.4303 14.1312 9.72477 14.5023 7.99933 14.5C6.21533 14.5 4.522 14.1107 3 13.412Z"
                                stroke="#8E8E93"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text_primary">Kathryn Murphy</span>
                            </li>
                            <li>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13.5 4.5H8.16687L6.43313 3.2C6.25978 3.07066 6.04941 3.00054 5.83313 3H2.5C2.23478 3 1.98043 3.10536 1.79289 3.29289C1.60536 3.48043 1.5 3.73478 1.5 4V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H13.5556C13.806 13.4997 14.046 13.4001 14.223 13.223C14.4001 13.046 14.4997 12.806 14.5 12.5556V5.5C14.5 5.23478 14.3946 4.98043 14.2071 4.79289C14.0196 4.60536 13.7652 4.5 13.5 4.5ZM13.5 12.5H2.5V4H5.83313L7.56687 5.3C7.74022 5.42934 7.95059 5.49946 8.16687 5.5H13.5V12.5Z"
                                fill="black"
                                />
                            </svg>
                            <span className="text_primary">Housing</span>
                            </li>
                            <li>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M5.75 6.5C5.75 6.56631 5.72366 6.62989 5.67678 6.67678C5.62989 6.72366 5.5663 6.75 5.5 6.75C5.4337 6.75 5.37011 6.72366 5.32322 6.67678C5.27634 6.62989 5.25 6.56631 5.25 6.5C5.25 6.4337 5.27634 6.37011 5.32322 6.32322C5.37011 6.27634 5.4337 6.25 5.5 6.25C5.5663 6.25 5.62989 6.27634 5.67678 6.32322C5.72366 6.37011 5.75 6.4337 5.75 6.5ZM5.75 6.5H5.5M8.25 6.5C8.25 6.56631 8.22366 6.62989 8.17678 6.67678C8.12989 6.72366 8.0663 6.75 8 6.75C7.9337 6.75 7.87011 6.72366 7.82322 6.67678C7.77634 6.62989 7.75 6.56631 7.75 6.5C7.75 6.4337 7.77634 6.37011 7.82322 6.32322C7.87011 6.27634 7.9337 6.25 8 6.25C8.0663 6.25 8.12989 6.27634 8.17678 6.32322C8.22366 6.37011 8.25 6.4337 8.25 6.5ZM8.25 6.5H8M10.75 6.5C10.75 6.56631 10.7237 6.62989 10.6768 6.67678C10.6299 6.72366 10.5663 6.75 10.5 6.75C10.4337 6.75 10.3701 6.72366 10.3232 6.67678C10.2763 6.62989 10.25 6.56631 10.25 6.5C10.25 6.4337 10.2763 6.37011 10.3232 6.32322C10.3701 6.27634 10.4337 6.25 10.5 6.25C10.5663 6.25 10.6299 6.27634 10.6768 6.32322C10.7237 6.37011 10.75 6.4337 10.75 6.5ZM10.75 6.5H10.5M1.5 8.50667C1.5 9.57333 2.24867 10.5027 3.30467 10.658C4.02933 10.7647 4.76133 10.8467 5.5 10.904V14L8.28933 11.2113C8.42744 11.0738 8.61312 10.9945 8.808 10.99C10.1091 10.958 11.407 10.8471 12.6947 10.658C13.7513 10.5027 14.5 9.574 14.5 8.506V4.494C14.5 3.426 13.7513 2.49733 12.6953 2.342C11.1406 2.11381 9.57135 1.99951 8 2C6.40533 2 4.83733 2.11667 3.30467 2.342C2.24867 2.49733 1.5 3.42667 1.5 4.494V8.506V8.50667Z"
                                stroke="#8E8E93"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text_grey-1">0 comment</span>
                            </li>
                            <li>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M4.5 2V3.5M11.5 2V3.5M2 12.5V5C2 4.60218 2.15804 4.22064 2.43934 3.93934C2.72064 3.65804 3.10218 3.5 3.5 3.5H12.5C12.8978 3.5 13.2794 3.65804 13.5607 3.93934C13.842 4.22064 14 4.60218 14 5V12.5M2 12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H12.5C12.8978 14 13.2794 13.842 13.5607 13.5607C13.842 13.2794 14 12.8978 14 12.5M2 12.5V7.5C2 7.10218 2.15804 6.72064 2.43934 6.43934C2.72064 6.15804 3.10218 6 3.5 6H12.5C12.8978 6 13.2794 6.15804 13.5607 6.43934C13.842 6.72064 14 7.10218 14 7.5V12.5"
                                stroke="#8E8E93"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text_grey-1">April 6, 2023</span>
                            </li>
                        </ul>
                        </div>
                        <div className="sub-box box-img">
                        <Image
                            src="/images/blog/item-single.jpg"
                            width={850}
                            height={410}
                            className="img"
                            alt="avt-banner"
                        />
                        </div>
                        <div className="sub-box">
                        <div className="h9 mb-10">Table of contents</div>
                        <ul>
                            <li className="text-2 text_primary fw-medium">
                            1. Discover what two colors make purple
                            </li>
                            <li className="text-2 text_primary fw-medium">
                            2. Meanings of purple in history
                            </li>
                            <li className="text-2 text_primary fw-medium">
                            3. Difference between purple and violet
                            </li>
                            <li className="text-2 text_primary fw-medium">
                            4. Purple’s complementary color
                            </li>
                            <li className="text-2 text_primary fw-medium">
                            5. How to design with purple
                            </li>
                            <li className="text-2 text_primary fw-medium">
                            6. Color palettes with purple
                            </li>
                        </ul>
                        </div>
                        <div className="sub-box">
                        <p className="text-4 fw-semibold">
                            Purple is a color that has fascinated humanity for
                            centuries. Its rich history and symbolic significance
                            make it a subject of intrigue and inspiration across
                            cultures and time periods. In this article, we’ll take a
                            closer look at the multifaceted nature of purple,
                            exploring its origins, meanings, and the profound impact
                            it has had on art, culture, and society.
                        </p>
                        </div>
                        <div className="sub-box">
                        <div className="h9 mb-14">
                            1. Discover what two colors make purple
                        </div>
                        <p className="mb-14">
                            If you are willing to learn what makes the color purple,
                            you came to the right place. At its core, purple is the
                            result of a combination of two primary colors: red and
                            blue.
                        </p>
                        <p className="mb-14">
                            But the magic doesn’t stop there. When red and blue
                            intertwine, their intensity fluctuates, giving rise to a
                            spectrum of purples that range from deep, royal shades
                            to soft, ethereal hues. Here, experimentation is key.
                            The possibilities become endless by adjusting the ratio
                            of red to blue, or by adding touches of white for a
                            lighter tint or black for a darker shade.
                        </p>
                        <p className="mb-14">
                            Nature serves as the ultimate muse, showcasing the
                            splendor of purple in all its forms. Whether it’s the
                            vivid hues of a sunset painting the sky or the delicate
                            petals of a lavender field swaying in the breeze, the
                            natural world offers endless inspiration for your own
                            colorful creations.{" "}
                        </p>
                        </div>
                        <div className="sub-box">
                        <div className="h9 mb-14">
                            2. Meanings of purple in history
                        </div>
                        <p className="mb-14">
                            Purple has left its indelible mark on human history,
                            from the prehistoric cave paintings of Pech Merle to the
                            opulent fabrics of ancient Syria. It wasn’t until the
                            15th century BC in the cities of Sidon and Tyre that the
                            most legendary purple dye emerged, extracted
                            painstakingly from the murex shellfish. This exquisite
                            hue, known as Tyrian purple, became a symbol of wealth
                            and status, mentioned in epic tales like Virgil’s Aeneid
                            and Homer’s Iliad, as well as in the Old Testament.
                        </p>
                        <p className="mb-14">
                            The allure of Tyrian purple was not lost on the great
                            conquerors of the ancient world. Alexander the Great
                            himself was said to have donned garments dyed with this
                            prestigious hue, further cementing its reputation as a
                            symbol of power and prestige.
                        </p>
                        <p className="mb-14">
                            During the height of the Roman Empire, purple took on
                            even greater significance. Reserved exclusively for
                            emperors and their highest-ranking officers, purple
                            became synonymous with imperial authority and divine
                            right. Wearing purple was to proclaim oneself as part of
                            the ruling elite, commanding respect and admiration from
                            all who beheld it.
                        </p>
                        <p className="mb-14">
                            But perhaps the most poignant association with purple
                            comes from the story of Christ himself. Before his
                            crucifixion, Christ is said to have been draped in a
                            purple robe. This tragic symbol serves as a reminder of
                            the dual nature of purple: a color of both majesty and
                            suffering, power and humility. Do you want to discover
                            some other color meanings? Read this comprehensive
                            article.
                        </p>
                        </div>
                        <div className="box-bottom-divider sub-box">
                        <div className="left d-flex gap-8 align-items-center">
                            <span className="text">Tags:</span>
                            <ul className="d-flex gap-8">
                            <li>
                                <Link href="#" className="tag">
                                Imprint
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="tag">
                                Nulivo
                                </Link>
                            </li>
                            </ul>
                        </div>
                        <div className="right">
                            <span className="text">Share this post:</span>
                            <ul className="list-social">
                            <li>
                                <Link href="#" className="social-item icon link">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_4276_12299)">
                                    <path
                                        d="M10.3936 18V9.78996H13.1482L13.5615 6.58941H10.3936V4.54632C10.3936 3.61998 10.6498 2.98869 11.9796 2.98869L13.673 2.98799V0.125307C13.3802 0.0872508 12.3749 0 11.2049 0C8.76181 0 7.08919 1.49127 7.08919 4.22934V6.58941H4.32617V9.78996H7.08919V18H10.3936Z"
                                        fill="#8E8E93"
                                    />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4276_12299">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                    </defs>
                                </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="social-item icon link">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_4276_12303)">
                                    <path
                                        d="M18 3.41887C17.3306 3.7125 16.6174 3.90712 15.8737 4.00162C16.6388 3.54487 17.2226 2.82712 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95237 8.85938 6.22012C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63637 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1332C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64862 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16587 18 3.41887Z"
                                        fill="#8E8E93"
                                    />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4276_12303">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                    </defs>
                                </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="social-item icon link">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M16.2005 16.2V10.926C16.2005 8.334 15.6425 6.354 12.6185 6.354C11.1605 6.354 10.1885 7.146 9.79253 7.902H9.75653V6.588H6.89453V16.2H9.88253V11.43C9.88253 10.17 10.1165 8.964 11.6645 8.964C13.1945 8.964 13.2125 10.386 13.2125 11.502V16.182H16.2005V16.2Z"
                                    fill="#8E8E93"
                                    />
                                    <path
                                    d="M2.0332 6.58789H5.0212V16.1999H2.0332V6.58789Z"
                                    fill="#8E8E93"
                                    />
                                    <path
                                    d="M3.52878 1.80005C2.57478 1.80005 1.80078 2.57405 1.80078 3.52805C1.80078 4.48205 2.57478 5.27405 3.52878 5.27405C4.48278 5.27405 5.25678 4.48205 5.25678 3.52805C5.25678 2.57405 4.48278 1.80005 3.52878 1.80005Z"
                                    fill="#8E8E93"
                                    />
                                </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="social-item icon link">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_4276_12313)">
                                    <path
                                        d="M17.982 5.29205C17.9399 4.33564 17.7852 3.67812 17.5636 3.10836C17.3351 2.50359 16.9834 1.96213 16.5228 1.51201C16.0726 1.05489 15.5276 0.699691 14.9298 0.474702C14.3568 0.253147 13.7027 0.0984842 12.7463 0.0563159C11.7827 0.0105764 11.4768 0 9.03301 0C6.58917 0 6.28328 0.0105764 5.3233 0.0527447C4.36689 0.0949129 3.70937 0.249713 3.13975 0.471131C2.53484 0.699691 1.99338 1.05132 1.54326 1.51201C1.08614 1.96213 0.731078 2.50716 0.505952 3.10493C0.284397 3.67812 0.129734 4.33207 0.0875659 5.28848C0.0418264 6.25203 0.03125 6.55792 0.03125 9.00176C0.03125 11.4456 0.0418264 11.7515 0.0839947 12.7115C0.126163 13.6679 0.280963 14.3254 0.502518 14.8952C0.731078 15.4999 1.08614 16.0414 1.54326 16.4915C1.99338 16.9486 2.53841 17.3038 3.13618 17.5288C3.70937 17.7504 4.36332 17.905 5.31987 17.9472C6.27971 17.9895 6.58574 17.9999 9.02957 17.9999C11.4734 17.9999 11.7793 17.9895 12.7393 17.9472C13.6957 17.905 14.3532 17.7504 14.9228 17.5288C16.1325 17.0611 17.0889 16.1047 17.5566 14.8952C17.778 14.322 17.9328 13.6679 17.975 12.7115C18.0172 11.7515 18.0278 11.4456 18.0278 9.00176C18.0278 6.55792 18.0242 6.25203 17.982 5.29205ZM16.3611 12.6411C16.3224 13.5202 16.1747 13.9949 16.0516 14.3114C15.7492 15.0956 15.1268 15.7179 14.3426 16.0204C14.0262 16.1434 13.548 16.2911 12.6724 16.3297C11.723 16.372 11.4382 16.3824 9.03658 16.3824C6.63491 16.3824 6.3466 16.372 5.40063 16.3297C4.52155 16.2911 4.04685 16.1434 3.73038 16.0204C3.34015 15.8761 2.98495 15.6476 2.69664 15.3487C2.39776 15.0568 2.1692 14.7052 2.02497 14.315C1.9019 13.9985 1.75424 13.5202 1.71565 12.6447C1.67334 11.6953 1.6629 11.4104 1.6629 9.00876C1.6629 6.60709 1.67334 6.31878 1.71565 5.37295C1.75424 4.49387 1.9019 4.01917 2.02497 3.7027C2.1692 3.31234 2.39776 2.95727 2.70021 2.66883C2.99196 2.36994 3.34359 2.14138 3.73395 1.99729C4.05042 1.87422 4.5287 1.72656 5.4042 1.68783C6.35361 1.64566 6.63848 1.63508 9.04001 1.63508C11.4453 1.63508 11.73 1.64566 12.676 1.68783C13.555 1.72656 14.0297 1.87422 14.3462 1.99729C14.7364 2.14138 15.0916 2.36994 15.38 2.66883C15.6788 2.96071 15.9074 3.31234 16.0516 3.7027C16.1747 4.01917 16.3224 4.49731 16.3611 5.37295C16.4033 6.32236 16.4138 6.60709 16.4138 9.00876C16.4138 11.4104 16.4033 11.6917 16.3611 12.6411Z"
                                        fill="#8E8E93"
                                    />
                                    <path
                                        d="M9.03313 4.37793C6.48037 4.37793 4.40918 6.44898 4.40918 9.00188C4.40918 11.5548 6.48037 13.6258 9.03313 13.6258C11.586 13.6258 13.6571 11.5548 13.6571 9.00188C13.6571 6.44898 11.586 4.37793 9.03313 4.37793ZM9.03313 12.0013C7.37703 12.0013 6.03369 10.6581 6.03369 9.00188C6.03369 7.34564 7.37703 6.00244 9.03313 6.00244C10.6894 6.00244 12.0326 7.34564 12.0326 9.00188C12.0326 10.6581 10.6894 12.0013 9.03313 12.0013Z"
                                        fill="#8E8E93"
                                    />
                                    <path
                                        d="M14.9198 4.19496C14.9198 4.79108 14.4365 5.27444 13.8402 5.27444C13.2441 5.27444 12.7607 4.79108 12.7607 4.19496C12.7607 3.5987 13.2441 3.11548 13.8402 3.11548C14.4365 3.11548 14.9198 3.5987 14.9198 4.19496Z"
                                        fill="#8E8E93"
                                    />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4276_12313">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                    </defs>
                                </svg>
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="box wrap-comment">
                        <h6>Comment (4)</h6>
                        <div className="wrap-single-comment">
                            <div className="comment-item">
                                <div className="avatar avt-50 round">
                                  <Image
                                    src="/images/avatar/avt-13.jpg"
                                    alt="avatar"
                                    width={50}
                                    height={50}
                                  />
                                </div>
                                <div className="content-right">
                                  <div className="info">
                                    <div className="box-author">
                                      <div className="h9 name">Dianne Russell</div>
                                    </div>
                                    <span className="date-time">
                                      Nov 9, 2023 at 5:20 p.m
                                    </span>
                                  </div>
                                  <p className="cmt-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus quis ultrices
                                    metus, at egestas orci. Aenean vitae feugiat
                                    metus. Fusce dictum lectus sit amet tempor
                                    cursus. Etiam vel bibendum tortor
                                  </p>
                                  <div className="action">
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <span className="text">Useful</span>
                                    </div>
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>

                                      <span className="text">Not helpful</span>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div className="comment-item">
                                <div className="avatar avt-50 round">
                                  <Image
                                    src="/images/avatar/avt-14.jpg"
                                    alt="avatar"
                                    width={50}
                                    height={50}
                                  />
                                </div>
                                <div className="content-right">
                                  <div className="info">
                                    <div className="box-author">
                                      <div className="h9 name">Robert Fox</div>
                                    </div>
                                    <span className="date-time">
                                      Nov 9, 2023 at 5:20 p.m
                                    </span>
                                  </div>
                                  <p className="cmt-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus quis ultrices
                                    metus, at egestas orci. Aenean vitae feugiat
                                    metus. Fusce dictum lectus sit amet tempor
                                    cursus. Etiam vel bibendum tortor
                                  </p>
                                  <div className="action">
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <span className="text">Useful</span>
                                    </div>
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>

                                      <span className="text">Not helpful</span>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div className="comment-item">
                                <div className="avatar avt-50 round">
                                  <Image
                                    src="/images/avatar/avt-15.jpg"
                                    alt="avatar"
                                    width={50}
                                    height={50}
                                  />
                                </div>
                                <div className="content-right">
                                  <div className="info">
                                    <div className="box-author">
                                      <div className="h9 name">
                                      Darrell Steward
                                      </div>
                                    </div>
                                    <span className="date-time">
                                      Nov 9, 2023 at 5:20 p.m
                                    </span>
                                  </div>
                                  <p className="cmt-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus quis ultrices
                                    metus, at egestas orci. Aenean vitae feugiat
                                    metus. Fusce dictum lectus sit amet tempor
                                    cursus. Etiam vel bibendum tortor
                                  </p>
                                  <div className="action">
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <span className="text">Useful</span>
                                    </div>
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>

                                      <span className="text">Not helpful</span>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box wrap-form-comment">
                        <h6>Leave a comment</h6>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form className="form-comment">
                            <fieldset className="group-ip">
                                <label className="fw-semibold">Your name *</label>
                                <input type="text" placeholder="Your name"/>
                            </fieldset>
                            <div className="group-ip ip-group-2">
                                <fieldset>
                                    <label className="fw-semibold">Phone number</label>
                                    <input type="text" placeholder="Your phone"/>
                                </fieldset>
                                <fieldset>
                                    <label className="fw-semibold">Email address</label>
                                    <input type="text" placeholder="Your email"/>
                                </fieldset>
                            </div>
                            <fieldset className="group-ip">
                                <label className="fw-semibold">Your Comment</label>
                                <textarea placeholder="Your message"></textarea>
                            </fieldset>
                            <button className="tf-btn w-100">Send comment</button>
                        </form>
                    </div>
                </div>
              </div>
              <div className="col-lg-4">
                <SidebarBlog />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
