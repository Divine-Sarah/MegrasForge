import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50 modal-bg"></div>
      <div className="z-50 p-8 bg-white rounded shadow-lg modal-content">
        <button className="px-4 py-2 text-white bg-red-500 rounded close-button" onClick={onClose}>
          Close
        </button>
        {/* Add modal content here */}
        <h2 className="mb-4 text-2xl font-bold">Modal Content</h2>
        <p>This is the modal content you want to display.</p>
      </div>
    </div>
  );
};

export default Modal;
