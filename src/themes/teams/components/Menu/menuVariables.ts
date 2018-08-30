export interface IMenuVariables {
  [key: string]: string | number | undefined

  defaultColor: string
  defaultActiveColor: string
  defaultActiveBackgroundColor: string
  defaultBorderColor: string

  typePrimaryColor: string
  typePrimaryActiveColor: string
  typePrimaryActiveBackgroundColor: string
  typePrimaryBackgroundColorHover: string
  typePrimaryBorderColor: string
  typePrimaryActiveBorderColor: string
  typePrimaryUnderlinedBorderColor: string

  iconsMenuItemSize?: string
  iconsMenuItemSpacing: number | string
  menuItemWidth: number
}

export default (siteVars: any): IMenuVariables => {
  return {
    defaultColor: siteVars.gray02,
    defaultActiveColor: siteVars.gray01,
    defaultActiveBackgroundColor: siteVars.gray10,
    defaultBorderColor: siteVars.gray08,

    typePrimaryColor: siteVars.gray02,
    typePrimaryActiveColor: siteVars.brand,
    typePrimaryActiveBackgroundColor: siteVars.brand14,
    typePrimaryBackgroundColorHover: siteVars.brand16,
    typePrimaryBorderColor: siteVars.brand08,
    typePrimaryActiveBorderColor: siteVars.brand12,
    typePrimaryUnderlinedBorderColor: siteVars.gray12,

    iconsMenuItemSize: undefined,
    iconsMenuItemSpacing: 0,
    menuItemWidth: undefined,
  }
}
