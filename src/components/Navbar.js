import React from 'react'

export default function Navbar({modeLight, color, modeDark}) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${color=="dark"? "dark": "light"}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${color=="dark"? "light" : "dark"}`} href="/">Text Utilies</a>
    <button className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${color=="dark"? "light" : "dark"}`} href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${color=="dark"? "light" : "dark"}`} href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className={`nav-link dropdown-toggle text-${color=="dark"? "light" : "dark"}`} href="/">
            Dropdown
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active text-${color=="dark"? "light" : "dark"}`} href='/'>Disabled</a>
        </li>
      </ul>
      <div className="d-flex">
        <button type='button' className="btn btn-light mx-2" onClick={modeLight}>Light</button>
        <button type='button' className="btn btn-dark" onClick={modeDark}>Dark</button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
