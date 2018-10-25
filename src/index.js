function hideBolt() {
  const a = document.getElementById("potter-bolt"),
    b = document.getElementById("potter-hat"),
    c = window.innerWidth
  ;(a.style.display = "none"), 670 > c && (b.style.display = "none")
}
function showBolt() {
  const a = document.getElementById("potter-bolt"),
    b = document.getElementById("potter-hat")
  ;(a.style.display = "block"), (b.style.display = "block")
}
function observeIntercom() {
  const a = document.getElementById("intercom-container"),
    b = new MutationObserver(c => {
      c.forEach(e => {
        1 === e.addedNodes.length &&
        "intercom-messenger-frame intercom-messenger-frame-enter intercom-messenger-frame-enter-active" ===
          e.addedNodes[0].className
          ? hideBolt()
          : 1 === e.removedNodes.length && showBolt()
      })
    })
  b.observe(a, { attributes: !0, childList: !0, subtree: !0 })
}
function createPotter() {
  const a = `
  <img id="potter-hat" src="https://raw.githubusercontent.com/mattp8/pottercom/master/static/potter-hat.png" style="width:65px; height:auto; pointer-events:none;" /> 
  <svg id="potter-bolt" style="position:absolute; top:58px; left:28px; z-index:99999;" width="6px" height="9px" viewBox="0 0 6 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
  </svg>`,
    b = document.getElementById("intercom-container"),
    c = document.createElement("div")
  c.setAttribute(
    "style",
    "position:fixed; z-index:99999999999999; bottom:51px; right:10px; height:70px; width:70px; pointer-events:none;"
  )
  const e = document.createElement("div")
  e.setAttribute("id", "pottercom"),
    e.setAttribute(
      "style",
      "position:relative; z-index:99999999999999; top:0; right:0; overflow:hidden; height:100%; width:70px; pointer-events:none;"
    ),
    b.appendChild(c),
    c.appendChild(e),
    (e.innerHTML += a)
  const f = document.getElementById("pottercomBolt"),
    g = window.potterconfig ? window.potterconfig.color : "#000"
  f.setAttribute("style", `fill:${g}`)
}
const checkExist = setInterval(() => {
  let a = 0
  if (10 > a) {
    const b = document.getElementById("intercom-container")
    null !== b &&
      (createPotter(), observeIntercom(), clearInterval(checkExist)),
      (a += 1)
  }
}, 100)
