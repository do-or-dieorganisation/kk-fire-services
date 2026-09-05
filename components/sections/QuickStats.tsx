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
    <section className="border-y bg-gray-50 py-5 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-y-5 sm:gap-8 md:grid-cols-4">

          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="min-w-0 text-center"
            >
              <div className="mb-0.5 text-xl font-bold leading-tight text-orange-600 sm:mb-2 sm:text-4xl">
                {stat.value}
              </div>

              <p className="mx-auto max-w-[130px] text-[11px] leading-4 text-gray-600 sm:max-w-none sm:text-base sm:leading-5">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}