const functions = require('firebase-functions');
const stripe = require('stripe')(
  `sk_test_51Hp8gsKE50QFKl7ktHsk8eLXGURDtvSK7Ipaln8iBdNWn1hiD4W42TAFIufeWvJCLtmEOoU1d6SFwB9a6glJxeai00YaLZ4U6K`,
);
exports.completePaymentWithStripe = functions.https.onRequest(
  (request, response) => {
    stripe.charges
      .create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: request.body.token,
      })
      // eslint-disable-next-line promise/always-return
      .then((charge) => {
        response.send(charge);
      })
      .catch((error) => {
        console.log(error);
      });
  },
);
