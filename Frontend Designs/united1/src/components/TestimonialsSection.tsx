import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Healthcare Worker',
      image: 'SJ',
      rating: 5,
      text: 'The impact of this organization is truly remarkable. I\'ve witnessed firsthand how their programs have transformed communities and improved lives.',
    },
    {
      name: 'Marcus Chen',
      role: 'Education Director',
      image: 'MC',
      rating: 5,
      text: 'Supporting these initiatives has been the most rewarding experience. The team\'s dedication and transparency are unmatched in the sector.',
    },
    {
      name: 'Amara Okonkwo',
      role: 'Community Leader',
      image: 'AO',
      rating: 5,
      text: 'This foundation changed our village. From education to healthcare, their holistic approach addresses real community needs with compassion.',
    },
    {
      name: 'David Martinez',
      role: 'Corporate Partner',
      image: 'DM',
      rating: 5,
      text: 'Professional, impactful, and deeply committed to their mission. They\'re exactly the kind of partner we want to support long-term.',
    },
  ];

  return (
    <section className="bg-white dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Stories from the Heart
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-300 max-w-2xl mx-auto">
            Hear from the people whose lives have been changed and those dedicated to making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream-100 dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-dark-400">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-primary-200 dark:text-primary-900/50" />
              </div>

              <p className="text-gray-700 dark:text-dark-200 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex gap-1">
                {Array(testimonial.rating).fill(null).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary-400 text-primary-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Share Your Story?</h3>
          <p className="text-lg mb-8 text-primary-100">
            Join thousands of supporters making a tangible difference in communities around the world
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium">
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
