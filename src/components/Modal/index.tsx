import SVGs from "helpers/SVGs";

const Modal = ({ children, show = true, toggleClose }: any) => {
  return (
    <div
      className={`fixed w-screen left-0 top-0 h-screen bg-transparent flex items-center justify-center z-[1000] ${
        show ? "block" : "hidden"
      } `}
    >
      <div className="min-w-[400px] w-[500px] m-10  max-h-[600px] bg-[#ffffff] rounded-xl relative overflow-y-scroll">
        <div
          className=" absolute z-10 right-8 top-8 cursor-pointer"
          onClick={toggleClose}
        >
          {SVGs.close}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
