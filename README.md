# Send Offline Conversion

###Call the function
```html
<script>
    sendOfflineConversion(analyticsId, clientId, data);
</script>
```
###Parameters

`analyticsId`
```javascript
let analyticsId = "UA-XXXXXXX-X";
```

`clientId`
```javascript
let clientId = "XXXXXXXXXX.XXXXXXXXXX";
```
`data`
```javascript
let data = {
    "currencyCode" : "EUR" || "USD" || "GBP",
    "actionField" : {
        "id" : "<TRANSACTION_ID>",
        "revenue" : "<TRANSACTION_VALUE>",
        "affiliation" : "<TRANSACTION_AFFILIATION>",
        "coupon" : "<TRANSACTION_COUPON>"
    },
    "products" : [
        {
            "name" : "<PRODUCT_NAME>",
            "id" : "<PRODUCT_ID",
            "price" : "<PRODUCT_PRICE",
            "quantity" : "<PRODUCT_QUANTITY>",
            "category" : "<PRODUCT_CATEGORY>",
            "variant" : "<PRODUCT_VARIANT>",
            "brand" : "<PRODUCT_VARIANT>"
        },
        {
            //...
        }
    ]
};
```