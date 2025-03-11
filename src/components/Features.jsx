const Features = () => {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Our Features</h2>
        <div className="mt-8 flex justify-center gap-10">
          <div className="p-6 bg-white shadow-lg rounded-lg w-64">
            <h3 className="text-xl font-semibold">Fast Performance</h3>
            <p className="mt-2 text-gray-600">Optimized for speed.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg w-64">
            <h3 className="text-xl font-semibold">Easy to Use</h3>
            <p className="mt-2 text-gray-600">Simple and intuitive.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  