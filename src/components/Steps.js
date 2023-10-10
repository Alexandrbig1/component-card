import { useState } from "react";
import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlerPrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function handlerNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step{step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlerPrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" color="#fff" onClick={handlerNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
