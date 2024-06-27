

export default function Overview({ title}){
    return (
        <>
            <div className="h7 title">{title}</div>
            <div className="flat-overview">
                <div className="overview-item">
                    <div className="box-top">
                        <div className="title-overview">Total earnings</div>
                        <span className="count">$24</span>
                    </div>
                    <div className="box-bottom">
                        <div className="inner-left">
                            <div className="title-date">Last month</div>
                            <span className="count-date">$12</span>
                        </div>
                        <span className="icon icon-chart"></span>
                    </div>
                </div>
                <div className="overview-item bg-2">
                    <div className="box-top">
                        <div className="title-overview">Number of sales</div>
                        <span className="count">75</span>
                    </div>
                    <div className="box-bottom">
                        <div className="inner-left">
                            <div className="title-date">Last month</div>
                            <span className="count-date">60</span>
                        </div>
                        <span className="icon icon-text"></span>
                    </div>
                </div>
                <div className="overview-item bg-3">
                    <div className="box-top">
                        <div className="title-overview">Downloads</div>
                        <span className="count">174</span>
                    </div>
                    <div className="box-bottom">
                        <div className="inner-left">
                            <div className="title-date">Last month</div>
                            <span className="count-date">158</span>
                        </div>
                        <span className="icon icon-download-2"></span>
                    </div>
                </div>
                <div className="overview-item bg-4">
                    <div className="box-top">
                        <div className="title-overview">Like</div>
                        <span className="count">1.780</span>
                    </div>
                    <div className="box-bottom">
                        <div className="inner-left">
                            <div className="title-date">Last month</div>
                            <span className="count-date">1.246</span>
                        </div>
                        <span className="icon icon-heart-line-2"></span>
                    </div>
                </div>
            </div>
        </>
        
    )
}