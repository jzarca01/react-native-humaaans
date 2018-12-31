import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path, Polygon } from 'react-native-svg';

import Wrapper from '../../common/wrapper/Wrapper';
import { darken } from '../../utils/colors';

const Standing9 = ({
  className,
  height,
  skinColor,
  hairColor,
  shoeColor,
  pantColor,
  shirtColor,
  coatColor
}) => (
  <Wrapper className={className}>
    <Svg width={0.8 * height} height={height} viewBox={`0 0 380 480`}>
      <G
        id="humaaans/standing-9"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="A-Human/Standing" transform="translate(40.000000, 27.000000)">
          <G id="Head/Front/Airy" transform="translate(82.000000, 0.000000)">
            <G
              id="Head"
              stroke-width="1"
              transform="translate(54.000000, 31.000000)"
              fill={skinColor}
            >
              <Path d="M8.26227388,34.4901268 C3.65436435,29.0813759 0.535634794,22.4528771 1.05677633,15.0254539 C2.55833022,-6.37502057 32.3485306,-1.66718886 38.1433414,9.13393292 C43.9381521,19.9350547 43.249578,47.3329958 35.7603014,49.2634576 C32.7735882,50.033323 26.4110012,48.1474609 19.935372,44.244306 L24,73 L0,73 L8.26227388,34.4901268 Z" />
            </G>
            <Path
              d="M78.46395,27.6852568 C75.3008195,27.1665378 66.7839511,26.8099042 65.2132884,26.8101344 C64.2095609,26.8101344 63.1218259,27.0394482 62.5273474,26.1178184 C62.0405177,25.3631089 62.2188613,24.0866873 62.0735698,23.2108742 C61.9048664,22.1934668 61.6652388,21.1891827 61.4228569,20.1874312 C60.7331241,17.3368945 59.6901472,14.6249591 58.2308058,12.0787928 C55.4925323,7.30188179 51.4810649,3.56010629 46.4167508,1.38277606 C40.824292,-1.02133542 34.4959652,-1.57182675 28.4804855,-1.08418951 C22.0431327,-0.562477519 16.2158664,1.56258942 10.137955,3.56240864 C4.34603603,5.46806184 -1.7203989,6.21816672 -7.77811175,5.28755777 C-13.8815008,4.35004179 -18.4931849,1.0420286 -23.6412768,-2.09768297 C-28.9114778,-5.31199061 -34.9343023,-7.4142643 -41.1646205,-6.93100152 C-46.9804104,-6.47974137 -52.3405866,-4.0783927 -57.1496651,-0.870531642 C-61.6491098,2.13080883 -65.3617312,5.74181098 -67.4577843,10.8240133 C-69.7126711,16.2909379 -69.7106053,22.291777 -66.0025745,27.1232537 C-60.627938,34.1265349 -50.6501101,35.9375616 -42.3489869,35.7575181 C-37.5474828,35.6536822 -32.8318224,34.7771784 -28.298637,33.1828026 C-22.2530892,31.0563543 -17.0287938,27.4522592 -11.3729852,24.5280473 C-8.71871903,23.1558481 -5.97516638,22.0288489 -3.09940537,21.2170411 C-0.308799399,20.4289475 2.43980288,20.0674789 4.96645123,21.7532579 C7.63930914,23.5366564 10.0344377,25.2885128 13.0922147,26.4049212 C16.0255874,27.4759733 19.132713,28.0750442 22.2579713,28.0508696 C28.338637,28.0039017 34.3327705,26.1092997 40.2385356,24.8402457 C45.0544999,23.8055706 50.2074119,22.7743491 55.1172534,23.7689633 C57.1660236,24.1840766 60.1586146,25.0410104 60.8986141,27.1702216 C48.4441749,29.4274433 43.5527072,44.8301494 47.0638027,56.1372093 C48.958789,62.2400423 60.3498117,69.3741897 64.7787912,66.1658382 C67.5846772,64.1332552 65.881216,61.4648419 64.7787912,59.7033156 C62.6675892,56.3299158 61.9452634,51.9966672 65.8518364,49.6480423 C69.2215424,47.6224367 72.7645562,52.4327123 72.8315785,52.4274169 C73.7577255,52.3544325 81.7604403,47.8285457 87.2741651,41.224129 C92.7134751,41.5465656 93.5386971,37.9600245 92.2398964,35.026908 C90.9410957,32.0937915 82.8343998,28.4024381 78.46395,27.6852568 Z"
              id="hair"
              fill={hairColor}
            />
          </G>
          <G
            id="Bottom/Standing/Sprint"
            transform="translate(0.000000, 187.000000)"
          >
            <Path
              d="M207.469522,-9.65840194 C188.34471,5.93412613 195.620321,142.644251 194.343793,144.365431 C193.776447,145.1304 163.468239,151.639612 103.419169,163.893066 L106.01112,174.474064 C176.253239,170.987921 213.421261,166.637951 217.515185,161.424153 C223.376511,153.959489 230.620797,112.212202 239.248044,36.1822931 L207.469522,-9.65840194 Z"
              id="Leg"
              fill={skinColor}
              transform="translate(171.333606, 82.407831) rotate(-55.000000) translate(-171.333606, -82.407831) "
            />
            <Path
              d="M113.540088,152.75781 L118.105527,169.799273 C170.465638,175.811529 204.983252,168.36956 217.132934,156.81223 C225.232723,149.107343 232.495664,107.473517 238.921759,31.9107522 L204.926407,-16.6396419 C159.401042,17.7063231 186.537309,130.140454 185.373895,132.713083 C184.210481,135.285712 156.597106,137.319958 113.540088,152.75781 Z"
              id="Pant"
              fill={darken(pantColor)}
              transform="translate(176.230924, 77.646617) rotate(-55.000000) translate(-176.230924, -77.646617) "
            />
            <G
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(223.383915, 187.279121) rotate(20.000000) translate(-223.383915, -187.279121) translate(192.883915, 167.279121)"
              fill={shoeColor}
            >
              <Path
                d="M2.67813181,25.4019242 C1.55937727,28.3884109 1,30.6229931 1,32.1056708 C1,33.908957 1.3004142,36.5404001 1.90124261,40 C3.99318117,40 22.7937852,40 58.3030548,40 C59.768738,35.1545073 58.9226607,32.5385816 55.7648228,32.1522232 C52.606985,31.7658647 49.9837155,31.4170139 47.8950143,31.1056708 L21.6799926,19.4188835 C21.1755635,19.1940064 20.584344,19.4206282 20.359467,19.9250573 C20.35562,19.9336867 20.3518954,19.9423702 20.3482945,19.9511052 L18.6632131,24.038695 C15.7398812,25.4026522 13.3643706,26.0846307 11.5366811,26.0846307 C10.0517269,26.0846307 8.00099246,25.4849054 5.38447792,24.2854549 L5.38448339,24.285443 C4.38038273,23.8251478 3.19325534,24.2659892 2.73296014,25.2700899 C2.71312074,25.3133681 2.69483298,25.3573409 2.67813181,25.4019242 Z"
                id="shoe"
              />
            </G>
            <Polygon
              id="Leg"
              fill={darken(skinColor)}
              points="130 0 78.2540376 124.226909 27.3958106 229.25029 39.3949124 229.25029 170.673688 0"
            />
            <G
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(24.000000, 199.000000)"
              fill={shoeColor}
            >
              <Path
                d="M2.67813181,25.4019242 C1.55937727,28.3884109 1,30.6229931 1,32.1056708 C1,33.908957 1.3004142,36.5404001 1.90124261,40 C3.99318117,40 22.7937852,40 58.3030548,40 C59.768738,35.1545073 58.9226607,32.5385816 55.7648228,32.1522232 C52.606985,31.7658647 49.9837155,31.4170139 47.8950143,31.1056708 L21.6799926,19.4188835 C21.1755635,19.1940064 20.584344,19.4206282 20.359467,19.9250573 C20.35562,19.9336867 20.3518954,19.9423702 20.3482945,19.9511052 L18.6632131,24.038695 C15.7398812,25.4026522 13.3643706,26.0846307 11.5366811,26.0846307 C10.0517269,26.0846307 8.00099246,25.4849054 5.38447792,24.2854549 L5.38448339,24.285443 C4.38038273,23.8251478 3.19325534,24.2659892 2.73296014,25.2700899 C2.71312074,25.3133681 2.69483298,25.3573409 2.67813181,25.4019242 Z"
                id="shoe"
              />
            </G>
            <Path
              d="M31.9885488,207.432889 L58.6506859,212.432889 C79.2657755,182.124875 165.540767,57.851839 175,2.84217094e-14 L115.644073,2.84217094e-14 C84.0548806,41.821022 51.6389867,176.623522 31.9885488,207.432889 Z"
              id="Pant"
              fill={pantColor}
            />
          </G>
          <G id="Body/Jacket-2" transform="translate(22.000000, 82.000000)">
            <Path
              d="M198,77.6170876 L234.234567,61.7041739 C240.582018,55.3790221 246.711387,50.5716141 252.622674,47.2819501 C254.390261,46.7192094 257.410101,46.5491987 254.188168,51.2551684 C250.966235,55.961138 247.78889,61.0560141 249.076289,62.7052963 C250.363689,64.3545786 254.093006,62.5342201 255.566345,65.2162765 C256.548571,67.0043141 250.262286,69.1431805 236.707491,71.6328758 L209.56994,92.4392868 L198,77.6170876 Z M51.5082829,82 L72,86.0658446 C51.3920824,124.471059 40.3404263,144.825845 38.8450319,147.130202 C35.4803944,152.315007 38.6196693,161.817238 39.7793043,166.821179 C32.5044044,168.51462 35.3734014,157.565005 26.1671562,159.851185 C17.7641225,161.937904 10.6393632,167.293169 2.8038784,160.07074 C1.84055159,159.182785 1.13535082,156.407288 4.41981989,154.983749 C12.6026301,151.437195 24.6920431,144.796343 26.6523424,142.218096 C29.3255608,138.702197 37.6108743,118.629498 51.5082829,82 Z"
              id="Skin"
              fill={skinColor}
            />
            <Path
              d="M123.280247,9.87718027 L131.765198,7.64600959 C152.120135,24.2050747 163.602366,67.2616718 176.61267,71.9556463 C188.913385,76.3936093 205.208593,69.6320097 224.503164,60.7390322 L231.796052,73.8353428 C215.409826,95.0000245 178.298612,114.916545 161.84294,106.839809 C135.533742,93.9267871 125.046804,40.501408 123.280247,9.87718027 Z"
              id="Coat-Back"
              fill={darken(coatColor)}
              transform="translate(177.538150, 58.161768) rotate(5.000000) translate(-177.538150, -58.161768) "
            />
            <Path
              d="M90,114 C124.671756,114 150.175573,114 166.511451,114 C170.007634,114 169.348845,108.951637 168.84345,106.404206 C163.010588,77.0037663 140.241304,45.3115155 140.241304,3.4607303 L118.1718,0 C99.917485,29.3584068 93.6048263,65.5045499 90,114 Z"
              id="Shirt"
              fill={shirtColor}
            />
            <Path
              d="M82.3687546,84.2331696 C66.7713811,112.367832 53.6609446,132.623442 43.0374452,145 L27,141.85882 C37.3305927,77.7906722 67.2466105,30.5043988 116.748053,3.81764932e-14 L117,2.9470116e-14 L125.486398,0 C145.298923,67.5369477 150.760885,112.536948 141.872285,135 L73,135 C74.0896281,118.56345 77.5833963,101.181199 82.3687561,84.2331662 Z"
              id="Coat-Front"
              fill={coatColor}
            />
          </G>
        </G>
      </G>
    </Svg>
  </Wrapper>
);

Standing9.propTypes = {
  height: PropTypes.number,
  skinColor: PropTypes.string,
  hairColor: PropTypes.string,
  shoeColor: PropTypes.string,
  shirtColor: PropTypes.string,
  coatColor: PropTypes.string,
  pantColor: PropTypes.string
};

Standing9.defaultProps = {
  height: 480,
  skinColor: '#57331F',
  hairColor: '#191847',
  shoeColor: '#E4E4E4',
  shirtColor: '#DDE3E9',
  coatColor: '#89C5CC',
  pantColor: '#2F3676'
};

export default Standing9;
