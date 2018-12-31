import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path, Rect, Circle } from 'react-native-svg';

import Wrapper from '../../common/wrapper/Wrapper';
import { darken } from '../../utils/colors';

const Sitting3 = ({
  className,
  height,
  skinColor,
  hairColor,
  shoeColor,
  pantColor,
  shirtColor,
  coatColor,
  wheelchairColor,
  objectColor
}) => (
  <Wrapper className={className}>
    <Svg width={0.95 * height} height={height} viewBox="0 0 380 400">
      <G
        id="humaaans/sitting-3"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="A-Human/Sitting"
          transform="translate(190.000000, 200.500000) scale(-1, 1) translate(-190.000000, -200.500000) translate(40.000000, 24.000000)"
        >
          <G
            id="Head/Front/Short-Beard"
            transform="translate(82.000000, 0.000000)"
          >
            <G
              id="Head"
              stroke-width="1"
              transform="translate(54.000000, 31.000000)"
              fill={skinColor}
            >
              <Path d="M8.26227388,34.4901268 C3.65436435,29.0813759 0.535634794,22.4528771 1.05677633,15.0254539 C2.55833022,-6.37502057 32.3485306,-1.66718886 38.1433414,9.13393292 C43.9381521,19.9350547 43.249578,47.3329958 35.7603014,49.2634576 C32.7735882,50.033323 26.4110012,48.1474609 19.935372,44.244306 L24,73 L0,73 L8.26227388,34.4901268 Z" />
            </G>
            <Path
              d="M75.1353054,48.388929 C76.0539893,61.1861055 78.4841513,67.5846937 82.4257914,67.5846937 C88.3385979,67.5846937 93.355194,63.8310443 95.9495915,63.8310443 C97.8408192,63.8310443 97.4185661,66.1977405 96.1649615,67.9524776 C95.1306973,69.4001921 90.0939174,70.7956158 90.0939174,73.0400595 C90.0939174,75.2845031 94.0733913,73.5481008 94.0733913,74.8792364 C94.0733913,77.0810973 94.7727779,81.2209894 90.9512241,81.2209894 C87.0836843,81.2209894 75.9947625,79.8115837 74.0944216,74.0714721 C72.8679972,70.366972 72.0750257,62.6905548 71.7155071,51.0422204 C71.4808897,51.0143412 71.2421196,51 71,51 C67.6862915,51 65,53.6862915 65,57 C65,58.6822183 65.6922919,60.2027431 66.807515,61.292214 C65.4191964,63.2518162 63.8632894,65.2988831 62.0803863,67.4111902 C55.3824054,63.3926741 50.4121226,51.6289713 56.9604861,40.3282783 C58.7704744,34.7922446 62.8680346,31.8352408 67.7073518,30.4622091 C71.6274481,28.8224203 75.6968791,28.6375327 79.1320584,29.6205713 C85.8659611,30.1981637 91.8790132,32.2515132 93.5831606,33.4709469 C93.5831606,39.8461712 92.3478701,41.7376815 81.7968056,41.5709519 C79.204238,42.9401362 77.2112029,45.2978697 75.1353054,48.388929 Z"
              id="Hair"
              fill={hairColor}
            />
          </G>
          <G
            id="Bottom/Sitting/Wheelchair"
            transform="translate(0.000000, 187.000000)"
          >
            <Path
              d="M254.883773,18.0957316 C262.063646,8.35806555 280.010812,14.8042773 280,22.8655557 C279.971611,44.0311277 260.656682,144.512004 259.648224,150.855869 C258.639766,157.199734 247.83665,159.275085 247.20755,151.348454 C246.206544,138.735846 244.3468,95.012719 246.20755,74.6716648 C246.751065,68.7301478 247.324175,62.9870828 247.901388,57.6067645 C237.750194,75.8431618 222.314107,101.618833 201.593128,134.933778 L190.076573,129.672175 C199.120166,99.8760987 206.535776,78.8408618 212.323403,66.5664641 C222.233227,45.5497154 231.525307,27.551672 235.436043,21.2120072 C240.601842,12.8377695 248.98061,13.9494614 254.883773,18.0957316 Z"
              id="Skin"
              fill={skinColor}
            />
            <Path
              d="M208.819223,123.340112 L213.936922,21.8299349 C217.625361,4.27739957 248.84365,12.4235349 248.830812,21.8299349 C248.801666,43.1853748 235.973522,116.956762 235.964839,123.319261 L208.819223,123.340112 Z"
              id="Leg-Back"
              fill={darken(pantColor)}
              transform="translate(228.825019, 67.419630) rotate(20.000000) translate(-228.825019, -67.419630) "
            />
            <Path
              d="M281,30.1765514 C281,56.7177303 269.366261,119.105994 269.358267,124.950436 L241.17615,124 C246.102422,69.7571864 248.179877,42.4520039 247.408516,42.0844525 C245.672952,41.2574617 176.262132,51.6911698 155.444697,52.4790258 C125.425854,53.615118 113.00766,35.1988173 112,0.25055648 L170.147646,0.25055648 C219.869047,6.18567094 252.548003,10.3136421 268.184514,12.63447 C278.225902,14.1248493 281,22.8651399 281,30.1765514 Z"
              id="Leg-Front"
              fill={pantColor}
            />
            <G
              id="Objects/Seat/Cube-2"
              transform="translate(216.820222, 128.225467) rotate(14.000000) translate(-216.820222, -128.225467) translate(186.320222, 108.225467)"
              fill={objectColor}
            >
              <Path
                d="M27.3060345,0 L33.9568966,0 C42.7934525,-1.623249e-15 49.9568966,7.163444 49.9568966,16 L49.9568966,24 C49.9568966,32.836556 42.7934525,40 33.9568966,40 L27.3060345,40 C18.4694785,40 11.3060345,32.836556 11.3060345,24 L11.3060345,16 C11.3060345,7.163444 18.4694785,1.623249e-15 27.3060345,0 Z M22.6681034,9.03225806 C20.4589644,9.03225806 18.6681034,10.8231191 18.6681034,13.0322581 L18.6681034,26.9677419 C18.6681034,29.1768809 20.4589644,30.9677419 22.6681034,30.9677419 L38.5948276,30.9677419 C40.8039666,30.9677419 42.5948276,29.1768809 42.5948276,26.9677419 L42.5948276,13.0322581 C42.5948276,10.8231191 40.8039666,9.03225806 38.5948276,9.03225806 L22.6681034,9.03225806 Z"
                id="Seat"
              />
            </G>
            <G
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(243.000000, 111.000000)"
              fill={shoeColor}
            >
              <Path
                d="M2.67813181,25.4019242 C1.55937727,28.3884109 1,30.6229931 1,32.1056708 C1,33.908957 1.3004142,36.5404001 1.90124261,40 C3.99318117,40 22.7937852,40 58.3030548,40 C59.768738,35.1545073 58.9226607,32.5385816 55.7648228,32.1522232 C52.606985,31.7658647 49.9837155,31.4170139 47.8950143,31.1056708 L21.6799926,19.4188835 C21.1755635,19.1940064 20.584344,19.4206282 20.359467,19.9250573 C20.35562,19.9336867 20.3518954,19.9423702 20.3482945,19.9511052 L18.6632131,24.038695 C15.7398812,25.4026522 13.3643706,26.0846307 11.5366811,26.0846307 C10.0517269,26.0846307 8.00099246,25.4849054 5.38447792,24.2854549 L5.38448339,24.285443 C4.38038273,23.8251478 3.19325534,24.2659892 2.73296014,25.2700899 C2.71312074,25.3133681 2.69483298,25.3573409 2.67813181,25.4019242 Z"
                id="shoe"
              />
            </G>
            <Rect
              id="Base"
              fill={wheelchairColor}
              x="245"
              y="151"
              width="53"
              height="7"
              rx="3.5"
            />
            <Path
              d="M109,6 L216,6 C221.522847,6 226,10.4771525 226,16 L226,65 L103,65 C100.790861,65 99,63.209139 99,61 L99,16 C99,10.4771525 103.477153,6 109,6 Z"
              id="Seat"
              fill={wheelchairColor}
            />
            <Path
              d="M216,6 L218.193678,6 C223.091205,6 227.268082,9.54701889 228.061559,14.3798408 L250,148 L239.314286,148"
              id="Wheel-Stuff"
              fill={wheelchairColor}
            />
            <Circle
              id="Front-Wheel"
              fill={wheelchairColor}
              cx="245"
              cy="150"
              r="18"
            />
            <G
              id="Wheel"
              stroke-width="1"
              transform="translate(36.000000, 14.000000)"
              fill={wheelchairColor}
            >
              <Path d="M76,152 C34.026359,152 0,117.973641 0,76 C0,34.026359 34.026359,0 76,0 C117.973641,0 152,34.026359 152,76 C152,117.973641 117.973641,152 76,152 Z M76,138 C110.241654,138 138,110.241654 138,76 C138,41.7583455 110.241654,14 76,14 C41.7583455,14 14,41.7583455 14,76 C14,110.241654 41.7583455,138 76,138 Z" />
              <Rect id="Wheel-Stuff" x="72" y="10" width="8" height="132" />
              <Rect
                id="Wheel-Stuff"
                transform="translate(76.000000, 76.000000) rotate(45.000000) translate(-76.000000, -76.000000) "
                x="72"
                y="10"
                width="8"
                height="132"
                rx="2"
              />
              <Rect
                id="Wheel-Stuff"
                transform="translate(76.000000, 76.000000) rotate(90.000000) translate(-76.000000, -76.000000) "
                x="72"
                y="10"
                width="8"
                height="132"
                rx="2"
              />
              <Rect
                id="Wheel-Stuff"
                transform="translate(76.000000, 76.000000) rotate(135.000000) translate(-76.000000, -76.000000) "
                x="72"
                y="10"
                width="8"
                height="132"
                rx="2"
              />
            </G>
          </G>
          <G id="Body/Hoodie" transform="translate(22.000000, 82.000000)">
            <Path
              d="M190.781205,92.2114854 L222.679476,115.635084 C231.330944,117.969562 238.558965,120.874047 244.363541,124.34854 C245.734683,125.597945 247.391836,128.128197 241.70538,127.690906 C236.018925,127.253615 230.01796,127.049392 229.233339,128.988954 C228.448719,130.928516 231.889854,133.24802 230.303794,135.864997 C229.246421,137.609648 224.250967,133.234999 215.31743,122.74105 L183.729774,109.642447 L190.781205,92.2114854 Z M68.3079281,93.0198914 L89.2053198,93.1020711 C76.3021447,134.755739 69.3363474,156.856914 68.3079281,159.405597 C65.9939846,165.140133 70.8906002,173.873732 72.9845874,178.567103 C66.1645409,181.61887 66.8912241,170.316929 58.2879189,174.319492 C50.4352209,177.972846 44.4616931,184.59248 35.3890352,178.994371 C34.2736052,178.306117 33.0512757,175.714714 36.0045784,173.68967 C43.3623323,168.644547 53.9653015,159.814672 55.3979297,156.908251 C57.3515741,152.944826 61.6549068,131.648706 68.3079281,93.0198914 Z"
              id="Skin"
              fill={skinColor}
            />
            <Path
              d="M122.731734,9.58031077 L131.216685,7.34914009 C165.5935,32.1628362 183.361709,84.0563407 224.996623,108.72736 L216.58973,121.240539 C147.889238,118.771641 125.383314,55.5469019 122.731734,9.58031077 Z"
              id="Coat-Back"
              fill={darken(coatColor)}
              transform="translate(173.864178, 64.294840) rotate(5.000000) translate(-173.864178, -64.294840) "
            />
            <Path
              d="M90,114 C124.671756,114 150.175573,114 166.511451,114 C170.007634,114 169.348845,108.951637 168.84345,106.404206 C163.010588,77.0037663 140.241304,45.3115155 140.241304,3.4607303 L118.1718,0 C99.917485,29.3584068 93.6048263,65.5045499 90,114 Z"
              id="Shirt"
              fill={shirtColor}
            />
            <Path
              d="M90.6148413,28.8579585 C87.4095228,27.9365884 84.8712423,25.7876656 83,22.4111902 C74.933557,7.85607578 77.8467271,-0.157592785 86.4671964,-2.7917309 C95.0876658,-5.42586901 102.775319,-2.04281037e-14 116.510031,-7.10542736e-15 C117.257085,-6.21724894e-15 117.941303,0.0468325343 118.562683,0.140497603 L125.471587,0.534739944 C145.293986,67.7151944 150.760885,112.536948 141.872285,135 L81.6518141,135 C78.0838152,143.319871 74.6695413,150.319871 71.4089926,156 L55,156 C53.4556832,106.067091 65.327297,63.6864104 90.6148413,28.8579585 Z"
              id="Coat-Front"
              fill={coatColor}
            />
            <Path
              d="M94.7652287,100.497634 C96.6591508,116.344024 99.7374079,127.844812 104,135 L81.6518141,135 C85.813785,125.295103 90.1849231,113.794314 94.7652283,100.497633 Z"
              id="Shade"
              fill-opacity="0.1"
              fill="#000000"
            />
          </G>
        </G>
      </G>
    </Svg>
  </Wrapper>
);

Sitting3.propTypes = {
  height: PropTypes.number,
  skinColor: PropTypes.string,
  hairColor: PropTypes.string,
  shoeColor: PropTypes.string,
  coatColor: PropTypes.string,
  shirtColor: PropTypes.string,
  pantColor: PropTypes.string,
  wheelchairColor: PropTypes.string,
  objectColor: PropTypes.string
};

Sitting3.defaultProps = {
  height: 400,
  skinColor: '#57331F',
  hairColor: '#191847',
  shoeColor: '#E4E4E4',
  shirtColor: '#DDE3E9',
  coatColor: '#FF4133',
  pantColor: '#2F3676',
  objectColor: '#C5CFD6',
  wheelchairColor: '#000000'
};

export default Sitting3;
