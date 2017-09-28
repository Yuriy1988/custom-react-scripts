import React from 'react';
import messageCss from './Message.module.scss';

export const Message = () => {
  return (
    <div className={messageCss.message}>
      <div>
        <img className={messageCss.logo} src="/logo.jpg" alt="Logo" />
      </div>
      <div className="oc-tooltip oc-tooltip--top oc-tooltip--custom">
        <div className="oc-tooltip__content">
          Start building your new application now
        </div>
      </div>
    </div>
  );
};
