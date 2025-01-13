

export default function Footer() {
  return (
    <>
      <div className="bg-black pt-12 pb-10">
        <div className="bg-white/5">
          <p className=" text-gray-300 text-lg text-center md:text-sm">
            © RovertNet {new Date().getFullYear()}. tous droits réservés
          </p>
        </div>
      </div>
    </>
  );
}
