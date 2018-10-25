// hide bolt overlap
function hideBolt() {
  const potterbolt = document.getElementById('potter-bolt');
  potterbolt.style.display = 'none';
}
// show the bolt when modal goes
function showBolt() {
  const potterbolt = document.getElementById('potter-bolt');
  potterbolt.style.display = 'block';
}

// check to see if the intercom changes to screen mode
function observeIntercom() {
  const intercom = document.getElementById('intercom-container');

  const observer = new MutationObserver(mutations => {
    mutations.forEach(d => {
      if (
        d.addedNodes.length === 1 &&
        d.addedNodes[0].className ===
          'intercom-messenger-frame intercom-messenger-frame-enter intercom-messenger-frame-enter-active'
      ) {
        hideBolt();
      } else if (d.removedNodes.length === 1) {
        showBolt();
      }
    });
  });

  // Observe the intercom
  observer.observe(intercom, {
    attributes: true,
    childList: true,
    subtree: true,
  });
}

function createPotter() {
  const bolt = `
  <img src="https://raw.githubusercontent.com/mattp8/pottercom/master/static/potter-hat.png" style="width:65px; height:auto; pointer-events:none;" /> 
  <svg id="potter-bolt" style="position:absolute; top:57px; left:28px; z-index:99999;" width="6px" height="9px" viewBox="0 0 6 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="pottercomBolt" transform="translate(-115.000000, -153.000000)" fill="#000000">
              <g id="Group" transform="translate(95.000000, 99.000000)">
                  <g id="pottercom">
                      <g id="flash" transform="translate(20.000000, 54.000000)">
                          <path d="M5.10236719,3.08670117 C5.07777539,3.03389648 5.0248125,3.00000586 4.9664707,3.00000586 L3.1889707,3.00000586 L4.94321484,0.230255859 C4.97246484,0.184060547 4.97425781,0.125560547 4.94787305,0.0777128906 C4.9214707,0.0297070313 4.87105664,0 4.81645898,0 L2.41646484,0 C2.35961719,0 2.30770898,0.0320976563 2.2822207,0.0829511719 L0.0322207031,4.58295117 C0.00896484375,4.62930469 0.0115136719,4.6845 0.0388125,4.72874414 C0.0662695312,4.77298828 0.114416016,4.79998828 0.166464844,4.79998828 L1.70891016,4.79998828 L0.0281601563,8.79178711 C-0.0004921875,8.86004297 0.0250136719,8.93923242 0.0881542969,8.97793945 C0.112447266,8.99279297 0.139447266,8.99998242 0.166306641,8.99998242 C0.209355469,8.99998242 0.251806641,8.98152539 0.281214844,8.94673828 L5.0812207,3.24673242 C5.11885547,3.20204883 5.12695898,3.13964648 5.10236719,3.08670117 Z" id="Path"></path>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>`;

  const intercom = document.getElementById('intercom-container');

  const div = document.createElement('div');
  div.setAttribute(
    'style',
    'position:fixed; z-index:99999999999999; bottom:49px; right:10px; height:70px; width:70px; pointer-events:none;',
  );
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'pottercom');
  wrapper.setAttribute(
    'style',
    'position:relative; z-index:99999999999999; top:0; right:0; overflow:hidden; height:100%; width:70px; pointer-events:none;',
  );

  // append elements to body
  intercom.appendChild(div);
  div.appendChild(wrapper);
  wrapper.innerHTML += bolt;
  const potterbolt = document.getElementById('pottercomBolt');

  const boltcolor = window.potterconfig ? window.potterconfig.color : '#000';
  potterbolt.setAttribute('style', `fill:${boltcolor}`);
}

const checkExist = setInterval(() => {
  let count = 0;

  if (count < 10) {
    const intercom = document.getElementById('intercom-container');

    if (intercom !== null) {
      createPotter();
      observeIntercom();
      clearInterval(checkExist);
    }
    count += 1;
  }
}, 100);
