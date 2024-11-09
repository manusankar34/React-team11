import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Medicine.css';

const medicines = [
    { id: 1, name: 'Paracetamol', image: 'https://images.apollo247.in/pub/media/catalog/product/P/A/PAR0014_1_1.jpg?tr=q-40,f-webp,w-150,dpr-2,c-at_max', description: 'Pain relief and fever reducer', price: 10 },
    { id: 2, name: 'Aspirin', image: 'https://images.apollo247.in/pub/media/catalog/product/a/s/asp0002.jpg?tr=q-40,f-webp,w-150,dpr-2,c-at_max', description: 'Reduces pain, fever, or inflammation', price: 15 },
    { id: 3, name: 'Neuherbs', image: 'https://cdn01.pharmeasy.in/dam/products_otc/C09391/neuherbs-true-vitamin-60-tablets-2-1724931174.jpg?dim=1440x1440&q=75', description: 'Treat or prevent vitamin deficiency', price: 20 },
    { id: 4, name: 'AB phyline', image: 'https://images.apollo247.in/pub/media/catalog/product/A/B/ABP0013_1_1.jpg?tr=q-40,f-webp,w-150,dpr-2,c-at_max', description: 'Anti-inflammatory medicine', price: 25 },
    { id: 5, name: 'Sunethra', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMgrUV1xHbTnuVNCia3iRPrxQf_12lzfOVA&s', description: 'Treats soreness, prevents dry eyes', price: 30 },
    { id: 6, name: 'Zincovite', image: 'https://images.apollo247.in/pub/media/catalog/product/Z/I/ZIN0036_1_1.jpg?tr=q-40,f-webp,w-150,dpr-2,c-at_max', description: 'Treatment of Zinc deficiency', price: 35 },
];

const Medicine = ({ cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMedicineSelect = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const handleAddToCart = () => {
    const existingMedicine = cart.find(item => item.id === selectedMedicine.id);
    if (existingMedicine) {
      setCart(cart.map(item =>
        item.id === selectedMedicine.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...selectedMedicine, quantity }]);
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setSelectedMedicine(null);
    setQuantity(1);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="medicine-container">
      <h2>LIFE CARE-PHARM EASY</h2>
      <input
        type="text"
        placeholder="Search medicine..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="medicine-list">
        {filteredMedicines.map(medicine => (
          <div key={medicine.id} className="medicine-card" onClick={() => handleMedicineSelect(medicine)}>
            <img src={medicine.image} alt={medicine.name} className="medicine-image" />
            <h3>{medicine.name}</h3>
            <p>{medicine.description}</p>
          </div>
        ))}
      </div>

      {selectedMedicine && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedMedicine.name}</h3>
            <p>{selectedMedicine.description}</p>
            <img src={selectedMedicine.image} alt={selectedMedicine.name} className="medicine-image" />
            <div className="quantity-selector">
              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>
            <p>Total Price: ₹{selectedMedicine.price * quantity}</p>
            <button onClick={handleCloseModal} style={{ marginRight: '10px', backgroundColor: 'skyblue' }}>CLOSE</button>
<button onClick={handleAddToCart} style={{ backgroundColor: 'skyblue' }}>ADD TO CART</button>


          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart">
          <h3>Cart</h3>
          <table>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Quantity</th>
                <th>Price per Unit (₹)</th>
                <th>Total Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="proceed-payment" onClick={handleProceedToPayment}>CONTINUE</button>
        </div>
      )}
    </div>
  );
};

export default Medicine;
















