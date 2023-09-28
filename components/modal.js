import { useState, useEffect } from "react";

export const Modal = ({ showModal, children, onClose, width, bgColor }) => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setShouldShow(showModal);
  }, [showModal]);

  const handleClose = () => {
    setShouldShow(false);
    onClose && onClose();
  };

  const modalStyle = {
    backgroundColor: bgColor || "white", // Default to white if bgColor is not provided
    width: width || "400px", // Default to 400px if width is not provided
  };

  return (
    <>
      {shouldShow && (
        <div
          onClick={handleClose}
          className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black/50"
        >
          {/* Modal body starts */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={modalStyle} // Apply the style based on provided props
            className="m-[10%] mx-auto p-5 relative"
          >
            <button onClick={handleClose} className="absolute right-4">
              <div>
                {/* Close button */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
            {children}
          </div>
          {/* Modal body ends */}
        </div>
      )}
    </>
  );
};
