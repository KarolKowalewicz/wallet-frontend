import styles from './SliderRed.module.scss';

function SliderRed(props) {
  return (
    <div className={styles.sliderRedWrap} onClick={props.onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="0" y="0" width="60" height="60" rx="10" fill="transparent"/>
        <g filter="url(#redFilter)">
          <circle cx="30" cy="30" r="22" fill="#FF6596"/>
        </g>
        <path d="M18 30L42 30" stroke="white" stroke-width="2"/>
        <defs>
          <filter id="redFilter" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3.25"/>
            <feOffset dy="2.75" result="offsetblur"/>
            <feComponentTransfer in="offsetblur" result="halfIntensity">
              <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feFlood flood-color="#FF6596" result="color"/>
            <feComposite in2="halfIntensity" operator="in" result="colorblur"/>
            <feMerge>
              <feMergeNode in="colorblur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default SliderRed;
