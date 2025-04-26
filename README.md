# Overview
Dayjs is tiny js library that helps with manipulating dates. Check out its [home page](https://day.js.org/) for more info. To facilitate to be used in lwc,
we copied the esm files from [npm repo](https://www.npmjs.com/package/dayjs?activeTab=code) and version controled here.

> [!WARNING] 
> Dayjs files in this repo should not be modified except `dayjsUtils` component. Instead get the latest version from Dayjs and use it.

## Dayjs Version
This repo currently has dayjs v1.11.13

## Updating to New Version

Follow these steps to update to  new version

1. Goto npm package https://www.npmjs.com/package/dayjs?activeTab=code
2. Copy the main file `esm/index.js` and any other files referred from that file
3. Note that we should copy only from `esm` subfolder as commonjs format is not supported in lwc
4. Make sure you copy the latest dayjs package.json as well into lwc component folder, which contains the version information. Since lwc doesn't like `.json` extn files as part of lwc component, rename it to `.json.txt`

## License
Dayjs library copyrights are held as outlined in the rpeo. Checkouts its license at https://github.com/iamkun/dayjs/blob/dev/LICENSE

Copyright for files we created are held by Datasert and are licensed under the same MIT license.
