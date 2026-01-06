
function Card({userData}) {
        
    return (
        <>
            <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <img
                        src="https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=Rakesh Pawar"
                        alt="ui/ux review check" />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {userData.name}
                    </h4>
                    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        {userData.description}
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">                    
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        {userData.dob}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card