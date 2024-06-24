
'use client'
import dataBenefit from "@/data/data-benefit"
import BenefitItem from "../elements/BenefitItem"

export default function Benefits ({title, center}){
    return (
        <section className="flat-template flat-spacing-2">
            <div className="container">
                <h4 className={`flat-title ${center ? "text-center" : ""}`}>{title}</h4>
                <div className="row">
                    {dataBenefit.map((item)=>(
                        <div className="col-lg-4 col-sm-6 box" key={item.id}>
                            <BenefitItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}