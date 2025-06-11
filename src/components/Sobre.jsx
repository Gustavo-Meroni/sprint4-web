const Sobre = ({ title, description, imageUrl, altText }) => {
  return (
    <section id="sobre" className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-10">
        {/* Texto */}
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt={altText}
            className="rounded-xl shadow-lg w-full h-auto max-w-xs shadow-blue-300/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
