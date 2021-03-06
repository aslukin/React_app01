import React from 'react'

export const Alert = ({alert}) => {
    
    if (!alert){
        return null;
    }
    
    console.log('alert', alert)
    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
            <strong>Attention</strong>
            {alert.text} 
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}