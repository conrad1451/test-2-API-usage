# Purpose

This front-end, VanillaJS project tests API endpoints by callling fetch from them within two modules (functional components) that are then imported into the main fail and called.

Given that receiving data from an API call is a asynchronous event, these events happen immediately when they are called as they are imported.

So far, the alternative (importing the function signature and then calling it later) has produced unexpected results.

Made on CodeSandbox as a DevBox, and imported to GitHub as a repo.
