import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, X, Mail, Phone, MapPin, User, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { sendOrderConfirmation, sendCheckoutNotification, testEmailJS } from '../../services/notificationService';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { cartItems, getCartTotal, clearCart } = useCart();
  
  const [checkoutForm, setCheckoutForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  const [orderProcessing, setOrderProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState({ email: false, sms: false });
  const [testEmailStatus, setTestEmailStatus] = useState('');

  // Redirect if no user or no cart items
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (cartItems.length === 0) {
      navigate('/cart');
      return;
    }
  }, [user, cartItems, navigate]);

  const handlePhoneSubmit = async (phone) => {
    if (!phone) return;
    
    try {
      const result = await sendCheckoutNotification(phone);
      if (result.success) {
        console.log('📱 Immediate checkout notification sent to:', phone);
      } else {
        console.log('📱 Notification simulation (check console for details)');
      }
    } catch (error) {
      console.error('Error sending immediate notification:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm(prev => ({
      ...prev,
      [name]: value
    }));

    // Send notification when phone number is entered
    if (name === 'phone' && value.length >= 10) {
      handlePhoneSubmit(value);
    }
  };

  const handleTestEmail = async () => {
    setTestEmailStatus('Testing...');
    try {
      const result = await testEmailJS(checkoutForm.email || 'test@example.com');
      if (result.success) {
        setTestEmailStatus('✅ Test email sent successfully!');
        setTimeout(() => setTestEmailStatus(''), 5000);
      } else {
        setTestEmailStatus('❌ Test failed: ' + result.error);
        setTimeout(() => setTestEmailStatus(''), 5000);
      }
    } catch (error) {
      setTestEmailStatus('❌ Test error: ' + error.message);
      setTimeout(() => setTestEmailStatus(''), 5000);
    }
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setOrderProcessing(true);

    try {
      // Create order object
      const order = {
        orderId: `ORD-${Date.now()}`,
        customer: {
          name: checkoutForm.fullName,
          email: checkoutForm.email,
          phone: checkoutForm.phone,
          address: checkoutForm.address,
          city: checkoutForm.city,
          state: checkoutForm.state,
          pincode: checkoutForm.pincode
        },
        items: cartItems,
        total: getCartTotal(),
        paymentMethod: checkoutForm.paymentMethod,
        orderDate: new Date().toISOString(),
        status: 'pending'
      };

      // Send order confirmation notifications
      const notificationResult = await sendOrderConfirmation(order);
      setNotificationStatus({
        email: notificationResult.email.success,
        sms: notificationResult.sms.success
      });
      
      // Clear cart after successful order
      clearCart();
      
      // Show success
      setOrderSuccess(true);

    } catch (error) {
      console.error('Error processing order:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setOrderProcessing(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <div className="success-icon">✓</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your order. We've sent confirmation to your email and phone.</p>
          <div className="notification-status">
            <p>📧 Email: {notificationStatus.email ? 'Sent' : 'Check console for details'}</p>
            <p>📱 SMS: {notificationStatus.sms ? 'Sent' : 'Check console for details'}</p>
          </div>
          <p>You will receive updates about your order status.</p>
          <button 
            className="continue-shopping-btn"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <button 
          className="back-btn"
          onClick={() => navigate('/cart')}
        >
          <ArrowLeft size={20} />
          Back to Cart
        </button>
        <h1>Checkout</h1>
      </div>

      <div className="checkout-content">
        <div className="checkout-form-section">
          <form onSubmit={handleSubmitOrder} className="checkout-form">
            <div className="form-section">
              <h3>Contact Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <div className="input-wrapper">
                    <User size={20} className="input-icon" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={checkoutForm.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <div className="input-wrapper">
                    <Phone size={20} className="input-icon" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={checkoutForm.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter phone for immediate notification"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <div className="input-wrapper">
                  <Mail size={20} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={checkoutForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {checkoutForm.email && (
                  <button 
                    type="button" 
                    className="test-email-btn"
                    onClick={handleTestEmail}
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.5rem 1rem',
                      background: '#8D6E63',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    Test Email
                  </button>
                )}
                {testEmailStatus && (
                  <p style={{ 
                    marginTop: '0.5rem', 
                    fontSize: '0.8rem',
                    color: testEmailStatus.includes('✅') ? '#4CAF50' : '#f44336'
                  }}>
                    {testEmailStatus}
                  </p>
                )}
              </div>
            </div>

            <div className="form-section">
              <h3>Shipping Information</h3>
              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <div className="input-wrapper">
                  <MapPin size={20} className="input-icon" />
                  <textarea
                    id="address"
                    name="address"
                    value={checkoutForm.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={checkoutForm.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={checkoutForm.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pincode">Pincode *</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={checkoutForm.pincode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Payment Method</h3>
              <div className="payment-options">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={checkoutForm.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                  />
                  <span>Cash on Delivery</span>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={checkoutForm.paymentMethod === 'online'}
                    onChange={handleInputChange}
                  />
                  <span>Online Payment (Coming Soon)</span>
                </label>
              </div>
            </div>

            <div className="checkout-actions">
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => navigate('/cart')}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="place-order-btn"
                disabled={orderProcessing}
              >
                {orderProcessing ? 'Processing Order...' : 'Place Order'}
              </button>
            </div>
          </form>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <div className="item-image">
                  <img src={item.imageURL} alt={item.title} />
                </div>
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p className="item-category">{item.category}</p>
                  <div className="item-price">₹{item.price.toLocaleString()} × {item.quantity}</div>
                </div>
                <div className="item-total">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-totals">
            <div className="total-item">
              <span>Subtotal:</span>
              <span>₹{getCartTotal().toLocaleString()}</span>
            </div>
            <div className="total-item">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="total-item final-total">
              <span>Total:</span>
              <span>₹{getCartTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 