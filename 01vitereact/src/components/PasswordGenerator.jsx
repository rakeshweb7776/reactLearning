import { useEffect, useState } from "react";

function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [specialCharStatus, setSpecialCharStatus] = useState(false);
    const [numbersStatus, setNumbersStatus] = useState(false);
    const [passwordLength, setLength] = useState(16);
    const [copied, setCopied] = useState(false);

    const generatePassword = () => {
        const special_characters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        const numbers = "0123456789";
        const small_letters = "abcdefghijklmnopqrstuvwxyz";
        const capital_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const allCharacters = 
            (specialCharStatus ? special_characters : "") + 
            small_letters + 
            capital_letters + 
            (numbersStatus ? numbers : "");

        let newPassword = "";
        if (allCharacters.length > 0) {
            for (let i = 0; i < passwordLength; i++) {
                newPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
            }
        }
        setPassword(newPassword);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    useEffect(() => {
        generatePassword();
    }, [passwordLength, specialCharStatus, numbersStatus]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
                    Password Generator
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Create strong and secure passwords
                </p>

                {/* Password Display */}
                <div className="mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-4 pr-24 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg font-mono focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                            value={password}
                            readOnly
                            placeholder="Your password will appear here"
                        />
                        <button
                            onClick={copyToClipboard}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    {copied && (
                        <p className="text-green-600 text-sm mt-2 text-center">
                            ✓ Password copied to clipboard!
                        </p>
                    )}
                </div>

                {/* Length Slider */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <label className="text-gray-700 font-medium">
                            Password Length
                        </label>
                        <span className="text-indigo-600 font-bold text-xl bg-indigo-50 px-3 py-1 rounded-lg">
                            {passwordLength}
                        </span>
                    </div>
                    <input
                        type="range"
                        min="8"
                        max="32"
                        value={passwordLength}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 hover:[&::-webkit-slider-thumb]:bg-indigo-600"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>8</span>
                        <span>32</span>
                    </div>
                </div>

                {/* Options */}
                <div className="space-y-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Include in password:
                    </h2>
                    
                    <div className="space-y-4">
                        {/* Special Characters */}
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={specialCharStatus}
                                    onChange={() => setSpecialCharStatus(!specialCharStatus)}
                                    className="sr-only"
                                />
                                <div className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${specialCharStatus ? 'bg-indigo-500' : 'bg-gray-300'}`}>
                                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${specialCharStatus ? 'translate-x-4' : ''}`} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <span className="text-gray-700 font-medium">Special Characters</span>
                                <p className="text-gray-500 text-sm">
                                    ! @ # $ % ^ & * ( ) _ +
                                </p>
                            </div>
                        </label>

                        {/* Numbers */}
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={numbersStatus}
                                    onChange={() => setNumbersStatus(!numbersStatus)}
                                    className="sr-only"
                                />
                                <div className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${numbersStatus ? 'bg-indigo-500' : 'bg-gray-300'}`}>
                                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${numbersStatus ? 'translate-x-4' : ''}`} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <span className="text-gray-700 font-medium">Numbers</span>
                                <p className="text-gray-500 text-sm">
                                    0 1 2 3 4 5 6 7 8 9
                                </p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Generate Button */}
                <button
                    onClick={generatePassword}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                    🔄 Generate New Password
                </button>

                {/* Security Tips */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        💡 Security Tips:
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Use passwords of at least 12 characters</li>
                        <li>• Include a mix of character types</li>
                        <li>• Use unique passwords for each account</li>
                        <li>• Consider using a password manager</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;