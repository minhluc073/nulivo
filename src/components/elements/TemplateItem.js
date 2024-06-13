"use client";
import Link from "next/link";
import Image from "next/image";

export default function TemplateItem(props) {
  const { item } = props;
  return (
    <div className="template-box">
      <Link href={item?.link} className="archive-banner">
        <div className="image-banner">
          <Image
            src={item?.img}
            alt="image-template"
            width="100%"
            height="100%"
          />
        </div>
      </Link>
      <div className="archive-content">
        <div className="content-top">
          <div className="title">
            <Link href={item?.link} className="link">
              {item?.title}
            </Link>
          </div>
          <div className="info-box d-flex align-items-center justify-content-between">
            <div className="author-box d-flex align-items-center gap-4">
              <div className="avatar avt-26 round">
                <Image
                  src={item?.avt}
                  alt="avatar"
                  width="100%"
                  height="100%"
                />
              </div>
              <span className="name">{item?.name}</span>
            </div>
            {item?.price ? (
              <span className="price">{item?.price}</span>
            ) : (
              <span className="tag">Free</span>
            )}
          </div>
        </div>
        <div className="content-bottom">
          <div className="box-left box-rate">
            <div className="title">Rating</div>
            <div className="d-flex align-items-center gap-2">
              <i className="icon icon-star"></i>
              <span className="text">{item?.rate}</span>
            </div>
          </div>
          <div className="box-right">
            <div className="box-sale">
              <div className="title">Sale</div>
              <div className="d-flex align-items-center gap-2">
                <i className="icon icon-wallet"></i>
                <span className="text">{item?.sale}</span>
              </div>
            </div>
            <div className="box-like">
              <div className="title">Like</div>
              <div className="d-flex align-items-center gap-2">
                <i className="icon icon-heart-line"></i>
                <span className="text">{item?.like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
