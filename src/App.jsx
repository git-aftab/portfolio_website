import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
const IconSun = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);
const IconMoon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);
const IconHtml5 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
    <path
      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
      fill="white"
    />
  </svg>
);
const IconCss3 = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 384 512"
    className={className}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L224 390.2l105.7-40.6 12-60.4H157.6l16-82H448l12-64H68l16-82H480z"></path>
  </svg>
);
const IconJs = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    version="1.1"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"></path>
      <path
        d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
        fill="#000000"
      ></path>
      <path
        d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
        fill="#000000"
      ></path>
    </g>
  </svg>
);
const IconReact = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 -14 256 256"
    version="1.1"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <path
        d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z"
        fill="#00D8FF"
      ></path>
    </g>
  </svg>
);
const IconPython = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"
      fill="url(#paint0_linear_87_8204)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"
      fill="url(#paint1_linear_87_8204)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_87_8204"
        x1="12.4809"
        y1="2"
        x2="12.4809"
        y2="22.7407"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#327EBD" />
        <stop offset="1" stop-color="#1565A7" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_87_8204"
        x1="19.519"
        y1="9.25928"
        x2="19.519"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFDA4B" />
        <stop offset="1" stop-color="#F9C600" />
      </linearGradient>
    </defs>
  </svg>
);
const IconGit = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 -0.5 48 48"
    version="1.1"
  >
    <title>Github-color</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Color-"
        transform="translate(-700.000000, -560.000000)"
        fill="#3E75C3"
      >
        <path
          d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
          id="Github"
        ></path>
      </g>
    </g>
  </svg>
);
const IconC = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill=""
  >
    <path
      d="M5.46447 4.46447C3.51184 6.41709 3.51184 9.58291 5.46447 11.5355C7.41709 13.4882 10.5829 13.4882 12.5355 11.5355L14.6569 13.6569C11.5327 16.781 6.46734 16.781 3.34315 13.6569C0.218951 10.5327 0.218951 5.46734 3.34315 2.34315C6.46734 -0.781049 11.5327 -0.781049 14.6569 2.34315L12.5355 4.46447C10.5829 2.51184 7.41709 2.51184 5.46447 4.46447Z"
      fill="blue"
    />
  </svg>
);
const IconTailwind = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="blue"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
  >
    <title>Tailwind CSS icon</title>
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);
const IconExternalLink = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    className={className}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
  </svg>
);
const IconGithub = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 496 512"
    className={className}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 23.6 31.4 23.6 58.9 0 96.5-56.6 104.2-112.6 110.2 9.5 8.2 17.3 23.5 17.3 47.4 0 34.3-.3 61.5-.3 70 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
  </svg>
);
const IconLinkedin = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className={className}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
  </svg>
);
const IconInstagram = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className={className}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
  </svg>
);
const IconEnvelope = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    className={className}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
  </svg>
);

// --- 1. Navbar Component ---
const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme in localStorage or default to 'light'
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-gray-800 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300"
        >
          MAA
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-lg text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-300 font-medium"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <button
            onClick={handleThemeSwitch}
            className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

// --- 2. Hero Section Component ---
const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    if (window.gsap) {
      let ctx = window.gsap.context(() => {
        const t1 = window.gsap.timeline();
        t1.from("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        })
          .from(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
          })
          .to(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "-=30",
            delay: 0.3,
            stagger: 0.5,
          })
          .to("#intro-slider", {
            xPercent: "-100",
            duration: 1.3,
          })
          .from("#hero-content > *", {
            opacity: 0,
            y: "+=30",
            stagger: 0.4,
            duration: 0.8,
            ease: "power3.out",
          });
      }, comp);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="home"
      ref={comp}
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <div
        id="intro-slider"
        className="h-full w-full absolute top-0 left-0 z-10 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center gap-10"
      >
        <h1
          className="text-4xl md:text-7xl font-bold text-gray-800 dark:text-white"
          id="title-1"
        >
          Frontend Developer
        </h1>
        <h1
          className="text-4xl md:text-7xl font-bold text-gray-800 dark:text-white"
          id="title-2"
        >
          Creative Thinker
        </h1>
        <h1
          className="text-4xl md:text-7xl font-bold text-gray-800 dark:text-white"
          id="title-3"
        >
          Problem Solver
        </h1>
      </div>

      <div id="hero-content" className="container mx-auto px-6 z-0">
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light mb-2">
          Hi there, I'm
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-4">
          Md Aftab Ansari.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8">
          A Frontend Developer who crafts seamless and animated digital
          experiences.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300 shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

