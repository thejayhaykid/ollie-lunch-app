export interface Theme {
  [key: string]: string
}

export interface Themes {
  [key: string]: Theme
}

export interface MappedTheme {
  [key: string]: string | null
}
