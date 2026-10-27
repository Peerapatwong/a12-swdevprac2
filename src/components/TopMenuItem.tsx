import Link from "next/link";

export default function TopMenuItem({ title, pageRef } : { title: string, pageRef: string }) {
  return (
    <Link className="w-30 h-full flex items-center justify-center font-normal" href={pageRef}>
      {title}
    </Link>
  );
}