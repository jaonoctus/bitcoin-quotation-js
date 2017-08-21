# Bitcoin Quotation JS for Better Touch Tool

1. Install [Better Touch Tool](https://www.boastr.net/) [here](https://www.boastr.net/releases/BetterTouchTool.zip)
2. Download the repository and type `npm install` to download dependencies (of course you need Node installed)
3. Import the `crypto.json` in the section *Manage Presets*
4. You have to edit each widget going to *Advanced Configuration* and change to the correct `.js` file location.

# Create your own

The basis is:

```
set price to do shell script "/usr/local/bin/node /Users/YOUR_USER/BTTScripts/bitcoin/btcusd.js"
return price
```

