import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="relative h-screen">
      <div className="absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 lg:w-96 ">
        <h1 className="text-2xl">
          Sorry the page you are looking for is not found ☹
        </h1>
        <p className="my-4">
          You may have mistyped the address or the page may have moved.
        </p>

        <div>
          <Link href="/">
            <Button size={"sm"} variant={"retro"}>
              ↩ Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
