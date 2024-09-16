import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigator = useNavigate();

  function addPizza() {
    navigator("/addPizza");
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
          <a className="navbar-brand" href="#">Food delivery</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button className="nav-item nav-link active" onClick={addPizza}>Add Pizza</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;