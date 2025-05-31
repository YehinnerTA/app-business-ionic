import React, { useState } from 'react';
import './PaymentProcess.css';

const PaymentProcess: React.FC = () => {
    const [method, setMethod] = useState<'tarjeta' | 'yape' | null>(null);

    return (
        <div className="payment-container">
            <h2 className="title">Selecciona tu método de pago</h2>

            <div className="payment-methods">
                <button
                    className={`method-btn ${method === 'tarjeta' ? 'active' : ''}`}
                    onClick={() => setMethod('tarjeta')}
                >
                    Tarjeta
                </button>
                <button
                    className={`method-btn ${method === 'yape' ? 'active' : ''}`}
                    onClick={() => setMethod('yape')}
                >
                    Yape
                </button>
            </div>

            {method === 'tarjeta' && (
                <div className="payment-section tarjeta">
                    <h3 className="subtitle">Pago con Tarjeta</h3>
                    <form className="payment-form">
                        <input type="text" placeholder="Número de Tarjeta" />
                        <input type="text" placeholder="Nombre del Titular" />
                        <div className="card-details">
                            <input className='MMAA' type="text" placeholder="MM/AA" />
                            <input className='CVV' type="text" placeholder="CVV" />
                        </div>
                        <button type="submit" className="submit-btn tarjeta-btn">Pagar con Tarjeta</button>
                    </form>
                </div>
            )}

            {method === 'yape' && (
                <div className="payment-section yape">
                    <h3 className="subtitle">Pago con Yape</h3>
                    <form className="payment-form">
                        <input type="text" placeholder="Número de celular (Yape)" />
                        <button type="submit" className="submit-btn yape-btn">Pagar con Yape</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default PaymentProcess;