import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {title_pre, title_post} = this.props;
    return <div>
      <div className="pv5 pv6-l ph3 bg-center cover" style={{
        backgroundColor: `var(--grey-4)`
      }}>
        <div className="mw7 center ph3">
          <div className="db mb3">
            <div className="mw7 relative bg-fix-primary mb3">
              <h1 className="f2 f1-l b di lh-title mb3 white mw6">
                {entry.getIn(["data", "jumbotron", "title_pre"])} _____ {entry.getIn(["data", "jumbotron", "title_post"])}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
