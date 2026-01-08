// import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${user}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);

    //             setData(data)
    //         }).catch(error => {
    //             console.error('Error fetching exchange rates:', error);
    //         });
    // }, [])
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden m-10">
            {/* Avatar */}
            <div className="flex justify-center mt-6">
                <img
                    src={data.avatar_url}
                    alt={data.name}
                    className="w-32 h-32 rounded-full border-4 border-orange-500"
                />
            </div>

            {/* Content */}
            <div className="text-center px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    {data.name}
                </h2>

                <p className="text-sm text-gray-500">{data.login}</p>

                <p className="mt-3 text-sm text-gray-600">
                    {data.bio}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                    📍 {data.location}
                </p>
            </div>

            {/* Stats */}
            <div className="flex justify-around border-t py-4 text-center">
                <div>
                    <p className="text-lg font-bold text-gray-800">{data.public_repos}</p>
                    <p className="text-xs text-gray-500">Repos</p>
                </div>
                <div>
                    <p className="text-lg font-bold text-gray-800">{data.followers}</p>
                    <p className="text-xs text-gray-500">Followers</p>
                </div>
                <div>
                    <p className="text-lg font-bold text-gray-800">{data.following}</p>
                    <p className="text-xs text-gray-500">Following</p>
                </div>
            </div>

            {/* Button */}
            <div className="px-6 pb-6">
                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
                >
                    View GitHub Profile
                </a>
            </div>
        </div>
    )
}

export default Github

export const gitHubinfoLoader = async () => {

  console.log("gitHubinfoLoader");
    const response = await fetch(`https://api.github.com/users/rakeshweb7776`)

    return response.json()
}