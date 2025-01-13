

export default function Footer() {
  return (
    <>
      <div className="bg-white/5 p-10">
        <p className=" text-slate-800 dark:text-gray-300 text-xs md:text-sm">
          © Robert {new Date().getFullYear()}. tous droits réservés
        </p>
      </div>
    </>
  );
}
