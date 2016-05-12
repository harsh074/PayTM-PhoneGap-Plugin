Installation
============

```
cordova plugin add https://github.com/harsh074/PayTM-PhoneGap-Plugin.git --variable GENERATE_URL=<Checksum Generation URL> --variable VERIFY_URL=<Checksum Validation Url> --variable MERCHANT_ID=<MerchantID> --variable INDUSTRY_TYPE_ID=<IndustryType> --variable WEBSITE=<WAPWebsiteName> --variable CHANNEL_ID=<Channel_ID>
```

Usage
=====

```
window.plugins.paytm.startPayment(txn_id, customer_id, email, phone, amount, prodEnv, successCallback, failureCallback);
```

prodEnv is a boolean to use the production paytm or development

Open the src/android/com/paytm/cordova/PayTM.java and give the staging credentials