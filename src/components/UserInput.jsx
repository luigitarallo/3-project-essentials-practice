export default function UserInput({ onChangeInput, userInputValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInputValue.intialInvestment}
            onChange={(event) =>
              onChangeInput("intialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInputValue.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInputValue.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInputValue.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
