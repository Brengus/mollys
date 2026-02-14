// src/components/Map.tsx
'use client';

import { useSelector } from 'react-redux';

export default function Map() {
    const isDarkmode = useSelector((state: any) => state.darkmode.isDarkmode);

    // Replace this URL with the 'src' from your Google Maps embed code
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.7203417622186!2d44.71477467586124!3d41.71938979762958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447376d903b0fd%3A0x60785a626810a3a8!2s4g%20Ana%20Politkovskaia%20St%2C%20T%27bilisi!5e1!3m2!1sen!2sge!4v1771057361276!5m2!1sen!2sge";
    return (
        <section className="map-section" style={{ width: '100%', height: '350px', padding: '40px 0' }}>
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="350"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}