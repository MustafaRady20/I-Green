import React from 'react';

export default function LocationMap() {
    return (
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden border-2 border-gold/20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3454.722275823645!2d31.449224075552575!3d30.016129974937787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAwJzU4LjEiTiAzMcKwMjcnMDYuNSJF!5e0!3m2!1sen!2seg!4v1733093236265!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
}