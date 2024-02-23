import Link from "next/link";
import "../global.css"

export default function selectlevel() {
  return (
    <div className="container mx-auto p-8" >
      <h2>Select level</h2>

        <Link href="l1">
      <div className="bg-green-500 m-8 p-8 flex flex-col items-center" >
          <h3 className="">Level 1</h3>
      </div>
        </Link>
    </div>
  );
}
