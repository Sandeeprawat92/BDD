$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MouldingCategory.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Sandeep Rawat"
    }
  ],
  "line": 3,
  "name": "Acceptanace testing to validate Moulding category page is working fine.",
  "description": " In order to validate that \n the moulding category page is working fine\n we will do the acceptance testing",
  "id": "acceptanace-testing-to-validate-moulding-category-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Moulding-Category"
    }
  ]
});
formatter.before({
  "duration": 10186350305,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate moulding category page and select product from the moulding page",
  "description": "",
  "id": "acceptanace-testing-to-validate-moulding-category-page-is-working-fine.;validate-moulding-category-page-and-select-product-from-the-moulding-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Moulding-Category-positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the home page \"http://me.sourcemash.com\" of shoplj website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "verify the title of the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on \"Moulding\" link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the page title should be \"Mouldings\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select any product from the moulding page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://me.sourcemash.com",
      "offset": 23
    }
  ],
  "location": "MouldingCategorySteps.i_am_on_the_home_page_of_shoplj_website(String)"
});
formatter.result({
  "duration": 41783771550,
  "status": "passed"
});
formatter.match({
  "location": "MouldingCategorySteps.verify_the_title_of_the_home_page()"
});
formatter.result({
  "duration": 26577339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moulding",
      "offset": 10
    }
  ],
  "location": "MouldingCategorySteps.click_on_link(String)"
});
formatter.result({
  "duration": 286920197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mouldings",
      "offset": 26
    }
  ],
  "location": "MouldingCategorySteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 21470121,
  "status": "passed"
});
formatter.match({
  "location": "MouldingCategorySteps.select_any_product_from_the_moulding_page()"
});
formatter.result({
  "duration": 92265019,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027http://me.sourcemash.com/lancaster.html\u0027][contains(text(),\u0027View Product\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SANDDY\u0027, ip: \u0027192.168.43.207\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.7 (efcef9a3ecda02..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57315}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 0b6351cd8f1093055fa2a94773e586d1\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027http://me.sourcemash.com/lancaster.html\u0027][contains(text(),\u0027View Product\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages.actions.ShopLjMouldingPageActions.clickOnMouldingProduct(ShopLjMouldingPageActions.java:18)\r\n\tat stepsDefination.MouldingCategorySteps.select_any_product_from_the_moulding_page(MouldingCategorySteps.java:44)\r\n\tat ✽.And select any product from the moulding page(MouldingCategory.feature:14)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1893727082,
  "status": "passed"
});
});