export default function TrustBar() {
  const companies = [
    'Enterprise A',
    'Financial Corp',
    'Healthcare Inc',
    'Tech Giant',
    'Global Bank',
    'Insurance Co',
  ];

  return (
    <div className="py-12 border-y border-gray-200">
      <p className="text-center text-gray-600 mb-8">
        Trusted by enterprises in BFSI, Healthcare, and Public Sector
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {companies.map((company, i) => (
          <div
            key={i}
            className="h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border border-gray-200"
          >
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}
