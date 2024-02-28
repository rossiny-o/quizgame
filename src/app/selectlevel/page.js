import Link from "next/link";
import "../global.css";
import { data } from "./SL-data.js";

export default function selectlevel() {
  const { level } = data;

  return (
    <div className="container mx-auto py-10">
      <h2>Select level</h2>

      <div className="mx-auto flex flex-wrap gap-x-1">
        {level.map((lvl) => {
          return (
            <div className="box-border w-32 h-32 border-2 border-black m-2 p-2">
              <Link href={lvl.href}>
                <h3 className="">{lvl.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
