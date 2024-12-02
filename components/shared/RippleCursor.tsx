/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect } from 'react';
import '../../app/RippleCursor.css';

interface RippleCursorProps {
    maxSize?: number;
    duration?: number;
    blur?: boolean;
}

const RippleCursor: React.FC<RippleCursorProps> = ({
    maxSize = 50,
    duration = 1000,
    blur = true,
}) => {
    interface Ripple {
        id: string;
        x: number;
        y: number;
    }

    interface Action {
        type: string;
        payload: any;
    }

    const [ripples, dispatch] = useReducer((state: Ripple[], action: Action) => {
        switch (action.type) {
            case 'ADD_RIPPLE':
                return [...state, action.payload].slice(-30); // Limit ripple count
            case 'REMOVE_RIPPLE':
                return state.filter((ripple: Ripple) => ripple.id !== action.payload);
            default:
                return state;
        }
    }, []);

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        const ripple = {
            id: `${Date.now()}-${Math.random()}`,
            x: e.clientX,
            y: e.clientY,
        };
        dispatch({ type: 'ADD_RIPPLE', payload: ripple });

        setTimeout(() => {
            dispatch({ type: 'REMOVE_RIPPLE', payload: ripple.id });
        }, duration);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [duration]);

    return (
        <div className="ripple-cursor-container">
            {ripples.map((ripple ) => (
                <div
                    key={ripple.id}
                    className="ripple"
                    style={{
                        left: `${ripple.x}px`,
                        top: `${ripple.y}px`,
                        width: `${maxSize}px`,
                        height: `${maxSize}px`,
                        animationDuration: `${duration}ms`,
                        filter: blur ? 'blur(4px)' : 'none',
                    }}
                />
            ))}
        </div>
    );
};

export default RippleCursor;