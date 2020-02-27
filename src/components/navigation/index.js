import React from 'react';

const links = [{
  url: '/linkedin',
  display: 'linkedin',
}, {
  url: '/behance',
  display: 'behance',
}];

const Navigation = () => (
  <div className="meny">
    <nav>
      <a href="/" title="James Rosenthal, home">
        James Rosenthal
        {' '}
        <br />
        {' '}
        <em>web design &amp; development</em>
      </a>
      {links.map((link, key) => (
        <a
          key={String(key)}
          href={link.url}
          title={link.display}
        >
          {link.display}
        </a>
      ))}
    </nav>
  </div>
);

export default Navigation;