// --- 3. About Section Component ---
const About = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    if (window.gsap) {
      let ctx = window.gsap.context(() => {
        window.gsap.from("#about-content > *", {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          scrollTrigger: {
            trigger: component.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          ease: "power3.out",
        });
      }, component);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="about"
      ref={component}
      className="container mx-auto px-6 py-20 md:py-28"
    >
      <div id="about-content" className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            As a passionate Frontend Developer, I thrive on turning complex
            problems into beautiful and intuitive digital interfaces. My journey
            in technology started with a Bachelor of Engineering in ECE from
            Saveetha Engineering College, where I built a strong foundation in
            logic and problem-solving. Today, I channel that passion into
            building responsive, high-performance web applications with a modern
            technology stack.
          </p>
          <p>
            I'm always eager to learn new technologies and believe that a great
            user experience is paramount. When I'm not coding, you can find me
            exploring the latest tech trends or watching sci-fi movies.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- 4. Skills Section Component ---
const skills = [
  { name: "HTML5", icon: <IconHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <IconCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <IconJs className="text-yellow-500" /> },
  { name: "React", icon: <IconReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <IconTailwind className="text-teal-400" /> },
  { name: "Python", icon: <IconPython className="text-blue-400" /> },
  { name: "C", icon: <IconC className="text-blue-600" /> },
  { name: "Git & GitHub", icon: <IconGit className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-100 dark:bg-gray-800 py-20 md:py-28"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <p className="font-semibold text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. Projects Section Component ---
const projectsData = [
  {
    title: "Atlas_Tg",
    description:
      "A dynamic tourist guide app providing details about any country via a REST API. Features seamless routing and a modern interface.",
    tech: ["React", "Tailwind CSS", "Axios"],
    live: "https://atlas-tg.vercel.app/",
    github: "https://github.com/git-aftab/Atlas_TGuide",
  },
  {
    title: "Groovo Music Player",
    description:
      "A sleek, modern music player with a beautiful UI and all standard functionalities, streaming songs via Cloudflare.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://git-aftab.github.io/Groovo-Music-player/",
    github: "https://github.com/git-aftab/Groovo_music_player",
  },
  {
    title: "Expense Tracker",
    description:
      "A minimalistic, Sleek modern looking Expense Tacker that allows user to calculate their expenses in diffrent categories and display all the categories in graphical representation",
    tech: ["React", "Tailwind", "Chart.js"],
    live: null,
    github: "https://github.com/git-aftab/expense-tracker",
  },
  {
    title: "Rich Text Editor",
    description:
      "A browser-based rich text editor that allows users to format text with various styles.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://text-editor-five-mu.vercel.app/",
    github: "https://github.com/git-aftab/Rich_text_editor",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-20 md:py-28">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Things I've Built
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-accent/20 text-accent text-sm font-semibold px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700/50 flex items-center space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300 font-semibold"
              >
                <IconGithub className="h-5 w-5" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 6. Contact Section Component ---
const socialLinks = [
  { name: "GitHub", icon: <IconGithub />, url: "https://github.com/git-aftab" },
  {
    name: "LinkedIn",
    icon: <IconLinkedin />,
    url: "https://www.linkedin.com/in/md-aftab-360996328",
  },
  {
    name: "Instagram",
    icon: <IconInstagram />,
    url: "https://www.instagram.com/mdaftab_408",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-800 py-20 md:py-28"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>
        <a
          href="mailto : aftabdev18@gmail.com"
          className="inline-block bg-accent text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300 shadow-lg"
        >
          Say Hello <IconEnvelope className="inline ml-2" />
        </a>
        <div className="flex justify-center space-x-8 mt-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent hover:scale-110 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 7. Footer Component ---
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} Md Aftab Ansari. All rights reserved.</p>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    const loadScript = (src, onLoad) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = onLoad;
      document.body.appendChild(script);
      return script;
    };

    const gsapCore = loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
      () => {
        const scrollTrigger = loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",
          () => {
            window.gsap.registerPlugin(window.ScrollTrigger);
            setGsapLoaded(true);
          }
        );
      }
    );
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed transition-colors duration-300">
      <Navbar />
      <main>
        {gsapLoaded ? (
          <>
            <Hero />
            <About />
          </>
        ) : (
          <div className="min-h-screen"></div>
        )}
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
