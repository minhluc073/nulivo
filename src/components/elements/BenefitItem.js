"use client";
import Image from "next/image";
import Link from "next/link";
export default function BenefitItem({item}){
    
    return(
        <Link href={item?.link} className="benefit-item">
            <div className="box-img">
                <Image src={item?.img} width={82} height={82} alt="img-benefit"/>
            </div>
            <div className="box-content">
                <div className="title">{item?.title}</div>
                <p className="desc text_black-1">{item?.desc}</p>
            </div>
        </Link>
    )
}