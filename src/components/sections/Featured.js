import dataTemplate from "@/data/data-template-1";
import TemplateItem from "../elements/TemplateItem";

export default function Featured() {
  return (
    <section className="flat-feature flat-spacing-1">
      <div className="container">
        <div className="flat-title d-flex align-items-center justify-content-between">
          <h4>Featured Items</h4>
          <div className="box-navigation">
            <div className="navigation-arrow swiper-nav-next nav-next-feature">
              <span className="icon icon-arr-left" />
            </div>
            <div className="navigation-arrow swiper-nav-prev nav-prev-feature">
              <span className="icon icon-arr-right" />
            </div>
          </div>
        </div>

        {dataTemplate.map((item) => (
          <TemplateItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
