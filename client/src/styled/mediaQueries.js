const breakpoints = {
  phone: 320,
  tablet: 768,
  laptop: 992,
  monitor: 1280,
}

export const mediaQueries = key => {
  return `@media screen and (min-width: ${breakpoints[key]}px)`;
}