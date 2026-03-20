import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="not-found-immersive">
            <div className="not-found-content">
                <div className="four-zero-four-bg" aria-hidden="true" />
                
                <h1>404</h1>
                <h3>Look like you're lost</h3>
                <p>The page you are looking for is not available!</p>

                <div className="not-found-actions">
                    <button onClick={() => window.location.href = "https://rexplore.tech"} className="go-home-btn">
                        Go to Home
                    </button>
                    <button onClick={() => navigate("/")} className="explore-btn">
                        Explore Templates
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
