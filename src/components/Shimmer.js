const Shimmer = ()=>{
    return (
        <div className="h-[340px] w-56 bg-[#eae9e9] p-4 m-3 rounded-md shadow-lg flex flex-col justify-around align-middle animate-pulse">
                    <div className="h-36 w-full flex justify-center align-middle relative top-7">
                        <div className="h-4/6 w-4/6 rounded-md bg-slate-400"></div>
                    </div>
                    <div className="m-3 flex justify-between flex-col align-middle">
                        <h3 className="h-5 bg-slate-400 rounded col-span-2 m-3"></h3>
                        <h5 className="h-5 bg-slate-400 rounded col-span-1 m-3"></h5>
                        <h5 className="h-5 bg-slate-400 rounded col-span-1 m-3"></h5>
                    </div>
        </div>
    );
}

export default Shimmer;