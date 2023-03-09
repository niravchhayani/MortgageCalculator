const calculateBtn = document.getElementById("calculate");
const resultDiv = document.getElementById("result");
const monthlyPaymentSpan = document.getElementById("monthlyPayment");
const totalPaymentSpan = document.getElementById("totalPayment");
const totalInterestSpan = document.getElementById("totalInterest");

calculateBtn.addEventListener("click", function() {
  const principal = parseFloat(document.getElementById("principal").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value);
  const loanTerm = parseInt(document.getElementById("loanTerm").value);

  const monthlyRate = interestRate / 1200;
  const months = loanTerm * 12;
  const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - principal;

  monthlyPaymentSpan.textContent = "$" + monthlyPayment.toFixed(2);
  totalPaymentSpan.textContent = "$" + totalPayment.toFixed(2);
  totalInterestSpan.textContent = "$" + totalInterest.toFixed(2);

  resultDiv.classList.remove("hidden");
});
