const stats = [
  {
    value: '9+',
    label: 'Years of Experience',
  },
  {
    value: '90%',
    label: 'Repeat Customers',
  },
  {
    value: '24hrs',
    label: 'Response Time',
  },
  {
    value: 'Pan-India',
    label: 'Service Coverage',
  },
];

export default function QuickStats() {
  return (
    <section className="border-y bg-gray-50 py-8 sm:py-12">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-5 text-center sm:gap-8 md:grid-cols-4">

          {stats.map((stat, idx) => (

            <div key={idx}>

              <div className="mb-1 text-3xl font-bold text-orange-600 sm:mb-2 sm:text-4xl">
                {stat.value}
              </div>

              <p className="text-sm text-gray-600 sm:text-base">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}