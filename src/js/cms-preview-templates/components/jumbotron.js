import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {title_pre, title_post} = this.props;
    return <div>
      <div className="pv4 pv6-l ph3 bg-center cover bg-grey-4">
        <div className="mw7 center ph3">
          <div className="db mb3">
            <div className="mw7 relative bg-fix-primary mb3">
              <h1 className="f2 f1-m b di lh-title mb3 white mw6">
              { title_pre } _____ { title_post }
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
