import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { AuthContext } from '../../../AuthProvaider/AuthProvaider';
import useAppointment from '../../../hooks/useAppointment';
import useAxiosSceure from '../../../hooks/useAxiosSceure';

const CheckoutForm = ({ price, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [, refetch] = useAppointment();
  const axiosSciure = useAxiosSceure();
  const [secretKey, setSecretKey] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [proccesing, setProccesing] = useState(false);
  useEffect(() => {
    axiosSciure.post('/stripe-key', { price }).then(res => {
      console.log(res.data.clientSecret);
      setSecretKey(res.data.clientSecret);
    });
  }, [price, axiosSciure]);

  const handleSubmit = async event => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    const card = elements.getElement(CardElement);

    // Trigger form validation and wallet collection
    setProccesing(true);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error from paymentmethod', error.message);
      setErrorMessage(error.message);
    } else {
      console.log('paymentmethod', paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(secretKey, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'unknown',
            email: user?.email || 'unknown',
          },
        },
      });

    if (confirmError) {
      console.log('error form payment intent', confirmError.message);
      setErrorMessage(confirmError.message);
    }
    if (paymentIntent.status === 'succeeded') {
      const tranjactionId = paymentIntent.id;

      axiosSciure.patch(`/appointments/${id}`, { tranjactionId }).then(res => {
        const modified = res.data.modifiedCount;
        if (modified > 0) {
          refetch();
          toast.success('Payment Success');
          setProccesing(false);
        }
      });
    }
  };

  return (
    <form className="px-5 py-5" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        className="btn btn-primary my-5"
        type="submit"
        disabled={!stripe || !elements || proccesing}
      >
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
    </form>
  );
};
export default CheckoutForm;
