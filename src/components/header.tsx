import Image from "next/image";

export default function Header() {
  return (
    <div className="p-4 flex justify-between items-center container m-auto">
      <Image src="/images/logo.png" height={100} width={100} alt="test" />
      <div className="text-white flex items-center gap-5">
        <span>Litepaper</span>
        <span>Litepaper</span>
        <button className="border p-2 rounded-md">Join Discord</button>
      </div>
    </div>
  );
}
