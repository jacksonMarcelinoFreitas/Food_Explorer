const size = {
  mobileSmall: '320px',
  mobileMiddle: '375px',
  mobileLarge: '425px',
  tablet: '768px',
  desktopSmall: '1024px',
  desktopMiddle: '1440px',
  desktopLarge: '2560px'
}

export const device = {
  mobileSmall: `(min-width: ${size.mobileSmall})`,
  mobileMiddle: `(min-width: ${size.mobileMiddle})`,
  mobileLarge: `(min-width: ${size.mobileLarge})`,
  tablet: `(min-width: ${size.tablet})`,
  desktopSmall: `(min-width: ${size.desktopSmall})`,
  desktopMiddle: `(min-width: ${size.desktopMiddle})`,
  desktopLarge: `(min-width: ${size.desktopLarge})`,
}