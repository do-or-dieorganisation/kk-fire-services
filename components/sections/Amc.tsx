const amcPlans = [
  {
    title: 'Comprehensive AMC',
    description:
      'Periodic PMS (Preventive Maintenance Services) ensuring safe functioning of all installed systems.',
    includes:
      'Replacement of spare parts against manufacturing defects (except consumables)',
    highlight: true,
  },
  {
    title: 'Non-Comprehensive AMC',
    description:
      'Periodic PMS (Preventive Maintenance Services) ensuring safe functioning of all installed systems.',
    note: 'Spare parts and consumables charged at prevailing prices',
    highlight: false,
  },
];

export default function AMC() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Annual Maintenance Contracts (AMC)
          </h2>
          <p className="text-xl text-gray-600">
            Prompt service at cost-effective rates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {amcPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl border-2 ${
                plan.highlight
                  ? 'bg-orange-50 border-orange-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.title}
              </h3>
              <p className="text-gray-700 mb-4">{plan.description}</p>
              {plan.includes && (
                <p className="text-gray-700">
                  <strong>Includes:</strong> {plan.includes}
                </p>
              )}
              {plan.note && (
                <p className="text-gray-700">
                  <strong>Note:</strong> {plan.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}