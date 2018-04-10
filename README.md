GitBook plugin: Insert logo
===========================

NPM package [here](https://www.npmjs.com/package/gitbook-plugin-insert-logo)

```
npm i gitbook-plugin-insert-logo
```

The following plugin inserts a logo into the navigation bar (above the summary and above the search input). Simply, drop a `logo.png` file into the root folder of your GitBook and add this plugin into your `book.json`:

```json
{
    "plugins": ["insert-logo", "another plugin 1", "another plugin 2"]
}
```

You will also need to provide url for the logo. The url can be local file, a remote URL, or base64 hash. Add the url into the plugin configuration in your `book.json`:

```json
{
    "plugins": ["insert-logo", "another plugin 1", "another plugin 2"],
    "pluginsConfig": {
        "insert-logo": {
            "url": "http://www.example.com/my-logo.png",
            "style": "background: none;"
        }
    }
}
```

## Logo is disappearing?

You are most likely using relative paths for your logo in the config. The path is relative to the current page. This can also happen with nested TOC. Consider using absolute path (the url to the file starts as: `/logo.png` instead of `logo.png`), or use base64 (see example below).

## Use base64 for logo instead of URL
_(The example gif encoded as base64 is taken from example here: https://css-tricks.com/data-uris/)_

```
"pluginsConfig": {
    "insert-logo": {
        "url": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"
    }
}
```
