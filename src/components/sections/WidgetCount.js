"use client";
import CountNumber from "../elements/CountNumber";

export default function WidgetCount({ cls }) {
  return (
    <div className={`${cls ? cls : "flat-counter"}`}>
      <div className="container">
        <div className="widget-count">
          <div className="box-counter">
            <div className="top">
              <h3 className="count">
                <CountNumber className="number" count={13.738} />
                <span className="suffix">+</span>
              </h3>
              <div className="title">PowerPoint Templates</div>
            </div>
            <div className="bottom">
              <i className="icon icon-fire"></i>
              <p className="desc">16 New added this week</p>
            </div>
          </div>
          <div className="box-counter bg-2">
            <div className="top">
              <h3 className="count">
                <CountNumber className="number" count={13.738} />
                <span className="suffix">+</span>
              </h3>
              <div className="title">Google Slide Template</div>
            </div>
            <div className="bottom">
              <i className="icon icon-fire"></i>
              <p className="desc">4 New added this week</p>
            </div>
          </div>
          <div className="box-counter bg-3">
            <div className="top">
              <h3 className="count">
                <CountNumber className="number" count={13.738} />
                <span className="suffix">+</span>
              </h3>
              <div className="title">Keynote Templates</div>
            </div>
            <div className="bottom">
              <i className="icon icon-fire"></i>
              <p className="desc">12 New added this week</p>
            </div>
          </div>
          <div className="box-counter bg-4">
            <div className="top">
              <h3 className="count">
                <CountNumber className="number" count={13.738} />
                <span className="suffix">+</span>
              </h3>
              <div className="title">Mockups Templates</div>
            </div>
            <div className="bottom">
              <i className="icon icon-fire"></i>
              <p className="desc">7 New added this week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
