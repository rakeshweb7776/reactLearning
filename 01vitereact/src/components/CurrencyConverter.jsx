import { useState } from "react";
import UseCurrencyInfo from "./UseCurrencyInfo";
import InputBox from "./InputBox";

function CurrencyConverter() {

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const currencyInfo = UseCurrencyInfo(from);


    const option = Object.keys(currencyInfo);
    console.log('Sending Options', option);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Currency Converter
                </h1>

                <div>
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={option}
                        onAmountChange={setAmount}
                        onCurrencyChange={setFrom}
                        selectedCurrency={from}
                    />

                    <div className="flex justify-center my-2">
                        <button
                            onClick={swap}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
                        >
                            Swap ↕
                        </button>
                    </div>

                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={option}
                        onAmountChange={setConvertedAmount}
                        onCurrencyChange={setTo}
                        selectedCurrency={to}
                        amountDisabled={true}
                    />

                    <div className="mt-6">
                        <button
                            onClick={convert}
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                        >
                            Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}
                        </button>
                    </div>

                    {/* Result Display */}
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <p className="text-sm text-gray-600">Converted Amount:</p>
                        <p className="text-xl font-semibold text-gray-800">
                            {convertedAmount} {to}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrencyConverter;