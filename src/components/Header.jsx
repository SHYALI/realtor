import { useLocation,useNavigate } from "react-router-dom";


// react route dom has given the property to navigate through the pages 


// to style the menu baised on its path name we need to get the current location of the browser and hence we use router dom method to do so 

export default function Header() {

    const location=useLocation();
    const navigate=useNavigate();
    function pathMathRoute(route){
        if(route===location.pathname){
            return true
        }
    }



  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        {/* this div is for the total navigation bar  */}


    <header className="flex justify-between items-center px-3 max-w-6xl mx-auto"> 
        {/* this header div is made for the containing all the components  */}
         <div>
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer" onClick={()=>navigate("/")} />


          {/* as a developer when you are creating UI itself you should create a website by giving padding (p-4) i.e 1rem padding 
          for every other widget you are using in the website ,it will make your style submit consistent  
          onClick provides the event listner  we provide a function that points to navigate constant with route as a parameter  ---without refreshing the page we can go between the routes */}


         </div>
         {/* this div is made for the logo in the navigation bar  */}
         <div>
             <ul className="flex space-x-10">
                <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") &&"text-black border-b-red-500"} `} onClick={()=>navigate("/")}>Home</li>
                   {/* to give custom styling to tailwind css we use square brackets [] 
                   and for styling the li without using path we use curly braces{} 
                   $ is the variable and it calls the function with the route */}

                <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/offer") &&"text-black border-b-red-500"}`}onClick={()=>navigate("/offer")}>Offer</li>
                <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") &&"text-black border-b-red-500"}`}onClick={()=>navigate("/sign-in")}>Sign-in</li>
             </ul>

         </div>
         {/* this div is made for the rest all the elements in the navigation bar  */}
         {/* the both the div inside the header is align by the flexbox in the horizontal direction  */}
    </header>


    </div>
  )
}
