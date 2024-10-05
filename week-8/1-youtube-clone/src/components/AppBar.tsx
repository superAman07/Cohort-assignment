import SearchBar from "./SearchBar";

const AppBar=()=>{
    return (
        <div className="flex justify-between pt-2 pl-3 pr-3 ">
            <div className="text-lg inline-flex items-center p-4 cursor-pointer"><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-red-600"
                >
                <path d="M23.498 6.186c-.265-1.383-1.447-2.461-2.818-2.61C18.331 3.06 12 3.06 12 3.06s-6.33 0-8.68.516C1.948 3.725.765 4.803.502 6.186.206 7.594 0 9.334 0 12s.206 4.407.502 5.814c.263 1.383 1.446 2.461 2.818 2.61C5.67 20.94 12 20.94 12 20.94s6.331 0 8.68-.516c1.372-.149 2.554-1.227 2.818-2.61C23.793 16.407 24 14.666 24 12s-.207-4.406-.502-5.814zM9.546 15.568V8.432l6.276 3.568-6.276 3.568z" />
                </svg> <p className="pl-1">YouTube</p></div>
            <div><SearchBar/></div>
            <div className="text-lg inline-flex items-center pr-6 cursor-pointer">Sign in</div>
        </div>
    );
};
export default AppBar;