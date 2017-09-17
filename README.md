GitBook plugin: Insert logo
===========================

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
            "url": "http://www.example.com/my-logo.png"
        }
    }
}
```
