import Link from "next/link";
import "../global.css";
import {data} from "./SL-data.js";

export default function selectlevel() {

  const { level} = data;

  return (

   
    <div className="container mx-auto p-8" >
      <h2>Select level</h2>

          <div className="columns-2 m-3 p-3">
      {level.map((lvl) => {
        return (
            
          <div className="w-24 border border-black m-2 p-2" >
          <Link href={lvl.href}>
              <h3 className="">{lvl.title}</h3>
            </Link>
          </div>
        );
      })
    };
    </div>
    </div>
  );
}
