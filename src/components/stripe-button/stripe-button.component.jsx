import React from 'react';
const { default: StripeCheckout } = require('react-stripe-checkout');

const StripeButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    'pk_test_51Hb67WAPKCebgZ0C3ZtJzVoexDLNcSLNfQeaPBc9epzGmkybiJakKPTFEwe0QAk4N2Q3NRtruwqVTa3rwEOKY9BA007Or9QJdO';

  const onToken = (token) => {
    console.log(token);
    alert('payment successful');
  };
  return (
    <StripeCheckout
      label='Pay Bitch!'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
