import React from "react";

interface ModalProps{
    open: boolean;
    setModalOpen: (open:boolean) => boolean | void;
    children: React.ReactNode;
}
const Modal:React.FC<ModalProps> = (props) => {
    return (
      <div className={`modal ${props.open ? 'modal-open': ''}`}>
          <div className="modal-box relative">
              <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button onClick={() => props.setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              {props.children}
          </div>
      </div>
    )
}

export default Modal;