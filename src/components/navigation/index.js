import React from 'react';

const links = [{
  url: '/linkedin',
  display: 'linkedin',
}, {
  url: '/behance',
  display: 'behance',
}];

const Navigation = () => (
  <header>
    <nav>
      {links.map((link, key) => (
        <a
          key={String(key)}
          href={link.url}
          title={link.display}
        >
          { link.display }
        </a>
      ))}
    </nav>
  </header>
);

export default Navigation;
