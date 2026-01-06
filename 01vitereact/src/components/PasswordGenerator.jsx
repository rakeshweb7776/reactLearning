import { useEffect, useState } from "react";
function PasswordGenerator() {

    const [password, setPassword] = useState("");
    const [special_charStatus, setSpecialCharStatus] = useState(false);
    const [numbersStatus, setNumbersStatus] = useState(false);
    const [passwordLength, setLength] = useState(16);

    const generatePassword = function () {
        // Character sets for password generation
        const special_characters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        const numbers = "0123456789";
        const small_letters = "abcdefghijklmnopqrstuvwxyz";
        const capital_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const allCharacters = (special_charStatus == true ? special_characters : "") + small_letters + capital_letters + (numbersStatus == true ? numbers : "");

        let password = ""
        for (let i = 0; i < passwordLength; i++) {
            password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
        setPassword(password);
    }

    useEffect(() => {
        generatePassword();
    }, []);


    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <input type="text" className="p-2 border rounded w-64 text-center" placeholder="Generated Password" value={password} readOnly />
            <a onClick={() => navigator.clipboard.writeText(password)} className="inline-block rounded-sm border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white" href="#">
                Copy Password
            </a>
            <input type="number" className="p-2 border rounded w-32 text-center" placeholder="Password Length" value={passwordLength} onChange={(e) => { setLength(e.target.value); generatePassword(); }} />
            <input type="checkbox" className="mt-4" onChange={generatePassword} onClick={() => setSpecialCharStatus(!special_charStatus)} /> Include Special Characters
            <input type="checkbox" className="mt-4" onChange={generatePassword} onClick={() => setNumbersStatus(!numbersStatus)} /> Include Numbers
        </div>
    );
}
export default PasswordGenerator;