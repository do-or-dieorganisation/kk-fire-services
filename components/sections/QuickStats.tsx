const stats = [
  { value: '9+', label: 'Years of Experience' },
  { value: '90%', label: 'Repeat Customers' },
  { value: '24hrs', label: 'Response Time' },
  { value: 'Pan-India', label: 'Service Coverage' },
];

export default function QuickStats() {
  return (
    <section className="bg-gray-50 py-12 border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}