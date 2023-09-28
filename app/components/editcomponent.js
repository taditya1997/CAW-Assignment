"use client";
import React, { use, useState } from "react";
import { useDispatch } from "react-redux";
import { approveProduct, rejectProduct } from "@/redux/productSlice";
import { Modal } from "@/components/modal";

export const EditComponent = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRejectClick = () => {
    // Open the modal when the Reject button is clicked
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    // Close the modal when needed, for example, after an action
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full overflow-auto">
      <div className="flex flex-row items-center gap-2">
        <div onClick={() => dispatch(approveProduct(item))}>
          {/* approve button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <div className="flex gap-5">
          {/* ... other code */}
          <div onClick={handleRejectClick}>
            {/* reject button - show modal on click of this */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div> Edit </div>
        </div>
      </div>

      {/* Render the modal conditionally */}
      {isModalOpen && (
        <ModalData
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          item={item}
        />
      )}
    </div>
  );
};

const ModalData = ({ isModalOpen, handleModalClose, item }) => {
  const dispatch = useDispatch();

  const handleUpdate = (isUrgernt) => {
    // Close the modal when needed, for example, after an action

    if (isUrgernt) {
      dispatch(rejectProduct({ id: item.id, status: "Missing Urgent" }));
    } else {
      dispatch(rejectProduct({ id: item.id, status: "Missing" }));
    }
    handleModalClose();
  };

  return (
    <Modal showModal={isModalOpen} onClose={handleModalClose} width="500px" bgColor="white">
      <div className=" space-y-4">
        <h1 className="text-xl font-bold">Missing Product</h1>
        <p>{`Is ${item.productName} urgent?`}</p>
        <div className="flex gap-10 justify-end">
          <button onClick={() => handleUpdate(true)}>Yes</button>
          <button onClick={() => handleUpdate(false)}>No</button>
        </div>
      </div>
    </Modal>
  );
};
