import { MappedTheme, Theme } from '../types/themes.type'

import { themes } from './themeCollections'

const mapTheme = (variables: Theme): MappedTheme => {
  return {
    '--text-primary': variables.textPrimary || '',
    '--text-inverted': variables.textInverted || '',
    '--text-success': variables.textSuccess || '',
    '--text-warning': variables.textWarning || '',
    '--text-failure': variables.textFailure || '',
    '--text-hint': variables.textHint || '',
    '--text-highlight': variables.textHighlight || '',
    '--text-highlight-lighten': variables.textHighlightLighten || '',
    '--text-highlight-darken': variables.textHighlightDarken || '',

    '--bg-primary': variables.bgPrimary || '',
    '--bg-secondary': variables.bgSecondary || '',
    '--bg-success': variables.bgSuccess || '',
    '--bg-warning': variables.bgWarning || '',
    '--bg-failure': variables.bgFailure || '',
    '--bg-failure-darken': variables.bgFailureDarken || '',
    '--bg-info': variables.bgInfo || '',
    '--bg-highlight': variables.bgHighlight || '',
    '--bg-highlight-lighten': variables.bgHighlightLighten || '',
    '--bg-highlight-darken': variables.bgHighlightDarken || '',
    '--bg-lowlight': variables.bgLowlight || '',
    '--bg-transaction': variables.bgTransaction || '',
    '--bg-transaction-darken': variables.bgTransactionDarken || '',
    '--bg-transaction-lighten': variables.bgTransactionLighten || '',
    '--bg-transaction-lightest': variables.bgTransactionLightest || '',

    '--b-primary': variables.borderPrimary || '',
    '--b-secondary': variables.borderSecondary || '',
    '--b-highlight': variables.borderHighlight || '',
    '--b-highlight-lighten': variables.borderHighlightLighten || '',
    '--b-highlight-darken': variables.borderHighlightDarken || '',
    '--b-lowlight': variables.borderLowlight || '',
    '--b-success': variables.borderSuccess || '',
    '--b-failure': variables.borderFailure || '',
    '--b-warning': variables.borderWarning || '',

    '--divide-primary': variables.dividePrimary || '',
    '--divide-secondary': variables.divideSecondary || '',
    '--divide-highlight': variables.divideHighlight || '',
    '--divide-lowlight': variables.borderLowlight || '',
    '--divide-success': variables.borderSuccess || '',
    '--divide-failure': variables.borderFailure || '',

    '--ring-primary': variables.ringPrimary || '',
    '--ring-secondary': variables.ringSecondary || '',
    '--ring-highlight': variables.ringHighlight || '',
    '--ring-lowlight': variables.borderLowlight || '',
    '--ring-success': variables.borderSuccess || '',
    '--ring-failure': variables.borderFailure || '',

    '--stroke-highlight': variables.strokeHighlight || '',

    '--skeleton-base': variables.skeletonBase || '',
    '--skeleton-highlight': variables.skeletonHighlight || '',
  }
}

export function applyTheme(theme: string): void {
  const themeObject: MappedTheme = mapTheme(themes[theme])
  if (!themeObject) return

  const root = document.documentElement

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return
    }

    root.style.setProperty(property, themeObject[property])
  })
}

export function extend(extending: Theme, newTheme: Theme): Theme {
  return { ...extending, ...newTheme }
}
