import React from "react";

const CustomAlert = ({ onClose }) => {
  return (
    <div
      role="alert"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="rounded border-s-4 border-blue-500 bg-red-50 p-4 dark:border-blue-600 dark:bg-blue-900">
        <div className="flex items-center gap-2 text-blue-800 dark:text-black-100">
          
          <strong className="block font-medium">How can we help you?</strong>
        </div>
        <p className="mt-2 text-sm text-blue-700 dark:text-blue-200">
        If you want to work with us & order something pls message on our whatsapp number +919598129889 
        </p>
        <p className="mt-2 text-sm text-blue-700 dark:text-blue-200">
        If you get any issues related our service pls mail us at igraphixs.org@gmail.com
        </p>
        <button
          onClick={onClose}
          className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-900"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
