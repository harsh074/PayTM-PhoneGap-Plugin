module.exports = {
  startPayment: function(orderId, customerId, email, phone, amount,prodEnv, successCallback, failureCallback) {
    cordova.exec(successCallback,
                 failureCallback, 
                 "PayTM",
                 "startPayment",
                 [orderId, customerId, email, phone, amount,prodEnv]);
  }
};