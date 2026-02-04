import React from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const SizeGuide = () => {
    usePageMeta('Guía de Tallas', 'Encuentra tu ajuste perfecto.');

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '6rem 0', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Guía de tallas</h1>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem' }}>
                    Las tallas pueden variar según marca y modelo. Te recomendamos revisar esta guía antes de comprar para asegurar un mejor ajuste.
                </p>

                <div className="table-responsive">
                    <table className="editorial-table">
                        <thead>
                            <tr>
                                <th>US Mens</th>
                                <th>US Womens</th>
                                <th>UK</th>
                                <th>CM</th>
                                <th>EUR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>7</td><td>8.5</td><td>6</td><td>25</td><td>40</td></tr>
                            <tr><td>7.5</td><td>9</td><td>6.5</td><td>25.5</td><td>40.5</td></tr>
                            <tr><td>8</td><td>9.5</td><td>7</td><td>26</td><td>41</td></tr>
                            <tr><td>8.5</td><td>10</td><td>7.5</td><td>26.5</td><td>42</td></tr>
                            <tr><td>9</td><td>10.5</td><td>8</td><td>27</td><td>42.5</td></tr>
                            <tr><td>9.5</td><td>11</td><td>8.5</td><td>27.5</td><td>43</td></tr>
                            <tr><td>10</td><td>11.5</td><td>9</td><td>28</td><td>44</td></tr>
                            <tr><td>10.5</td><td>12</td><td>9.5</td><td>28.5</td><td>44.5</td></tr>
                            <tr><td>11</td><td>12.5</td><td>10</td><td>29</td><td>45</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                    * Si tienes dudas específicas sobre el fit de un par (ej: Yeezy vs Jordan), contáctanos.
                </div>
            </div>
        </div>
    );
};

export default SizeGuide;
