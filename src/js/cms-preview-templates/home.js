import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
        <Jumbotron title_pre={entry.getIn(["data", "jumbotron", "title_pre"])} title_post={entry.getIn(["data", "jumbotron", "title_post"])}/>

        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <div className="lh-title mb2 w-40-l">
              <h2 className="f2 b"><img src={getAsset(entry.getIn(["data", "blurb", "heading_image"]))} style={{width: "13rem"}}/><br />{entry.getIn(["data", "blurb", "heading"])}</h2>
              <h3 className="f4">{entry.getIn(["data", "blurb", "subheading"])}</h3>
            </div>
            <p className="w-60-l mb0">{entry.getIn(["data", "blurb", "text"])}</p>
          </div>
        </div>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "twoup", "heading"])}</h2>
            <p className="mb4 mw6">{entry.getIn(["data", "twoup", "description"])}</p>

            <div className="flex-ns flex-wrap mhn2-ns mb3 tc">
              {(entry.getIn(["data", "twoup", "blurbs"]) || []).map((blurb, i) => <div className="ph2-ns w-50-ns center" style={{maxWidth: "360px"}} key={i}>
                <img src={getAsset(blurb.get("image"))} alt="" className="center db mb3" style={{width: "240px", height: "240px", borderRadius: "40%", objectFit: "cover"}}/>
                <p>{blurb.get("text")}</p>
              </div>)}
            </div>
          </div>
        </div>
    </div>
  }
}