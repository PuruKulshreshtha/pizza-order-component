import React from "react";

export default function Pizza(props) {
  const { size = 48, color = "#3E008D" } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 511.999 511.999"
      style={{ enableBackground: "new 0 0 511.999 511.999" }}
      xmlSpace="preserve"
      width={size}
      height={size}
      fill={color}
    >
      <g>
        <g>
          <path
            d="M387.428,337.889c-2.841-7.201-5.896-14.333-9.193-21.381c-18.182-38.887-43.293-75.311-75.358-107.378
			c-32.068-32.069-68.492-57.179-107.382-75.362c-7.05-3.297-14.184-6.352-21.383-9.191c-7.242-2.858-14.55-5.497-21.923-7.891
			L1.775,479.821c-3.603,8.696-1.61,18.705,5.045,25.362c4.451,4.451,10.404,6.816,16.46,6.816c2.999,0,6.023-0.579,8.901-1.773
			L395.319,359.81C392.923,352.44,390.284,345.131,387.428,337.889z M159.834,352.172c-15.329,15.327-39.559,16.322-56.045,2.991
			c-1.148-0.928-2.262-1.924-3.33-2.991c-6.2-6.2-10.051-13.858-11.563-21.87c-2.485-13.174,1.367-27.309,11.563-37.506
			c1.888-1.888,3.917-3.548,6.045-5.004c8.391-5.73,18.395-8.082,28.11-7.048c9.211,0.982,18.159,4.994,25.22,12.052
			C176.224,309.193,176.224,335.774,159.834,352.172z M201.395,227.485c16.393-16.393,42.978-16.393,59.373,0.003
			c16.393,16.393,16.393,42.978,0,59.373c-16.393,16.393-42.978,16.393-59.373,0C184.998,270.466,185.001,243.882,201.395,227.485z
			 M290.057,378.222c-1.567,7.857-5.388,15.354-11.478,21.445c-14.399,14.403-36.66,16.148-52.973,5.252
			c-2.259-1.51-4.406-3.258-6.4-5.252c-4.003-4-7.021-8.612-9.069-13.531c-6.344-15.236-3.325-33.452,9.069-45.842
			c16.393-16.393,42.978-16.393,59.373,0c4.048,4.049,7.093,8.722,9.141,13.707C290.886,361.701,291.665,370.152,290.057,378.222z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M510.225,287.028c-26.194-63.236-63.726-119.914-111.554-168.458C349.143,68.296,290.704,29.002,224.977,1.779
			c-11.872-4.921-25.49,0.718-30.408,12.594l-24.424,58.966c7.368,2.467,14.655,5.148,21.868,8.018
			c7.21,2.867,14.341,5.93,21.383,9.194c44.934,20.821,86.331,49.606,122.393,85.666c36.061,36.063,64.843,77.457,85.664,122.393
			c3.263,7.038,6.327,14.168,9.193,21.377c2.87,7.214,5.551,14.503,8.018,21.87l58.966-24.424
			c5.703-2.363,10.234-6.893,12.595-12.594C512.587,299.136,512.587,292.726,510.225,287.028z"
          />
        </g>
      </g>
    </svg>
  );
}
