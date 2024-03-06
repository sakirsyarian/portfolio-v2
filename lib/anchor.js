import Link from "next/link";

export default function anchor(link) {
  if (link === "none") return <p>{link}</p>;

  return (
    <Link href={`https://${link}`} target="_blank">
      {link}
    </Link>
  );
}
