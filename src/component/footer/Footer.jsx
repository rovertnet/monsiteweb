

export default function Footer() {
  return (
    <>
      <div className="bg-black pt-12">
        <div className="bg-white/5 py-10">
          <p className=" text-gray-300 text-xl text-center md:text-sm">
            © RovertNet {new Date().getFullYear()}. tous droits réservés
          </p>
        </div>
      </div>
    </>
  );
}
