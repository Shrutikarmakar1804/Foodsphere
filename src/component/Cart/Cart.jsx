import {  Divider, Button, Modal, Box, TextField } from '@mui/material';
import React from 'react';
import CartItem from './CartItem';
import { AddLocation } from '@mui/icons-material';
import { Field, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../State/Order/Action';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: '',
  state: '',
  pincode: '',
  city: '',
};

const Cart = () => {
  const navigate = useNavigate();
  const handleProceedToPay = () => {
    navigate("/payment");
  };
  const createOrderUsingSelectedAddress = (address) => {
    const data = {
      jwt: localStorage.getItem('jwt'),
      order: {
        restaurantId: cart.cartItems[0].food?.restaurant.id,
        deliveryAddress: address,
      },
    };
    dispatch(createOrder(data));
    console.log('Selected address:', address);
  };
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const { cart, auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);

  const handleSubmit = (value) => {
    const data = {
      jwt: localStorage.getItem('jwt'),
      order: {
        restaurantId: cart.cartItems[0].food?.restaurant.id,
        deliveryAddress: {
          fullName: auth.user?.fullName,
          streetAddress: value.streetAddress,
          city: value.city,
          state: value.state,
          pincode: value.pincode,
          country: 'India',
        },
      },
    };
    dispatch(createOrder(data));
    console.log('form value', value);
  };

  return (
    <React.Fragment>
      <main className='p-5 space-y-5'>

       

        {/* Cart Items Section */}
        <section className='bg-black p-5 rounded-lg shadow-sm space-y-4'>

          <div className="flex justify-between items-center">
            <div>
              {/* <h2 className="text-white justify-center font-bold">Delivery in 20 mins</h2> */}
              <h2 className="text-white justify-center font-bold">
  Delivery in 20 mins
</h2>

              
            </div>
          </div>

          {cart.cartItems?.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}

          <Divider />

          {/* Membership / Pass section */}
          <div className="bg-black-100 p-4 rounded-lg">
            <h3 className="text-purple-700 font-bold mb-2">Renew <span className="bg-yellow-300 px-2 rounded">Pass</span> & Save More</h3>
            <p className="text-gray-600">You saved ₹50 so far. That’s 50 times of what you’ve paid for Pass.</p>
            <br/>
            <Button variant="contained" size="small" color="primary" className="mt-3">Add 1 Month @ ₹19</Button>
          </div>

          {/* Unlock Offer Section
          <div className="bg-blue-50 p-4 rounded-lg">
            <p>Shop for ₹143 more to unlock special price</p>
            <div className="flex justify-between items-center mt-2">
              <div>Baker's Dozen Whole Wheat Bread 400g @ ₹60</div>
              <Button variant="outlined" size="small">Unlock</Button>
            </div>
          </div> */}

          {/* Suggestions */}
          {/* <h3 className="text-lg font-semibold">You Might Also Like</h3>
          <div className="flex space-x-3 overflow-x-auto"> */}
            {/* Static Examples, you can dynamically map products here */}
            {/* <div className="min-w-[120px] bg-white shadow rounded p-2">
              <img src="/path/to/icecream.png" alt="Ice Cream" className="h-20 object-cover" />
              <p className="text-sm text-gray-700 mt-2">Amul TriCone</p>
              <p className="text-sm font-semibold">₹44.61</p>
              <Button size="small" variant="contained" fullWidth>Add</Button>
            </div>
            <div className="min-w-[120px] bg-white shadow rounded p-2">
              <img src="/path/to/biscuit.png" alt="Biscuit" className="h-20 object-cover" />
              <p className="text-sm text-gray-700 mt-2">Hide & Seek</p>
              <p className="text-sm font-semibold">₹30</p>
              <Button size="small" variant="contained" fullWidth>Add</Button>
            </div>
          </div> */}

          <Divider />

          {/* Billing Details */}
          <div className="space-y-3 pt-5 text-white-600 ">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{cart.cart?.total}</span>
            </div>
            <div className="flex justify-between text-white-800">
              <span>Delivery Fee</span>
              <span>₹{cart.cart?.deliveryFee || 40}</span>
            </div>
            <div className="flex justify-between text-white-800">
              <span>GST and Restaurant Charges</span>
              <span>₹{cart.cart?.gstCharges || 0}</span>
            </div>
            <Divider />
            <div className="flex justify-between font-bold text-white-800">
              <span>Total Pay</span>
              <span>₹{(cart.cart?.total || 0) + 54}</span>
            </div>
            
            {/* <Button 
    variant="contained" 
    color="primary" 
    fullWidth 
    className="!mt-5"
    onClick={handleOpenPaymentModal}
  >
    Proceed to Pay
  </Button> */}

          </div>

        </section>

        {/* Address Section */}
        <section className="flex flex-col items-center space-y-6 p-5">
  <h1 className="text-2xl font-bold text-center">Choose Delivery Address</h1>

  <div className="flex flex-col space-y-4 w-full max-w-2xl">

    {/* Existing Address Cards */}
    {/* <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center cursor-pointer hover:shadow-lg transition">
      <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} showButton={true} />
      
    </div> */}

    {/* Add New Address Card */}
    <div 
      onClick={handleOpenAddressModal}
      className="bg-black rounded-lg shadow-md p-4 flex justify-between items-center cursor-pointer hover:shadow-lg transition"
    >
      <div className="flex items-center space-x-4">
        <AddLocation fontSize="large" className="text-blue-500" />
        <div>
          <h2 className="text-lg font-semibold text-white-800">Add New Address</h2>
          <p className="text-sm text-white-500">Add a new delivery address</p>
        </div>
      </div>
      <Button 
        variant="outlined" 
        style={{ borderColor: '#1976d2', color: '#1976d2' }}
      >
        Add
      </Button>
    </div>

  </div>
</section>


{/* Modal for Adding New Address */}
<Modal open={open} onClose={handleClose}>
  <Box sx={style}>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Field 
              as={TextField} 
              name="streetAddress" 
              label="Street Address" 
              fullWidth 
              variant="outlined"
              required 
            />
          </Grid>
          <Grid item xs={12}>
            <Field 
              as={TextField} 
              name="state" 
              label="State" 
              fullWidth 
              variant="outlined"
              required 
            />
          </Grid>
          <Grid item xs={12}>
            <Field 
              as={TextField} 
              name="city" 
              label="City" 
              fullWidth 
              variant="outlined"
              required 
            />
          </Grid>
          <Grid item xs={12}>
            <Field 
              as={TextField} 
              name="pincode" 
              label="Pincode" 
              fullWidth 
              variant="outlined"
              required 
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              fullWidth 
              variant="contained" 
              type="submit" 
              sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#115293' } }}
            >
              Deliver Here
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  </Box>
</Modal>
{/* <Button variant="contained" size="small" color="primary"   className="mt-3">Procced to Pay</Button> */}
<div className="flex justify-end">
    <Button 
      variant="contained" 
      onClick={handleProceedToPay} 
      sx={{ mt: 2 }}
      size="small" 
      color="primary" 
      className="mt-3"
      
    >
      Proceed to Pay
    </Button>
  </div>

  


       
    </main>
  
    </React.Fragment>
  );
}

export default Cart;
