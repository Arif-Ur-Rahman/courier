// src/utils/emailService.js
import emailjs from '@emailjs/browser';

// const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;service_d6ufdt5
// const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const serviceID = 'service_d6ufdt5';
const publicKey = 'mmoeB11bv-Ml0BuTy';

// Send Confirmation Email to User
export const sendUserConfirmationEmail = (name, email, parcelId, phone, address, district, thana, weight, codAmount, exchange) => {
  const templateID = 'template_s4qpwoh';

  const templateParams = {
    name,
    email,
    parcelId,
    phone,
    address,
    district,
    thana,
    weight,
    codAmount,
    exchange: exchange ? 'Yes' : 'No',
  };

  return emailjs.send(serviceID, templateID, templateParams, publicKey);
};

// Send Notification Email to Admin
export const sendAdminNotificationEmail = (name, email, parcelId, phone, address, district, thana, weight, codAmount, exchange) => {
  const templateID = 'template_s4qpwoh';

  const templateParams = {
    name,
    email,
    parcelId,
    phone,
    address,
    district,
    thana,
    weight,
    codAmount,
    exchange: exchange ? 'Yes' : 'No',
  };

  return emailjs.send(serviceID, templateID, templateParams, publicKey);
};
