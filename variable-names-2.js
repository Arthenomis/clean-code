function renderBanner(platform, browser, resize, wasInitialized) {
  if ((platform.toUpperCase().indexOf("MAC") > -1) &&
    (browser.toUpperCase().indexOf("IE") > -1) &&
    wasInitialized && resize > 0 )
  {
    // do something
  }
}