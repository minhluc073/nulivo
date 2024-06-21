"use client";
import Link from "next/link";
import Image from "next/image";

export default function BlogItem(props) {
  const { item } = props;
  return (
        <div className="blog-item hover-img">
            <Link href={item?.link} className="box-img archive-image">
                <Image
                    src={item?.img}
                    alt="image-blog"
                    width="100%"
                    height="100%"
                />
            </Link>
            <div className="archive-content">
                <ul className="meta">
                    <li className="item category"> 
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 4.5H8.66687L6.93313 3.2C6.75978 3.07066 6.54941 3.00054 6.33313 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4V12.5C2 12.7652 2.10536 13.0196 2.29289 13.2071C2.48043 13.3946 2.73478 13.5 3 13.5H14.0556C14.306 13.4997 14.546 13.4001 14.723 13.223C14.9001 13.046 14.9997 12.806 15 12.5556V5.5C15 5.23478 14.8946 4.98043 14.7071 4.79289C14.5196 4.60536 14.2652 4.5 14 4.5ZM14 12.5H3V4H6.33313L8.06687 5.3C8.24022 5.42934 8.45059 5.49946 8.66687 5.5H14V12.5Z" fill="#7C818B"/>
                        </svg>
                        {item?.category}
                    </li>
                    <li className="item">{item?.date}</li>
                </ul>
                <Link href={item?.link} className="link h9 title">{item?.title}</Link>
                <p className="desc">{item?.desc}</p>
            </div>
        </div>
  );
}
