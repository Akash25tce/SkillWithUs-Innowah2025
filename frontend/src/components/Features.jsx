const Features = () => {
    const features = [
      { title: "AI-Powered Interviews", description: "Practice with AI mock interviews tailored to your skills." },
      { title: "Real-Time Feedback", description: "Receive instant AI-powered feedback on your communication." },
      { title: "Personalized Training", description: "Custom AI assistant to guide your skill development." },
    ];
  
    return (
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-md text-center">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  