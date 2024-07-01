import Image from "next/image";
import imgBanner from "/public/images/banner/banner-profile.jpg";

export default function BannerProfile(){
    return(
        <div className="flat-banner-profile">
            <div className="container">
                <div className="banner-profile">
                    <div className="banner">
                        <Image src={imgBanner} alt="banner"/>
                    </div>
                    <div className="avatar-check">
                          <div className="avatar round">
                            <Image
                              src="/images/avatar/avt-line.png"
                              width={128}
                              height={128}
                              alt="avatar"
                            />
                          </div>
                          <div className="check">
                            <span className="icon icon-check"></span>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
