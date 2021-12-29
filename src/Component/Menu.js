import React from "react";

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <a href="/">About Ploy Pruekcharoen</a>
      <p>
        Research/Writing
        <ol>
          <a href="/#/hmongembroidery"><li onClick={close}>Ethnographic research on Hmong embroidery</li></a>
          <a href="/#/colorofnature"><li onClick={close}>Computer as a Medium for Human-Environment Interaction</li></a>
        </ol>
      </p>
      <p>
        Digital Interaction Design
        <ol>
          <a href="/#/famapp"><li onClick={close}>Fam App</li></a>
          <a href="/#/misinfoescaperoom"><li onClick={close}>Misinformation Escape Room</li></a>
          {/* <a href="/#/embroiderme"><li onClick={close}>embrioder.me</li></a> */}
        </ol>
      </p>
      <p>
        Interactive Art
        <ol>
          <a href="/#/colorizedcloud"><li onClick={close}>Colorized Cloud</li></a>
          <a href="/#/makeitbloom"><li onClick={close}>Make It Bloom</li></a>
          <a href="/#/soundofhearthand"><li onClick={close}>The Sound of Heart and Hand</li></a>
          <a href="/#/vestmemories"><li onClick={close}>The Vest of Memories</li></a>
          <a href="/#/worldfrommyhands"><li onClick={close}>The World from My Hands</li></a>
        </ol>
      </p>
      <p>
        Data Visualization
        <ol>
          <a href="/#/oscarsdiversity"><li onClick={close}>History of Racial Diversity in Academy Award Winners and Nominees</li></a>
        </ol>
      </p>
    </ul>
  </div>
);