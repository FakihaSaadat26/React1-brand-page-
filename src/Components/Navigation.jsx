const Navigation = () => {
return (
    <nav className="container">
    <div className="logo">
      <img src="/images/n.png" alt="logo" style={{
        width: '150px',
        height: 'auto',
        objectFit: 'contain',
        margin: '10px'
      }} />
    </div>
    <ul>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Location</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button>Log in</button>
  </nav>
);
};

export default Navigation;