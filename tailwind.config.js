module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: { raw: '(min-width: 1280px) and (min-height: 800px)' },
    },
    colors: {
      transparent: 'transparent',
      translucent: {
        'gray-700': 'rgba(201, 208, 212, .3)',
        'gray-400': 'rgba(151, 151, 151, .23)',
        'gray-800': 'rgba(217,215,231,.3)',
        'blue-200': 'rgba(45,98,130,.68)',
      },

      black: '#000',
      white: '#ffffff',
      yellow: {
        dark: '#F5A623',
      },

      gray: {
        lightest: '#fafafa',
        white: '#fbfcfc',
        light: '#eef1f4',
        medium: '#dde5ea',
        contour: '#c9d0d4',
        darkish: '#c8d1d5',
        note: '#9b9b9b',
        'dark-note': '#979797',
        dark: '#4a4a4a',
        darker: '#2c2c2c',
        1100: '#f5f7f7',
        1000: '#fbfcfc',
        980: '#fafafa',
        960: '#f8fafb',
        950: '#f7fafc',
        900: '#eef1f4',
        850: '#d9e1e7',
        800: '#dde5ea',
        700: '#c9d0d4',
        600: '#c8d1d5',
        550: '#c2c9cf',
        500: '#b0b8bc',
        470: '#aaaeb3',
        450: '#a6a6a6',
        410: '#9b9b9b',
        400: '#979797',
        200: '#5E5E5F',
        100: '#4a4a4a',
        50: '#2c2c2c',
        overlay: 'rgba(20, 20, 20, 0.75)',
      },
      blue: {
        700: '#CEDBE2',
        600: '#6590a6',
        500: '#2A6183',
        400: '#4285F4',
        350: '#41A2B0',
        300: '#457086',
        200: '#2D6282',
        100: '#19435E',
      },
      red: {
        600: '#F2513F',
        500: '#EF7365',
      },
      green: {
        500: '#55DABB',
        400: '#4DDBBC',
        100: '#263238',
      },
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '2px',
      2: '4px',
      3: '6px',
      4: '8px',
      5: '10px',
      6: '12px',
      8: '16px',
      9: '18px',
      10: '20px',
      12: '24px',
      14: '28px',
      16: '32px',
      18: '36px',
      20: '40px',
      22: '44rpx',
      24: '48px',
      26: '52px',
      28: '56px',
      32: '64px',
      36: '72px',
      38: '76px',
      40: '80px',
      42: '84px',
      44: '88px',
      48: '96px',
      52: '104px',
      56: '112px',
      64: '128px',
      98: '196px',
      106: '212px',
    },
    widths: {
      p3: '3px',
      p31: '31px',
      p102: '102px',
      p135: '135px',
      p141: '141px',
      p149: '149px',
      p170: '170px',
      p256: '256px',
      p263: '263px',
      p270: '270px',
      p290: '290px',
      p309: '309px',
      p331: '331px',
      p395: '395px',
      p420: '420px',
      p440: '440px',
      p460: '460px',
      p502: '502px',
      p524: '524px',
      p620: '620px',
      p680: '680px',
      p746: '746px',
      p860: '860px',
      p960: '960px',
      p1000: '1000px',
      p1050: '1050px',
      p1120: '1120px',
      p1200: '1200px',
      max: 'max-content',
      min: 'min-content',
    },
    heights: {
      p135: '135px',
      p502: '502px',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
    },
    backgroundColor: (theme) => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    boxShadow: {
      default: '0 2px 4px 0 rgba(0, 0, 0, 0.11)',
      md: '2px 2px 6px rgba(0, 0, 0, 0.25)',
      xl: '6px 6px 31px 0 rgba(0, 0, 0, 0.1)',
      '2xl': '6px 6px 31px 0 rgba(0, 0, 0, 0.06)',
      floating: '0 0 32px 0 rgba(0, 0, 0, 0.4)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      1: '1 1 0%',
      '1-no-shrink': '1 0 auto',
      2: '2 1 0%',
      '2-auto': '2 1 auto',
      '2-no-shrink': '2 0 auto',
      3: '3 1 0%',
      '3-auto': '3 1 auto',
      '3-no-shrink': '3 0 auto',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      0: '0',
      default: '1',
    },
    flexShrink: {
      0: '0',
      default: '1',
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      roboto: ['Roboto', '"Helvetica Neue"', 'Arial'],
    },
    fontSize: {
      xxxs: '0.625rem',
      xxs: '0.69rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      '2lg': '1.25rem',
      '3lg': '1.375rem',
      '4lg': '1.5rem',
      xl: '1.625rem',
      '2xl': '1.875rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.625rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      ...theme('heights'),
    }),
    inset: {
      0: '0',
      '-4': '-8px',
      '-6': '-12px',
      '-8': '-16px',
      '-12': '-24px',
      '-16': '-32px',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      auto: 'auto',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.25',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...theme('widths'),
      ...negative(theme('spacing')),
    }),
    maxHeight: (theme) => ({
      full: '100%',
      screen: '100vh',
      auto: 'auto',
      ...theme('heights'),
    }),
    maxWidth: (theme) => ({
      xs: '20rem',
      sm: '24rem',
      ssm: '640px',
      md: '28rem',
      smd: '768px',
      lg: '32rem',
      slg: '1024px',
      xl: '36rem',
      sxl: '1280px',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      none: 'none',
      ...theme('spacing'),
      ...theme('widths'),
    }),
    minHeight: (theme) => ({
      0: '0',
      auto: 'auto',
      full: '100%',
      screen: '100vh',
      ...theme('spacing'),
      ...theme('heights'),
    }),
    minWidth: (theme) => ({
      0: '0',
      full: '100%',
      xs: '18rem',
      sm: '20rem',
      md: '24rem',
      lg: '28rem',
      xl: '32rem',
      ...theme('spacing'),
      ...theme('widths'),
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      60: '0.6',
      75: '0.75',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    padding: (theme) => theme('spacing'),
    stroke: {
      current: 'currentColor',
    },
    placeholderColor: (theme) => theme('colors'),
    textColor: (theme) => theme('colors'),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      ...theme('widths'),
      full: '100%',
      screen: '100vw',
    }),
    zIndex: {
      auto: 'auto',
      '-10': '-10',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive', 'hover'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive', 'first-child', 'last-child', 'first', 'last'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'disabled'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive', 'first-child', 'last-child', 'first', 'last'],
    placeholderColor: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'hover'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [
    function ({ addVariant, e }) {
      addVariant('first-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-child${separator}${className}`)}:first-child`;
        });
      });
    },
    function ({ addVariant, e }) {
      addVariant('last-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`last-child${separator}${className}`)}:last-child`;
        });
      });
    },
  ],
};
