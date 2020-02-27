import React from 'react';
import Meny from 'services/meny';

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _meny: {},
    };

    this.openMenu = this.openMenu.bind(this);
  }

  componentDidMount() {
    // Create an instance of Meny
    const _meny = Meny.create({
      // The element that will be animated in from off screen
      menuElement: document.querySelector('.meny'),

      // The contents that gets pushed aside while Meny is active
      contentsElement: document.querySelector('.contents'),

      // [optional] The alignment of the menu (top/right/bottom/left)
      position: Meny.getQuery().p || 'left',

      // [optional] The height of the menu (when using top/bottom position)
      height: 200,

      // [optional] The width of the menu (when using left/right position)
      width: 260,

      // [optional] Distance from mouse (in pixels) when menu should open
      threshold: 40,

      // [optional] Use mouse movement to automatically open/close
      mouse: true,

      // [optional] Use touch swipe events to open/close
      touch: true,
    });

    // API Methods:
    // meny.open();
    // meny.close();
    // meny.isOpen();

    // Events:
    _meny.addEventListener('open', () => { console.log('open'); });
    _meny.addEventListener('close', () => { console.log('close'); });

    this.setState({ _meny });
  }

  openMenu() {
    const { _meny } = this.state;

    _meny.open();
  }

  render() {
    return (
      <header>
        <div className="vertical_padding">
          <div className="large-6 small-6 columns">
            <button onClick={this.openMenu} className="menu">MENU</button>
          </div>
          <div className="large-6 small-6 columns">
            <div className="social-links right">
              <a href="https://www.linkedin.com/in/jcrosenthal" target="_blank" title="James Rosenthal Linkedin" className="linkedin" />
              <a href="https://www.behance.net/JCROSENTHAd34b" target="_blank" title="James Rosenthal Behance" className="behance" />
            </div>
          </div>
        </div>
      </header>

    );
  }
}

export default Head;
