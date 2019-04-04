
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="row col-12">

      <nav className="navbar navbar-expand-lg navbar-light bg-white" id="navbar">
        <a className="navbar-brand" href="#">Pickyourtrail sitemap</a>
      </nav>
    </div>
  );
}