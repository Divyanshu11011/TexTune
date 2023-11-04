import React from "react";
import './subscription.css'; // Import your custom CSS file

export default function Subscription() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="content">
                    <div className="title">Free Tier</div>
                    <div className="price">$0</div>
                    <div className="description">Upto 5 requests per Day</div>
                </div>
                <button>Buy now</button>
            </div>
            <div className="card">
                <div className="content">
                    <div className="title">Platinum Plan</div>
                    <div className="price">$99.99</div>
                    <div className="description">Upto 100 Requests/Per Day  <br></br>Billed Annually. <br></br> Faster Response</div>
                </div>
                <button>Buy now</button>
            </div>
            <div className="card">
                <div className="content">
                    <div className="title">Silver Edition</div>
                    <div className="price">$49.99</div>
                    <div className="description"> Upto 50 Requests/Per Day  <br></br>Billed Quaterly. </div>
                </div>
                <button>Buy now</button>
            </div>
        </div>
    );
}
